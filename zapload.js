(function () {
  'use strict';

  const zapload = {
      init() {
          this.elements = document.querySelectorAll('.zapload');
          this.setupEventListeners();
          this.loadOnCustomCall();
      },
      
      setupEventListeners() {
          window.addEventListener('scroll', () => this.loadOnScroll());
          window.addEventListener('click', (e) => this.loadOnClick(e));
          this.elements.forEach(el => {
              const lazyType = el.dataset.zapload.split(' ')[0];
              if (lazyType === 'timeout') {
                  this.loadOnTimeout(el);
              }
          });
      },

      loadOnScroll() {
          this.elements.forEach(el => {
              const lazyType = el.dataset.zapload.split(' ')[0];
              if (lazyType === 'scroll') {
                  const target = el.dataset.zapload.split(' ')[1];
                  if (target) {
                      if (document.querySelector(target) && this.isInViewport(document.querySelector(target))) {
                          this.loadElement(el);
                      }
                  } else if (window.scrollY > 0) {
                      this.loadElement(el);
                  }
              }
          });
      },

      loadOnClick(event) {
          this.elements.forEach(el => {
              const lazyType = el.dataset.zapload.split(' ')[0];
              if (lazyType === 'click') {
                  const target = el.dataset.zapload.split(' ')[1];
                  if (target && event.target.matches(target)) {
                      this.loadElement(el);
                  }
              }
          });
      },

      loadOnTimeout(el) {
          const timeout = parseInt(el.dataset.zapload.split(' ')[1], 10);
          setTimeout(() => this.loadElement(el), timeout);
      },

      loadOnCustomCall() {
          window.zapload = (selector) => {
              const el = document.querySelector(selector);
              if (el && el.classList.contains('zapload')) {
                  this.loadElement(el);
              }
          };
      },

      loadElement(el) {
          if (el.dataset.src) {
              el.src = el.dataset.src;
              el.removeAttribute('data-src');
          }
          if (el.dataset.srcset) {
              el.srcset = el.dataset.srcset;
              el.removeAttribute('data-srcset');
          }
          el.classList.remove('zapload');
      },

      isInViewport(el) {
          const rect = el.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
  };

  document.addEventListener('DOMContentLoaded', () => zapload.init());

})();
