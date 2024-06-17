# <img src="./logo.png" alt="ZapLoad Logo" width="30" height="30"> ZapLoad 

ZapLoad is a very lightweight (~2.9KB) JavaScript library for delaying the loading (also known as lazyload) of various `src` elements such as `img`, `video`, `script`, `object`, and `iframe`.

## Key Features

- Lightweight, only sized about 2.9KB and 1.7KB for the minified version.
- Supports `img`, `video`, `script`, `object`, and `iframe`.
- Place it anywhere inside your `html`.
- Build on top of vanilla JS - no additional library/frameworks.
- Good for SEO and page load speed optimizations.

## Configuration

There are 5 delay types configurations:
- `scroll`: Delays loading until the user scrolls
- `scroll [selector]`: Delays loading until the user scrolls to the `selector` element in the viewport
- `click [selector]`: Delays loading until the user clicks on the `selector` element
- `timeout [time in ms]`: Delays loading for a specific time (in milliseconds)
- `custom`: Delays loading until it is called in JavaScript

## Examples

### HTML

Add `.zapload` to elements and `data-zapload` attribute with some values. Then, change the `src` attr to `data-src`. You can set the default `src` too (e.g. low-res img before the real img loaded).

```HTML
<!-- Load when user scroll min. of 1px -->
<img class="zapload" data-zapload="scroll" data-src="https://via.placeholder.com/300x200">

<!-- Load when user scrolls to #home -->
<img class="zapload" data-zapload="scroll #home" data-src="https://via.placeholder.com/300x200">

<!-- Load when user click #home -->
<img class="zapload" data-zapload="click #home" data-src="https://via.placeholder.com/300x200">

<!-- Load after 3s (3000ms) -->
<img class="zapload" data-zapload="timeout 3000" data-src="https://via.placeholder.com/300x200">
```

### JavaScript for `custom`

```JS
function doSomething(){
  zapload("#logo"); // Load after doSomething() called
}
```

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)