/*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global window: false, jQuery: false, console: false, define: false */

// Uses CommonJS, AMD, or browser globals to create a jQuery plugin.
(function (global, factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(['jquery'], factory.bind(this, global));
  } else if (typeof global !== "undefined") {
    factory(global, require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jquery);
    global.qtip2 = mod.exports;
  }
}
(typeof window !== "undefined" ? window : this, function(window, $) {
  "use strict"; // Enable ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
