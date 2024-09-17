/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
} 
.visible {
  visibility: visible;
} 
.collapse {
  visibility: collapse;
} 
.fixed {
  position: fixed;
} 
.absolute {
  position: absolute;
} 
.relative {
  position: relative;
} 
.m-0 {
  margin: 0px;
} 
.m-10 {
  margin: 2.5rem;
} 
.m-2 {
  margin: 0.5rem;
} 
.block {
  display: block;
} 
.inline {
  display: inline;
} 
.flex {
  display: flex;
} 
.table {
  display: table;
} 
.contents {
  display: contents;
} 
.hidden {
  display: none;
} 
.h-10 {
  height: 2.5rem;
} 
.h-3 {
  height: 0.75rem;
} 
.h-5 {
  height: 1.25rem;
} 
.h-6 {
  height: 1.5rem;
} 
.h-full {
  height: 100%;
} 
.w-3 {
  width: 0.75rem;
} 
.w-5 {
  width: 1.25rem;
} 
.w-6 {
  width: 1.5rem;
} 
.w-full {
  width: 100%;
} 
.basis-80 {
  flex-basis: 20rem;
} 
.border-collapse {
  border-collapse: collapse;
} 
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
} 
.resize {
  resize: both;
} 
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
} 
.flex-col {
  flex-direction: column;
} 
.items-center {
  align-items: center;
} 
.justify-start {
  justify-content: flex-start;
} 
.justify-center {
  justify-content: center;
} 
.justify-between {
  justify-content: space-between;
} 
.justify-around {
  justify-content: space-around;
} 
.justify-evenly {
  justify-content: space-evenly;
} 
.self-end {
  align-self: flex-end;
} 
.self-center {
  align-self: center;
} 
.rounded {
  border-radius: 0.25rem;
} 
.rounded-3xl {
  border-radius: 1.5rem;
} 
.rounded-full {
  border-radius: 9999px;
} 
.rounded-xl {
  border-radius: 0.75rem;
} 
.border {
  border-width: 1px;
} 
.border-2 {
  border-width: 2px;
} 
.border-black {
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
} 
.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgba(219, 234, 254, 1);
  background-color: rgba(219, 234, 254, var(--tw-bg-opacity));
} 
.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgba(239, 246, 255, 1);
  background-color: rgba(239, 246, 255, var(--tw-bg-opacity));
} 
.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgba(254, 242, 242, 1);
  background-color: rgba(254, 242, 242, var(--tw-bg-opacity));
} 
.p-0 {
  padding: 0px;
} 
.p-10 {
  padding: 2.5rem;
} 
.p-2 {
  padding: 0.5rem;
} 
.p-3 {
  padding: 0.75rem;
} 
.p-5 {
  padding: 1.25rem;
} 
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
} 
.px-20 {
  padding-left: 5rem;
  padding-right: 5rem;
} 
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
} 
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
} 
.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
} 
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
} 
.pb-10 {
  padding-bottom: 2.5rem;
} 
.pb-14 {
  padding-bottom: 3.5rem;
} 
.pb-24 {
  padding-bottom: 6rem;
} 
.pb-32 {
  padding-bottom: 8rem;
} 
.pb-6 {
  padding-bottom: 1.5rem;
} 
.pb-8 {
  padding-bottom: 2rem;
} 
.pr-3 {
  padding-right: 0.75rem;
} 
.pt-10 {
  padding-top: 2.5rem;
} 
.pt-3 {
  padding-top: 0.75rem;
} 
.pt-4 {
  padding-top: 1rem;
} 
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
} 
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
} 
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
} 
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
} 
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
} 
.font-bold {
  font-weight: 700;
} 
.font-extralight {
  font-weight: 200;
} 
.font-light {
  font-weight: 300;
} 
.font-semibold {
  font-weight: 600;
} 
.capitalize {
  text-transform: capitalize;
} 
.leading-none {
  line-height: 1;
} 
.text-blue-950 {
  --tw-text-opacity: 1;
  color: rgba(23, 37, 84, 1);
  color: rgba(23, 37, 84, var(--tw-text-opacity));
} 
.text-green-200 {
  --tw-text-opacity: 1;
  color: rgba(187, 247, 208, 1);
  color: rgba(187, 247, 208, var(--tw-text-opacity));
} 
.text-green-800 {
  --tw-text-opacity: 1;
  color: rgba(22, 101, 52, 1);
  color: rgba(22, 101, 52, var(--tw-text-opacity));
} 
.text-rose-200 {
  --tw-text-opacity: 1;
  color: rgba(254, 205, 211, 1);
  color: rgba(254, 205, 211, var(--tw-text-opacity));
} 
.text-rose-800 {
  --tw-text-opacity: 1;
  color: rgba(159, 18, 57, 1);
  color: rgba(159, 18, 57, var(--tw-text-opacity));
} 
.underline {
  text-decoration-line: underline;
} 
.line-through {
  text-decoration-line: line-through;
} 
.decoration-1 {
  text-decoration-thickness: 1px;
} 
.decoration-2 {
  text-decoration-thickness: 2px;
} 
.decoration-4 {
  text-decoration-thickness: 4px;
} 
.decoration-8 {
  text-decoration-thickness: 8px;
} 
.decoration-from-font {
  text-decoration-thickness: from-font;
} 
.outline {
  outline-style: solid;
} 
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
} 
.checked\\:bg-slate-300:checked {
  --tw-bg-opacity: 1;
  background-color: rgba(203, 213, 225, 1);
  background-color: rgba(203, 213, 225, var(--tw-bg-opacity));
} 
@keyframes pulse {

  50% {
    opacity: .5;
  }
} 
.hover\\:animate-pulse:hover {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
} 
.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, 1);
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components; \n@tailwind utilities;\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/picocolors/picocolors.browser.js":
/*!*******************************************************!*\
  !*** ./node_modules/picocolors/picocolors.browser.js ***!
  \*******************************************************/
/***/ ((module) => {

var x=String;
var create=function() {return {isColorSupported:false,reset:x,bold:x,dim:x,italic:x,underline:x,inverse:x,hidden:x,strikethrough:x,black:x,red:x,green:x,yellow:x,blue:x,magenta:x,cyan:x,white:x,gray:x,bgBlack:x,bgRed:x,bgGreen:x,bgYellow:x,bgBlue:x,bgMagenta:x,bgCyan:x,bgWhite:x}};
module.exports=create();
module.exports.createColors = create;


/***/ }),

/***/ "./node_modules/postcss/lib/at-rule.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/at-rule.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")

class AtRule extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'atrule'
  }

  append(...children) {
    if (!this.proxyOf.nodes) this.nodes = []
    return super.append(...children)
  }

  prepend(...children) {
    if (!this.proxyOf.nodes) this.nodes = []
    return super.prepend(...children)
  }
}

module.exports = AtRule
AtRule.default = AtRule

Container.registerAtRule(AtRule)


/***/ }),

/***/ "./node_modules/postcss/lib/comment.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/comment.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Node = __webpack_require__(/*! ./node */ "./node_modules/postcss/lib/node.js")

class Comment extends Node {
  constructor(defaults) {
    super(defaults)
    this.type = 'comment'
  }
}

module.exports = Comment
Comment.default = Comment


/***/ }),

/***/ "./node_modules/postcss/lib/container.js":
/*!***********************************************!*\
  !*** ./node_modules/postcss/lib/container.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { isClean, my } = __webpack_require__(/*! ./symbols */ "./node_modules/postcss/lib/symbols.js")
let Declaration = __webpack_require__(/*! ./declaration */ "./node_modules/postcss/lib/declaration.js")
let Comment = __webpack_require__(/*! ./comment */ "./node_modules/postcss/lib/comment.js")
let Node = __webpack_require__(/*! ./node */ "./node_modules/postcss/lib/node.js")

let parse, Rule, AtRule, Root

function cleanSource(nodes) {
  return nodes.map(i => {
    if (i.nodes) i.nodes = cleanSource(i.nodes)
    delete i.source
    return i
  })
}

function markDirtyUp(node) {
  node[isClean] = false
  if (node.proxyOf.nodes) {
    for (let i of node.proxyOf.nodes) {
      markDirtyUp(i)
    }
  }
}

class Container extends Node {
  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last)
      for (let node of nodes) this.proxyOf.nodes.push(node)
    }

    this.markDirty()

    return this
  }

  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween)
    if (this.nodes) {
      for (let node of this.nodes) node.cleanRaws(keepBetween)
    }
  }

  each(callback) {
    if (!this.proxyOf.nodes) return undefined
    let iterator = this.getIterator()

    let index, result
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index = this.indexes[iterator]
      result = callback(this.proxyOf.nodes[index], index)
      if (result === false) break

      this.indexes[iterator] += 1
    }

    delete this.indexes[iterator]
    return result
  }

  every(condition) {
    return this.nodes.every(condition)
  }

  getIterator() {
    if (!this.lastEach) this.lastEach = 0
    if (!this.indexes) this.indexes = {}

    this.lastEach += 1
    let iterator = this.lastEach
    this.indexes[iterator] = 0

    return iterator
  }

  getProxyProcessor() {
    return {
      get(node, prop) {
        if (prop === 'proxyOf') {
          return node
        } else if (!node[prop]) {
          return node[prop]
        } else if (
          prop === 'each' ||
          (typeof prop === 'string' && prop.startsWith('walk'))
        ) {
          return (...args) => {
            return node[prop](
              ...args.map(i => {
                if (typeof i === 'function') {
                  return (child, index) => i(child.toProxy(), index)
                } else {
                  return i
                }
              })
            )
          }
        } else if (prop === 'every' || prop === 'some') {
          return cb => {
            return node[prop]((child, ...other) =>
              cb(child.toProxy(), ...other)
            )
          }
        } else if (prop === 'root') {
          return () => node.root().toProxy()
        } else if (prop === 'nodes') {
          return node.nodes.map(i => i.toProxy())
        } else if (prop === 'first' || prop === 'last') {
          return node[prop].toProxy()
        } else {
          return node[prop]
        }
      },

      set(node, prop, value) {
        if (node[prop] === value) return true
        node[prop] = value
        if (prop === 'name' || prop === 'params' || prop === 'selector') {
          node.markDirty()
        }
        return true
      }
    }
  }

  index(child) {
    if (typeof child === 'number') return child
    if (child.proxyOf) child = child.proxyOf
    return this.proxyOf.nodes.indexOf(child)
  }

  insertAfter(exist, add) {
    let existIndex = this.index(exist)
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse()
    existIndex = this.index(exist)
    for (let node of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (existIndex < index) {
        this.indexes[id] = index + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  insertBefore(exist, add) {
    let existIndex = this.index(exist)
    let type = existIndex === 0 ? 'prepend' : false
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse()
    existIndex = this.index(exist)
    for (let node of nodes) this.proxyOf.nodes.splice(existIndex, 0, node)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (existIndex <= index) {
        this.indexes[id] = index + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  normalize(nodes, sample) {
    if (typeof nodes === 'string') {
      nodes = cleanSource(parse(nodes).nodes)
    } else if (typeof nodes === 'undefined') {
      nodes = []
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0)
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, 'ignore')
      }
    } else if (nodes.type === 'root' && this.type !== 'document') {
      nodes = nodes.nodes.slice(0)
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, 'ignore')
      }
    } else if (nodes.type) {
      nodes = [nodes]
    } else if (nodes.prop) {
      if (typeof nodes.value === 'undefined') {
        throw new Error('Value field is missed in node creation')
      } else if (typeof nodes.value !== 'string') {
        nodes.value = String(nodes.value)
      }
      nodes = [new Declaration(nodes)]
    } else if (nodes.selector) {
      nodes = [new Rule(nodes)]
    } else if (nodes.name) {
      nodes = [new AtRule(nodes)]
    } else if (nodes.text) {
      nodes = [new Comment(nodes)]
    } else {
      throw new Error('Unknown node type in node creation')
    }

    let processed = nodes.map(i => {
      /* c8 ignore next */
      if (!i[my]) Container.rebuild(i)
      i = i.proxyOf
      if (i.parent) i.parent.removeChild(i)
      if (i[isClean]) markDirtyUp(i)
      if (typeof i.raws.before === 'undefined') {
        if (sample && typeof sample.raws.before !== 'undefined') {
          i.raws.before = sample.raws.before.replace(/\S/g, '')
        }
      }
      i.parent = this.proxyOf
      return i
    })

    return processed
  }

  prepend(...children) {
    children = children.reverse()
    for (let child of children) {
      let nodes = this.normalize(child, this.first, 'prepend').reverse()
      for (let node of nodes) this.proxyOf.nodes.unshift(node)
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  push(child) {
    child.parent = this
    this.proxyOf.nodes.push(child)
    return this
  }

  removeAll() {
    for (let node of this.proxyOf.nodes) node.parent = undefined
    this.proxyOf.nodes = []

    this.markDirty()

    return this
  }

  removeChild(child) {
    child = this.index(child)
    this.proxyOf.nodes[child].parent = undefined
    this.proxyOf.nodes.splice(child, 1)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (index >= child) {
        this.indexes[id] = index - 1
      }
    }

    this.markDirty()

    return this
  }

  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts
      opts = {}
    }

    this.walkDecls(decl => {
      if (opts.props && !opts.props.includes(decl.prop)) return
      if (opts.fast && !decl.value.includes(opts.fast)) return

      decl.value = decl.value.replace(pattern, callback)
    })

    this.markDirty()

    return this
  }

  some(condition) {
    return this.nodes.some(condition)
  }

  walk(callback) {
    return this.each((child, i) => {
      let result
      try {
        result = callback(child, i)
      } catch (e) {
        throw child.addToError(e)
      }
      if (result !== false && child.walk) {
        result = child.walk(callback)
      }

      return result
    })
  }

  walkAtRules(name, callback) {
    if (!callback) {
      callback = name
      return this.walk((child, i) => {
        if (child.type === 'atrule') {
          return callback(child, i)
        }
      })
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'atrule' && name.test(child.name)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'atrule' && child.name === name) {
        return callback(child, i)
      }
    })
  }

  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === 'comment') {
        return callback(child, i)
      }
    })
  }

  walkDecls(prop, callback) {
    if (!callback) {
      callback = prop
      return this.walk((child, i) => {
        if (child.type === 'decl') {
          return callback(child, i)
        }
      })
    }
    if (prop instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'decl' && prop.test(child.prop)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'decl' && child.prop === prop) {
        return callback(child, i)
      }
    })
  }

  walkRules(selector, callback) {
    if (!callback) {
      callback = selector

      return this.walk((child, i) => {
        if (child.type === 'rule') {
          return callback(child, i)
        }
      })
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'rule' && selector.test(child.selector)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'rule' && child.selector === selector) {
        return callback(child, i)
      }
    })
  }

  get first() {
    if (!this.proxyOf.nodes) return undefined
    return this.proxyOf.nodes[0]
  }

  get last() {
    if (!this.proxyOf.nodes) return undefined
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
  }
}

Container.registerParse = dependant => {
  parse = dependant
}

Container.registerRule = dependant => {
  Rule = dependant
}

Container.registerAtRule = dependant => {
  AtRule = dependant
}

Container.registerRoot = dependant => {
  Root = dependant
}

module.exports = Container
Container.default = Container

/* c8 ignore start */
Container.rebuild = node => {
  if (node.type === 'atrule') {
    Object.setPrototypeOf(node, AtRule.prototype)
  } else if (node.type === 'rule') {
    Object.setPrototypeOf(node, Rule.prototype)
  } else if (node.type === 'decl') {
    Object.setPrototypeOf(node, Declaration.prototype)
  } else if (node.type === 'comment') {
    Object.setPrototypeOf(node, Comment.prototype)
  } else if (node.type === 'root') {
    Object.setPrototypeOf(node, Root.prototype)
  }

  node[my] = true

  if (node.nodes) {
    node.nodes.forEach(child => {
      Container.rebuild(child)
    })
  }
}
/* c8 ignore stop */


/***/ }),

/***/ "./node_modules/postcss/lib/css-syntax-error.js":
/*!******************************************************!*\
  !*** ./node_modules/postcss/lib/css-syntax-error.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let pico = __webpack_require__(/*! picocolors */ "./node_modules/picocolors/picocolors.browser.js")

let terminalHighlight = __webpack_require__(/*! ./terminal-highlight */ "?5580")

class CssSyntaxError extends Error {
  constructor(message, line, column, source, file, plugin) {
    super(message)
    this.name = 'CssSyntaxError'
    this.reason = message

    if (file) {
      this.file = file
    }
    if (source) {
      this.source = source
    }
    if (plugin) {
      this.plugin = plugin
    }
    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
      if (typeof line === 'number') {
        this.line = line
        this.column = column
      } else {
        this.line = line.line
        this.column = line.column
        this.endLine = column.line
        this.endColumn = column.column
      }
    }

    this.setMessage()

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError)
    }
  }

  setMessage() {
    this.message = this.plugin ? this.plugin + ': ' : ''
    this.message += this.file ? this.file : '<css input>'
    if (typeof this.line !== 'undefined') {
      this.message += ':' + this.line + ':' + this.column
    }
    this.message += ': ' + this.reason
  }

  showSourceCode(color) {
    if (!this.source) return ''

    let css = this.source
    if (color == null) color = pico.isColorSupported
    if (terminalHighlight) {
      if (color) css = terminalHighlight(css)
    }

    let lines = css.split(/\r?\n/)
    let start = Math.max(this.line - 3, 0)
    let end = Math.min(this.line + 2, lines.length)

    let maxWidth = String(end).length

    let mark, aside
    if (color) {
      let { bold, gray, red } = pico.createColors(true)
      mark = text => bold(red(text))
      aside = text => gray(text)
    } else {
      mark = aside = str => str
    }

    return lines
      .slice(start, end)
      .map((line, index) => {
        let number = start + 1 + index
        let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | '
        if (number === this.line) {
          let spacing =
            aside(gutter.replace(/\d/g, ' ')) +
            line.slice(0, this.column - 1).replace(/[^\t]/g, ' ')
          return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^')
        }
        return ' ' + aside(gutter) + line
      })
      .join('\n')
  }

  toString() {
    let code = this.showSourceCode()
    if (code) {
      code = '\n\n' + code + '\n'
    }
    return this.name + ': ' + this.message + code
  }
}

module.exports = CssSyntaxError
CssSyntaxError.default = CssSyntaxError


/***/ }),

/***/ "./node_modules/postcss/lib/declaration.js":
/*!*************************************************!*\
  !*** ./node_modules/postcss/lib/declaration.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Node = __webpack_require__(/*! ./node */ "./node_modules/postcss/lib/node.js")

class Declaration extends Node {
  constructor(defaults) {
    if (
      defaults &&
      typeof defaults.value !== 'undefined' &&
      typeof defaults.value !== 'string'
    ) {
      defaults = { ...defaults, value: String(defaults.value) }
    }
    super(defaults)
    this.type = 'decl'
  }

  get variable() {
    return this.prop.startsWith('--') || this.prop[0] === '$'
  }
}

module.exports = Declaration
Declaration.default = Declaration


/***/ }),

/***/ "./node_modules/postcss/lib/document.js":
/*!**********************************************!*\
  !*** ./node_modules/postcss/lib/document.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")

let LazyResult, Processor

class Document extends Container {
  constructor(defaults) {
    // type needs to be passed to super, otherwise child roots won't be normalized correctly
    super({ type: 'document', ...defaults })

    if (!this.nodes) {
      this.nodes = []
    }
  }

  toResult(opts = {}) {
    let lazy = new LazyResult(new Processor(), this, opts)

    return lazy.stringify()
  }
}

Document.registerLazyResult = dependant => {
  LazyResult = dependant
}

Document.registerProcessor = dependant => {
  Processor = dependant
}

module.exports = Document
Document.default = Document


/***/ }),

/***/ "./node_modules/postcss/lib/fromJSON.js":
/*!**********************************************!*\
  !*** ./node_modules/postcss/lib/fromJSON.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Declaration = __webpack_require__(/*! ./declaration */ "./node_modules/postcss/lib/declaration.js")
let PreviousMap = __webpack_require__(/*! ./previous-map */ "./node_modules/postcss/lib/previous-map.js")
let Comment = __webpack_require__(/*! ./comment */ "./node_modules/postcss/lib/comment.js")
let AtRule = __webpack_require__(/*! ./at-rule */ "./node_modules/postcss/lib/at-rule.js")
let Input = __webpack_require__(/*! ./input */ "./node_modules/postcss/lib/input.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")
let Rule = __webpack_require__(/*! ./rule */ "./node_modules/postcss/lib/rule.js")

function fromJSON(json, inputs) {
  if (Array.isArray(json)) return json.map(n => fromJSON(n))

  let { inputs: ownInputs, ...defaults } = json
  if (ownInputs) {
    inputs = []
    for (let input of ownInputs) {
      let inputHydrated = { ...input, __proto__: Input.prototype }
      if (inputHydrated.map) {
        inputHydrated.map = {
          ...inputHydrated.map,
          __proto__: PreviousMap.prototype
        }
      }
      inputs.push(inputHydrated)
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map(n => fromJSON(n, inputs))
  }
  if (defaults.source) {
    let { inputId, ...source } = defaults.source
    defaults.source = source
    if (inputId != null) {
      defaults.source.input = inputs[inputId]
    }
  }
  if (defaults.type === 'root') {
    return new Root(defaults)
  } else if (defaults.type === 'decl') {
    return new Declaration(defaults)
  } else if (defaults.type === 'rule') {
    return new Rule(defaults)
  } else if (defaults.type === 'comment') {
    return new Comment(defaults)
  } else if (defaults.type === 'atrule') {
    return new AtRule(defaults)
  } else {
    throw new Error('Unknown node type: ' + json.type)
  }
}

module.exports = fromJSON
fromJSON.default = fromJSON


/***/ }),

/***/ "./node_modules/postcss/lib/input.js":
/*!*******************************************!*\
  !*** ./node_modules/postcss/lib/input.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(/*! source-map-js */ "?b8cb")
let { fileURLToPath, pathToFileURL } = __webpack_require__(/*! url */ "?c717")
let { isAbsolute, resolve } = __webpack_require__(/*! path */ "?6197")
let { nanoid } = __webpack_require__(/*! nanoid/non-secure */ "./node_modules/nanoid/non-secure/index.cjs")

let terminalHighlight = __webpack_require__(/*! ./terminal-highlight */ "?5580")
let CssSyntaxError = __webpack_require__(/*! ./css-syntax-error */ "./node_modules/postcss/lib/css-syntax-error.js")
let PreviousMap = __webpack_require__(/*! ./previous-map */ "./node_modules/postcss/lib/previous-map.js")

let fromOffsetCache = Symbol('fromOffsetCache')

let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator)
let pathAvailable = Boolean(resolve && isAbsolute)

class Input {
  constructor(css, opts = {}) {
    if (
      css === null ||
      typeof css === 'undefined' ||
      (typeof css === 'object' && !css.toString)
    ) {
      throw new Error(`PostCSS received ${css} instead of CSS string`)
    }

    this.css = css.toString()

    if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
      this.hasBOM = true
      this.css = this.css.slice(1)
    } else {
      this.hasBOM = false
    }

    if (opts.from) {
      if (
        !pathAvailable ||
        /^\w+:\/\//.test(opts.from) ||
        isAbsolute(opts.from)
      ) {
        this.file = opts.from
      } else {
        this.file = resolve(opts.from)
      }
    }

    if (pathAvailable && sourceMapAvailable) {
      let map = new PreviousMap(this.css, opts)
      if (map.text) {
        this.map = map
        let file = map.consumer().file
        if (!this.file && file) this.file = this.mapResolve(file)
      }
    }

    if (!this.file) {
      this.id = '<input css ' + nanoid(6) + '>'
    }
    if (this.map) this.map.file = this.from
  }

  error(message, line, column, opts = {}) {
    let result, endLine, endColumn

    if (line && typeof line === 'object') {
      let start = line
      let end = column
      if (typeof start.offset === 'number') {
        let pos = this.fromOffset(start.offset)
        line = pos.line
        column = pos.col
      } else {
        line = start.line
        column = start.column
      }
      if (typeof end.offset === 'number') {
        let pos = this.fromOffset(end.offset)
        endLine = pos.line
        endColumn = pos.col
      } else {
        endLine = end.line
        endColumn = end.column
      }
    } else if (!column) {
      let pos = this.fromOffset(line)
      line = pos.line
      column = pos.col
    }

    let origin = this.origin(line, column, endLine, endColumn)
    if (origin) {
      result = new CssSyntaxError(
        message,
        origin.endLine === undefined
          ? origin.line
          : { column: origin.column, line: origin.line },
        origin.endLine === undefined
          ? origin.column
          : { column: origin.endColumn, line: origin.endLine },
        origin.source,
        origin.file,
        opts.plugin
      )
    } else {
      result = new CssSyntaxError(
        message,
        endLine === undefined ? line : { column, line },
        endLine === undefined ? column : { column: endColumn, line: endLine },
        this.css,
        this.file,
        opts.plugin
      )
    }

    result.input = { column, endColumn, endLine, line, source: this.css }
    if (this.file) {
      if (pathToFileURL) {
        result.input.url = pathToFileURL(this.file).toString()
      }
      result.input.file = this.file
    }

    return result
  }

  fromOffset(offset) {
    let lastLine, lineToIndex
    if (!this[fromOffsetCache]) {
      let lines = this.css.split('\n')
      lineToIndex = new Array(lines.length)
      let prevIndex = 0

      for (let i = 0, l = lines.length; i < l; i++) {
        lineToIndex[i] = prevIndex
        prevIndex += lines[i].length + 1
      }

      this[fromOffsetCache] = lineToIndex
    } else {
      lineToIndex = this[fromOffsetCache]
    }
    lastLine = lineToIndex[lineToIndex.length - 1]

    let min = 0
    if (offset >= lastLine) {
      min = lineToIndex.length - 1
    } else {
      let max = lineToIndex.length - 2
      let mid
      while (min < max) {
        mid = min + ((max - min) >> 1)
        if (offset < lineToIndex[mid]) {
          max = mid - 1
        } else if (offset >= lineToIndex[mid + 1]) {
          min = mid + 1
        } else {
          min = mid
          break
        }
      }
    }
    return {
      col: offset - lineToIndex[min] + 1,
      line: min + 1
    }
  }

  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file
    }
    return resolve(this.map.consumer().sourceRoot || this.map.root || '.', file)
  }

  origin(line, column, endLine, endColumn) {
    if (!this.map) return false
    let consumer = this.map.consumer()

    let from = consumer.originalPositionFor({ column, line })
    if (!from.source) return false

    let to
    if (typeof endLine === 'number') {
      to = consumer.originalPositionFor({ column: endColumn, line: endLine })
    }

    let fromUrl

    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL(from.source)
    } else {
      fromUrl = new URL(
        from.source,
        this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile)
      )
    }

    let result = {
      column: from.column,
      endColumn: to && to.column,
      endLine: to && to.line,
      line: from.line,
      url: fromUrl.toString()
    }

    if (fromUrl.protocol === 'file:') {
      if (fileURLToPath) {
        result.file = fileURLToPath(fromUrl)
      } else {
        /* c8 ignore next 2 */
        throw new Error(`file: protocol is not available in this PostCSS build`)
      }
    }

    let source = consumer.sourceContentFor(from.source)
    if (source) result.source = source

    return result
  }

  toJSON() {
    let json = {}
    for (let name of ['hasBOM', 'css', 'file', 'id']) {
      if (this[name] != null) {
        json[name] = this[name]
      }
    }
    if (this.map) {
      json.map = { ...this.map }
      if (json.map.consumerCache) {
        json.map.consumerCache = undefined
      }
    }
    return json
  }

  get from() {
    return this.file || this.id
  }
}

module.exports = Input
Input.default = Input

if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input)
}


/***/ }),

/***/ "./node_modules/postcss/lib/lazy-result.js":
/*!*************************************************!*\
  !*** ./node_modules/postcss/lib/lazy-result.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { isClean, my } = __webpack_require__(/*! ./symbols */ "./node_modules/postcss/lib/symbols.js")
let MapGenerator = __webpack_require__(/*! ./map-generator */ "./node_modules/postcss/lib/map-generator.js")
let stringify = __webpack_require__(/*! ./stringify */ "./node_modules/postcss/lib/stringify.js")
let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")
let Document = __webpack_require__(/*! ./document */ "./node_modules/postcss/lib/document.js")
let warnOnce = __webpack_require__(/*! ./warn-once */ "./node_modules/postcss/lib/warn-once.js")
let Result = __webpack_require__(/*! ./result */ "./node_modules/postcss/lib/result.js")
let parse = __webpack_require__(/*! ./parse */ "./node_modules/postcss/lib/parse.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")

const TYPE_TO_CLASS_NAME = {
  atrule: 'AtRule',
  comment: 'Comment',
  decl: 'Declaration',
  document: 'Document',
  root: 'Root',
  rule: 'Rule'
}

const PLUGIN_PROPS = {
  AtRule: true,
  AtRuleExit: true,
  Comment: true,
  CommentExit: true,
  Declaration: true,
  DeclarationExit: true,
  Document: true,
  DocumentExit: true,
  Once: true,
  OnceExit: true,
  postcssPlugin: true,
  prepare: true,
  Root: true,
  RootExit: true,
  Rule: true,
  RuleExit: true
}

const NOT_VISITORS = {
  Once: true,
  postcssPlugin: true,
  prepare: true
}

const CHILDREN = 0

function isPromise(obj) {
  return typeof obj === 'object' && typeof obj.then === 'function'
}

function getEvents(node) {
  let key = false
  let type = TYPE_TO_CLASS_NAME[node.type]
  if (node.type === 'decl') {
    key = node.prop.toLowerCase()
  } else if (node.type === 'atrule') {
    key = node.name.toLowerCase()
  }

  if (key && node.append) {
    return [
      type,
      type + '-' + key,
      CHILDREN,
      type + 'Exit',
      type + 'Exit-' + key
    ]
  } else if (key) {
    return [type, type + '-' + key, type + 'Exit', type + 'Exit-' + key]
  } else if (node.append) {
    return [type, CHILDREN, type + 'Exit']
  } else {
    return [type, type + 'Exit']
  }
}

function toStack(node) {
  let events
  if (node.type === 'document') {
    events = ['Document', CHILDREN, 'DocumentExit']
  } else if (node.type === 'root') {
    events = ['Root', CHILDREN, 'RootExit']
  } else {
    events = getEvents(node)
  }

  return {
    eventIndex: 0,
    events,
    iterator: 0,
    node,
    visitorIndex: 0,
    visitors: []
  }
}

function cleanMarks(node) {
  node[isClean] = false
  if (node.nodes) node.nodes.forEach(i => cleanMarks(i))
  return node
}

let postcss = {}

class LazyResult {
  constructor(processor, css, opts) {
    this.stringified = false
    this.processed = false

    let root
    if (
      typeof css === 'object' &&
      css !== null &&
      (css.type === 'root' || css.type === 'document')
    ) {
      root = cleanMarks(css)
    } else if (css instanceof LazyResult || css instanceof Result) {
      root = cleanMarks(css.root)
      if (css.map) {
        if (typeof opts.map === 'undefined') opts.map = {}
        if (!opts.map.inline) opts.map.inline = false
        opts.map.prev = css.map
      }
    } else {
      let parser = parse
      if (opts.syntax) parser = opts.syntax.parse
      if (opts.parser) parser = opts.parser
      if (parser.parse) parser = parser.parse

      try {
        root = parser(css, opts)
      } catch (error) {
        this.processed = true
        this.error = error
      }

      if (root && !root[my]) {
        /* c8 ignore next 2 */
        Container.rebuild(root)
      }
    }

    this.result = new Result(processor, root, opts)
    this.helpers = { ...postcss, postcss, result: this.result }
    this.plugins = this.processor.plugins.map(plugin => {
      if (typeof plugin === 'object' && plugin.prepare) {
        return { ...plugin, ...plugin.prepare(this.result) }
      } else {
        return plugin
      }
    })
  }

  async() {
    if (this.error) return Promise.reject(this.error)
    if (this.processed) return Promise.resolve(this.result)
    if (!this.processing) {
      this.processing = this.runAsync()
    }
    return this.processing
  }

  catch(onRejected) {
    return this.async().catch(onRejected)
  }

  finally(onFinally) {
    return this.async().then(onFinally, onFinally)
  }

  getAsyncError() {
    throw new Error('Use process(css).then(cb) to work with async plugins')
  }

  handleError(error, node) {
    let plugin = this.result.lastPlugin
    try {
      if (node) node.addToError(error)
      this.error = error
      if (error.name === 'CssSyntaxError' && !error.plugin) {
        error.plugin = plugin.postcssPlugin
        error.setMessage()
      } else if (plugin.postcssVersion) {
        if (true) {
          let pluginName = plugin.postcssPlugin
          let pluginVer = plugin.postcssVersion
          let runtimeVer = this.result.processor.version
          let a = pluginVer.split('.')
          let b = runtimeVer.split('.')

          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            // eslint-disable-next-line no-console
            console.error(
              'Unknown error from PostCSS plugin. Your current PostCSS ' +
                'version is ' +
                runtimeVer +
                ', but ' +
                pluginName +
                ' uses ' +
                pluginVer +
                '. Perhaps this is the source of the error below.'
            )
          }
        }
      }
    } catch (err) {
      /* c8 ignore next 3 */
      // eslint-disable-next-line no-console
      if (console && console.error) console.error(err)
    }
    return error
  }

  prepareVisitors() {
    this.listeners = {}
    let add = (plugin, type, cb) => {
      if (!this.listeners[type]) this.listeners[type] = []
      this.listeners[type].push([plugin, cb])
    }
    for (let plugin of this.plugins) {
      if (typeof plugin === 'object') {
        for (let event in plugin) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(
              `Unknown event ${event} in ${plugin.postcssPlugin}. ` +
                `Try to update PostCSS (${this.processor.version} now).`
            )
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin[event] === 'object') {
              for (let filter in plugin[event]) {
                if (filter === '*') {
                  add(plugin, event, plugin[event][filter])
                } else {
                  add(
                    plugin,
                    event + '-' + filter.toLowerCase(),
                    plugin[event][filter]
                  )
                }
              }
            } else if (typeof plugin[event] === 'function') {
              add(plugin, event, plugin[event])
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0
  }

  async runAsync() {
    this.plugin = 0
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin = this.plugins[i]
      let promise = this.runOnRoot(plugin)
      if (isPromise(promise)) {
        try {
          await promise
        } catch (error) {
          throw this.handleError(error)
        }
      }
    }

    this.prepareVisitors()
    if (this.hasListener) {
      let root = this.result.root
      while (!root[isClean]) {
        root[isClean] = true
        let stack = [toStack(root)]
        while (stack.length > 0) {
          let promise = this.visitTick(stack)
          if (isPromise(promise)) {
            try {
              await promise
            } catch (e) {
              let node = stack[stack.length - 1].node
              throw this.handleError(e, node)
            }
          }
        }
      }

      if (this.listeners.OnceExit) {
        for (let [plugin, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin
          try {
            if (root.type === 'document') {
              let roots = root.nodes.map(subRoot =>
                visitor(subRoot, this.helpers)
              )

              await Promise.all(roots)
            } else {
              await visitor(root, this.helpers)
            }
          } catch (e) {
            throw this.handleError(e)
          }
        }
      }
    }

    this.processed = true
    return this.stringify()
  }

  runOnRoot(plugin) {
    this.result.lastPlugin = plugin
    try {
      if (typeof plugin === 'object' && plugin.Once) {
        if (this.result.root.type === 'document') {
          let roots = this.result.root.nodes.map(root =>
            plugin.Once(root, this.helpers)
          )

          if (isPromise(roots[0])) {
            return Promise.all(roots)
          }

          return roots
        }

        return plugin.Once(this.result.root, this.helpers)
      } else if (typeof plugin === 'function') {
        return plugin(this.result.root, this.result)
      }
    } catch (error) {
      throw this.handleError(error)
    }
  }

  stringify() {
    if (this.error) throw this.error
    if (this.stringified) return this.result
    this.stringified = true

    this.sync()

    let opts = this.result.opts
    let str = stringify
    if (opts.syntax) str = opts.syntax.stringify
    if (opts.stringifier) str = opts.stringifier
    if (str.stringify) str = str.stringify

    let map = new MapGenerator(str, this.result.root, this.result.opts)
    let data = map.generate()
    this.result.css = data[0]
    this.result.map = data[1]

    return this.result
  }

  sync() {
    if (this.error) throw this.error
    if (this.processed) return this.result
    this.processed = true

    if (this.processing) {
      throw this.getAsyncError()
    }

    for (let plugin of this.plugins) {
      let promise = this.runOnRoot(plugin)
      if (isPromise(promise)) {
        throw this.getAsyncError()
      }
    }

    this.prepareVisitors()
    if (this.hasListener) {
      let root = this.result.root
      while (!root[isClean]) {
        root[isClean] = true
        this.walkSync(root)
      }
      if (this.listeners.OnceExit) {
        if (root.type === 'document') {
          for (let subRoot of root.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot)
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root)
        }
      }
    }

    return this.result
  }

  then(onFulfilled, onRejected) {
    if (true) {
      if (!('from' in this.opts)) {
        warnOnce(
          'Without `from` option PostCSS could generate wrong source map ' +
            'and will not find Browserslist config. Set it to CSS file path ' +
            'or to `undefined` to prevent this warning.'
        )
      }
    }
    return this.async().then(onFulfilled, onRejected)
  }

  toString() {
    return this.css
  }

  visitSync(visitors, node) {
    for (let [plugin, visitor] of visitors) {
      this.result.lastPlugin = plugin
      let promise
      try {
        promise = visitor(node, this.helpers)
      } catch (e) {
        throw this.handleError(e, node.proxyOf)
      }
      if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
        return true
      }
      if (isPromise(promise)) {
        throw this.getAsyncError()
      }
    }
  }

  visitTick(stack) {
    let visit = stack[stack.length - 1]
    let { node, visitors } = visit

    if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
      stack.pop()
      return
    }

    if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
      let [plugin, visitor] = visitors[visit.visitorIndex]
      visit.visitorIndex += 1
      if (visit.visitorIndex === visitors.length) {
        visit.visitors = []
        visit.visitorIndex = 0
      }
      this.result.lastPlugin = plugin
      try {
        return visitor(node.toProxy(), this.helpers)
      } catch (e) {
        throw this.handleError(e, node)
      }
    }

    if (visit.iterator !== 0) {
      let iterator = visit.iterator
      let child
      while ((child = node.nodes[node.indexes[iterator]])) {
        node.indexes[iterator] += 1
        if (!child[isClean]) {
          child[isClean] = true
          stack.push(toStack(child))
          return
        }
      }
      visit.iterator = 0
      delete node.indexes[iterator]
    }

    let events = visit.events
    while (visit.eventIndex < events.length) {
      let event = events[visit.eventIndex]
      visit.eventIndex += 1
      if (event === CHILDREN) {
        if (node.nodes && node.nodes.length) {
          node[isClean] = true
          visit.iterator = node.getIterator()
        }
        return
      } else if (this.listeners[event]) {
        visit.visitors = this.listeners[event]
        return
      }
    }
    stack.pop()
  }

  walkSync(node) {
    node[isClean] = true
    let events = getEvents(node)
    for (let event of events) {
      if (event === CHILDREN) {
        if (node.nodes) {
          node.each(child => {
            if (!child[isClean]) this.walkSync(child)
          })
        }
      } else {
        let visitors = this.listeners[event]
        if (visitors) {
          if (this.visitSync(visitors, node.toProxy())) return
        }
      }
    }
  }

  warnings() {
    return this.sync().warnings()
  }

  get content() {
    return this.stringify().content
  }

  get css() {
    return this.stringify().css
  }

  get map() {
    return this.stringify().map
  }

  get messages() {
    return this.sync().messages
  }

  get opts() {
    return this.result.opts
  }

  get processor() {
    return this.result.processor
  }

  get root() {
    return this.sync().root
  }

  get [Symbol.toStringTag]() {
    return 'LazyResult'
  }
}

LazyResult.registerPostcss = dependant => {
  postcss = dependant
}

module.exports = LazyResult
LazyResult.default = LazyResult

Root.registerLazyResult(LazyResult)
Document.registerLazyResult(LazyResult)


/***/ }),

/***/ "./node_modules/postcss/lib/list.js":
/*!******************************************!*\
  !*** ./node_modules/postcss/lib/list.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


let list = {
  comma(string) {
    return list.split(string, [','], true)
  },

  space(string) {
    let spaces = [' ', '\n', '\t']
    return list.split(string, spaces)
  },

  split(string, separators, last) {
    let array = []
    let current = ''
    let split = false

    let func = 0
    let inQuote = false
    let prevQuote = ''
    let escape = false

    for (let letter of string) {
      if (escape) {
        escape = false
      } else if (letter === '\\') {
        escape = true
      } else if (inQuote) {
        if (letter === prevQuote) {
          inQuote = false
        }
      } else if (letter === '"' || letter === "'") {
        inQuote = true
        prevQuote = letter
      } else if (letter === '(') {
        func += 1
      } else if (letter === ')') {
        if (func > 0) func -= 1
      } else if (func === 0) {
        if (separators.includes(letter)) split = true
      }

      if (split) {
        if (current !== '') array.push(current.trim())
        current = ''
        split = false
      } else {
        current += letter
      }
    }

    if (last || current !== '') array.push(current.trim())
    return array
  }
}

module.exports = list
list.default = list


/***/ }),

/***/ "./node_modules/postcss/lib/map-generator.js":
/*!***************************************************!*\
  !*** ./node_modules/postcss/lib/map-generator.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(/*! source-map-js */ "?b8cb")
let { dirname, relative, resolve, sep } = __webpack_require__(/*! path */ "?6197")
let { pathToFileURL } = __webpack_require__(/*! url */ "?c717")

let Input = __webpack_require__(/*! ./input */ "./node_modules/postcss/lib/input.js")

let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator)
let pathAvailable = Boolean(dirname && resolve && relative && sep)

class MapGenerator {
  constructor(stringify, root, opts, cssString) {
    this.stringify = stringify
    this.mapOpts = opts.map || {}
    this.root = root
    this.opts = opts
    this.css = cssString
    this.originalCSS = cssString
    this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute

    this.memoizedFileURLs = new Map()
    this.memoizedPaths = new Map()
    this.memoizedURLs = new Map()
  }

  addAnnotation() {
    let content

    if (this.isInline()) {
      content =
        'data:application/json;base64,' + this.toBase64(this.map.toString())
    } else if (typeof this.mapOpts.annotation === 'string') {
      content = this.mapOpts.annotation
    } else if (typeof this.mapOpts.annotation === 'function') {
      content = this.mapOpts.annotation(this.opts.to, this.root)
    } else {
      content = this.outputFile() + '.map'
    }
    let eol = '\n'
    if (this.css.includes('\r\n')) eol = '\r\n'

    this.css += eol + '/*# sourceMappingURL=' + content + ' */'
  }

  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file))
      let root = prev.root || dirname(prev.file)
      let map

      if (this.mapOpts.sourcesContent === false) {
        map = new SourceMapConsumer(prev.text)
        if (map.sourcesContent) {
          map.sourcesContent = null
        }
      } else {
        map = prev.consumer()
      }

      this.map.applySourceMap(map, from, this.toUrl(this.path(root)))
    }
  }

  clearAnnotation() {
    if (this.mapOpts.annotation === false) return

    if (this.root) {
      let node
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node = this.root.nodes[i]
        if (node.type !== 'comment') continue
        if (node.text.indexOf('# sourceMappingURL=') === 0) {
          this.root.removeChild(i)
        }
      }
    } else if (this.css) {
      this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, '')
    }
  }

  generate() {
    this.clearAnnotation()
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap()
    } else {
      let result = ''
      this.stringify(this.root, i => {
        result += i
      })
      return [result]
    }
  }

  generateMap() {
    if (this.root) {
      this.generateString()
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer()
      prev.file = this.outputFile()
      this.map = SourceMapGenerator.fromSourceMap(prev, {
        ignoreInvalidMapping: true
      })
    } else {
      this.map = new SourceMapGenerator({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      })
      this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from
          ? this.toUrl(this.path(this.opts.from))
          : '<no source>'
      })
    }

    if (this.isSourcesContent()) this.setSourcesContent()
    if (this.root && this.previous().length > 0) this.applyPrevMaps()
    if (this.isAnnotation()) this.addAnnotation()

    if (this.isInline()) {
      return [this.css]
    } else {
      return [this.css, this.map]
    }
  }

  generateString() {
    this.css = ''
    this.map = new SourceMapGenerator({
      file: this.outputFile(),
      ignoreInvalidMapping: true
    })

    let line = 1
    let column = 1

    let noSource = '<no source>'
    let mapping = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ''
    }

    let lines, last
    this.stringify(this.root, (str, node, type) => {
      this.css += str

      if (node && type !== 'end') {
        mapping.generated.line = line
        mapping.generated.column = column - 1
        if (node.source && node.source.start) {
          mapping.source = this.sourcePath(node)
          mapping.original.line = node.source.start.line
          mapping.original.column = node.source.start.column - 1
          this.map.addMapping(mapping)
        } else {
          mapping.source = noSource
          mapping.original.line = 1
          mapping.original.column = 0
          this.map.addMapping(mapping)
        }
      }

      lines = str.match(/\n/g)
      if (lines) {
        line += lines.length
        last = str.lastIndexOf('\n')
        column = str.length - last
      } else {
        column += str.length
      }

      if (node && type !== 'start') {
        let p = node.parent || { raws: {} }
        let childless =
          node.type === 'decl' || (node.type === 'atrule' && !node.nodes)
        if (!childless || node !== p.last || p.raws.semicolon) {
          if (node.source && node.source.end) {
            mapping.source = this.sourcePath(node)
            mapping.original.line = node.source.end.line
            mapping.original.column = node.source.end.column - 1
            mapping.generated.line = line
            mapping.generated.column = column - 2
            this.map.addMapping(mapping)
          } else {
            mapping.source = noSource
            mapping.original.line = 1
            mapping.original.column = 0
            mapping.generated.line = line
            mapping.generated.column = column - 1
            this.map.addMapping(mapping)
          }
        }
      }
    })
  }

  isAnnotation() {
    if (this.isInline()) {
      return true
    }
    if (typeof this.mapOpts.annotation !== 'undefined') {
      return this.mapOpts.annotation
    }
    if (this.previous().length) {
      return this.previous().some(i => i.annotation)
    }
    return true
  }

  isInline() {
    if (typeof this.mapOpts.inline !== 'undefined') {
      return this.mapOpts.inline
    }

    let annotation = this.mapOpts.annotation
    if (typeof annotation !== 'undefined' && annotation !== true) {
      return false
    }

    if (this.previous().length) {
      return this.previous().some(i => i.inline)
    }
    return true
  }

  isMap() {
    if (typeof this.opts.map !== 'undefined') {
      return !!this.opts.map
    }
    return this.previous().length > 0
  }

  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== 'undefined') {
      return this.mapOpts.sourcesContent
    }
    if (this.previous().length) {
      return this.previous().some(i => i.withContent())
    }
    return true
  }

  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to)
    } else if (this.opts.from) {
      return this.path(this.opts.from)
    } else {
      return 'to.css'
    }
  }

  path(file) {
    if (this.mapOpts.absolute) return file
    if (file.charCodeAt(0) === 60 /* `<` */) return file
    if (/^\w+:\/\//.test(file)) return file
    let cached = this.memoizedPaths.get(file)
    if (cached) return cached

    let from = this.opts.to ? dirname(this.opts.to) : '.'

    if (typeof this.mapOpts.annotation === 'string') {
      from = dirname(resolve(from, this.mapOpts.annotation))
    }

    let path = relative(from, file)
    this.memoizedPaths.set(file, path)

    return path
  }

  previous() {
    if (!this.previousMaps) {
      this.previousMaps = []
      if (this.root) {
        this.root.walk(node => {
          if (node.source && node.source.input.map) {
            let map = node.source.input.map
            if (!this.previousMaps.includes(map)) {
              this.previousMaps.push(map)
            }
          }
        })
      } else {
        let input = new Input(this.originalCSS, this.opts)
        if (input.map) this.previousMaps.push(input.map)
      }
    }

    return this.previousMaps
  }

  setSourcesContent() {
    let already = {}
    if (this.root) {
      this.root.walk(node => {
        if (node.source) {
          let from = node.source.input.from
          if (from && !already[from]) {
            already[from] = true
            let fromUrl = this.usesFileUrls
              ? this.toFileUrl(from)
              : this.toUrl(this.path(from))
            this.map.setSourceContent(fromUrl, node.source.input.css)
          }
        }
      })
    } else if (this.css) {
      let from = this.opts.from
        ? this.toUrl(this.path(this.opts.from))
        : '<no source>'
      this.map.setSourceContent(from, this.css)
    }
  }

  sourcePath(node) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from)
    } else if (this.usesFileUrls) {
      return this.toFileUrl(node.source.input.from)
    } else {
      return this.toUrl(this.path(node.source.input.from))
    }
  }

  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString('base64')
    } else {
      return window.btoa(unescape(encodeURIComponent(str)))
    }
  }

  toFileUrl(path) {
    let cached = this.memoizedFileURLs.get(path)
    if (cached) return cached

    if (pathToFileURL) {
      let fileURL = pathToFileURL(path).toString()
      this.memoizedFileURLs.set(path, fileURL)

      return fileURL
    } else {
      throw new Error(
        '`map.absolute` option is not available in this PostCSS build'
      )
    }
  }

  toUrl(path) {
    let cached = this.memoizedURLs.get(path)
    if (cached) return cached

    if (sep === '\\') {
      path = path.replace(/\\/g, '/')
    }

    let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent)
    this.memoizedURLs.set(path, url)

    return url
  }
}

module.exports = MapGenerator


/***/ }),

/***/ "./node_modules/postcss/lib/no-work-result.js":
/*!****************************************************!*\
  !*** ./node_modules/postcss/lib/no-work-result.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let MapGenerator = __webpack_require__(/*! ./map-generator */ "./node_modules/postcss/lib/map-generator.js")
let stringify = __webpack_require__(/*! ./stringify */ "./node_modules/postcss/lib/stringify.js")
let warnOnce = __webpack_require__(/*! ./warn-once */ "./node_modules/postcss/lib/warn-once.js")
let parse = __webpack_require__(/*! ./parse */ "./node_modules/postcss/lib/parse.js")
const Result = __webpack_require__(/*! ./result */ "./node_modules/postcss/lib/result.js")

class NoWorkResult {
  constructor(processor, css, opts) {
    css = css.toString()
    this.stringified = false

    this._processor = processor
    this._css = css
    this._opts = opts
    this._map = undefined
    let root

    let str = stringify
    this.result = new Result(this._processor, root, this._opts)
    this.result.css = css

    let self = this
    Object.defineProperty(this.result, 'root', {
      get() {
        return self.root
      }
    })

    let map = new MapGenerator(str, root, this._opts, css)
    if (map.isMap()) {
      let [generatedCSS, generatedMap] = map.generate()
      if (generatedCSS) {
        this.result.css = generatedCSS
      }
      if (generatedMap) {
        this.result.map = generatedMap
      }
    } else {
      map.clearAnnotation()
      this.result.css = map.css
    }
  }

  async() {
    if (this.error) return Promise.reject(this.error)
    return Promise.resolve(this.result)
  }

  catch(onRejected) {
    return this.async().catch(onRejected)
  }

  finally(onFinally) {
    return this.async().then(onFinally, onFinally)
  }

  sync() {
    if (this.error) throw this.error
    return this.result
  }

  then(onFulfilled, onRejected) {
    if (true) {
      if (!('from' in this._opts)) {
        warnOnce(
          'Without `from` option PostCSS could generate wrong source map ' +
            'and will not find Browserslist config. Set it to CSS file path ' +
            'or to `undefined` to prevent this warning.'
        )
      }
    }

    return this.async().then(onFulfilled, onRejected)
  }

  toString() {
    return this._css
  }

  warnings() {
    return []
  }

  get content() {
    return this.result.css
  }

  get css() {
    return this.result.css
  }

  get map() {
    return this.result.map
  }

  get messages() {
    return []
  }

  get opts() {
    return this.result.opts
  }

  get processor() {
    return this.result.processor
  }

  get root() {
    if (this._root) {
      return this._root
    }

    let root
    let parser = parse

    try {
      root = parser(this._css, this._opts)
    } catch (error) {
      this.error = error
    }

    if (this.error) {
      throw this.error
    } else {
      this._root = root
      return root
    }
  }

  get [Symbol.toStringTag]() {
    return 'NoWorkResult'
  }
}

module.exports = NoWorkResult
NoWorkResult.default = NoWorkResult


/***/ }),

/***/ "./node_modules/postcss/lib/node.js":
/*!******************************************!*\
  !*** ./node_modules/postcss/lib/node.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { isClean, my } = __webpack_require__(/*! ./symbols */ "./node_modules/postcss/lib/symbols.js")
let CssSyntaxError = __webpack_require__(/*! ./css-syntax-error */ "./node_modules/postcss/lib/css-syntax-error.js")
let Stringifier = __webpack_require__(/*! ./stringifier */ "./node_modules/postcss/lib/stringifier.js")
let stringify = __webpack_require__(/*! ./stringify */ "./node_modules/postcss/lib/stringify.js")

function cloneNode(obj, parent) {
  let cloned = new obj.constructor()

  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      /* c8 ignore next 2 */
      continue
    }
    if (i === 'proxyCache') continue
    let value = obj[i]
    let type = typeof value

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent
    } else if (i === 'source') {
      cloned[i] = value
    } else if (Array.isArray(value)) {
      cloned[i] = value.map(j => cloneNode(j, cloned))
    } else {
      if (type === 'object' && value !== null) value = cloneNode(value)
      cloned[i] = value
    }
  }

  return cloned
}

class Node {
  constructor(defaults = {}) {
    this.raws = {}
    this[isClean] = false
    this[my] = true

    for (let name in defaults) {
      if (name === 'nodes') {
        this.nodes = []
        for (let node of defaults[name]) {
          if (typeof node.clone === 'function') {
            this.append(node.clone())
          } else {
            this.append(node)
          }
        }
      } else {
        this[name] = defaults[name]
      }
    }
  }

  addToError(error) {
    error.postcssNode = this
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source
      error.stack = error.stack.replace(
        /\n\s{4}at /,
        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
      )
    }
    return error
  }

  after(add) {
    this.parent.insertAfter(this, add)
    return this
  }

  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name]
    }
    return this
  }

  before(add) {
    this.parent.insertBefore(this, add)
    return this
  }

  cleanRaws(keepBetween) {
    delete this.raws.before
    delete this.raws.after
    if (!keepBetween) delete this.raws.between
  }

  clone(overrides = {}) {
    let cloned = cloneNode(this)
    for (let name in overrides) {
      cloned[name] = overrides[name]
    }
    return cloned
  }

  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertAfter(this, cloned)
    return cloned
  }

  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertBefore(this, cloned)
    return cloned
  }

  error(message, opts = {}) {
    if (this.source) {
      let { end, start } = this.rangeBy(opts)
      return this.source.input.error(
        message,
        { column: start.column, line: start.line },
        { column: end.column, line: end.line },
        opts
      )
    }
    return new CssSyntaxError(message)
  }

  getProxyProcessor() {
    return {
      get(node, prop) {
        if (prop === 'proxyOf') {
          return node
        } else if (prop === 'root') {
          return () => node.root().toProxy()
        } else {
          return node[prop]
        }
      },

      set(node, prop, value) {
        if (node[prop] === value) return true
        node[prop] = value
        if (
          prop === 'prop' ||
          prop === 'value' ||
          prop === 'name' ||
          prop === 'params' ||
          prop === 'important' ||
          /* c8 ignore next */
          prop === 'text'
        ) {
          node.markDirty()
        }
        return true
      }
    }
  }

  markDirty() {
    if (this[isClean]) {
      this[isClean] = false
      let next = this
      while ((next = next.parent)) {
        next[isClean] = false
      }
    }
  }

  next() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index + 1]
  }

  positionBy(opts, stringRepresentation) {
    let pos = this.source.start
    if (opts.index) {
      pos = this.positionInside(opts.index, stringRepresentation)
    } else if (opts.word) {
      stringRepresentation = this.toString()
      let index = stringRepresentation.indexOf(opts.word)
      if (index !== -1) pos = this.positionInside(index, stringRepresentation)
    }
    return pos
  }

  positionInside(index, stringRepresentation) {
    let string = stringRepresentation || this.toString()
    let column = this.source.start.column
    let line = this.source.start.line

    for (let i = 0; i < index; i++) {
      if (string[i] === '\n') {
        column = 1
        line += 1
      } else {
        column += 1
      }
    }

    return { column, line }
  }

  prev() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index - 1]
  }

  rangeBy(opts) {
    let start = {
      column: this.source.start.column,
      line: this.source.start.line
    }
    let end = this.source.end
      ? {
        column: this.source.end.column + 1,
        line: this.source.end.line
      }
      : {
        column: start.column + 1,
        line: start.line
      }

    if (opts.word) {
      let stringRepresentation = this.toString()
      let index = stringRepresentation.indexOf(opts.word)
      if (index !== -1) {
        start = this.positionInside(index, stringRepresentation)
        end = this.positionInside(index + opts.word.length, stringRepresentation)
      }
    } else {
      if (opts.start) {
        start = {
          column: opts.start.column,
          line: opts.start.line
        }
      } else if (opts.index) {
        start = this.positionInside(opts.index)
      }

      if (opts.end) {
        end = {
          column: opts.end.column,
          line: opts.end.line
        }
      } else if (typeof opts.endIndex === 'number') {
        end = this.positionInside(opts.endIndex)
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1)
      }
    }

    if (
      end.line < start.line ||
      (end.line === start.line && end.column <= start.column)
    ) {
      end = { column: start.column + 1, line: start.line }
    }

    return { end, start }
  }

  raw(prop, defaultType) {
    let str = new Stringifier()
    return str.raw(this, prop, defaultType)
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this)
    }
    this.parent = undefined
    return this
  }

  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this
      let foundSelf = false
      for (let node of nodes) {
        if (node === this) {
          foundSelf = true
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node)
          bookmark = node
        } else {
          this.parent.insertBefore(bookmark, node)
        }
      }

      if (!foundSelf) {
        this.remove()
      }
    }

    return this
  }

  root() {
    let result = this
    while (result.parent && result.parent.type !== 'document') {
      result = result.parent
    }
    return result
  }

  toJSON(_, inputs) {
    let fixed = {}
    let emitInputs = inputs == null
    inputs = inputs || new Map()
    let inputsNextIndex = 0

    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        /* c8 ignore next 2 */
        continue
      }
      if (name === 'parent' || name === 'proxyCache') continue
      let value = this[name]

      if (Array.isArray(value)) {
        fixed[name] = value.map(i => {
          if (typeof i === 'object' && i.toJSON) {
            return i.toJSON(null, inputs)
          } else {
            return i
          }
        })
      } else if (typeof value === 'object' && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs)
      } else if (name === 'source') {
        let inputId = inputs.get(value.input)
        if (inputId == null) {
          inputId = inputsNextIndex
          inputs.set(value.input, inputsNextIndex)
          inputsNextIndex++
        }
        fixed[name] = {
          end: value.end,
          inputId,
          start: value.start
        }
      } else {
        fixed[name] = value
      }
    }

    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map(input => input.toJSON())
    }

    return fixed
  }

  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor())
    }
    return this.proxyCache
  }

  toString(stringifier = stringify) {
    if (stringifier.stringify) stringifier = stringifier.stringify
    let result = ''
    stringifier(this, i => {
      result += i
    })
    return result
  }

  warn(result, text, opts) {
    let data = { node: this }
    for (let i in opts) data[i] = opts[i]
    return result.warn(text, data)
  }

  get proxyOf() {
    return this
  }
}

module.exports = Node
Node.default = Node


/***/ }),

/***/ "./node_modules/postcss/lib/parse.js":
/*!*******************************************!*\
  !*** ./node_modules/postcss/lib/parse.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")
let Parser = __webpack_require__(/*! ./parser */ "./node_modules/postcss/lib/parser.js")
let Input = __webpack_require__(/*! ./input */ "./node_modules/postcss/lib/input.js")

function parse(css, opts) {
  let input = new Input(css, opts)
  let parser = new Parser(input)
  try {
    parser.parse()
  } catch (e) {
    if (true) {
      if (e.name === 'CssSyntaxError' && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse SCSS with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-scss parser'
        } else if (/\.sass/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse Sass with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-sass parser'
        } else if (/\.less$/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse Less with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-less parser'
        }
      }
    }
    throw e
  }

  return parser.root
}

module.exports = parse
parse.default = parse

Container.registerParse(parse)


/***/ }),

/***/ "./node_modules/postcss/lib/parser.js":
/*!********************************************!*\
  !*** ./node_modules/postcss/lib/parser.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Declaration = __webpack_require__(/*! ./declaration */ "./node_modules/postcss/lib/declaration.js")
let tokenizer = __webpack_require__(/*! ./tokenize */ "./node_modules/postcss/lib/tokenize.js")
let Comment = __webpack_require__(/*! ./comment */ "./node_modules/postcss/lib/comment.js")
let AtRule = __webpack_require__(/*! ./at-rule */ "./node_modules/postcss/lib/at-rule.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")
let Rule = __webpack_require__(/*! ./rule */ "./node_modules/postcss/lib/rule.js")

const SAFE_COMMENT_NEIGHBOR = {
  empty: true,
  space: true
}

function findLastWithPosition(tokens) {
  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i]
    let pos = token[3] || token[2]
    if (pos) return pos
  }
}

class Parser {
  constructor(input) {
    this.input = input

    this.root = new Root()
    this.current = this.root
    this.spaces = ''
    this.semicolon = false

    this.createTokenizer()
    this.root.source = { input, start: { column: 1, line: 1, offset: 0 } }
  }

  atrule(token) {
    let node = new AtRule()
    node.name = token[1].slice(1)
    if (node.name === '') {
      this.unnamedAtrule(node, token)
    }
    this.init(node, token[2])

    let type
    let prev
    let shift
    let last = false
    let open = false
    let params = []
    let brackets = []

    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken()
      type = token[0]

      if (type === '(' || type === '[') {
        brackets.push(type === '(' ? ')' : ']')
      } else if (type === '{' && brackets.length > 0) {
        brackets.push('}')
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop()
      }

      if (brackets.length === 0) {
        if (type === ';') {
          node.source.end = this.getPosition(token[2])
          node.source.end.offset++
          this.semicolon = true
          break
        } else if (type === '{') {
          open = true
          break
        } else if (type === '}') {
          if (params.length > 0) {
            shift = params.length - 1
            prev = params[shift]
            while (prev && prev[0] === 'space') {
              prev = params[--shift]
            }
            if (prev) {
              node.source.end = this.getPosition(prev[3] || prev[2])
              node.source.end.offset++
            }
          }
          this.end(token)
          break
        } else {
          params.push(token)
        }
      } else {
        params.push(token)
      }

      if (this.tokenizer.endOfFile()) {
        last = true
        break
      }
    }

    node.raws.between = this.spacesAndCommentsFromEnd(params)
    if (params.length) {
      node.raws.afterName = this.spacesAndCommentsFromStart(params)
      this.raw(node, 'params', params)
      if (last) {
        token = params[params.length - 1]
        node.source.end = this.getPosition(token[3] || token[2])
        node.source.end.offset++
        this.spaces = node.raws.between
        node.raws.between = ''
      }
    } else {
      node.raws.afterName = ''
      node.params = ''
    }

    if (open) {
      node.nodes = []
      this.current = node
    }
  }

  checkMissedSemicolon(tokens) {
    let colon = this.colon(tokens)
    if (colon === false) return

    let founded = 0
    let token
    for (let j = colon - 1; j >= 0; j--) {
      token = tokens[j]
      if (token[0] !== 'space') {
        founded += 1
        if (founded === 2) break
      }
    }
    // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
    // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
    // And because we need it after that one we do +1 to get the next one.
    throw this.input.error(
      'Missed semicolon',
      token[0] === 'word' ? token[3] + 1 : token[2]
    )
  }

  colon(tokens) {
    let brackets = 0
    let token, type, prev
    for (let [i, element] of tokens.entries()) {
      token = element
      type = token[0]

      if (type === '(') {
        brackets += 1
      }
      if (type === ')') {
        brackets -= 1
      }
      if (brackets === 0 && type === ':') {
        if (!prev) {
          this.doubleColon(token)
        } else if (prev[0] === 'word' && prev[1] === 'progid') {
          continue
        } else {
          return i
        }
      }

      prev = token
    }
    return false
  }

  comment(token) {
    let node = new Comment()
    this.init(node, token[2])
    node.source.end = this.getPosition(token[3] || token[2])
    node.source.end.offset++

    let text = token[1].slice(2, -2)
    if (/^\s*$/.test(text)) {
      node.text = ''
      node.raws.left = text
      node.raws.right = ''
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/)
      node.text = match[2]
      node.raws.left = match[1]
      node.raws.right = match[3]
    }
  }

  createTokenizer() {
    this.tokenizer = tokenizer(this.input)
  }

  decl(tokens, customProperty) {
    let node = new Declaration()
    this.init(node, tokens[0][2])

    let last = tokens[tokens.length - 1]
    if (last[0] === ';') {
      this.semicolon = true
      tokens.pop()
    }

    node.source.end = this.getPosition(
      last[3] || last[2] || findLastWithPosition(tokens)
    )
    node.source.end.offset++

    while (tokens[0][0] !== 'word') {
      if (tokens.length === 1) this.unknownWord(tokens)
      node.raws.before += tokens.shift()[1]
    }
    node.source.start = this.getPosition(tokens[0][2])

    node.prop = ''
    while (tokens.length) {
      let type = tokens[0][0]
      if (type === ':' || type === 'space' || type === 'comment') {
        break
      }
      node.prop += tokens.shift()[1]
    }

    node.raws.between = ''

    let token
    while (tokens.length) {
      token = tokens.shift()

      if (token[0] === ':') {
        node.raws.between += token[1]
        break
      } else {
        if (token[0] === 'word' && /\w/.test(token[1])) {
          this.unknownWord([token])
        }
        node.raws.between += token[1]
      }
    }

    if (node.prop[0] === '_' || node.prop[0] === '*') {
      node.raws.before += node.prop[0]
      node.prop = node.prop.slice(1)
    }

    let firstSpaces = []
    let next
    while (tokens.length) {
      next = tokens[0][0]
      if (next !== 'space' && next !== 'comment') break
      firstSpaces.push(tokens.shift())
    }

    this.precheckMissedSemicolon(tokens)

    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i]
      if (token[1].toLowerCase() === '!important') {
        node.important = true
        let string = this.stringFrom(tokens, i)
        string = this.spacesFromEnd(tokens) + string
        if (string !== ' !important') node.raws.important = string
        break
      } else if (token[1].toLowerCase() === 'important') {
        let cache = tokens.slice(0)
        let str = ''
        for (let j = i; j > 0; j--) {
          let type = cache[j][0]
          if (str.trim().indexOf('!') === 0 && type !== 'space') {
            break
          }
          str = cache.pop()[1] + str
        }
        if (str.trim().indexOf('!') === 0) {
          node.important = true
          node.raws.important = str
          tokens = cache
        }
      }

      if (token[0] !== 'space' && token[0] !== 'comment') {
        break
      }
    }

    let hasWord = tokens.some(i => i[0] !== 'space' && i[0] !== 'comment')

    if (hasWord) {
      node.raws.between += firstSpaces.map(i => i[1]).join('')
      firstSpaces = []
    }
    this.raw(node, 'value', firstSpaces.concat(tokens), customProperty)

    if (node.value.includes(':') && !customProperty) {
      this.checkMissedSemicolon(tokens)
    }
  }

  doubleColon(token) {
    throw this.input.error(
      'Double colon',
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    )
  }

  emptyRule(token) {
    let node = new Rule()
    this.init(node, token[2])
    node.selector = ''
    node.raws.between = ''
    this.current = node
  }

  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon
    }
    this.semicolon = false

    this.current.raws.after = (this.current.raws.after || '') + this.spaces
    this.spaces = ''

    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2])
      this.current.source.end.offset++
      this.current = this.current.parent
    } else {
      this.unexpectedClose(token)
    }
  }

  endFile() {
    if (this.current.parent) this.unclosedBlock()
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon
    }
    this.current.raws.after = (this.current.raws.after || '') + this.spaces
    this.root.source.end = this.getPosition(this.tokenizer.position())
  }

  freeSemicolon(token) {
    this.spaces += token[1]
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1]
      if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces
        this.spaces = ''
      }
    }
  }

  // Helpers

  getPosition(offset) {
    let pos = this.input.fromOffset(offset)
    return {
      column: pos.col,
      line: pos.line,
      offset
    }
  }

  init(node, offset) {
    this.current.push(node)
    node.source = {
      input: this.input,
      start: this.getPosition(offset)
    }
    node.raws.before = this.spaces
    this.spaces = ''
    if (node.type !== 'comment') this.semicolon = false
  }

  other(start) {
    let end = false
    let type = null
    let colon = false
    let bracket = null
    let brackets = []
    let customProperty = start[1].startsWith('--')

    let tokens = []
    let token = start
    while (token) {
      type = token[0]
      tokens.push(token)

      if (type === '(' || type === '[') {
        if (!bracket) bracket = token
        brackets.push(type === '(' ? ')' : ']')
      } else if (customProperty && colon && type === '{') {
        if (!bracket) bracket = token
        brackets.push('}')
      } else if (brackets.length === 0) {
        if (type === ';') {
          if (colon) {
            this.decl(tokens, customProperty)
            return
          } else {
            break
          }
        } else if (type === '{') {
          this.rule(tokens)
          return
        } else if (type === '}') {
          this.tokenizer.back(tokens.pop())
          end = true
          break
        } else if (type === ':') {
          colon = true
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop()
        if (brackets.length === 0) bracket = null
      }

      token = this.tokenizer.nextToken()
    }

    if (this.tokenizer.endOfFile()) end = true
    if (brackets.length > 0) this.unclosedBracket(bracket)

    if (end && colon) {
      if (!customProperty) {
        while (tokens.length) {
          token = tokens[tokens.length - 1][0]
          if (token !== 'space' && token !== 'comment') break
          this.tokenizer.back(tokens.pop())
        }
      }
      this.decl(tokens, customProperty)
    } else {
      this.unknownWord(tokens)
    }
  }

  parse() {
    let token
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken()

      switch (token[0]) {
        case 'space':
          this.spaces += token[1]
          break

        case ';':
          this.freeSemicolon(token)
          break

        case '}':
          this.end(token)
          break

        case 'comment':
          this.comment(token)
          break

        case 'at-word':
          this.atrule(token)
          break

        case '{':
          this.emptyRule(token)
          break

        default:
          this.other(token)
          break
      }
    }
    this.endFile()
  }

  precheckMissedSemicolon(/* tokens */) {
    // Hook for Safe Parser
  }

  raw(node, prop, tokens, customProperty) {
    let token, type
    let length = tokens.length
    let value = ''
    let clean = true
    let next, prev

    for (let i = 0; i < length; i += 1) {
      token = tokens[i]
      type = token[0]
      if (type === 'space' && i === length - 1 && !customProperty) {
        clean = false
      } else if (type === 'comment') {
        prev = tokens[i - 1] ? tokens[i - 1][0] : 'empty'
        next = tokens[i + 1] ? tokens[i + 1][0] : 'empty'
        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
          if (value.slice(-1) === ',') {
            clean = false
          } else {
            value += token[1]
          }
        } else {
          clean = false
        }
      } else {
        value += token[1]
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], '')
      node.raws[prop] = { raw, value }
    }
    node[prop] = value
  }

  rule(tokens) {
    tokens.pop()

    let node = new Rule()
    this.init(node, tokens[0][2])

    node.raws.between = this.spacesAndCommentsFromEnd(tokens)
    this.raw(node, 'selector', tokens)
    this.current = node
  }

  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType
    let spaces = ''
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0]
      if (lastTokenType !== 'space' && lastTokenType !== 'comment') break
      spaces = tokens.pop()[1] + spaces
    }
    return spaces
  }

  // Errors

  spacesAndCommentsFromStart(tokens) {
    let next
    let spaces = ''
    while (tokens.length) {
      next = tokens[0][0]
      if (next !== 'space' && next !== 'comment') break
      spaces += tokens.shift()[1]
    }
    return spaces
  }

  spacesFromEnd(tokens) {
    let lastTokenType
    let spaces = ''
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0]
      if (lastTokenType !== 'space') break
      spaces = tokens.pop()[1] + spaces
    }
    return spaces
  }

  stringFrom(tokens, from) {
    let result = ''
    for (let i = from; i < tokens.length; i++) {
      result += tokens[i][1]
    }
    tokens.splice(from, tokens.length - from)
    return result
  }

  unclosedBlock() {
    let pos = this.current.source.start
    throw this.input.error('Unclosed block', pos.line, pos.column)
  }

  unclosedBracket(bracket) {
    throw this.input.error(
      'Unclosed bracket',
      { offset: bracket[2] },
      { offset: bracket[2] + 1 }
    )
  }

  unexpectedClose(token) {
    throw this.input.error(
      'Unexpected }',
      { offset: token[2] },
      { offset: token[2] + 1 }
    )
  }

  unknownWord(tokens) {
    throw this.input.error(
      'Unknown word',
      { offset: tokens[0][2] },
      { offset: tokens[0][2] + tokens[0][1].length }
    )
  }

  unnamedAtrule(node, token) {
    throw this.input.error(
      'At-rule without name',
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    )
  }
}

module.exports = Parser


/***/ }),

/***/ "./node_modules/postcss/lib/postcss.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/postcss.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let CssSyntaxError = __webpack_require__(/*! ./css-syntax-error */ "./node_modules/postcss/lib/css-syntax-error.js")
let Declaration = __webpack_require__(/*! ./declaration */ "./node_modules/postcss/lib/declaration.js")
let LazyResult = __webpack_require__(/*! ./lazy-result */ "./node_modules/postcss/lib/lazy-result.js")
let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")
let Processor = __webpack_require__(/*! ./processor */ "./node_modules/postcss/lib/processor.js")
let stringify = __webpack_require__(/*! ./stringify */ "./node_modules/postcss/lib/stringify.js")
let fromJSON = __webpack_require__(/*! ./fromJSON */ "./node_modules/postcss/lib/fromJSON.js")
let Document = __webpack_require__(/*! ./document */ "./node_modules/postcss/lib/document.js")
let Warning = __webpack_require__(/*! ./warning */ "./node_modules/postcss/lib/warning.js")
let Comment = __webpack_require__(/*! ./comment */ "./node_modules/postcss/lib/comment.js")
let AtRule = __webpack_require__(/*! ./at-rule */ "./node_modules/postcss/lib/at-rule.js")
let Result = __webpack_require__(/*! ./result.js */ "./node_modules/postcss/lib/result.js")
let Input = __webpack_require__(/*! ./input */ "./node_modules/postcss/lib/input.js")
let parse = __webpack_require__(/*! ./parse */ "./node_modules/postcss/lib/parse.js")
let list = __webpack_require__(/*! ./list */ "./node_modules/postcss/lib/list.js")
let Rule = __webpack_require__(/*! ./rule */ "./node_modules/postcss/lib/rule.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")
let Node = __webpack_require__(/*! ./node */ "./node_modules/postcss/lib/node.js")

function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0]
  }
  return new Processor(plugins)
}

postcss.plugin = function plugin(name, initializer) {
  let warningPrinted = false
  function creator(...args) {
    // eslint-disable-next-line no-console
    if (console && console.warn && !warningPrinted) {
      warningPrinted = true
      // eslint-disable-next-line no-console
      console.warn(
        name +
          ': postcss.plugin was deprecated. Migration guide:\n' +
          'https://evilmartians.com/chronicles/postcss-8-plugin-migration'
      )
      if (process.env.LANG && process.env.LANG.startsWith('cn')) {
        /* c8 ignore next 7 */
        // eslint-disable-next-line no-console
        console.warn(
          name +
            ': 里面 postcss.plugin 被弃用. 迁移指南:\n' +
            'https://www.w3ctech.com/topic/2226'
        )
      }
    }
    let transformer = initializer(...args)
    transformer.postcssPlugin = name
    transformer.postcssVersion = new Processor().version
    return transformer
  }

  let cache
  Object.defineProperty(creator, 'postcss', {
    get() {
      if (!cache) cache = creator()
      return cache
    }
  })

  creator.process = function (css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts)
  }

  return creator
}

postcss.stringify = stringify
postcss.parse = parse
postcss.fromJSON = fromJSON
postcss.list = list

postcss.comment = defaults => new Comment(defaults)
postcss.atRule = defaults => new AtRule(defaults)
postcss.decl = defaults => new Declaration(defaults)
postcss.rule = defaults => new Rule(defaults)
postcss.root = defaults => new Root(defaults)
postcss.document = defaults => new Document(defaults)

postcss.CssSyntaxError = CssSyntaxError
postcss.Declaration = Declaration
postcss.Container = Container
postcss.Processor = Processor
postcss.Document = Document
postcss.Comment = Comment
postcss.Warning = Warning
postcss.AtRule = AtRule
postcss.Result = Result
postcss.Input = Input
postcss.Rule = Rule
postcss.Root = Root
postcss.Node = Node

LazyResult.registerPostcss(postcss)

module.exports = postcss
postcss.default = postcss


/***/ }),

/***/ "./node_modules/postcss/lib/previous-map.js":
/*!**************************************************!*\
  !*** ./node_modules/postcss/lib/previous-map.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(/*! source-map-js */ "?b8cb")
let { existsSync, readFileSync } = __webpack_require__(/*! fs */ "?03fb")
let { dirname, join } = __webpack_require__(/*! path */ "?6197")

function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, 'base64').toString()
  } else {
    /* c8 ignore next 2 */
    return window.atob(str)
  }
}

class PreviousMap {
  constructor(css, opts) {
    if (opts.map === false) return
    this.loadAnnotation(css)
    this.inline = this.startWith(this.annotation, 'data:')

    let prev = opts.map ? opts.map.prev : undefined
    let text = this.loadMap(opts.from, prev)
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from
    }
    if (this.mapFile) this.root = dirname(this.mapFile)
    if (text) this.text = text
  }

  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer(this.text)
    }
    return this.consumerCache
  }

  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/
    let baseUri = /^data:application\/json;base64,/
    let charsetUri = /^data:application\/json;charset=utf-?8,/
    let uri = /^data:application\/json,/

    if (charsetUri.test(text) || uri.test(text)) {
      return decodeURIComponent(text.substr(RegExp.lastMatch.length))
    }

    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length))
    }

    let encoding = text.match(/data:application\/json;([^,]+),/)[1]
    throw new Error('Unsupported source map encoding ' + encoding)
  }

  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, '').trim()
  }

  isMap(map) {
    if (typeof map !== 'object') return false
    return (
      typeof map.mappings === 'string' ||
      typeof map._mappings === 'string' ||
      Array.isArray(map.sections)
    )
  }

  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm)
    if (!comments) return

    // sourceMappingURLs from comments, strings, etc.
    let start = css.lastIndexOf(comments.pop())
    let end = css.indexOf('*/', start)

    if (start > -1 && end > -1) {
      // Locate the last sourceMappingURL to avoid pickin
      this.annotation = this.getAnnotationURL(css.substring(start, end))
    }
  }

  loadFile(path) {
    this.root = dirname(path)
    if (existsSync(path)) {
      this.mapFile = path
      return readFileSync(path, 'utf-8').toString().trim()
    }
  }

  loadMap(file, prev) {
    if (prev === false) return false

    if (prev) {
      if (typeof prev === 'string') {
        return prev
      } else if (typeof prev === 'function') {
        let prevPath = prev(file)
        if (prevPath) {
          let map = this.loadFile(prevPath)
          if (!map) {
            throw new Error(
              'Unable to load previous source map: ' + prevPath.toString()
            )
          }
          return map
        }
      } else if (prev instanceof SourceMapConsumer) {
        return SourceMapGenerator.fromSourceMap(prev).toString()
      } else if (prev instanceof SourceMapGenerator) {
        return prev.toString()
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev)
      } else {
        throw new Error(
          'Unsupported previous source map format: ' + prev.toString()
        )
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation)
    } else if (this.annotation) {
      let map = this.annotation
      if (file) map = join(dirname(file), map)
      return this.loadFile(map)
    }
  }

  startWith(string, start) {
    if (!string) return false
    return string.substr(0, start.length) === start
  }

  withContent() {
    return !!(
      this.consumer().sourcesContent &&
      this.consumer().sourcesContent.length > 0
    )
  }
}

module.exports = PreviousMap
PreviousMap.default = PreviousMap


/***/ }),

/***/ "./node_modules/postcss/lib/processor.js":
/*!***********************************************!*\
  !*** ./node_modules/postcss/lib/processor.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let NoWorkResult = __webpack_require__(/*! ./no-work-result */ "./node_modules/postcss/lib/no-work-result.js")
let LazyResult = __webpack_require__(/*! ./lazy-result */ "./node_modules/postcss/lib/lazy-result.js")
let Document = __webpack_require__(/*! ./document */ "./node_modules/postcss/lib/document.js")
let Root = __webpack_require__(/*! ./root */ "./node_modules/postcss/lib/root.js")

class Processor {
  constructor(plugins = []) {
    this.version = '8.4.39'
    this.plugins = this.normalize(plugins)
  }

  normalize(plugins) {
    let normalized = []
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i()
      } else if (i.postcss) {
        i = i.postcss
      }

      if (typeof i === 'object' && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins)
      } else if (typeof i === 'object' && i.postcssPlugin) {
        normalized.push(i)
      } else if (typeof i === 'function') {
        normalized.push(i)
      } else if (typeof i === 'object' && (i.parse || i.stringify)) {
        if (true) {
          throw new Error(
            'PostCSS syntaxes cannot be used as plugins. Instead, please use ' +
              'one of the syntax/parser/stringifier options as outlined ' +
              'in your PostCSS runner documentation.'
          )
        }
      } else {
        throw new Error(i + ' is not a PostCSS plugin')
      }
    }
    return normalized
  }

  process(css, opts = {}) {
    if (
      !this.plugins.length &&
      !opts.parser &&
      !opts.stringifier &&
      !opts.syntax
    ) {
      return new NoWorkResult(this, css, opts)
    } else {
      return new LazyResult(this, css, opts)
    }
  }

  use(plugin) {
    this.plugins = this.plugins.concat(this.normalize([plugin]))
    return this
  }
}

module.exports = Processor
Processor.default = Processor

Root.registerProcessor(Processor)
Document.registerProcessor(Processor)


/***/ }),

/***/ "./node_modules/postcss/lib/result.js":
/*!********************************************!*\
  !*** ./node_modules/postcss/lib/result.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Warning = __webpack_require__(/*! ./warning */ "./node_modules/postcss/lib/warning.js")

class Result {
  constructor(processor, root, opts) {
    this.processor = processor
    this.messages = []
    this.root = root
    this.opts = opts
    this.css = undefined
    this.map = undefined
  }

  toString() {
    return this.css
  }

  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin
      }
    }

    let warning = new Warning(text, opts)
    this.messages.push(warning)

    return warning
  }

  warnings() {
    return this.messages.filter(i => i.type === 'warning')
  }

  get content() {
    return this.css
  }
}

module.exports = Result
Result.default = Result


/***/ }),

/***/ "./node_modules/postcss/lib/root.js":
/*!******************************************!*\
  !*** ./node_modules/postcss/lib/root.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")

let LazyResult, Processor

class Root extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'root'
    if (!this.nodes) this.nodes = []
  }

  normalize(child, sample, type) {
    let nodes = super.normalize(child)

    if (sample) {
      if (type === 'prepend') {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before
        } else {
          delete sample.raws.before
        }
      } else if (this.first !== sample) {
        for (let node of nodes) {
          node.raws.before = sample.raws.before
        }
      }
    }

    return nodes
  }

  removeChild(child, ignore) {
    let index = this.index(child)

    if (!ignore && index === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index].raws.before
    }

    return super.removeChild(child)
  }

  toResult(opts = {}) {
    let lazy = new LazyResult(new Processor(), this, opts)
    return lazy.stringify()
  }
}

Root.registerLazyResult = dependant => {
  LazyResult = dependant
}

Root.registerProcessor = dependant => {
  Processor = dependant
}

module.exports = Root
Root.default = Root

Container.registerRoot(Root)


/***/ }),

/***/ "./node_modules/postcss/lib/rule.js":
/*!******************************************!*\
  !*** ./node_modules/postcss/lib/rule.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "./node_modules/postcss/lib/container.js")
let list = __webpack_require__(/*! ./list */ "./node_modules/postcss/lib/list.js")

class Rule extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'rule'
    if (!this.nodes) this.nodes = []
  }

  get selectors() {
    return list.comma(this.selector)
  }

  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null
    let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen')
    this.selector = values.join(sep)
  }
}

module.exports = Rule
Rule.default = Rule

Container.registerRule(Rule)


/***/ }),

/***/ "./node_modules/postcss/lib/stringifier.js":
/*!*************************************************!*\
  !*** ./node_modules/postcss/lib/stringifier.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


const DEFAULT_RAW = {
  after: '\n',
  beforeClose: '\n',
  beforeComment: '\n',
  beforeDecl: '\n',
  beforeOpen: ' ',
  beforeRule: '\n',
  colon: ': ',
  commentLeft: ' ',
  commentRight: ' ',
  emptyBody: '',
  indent: '    ',
  semicolon: false
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

class Stringifier {
  constructor(builder) {
    this.builder = builder
  }

  atrule(node, semicolon) {
    let name = '@' + node.name
    let params = node.params ? this.rawValue(node, 'params') : ''

    if (typeof node.raws.afterName !== 'undefined') {
      name += node.raws.afterName
    } else if (params) {
      name += ' '
    }

    if (node.nodes) {
      this.block(node, name + params)
    } else {
      let end = (node.raws.between || '') + (semicolon ? ';' : '')
      this.builder(name + params + end, node)
    }
  }

  beforeAfter(node, detect) {
    let value
    if (node.type === 'decl') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (node.type === 'comment') {
      value = this.raw(node, null, 'beforeComment')
    } else if (detect === 'before') {
      value = this.raw(node, null, 'beforeRule')
    } else {
      value = this.raw(node, null, 'beforeClose')
    }

    let buf = node.parent
    let depth = 0
    while (buf && buf.type !== 'root') {
      depth += 1
      buf = buf.parent
    }

    if (value.includes('\n')) {
      let indent = this.raw(node, null, 'indent')
      if (indent.length) {
        for (let step = 0; step < depth; step++) value += indent
      }
    }

    return value
  }

  block(node, start) {
    let between = this.raw(node, 'between', 'beforeOpen')
    this.builder(start + between + '{', node, 'start')

    let after
    if (node.nodes && node.nodes.length) {
      this.body(node)
      after = this.raw(node, 'after')
    } else {
      after = this.raw(node, 'after', 'emptyBody')
    }

    if (after) this.builder(after)
    this.builder('}', node, 'end')
  }

  body(node) {
    let last = node.nodes.length - 1
    while (last > 0) {
      if (node.nodes[last].type !== 'comment') break
      last -= 1
    }

    let semicolon = this.raw(node, 'semicolon')
    for (let i = 0; i < node.nodes.length; i++) {
      let child = node.nodes[i]
      let before = this.raw(child, 'before')
      if (before) this.builder(before)
      this.stringify(child, last !== i || semicolon)
    }
  }

  comment(node) {
    let left = this.raw(node, 'left', 'commentLeft')
    let right = this.raw(node, 'right', 'commentRight')
    this.builder('/*' + left + node.text + right + '*/', node)
  }

  decl(node, semicolon) {
    let between = this.raw(node, 'between', 'colon')
    let string = node.prop + between + this.rawValue(node, 'value')

    if (node.important) {
      string += node.raws.important || ' !important'
    }

    if (semicolon) string += ';'
    this.builder(string, node)
  }

  document(node) {
    this.body(node)
  }

  raw(node, own, detect) {
    let value
    if (!detect) detect = own

    // Already had
    if (own) {
      value = node.raws[own]
      if (typeof value !== 'undefined') return value
    }

    let parent = node.parent

    if (detect === 'before') {
      // Hack for first rule in CSS
      if (!parent || (parent.type === 'root' && parent.first === node)) {
        return ''
      }

      // `root` nodes in `document` should use only their own raws
      if (parent && parent.type === 'document') {
        return ''
      }
    }

    // Floating child without parent
    if (!parent) return DEFAULT_RAW[detect]

    // Detect style by other nodes
    let root = node.root()
    if (!root.rawCache) root.rawCache = {}
    if (typeof root.rawCache[detect] !== 'undefined') {
      return root.rawCache[detect]
    }

    if (detect === 'before' || detect === 'after') {
      return this.beforeAfter(node, detect)
    } else {
      let method = 'raw' + capitalize(detect)
      if (this[method]) {
        value = this[method](root, node)
      } else {
        root.walk(i => {
          value = i.raws[own]
          if (typeof value !== 'undefined') return false
        })
      }
    }

    if (typeof value === 'undefined') value = DEFAULT_RAW[detect]

    root.rawCache[detect] = value
    return value
  }

  rawBeforeClose(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== 'undefined') {
          value = i.raws.after
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawBeforeComment(root, node) {
    let value
    root.walkComments(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeDecl(root, node) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeRule')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeOpen(root) {
    let value
    root.walk(i => {
      if (i.type !== 'decl') {
        value = i.raws.between
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawBeforeRule(root) {
    let value
    root.walk(i => {
      if (i.nodes && (i.parent !== root || root.first !== i)) {
        if (typeof i.raws.before !== 'undefined') {
          value = i.raws.before
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawColon(root) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.between !== 'undefined') {
        value = i.raws.between.replace(/[^\s:]/g, '')
        return false
      }
    })
    return value
  }

  rawEmptyBody(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawIndent(root) {
    if (root.raws.indent) return root.raws.indent
    let value
    root.walk(i => {
      let p = i.parent
      if (p && p !== root && p.parent && p.parent === root) {
        if (typeof i.raws.before !== 'undefined') {
          let parts = i.raws.before.split('\n')
          value = parts[parts.length - 1]
          value = value.replace(/\S/g, '')
          return false
        }
      }
    })
    return value
  }

  rawSemicolon(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
        value = i.raws.semicolon
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawValue(node, prop) {
    let value = node[prop]
    let raw = node.raws[prop]
    if (raw && raw.value === value) {
      return raw.raw
    }

    return value
  }

  root(node) {
    this.body(node)
    if (node.raws.after) this.builder(node.raws.after)
  }

  rule(node) {
    this.block(node, this.rawValue(node, 'selector'))
    if (node.raws.ownSemicolon) {
      this.builder(node.raws.ownSemicolon, node, 'end')
    }
  }

  stringify(node, semicolon) {
    /* c8 ignore start */
    if (!this[node.type]) {
      throw new Error(
        'Unknown AST node type ' +
          node.type +
          '. ' +
          'Maybe you need to change PostCSS stringifier.'
      )
    }
    /* c8 ignore stop */
    this[node.type](node, semicolon)
  }
}

module.exports = Stringifier
Stringifier.default = Stringifier


/***/ }),

/***/ "./node_modules/postcss/lib/stringify.js":
/*!***********************************************!*\
  !*** ./node_modules/postcss/lib/stringify.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Stringifier = __webpack_require__(/*! ./stringifier */ "./node_modules/postcss/lib/stringifier.js")

function stringify(node, builder) {
  let str = new Stringifier(builder)
  str.stringify(node)
}

module.exports = stringify
stringify.default = stringify


/***/ }),

/***/ "./node_modules/postcss/lib/symbols.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/symbols.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports.isClean = Symbol('isClean')

module.exports.my = Symbol('my')


/***/ }),

/***/ "./node_modules/postcss/lib/tokenize.js":
/*!**********************************************!*\
  !*** ./node_modules/postcss/lib/tokenize.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


const SINGLE_QUOTE = "'".charCodeAt(0)
const DOUBLE_QUOTE = '"'.charCodeAt(0)
const BACKSLASH = '\\'.charCodeAt(0)
const SLASH = '/'.charCodeAt(0)
const NEWLINE = '\n'.charCodeAt(0)
const SPACE = ' '.charCodeAt(0)
const FEED = '\f'.charCodeAt(0)
const TAB = '\t'.charCodeAt(0)
const CR = '\r'.charCodeAt(0)
const OPEN_SQUARE = '['.charCodeAt(0)
const CLOSE_SQUARE = ']'.charCodeAt(0)
const OPEN_PARENTHESES = '('.charCodeAt(0)
const CLOSE_PARENTHESES = ')'.charCodeAt(0)
const OPEN_CURLY = '{'.charCodeAt(0)
const CLOSE_CURLY = '}'.charCodeAt(0)
const SEMICOLON = ';'.charCodeAt(0)
const ASTERISK = '*'.charCodeAt(0)
const COLON = ':'.charCodeAt(0)
const AT = '@'.charCodeAt(0)

const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/
const RE_HEX_ESCAPE = /[\da-f]/i

module.exports = function tokenizer(input, options = {}) {
  let css = input.css.valueOf()
  let ignore = options.ignoreErrors

  let code, next, quote, content, escape
  let escaped, escapePos, prev, n, currentToken

  let length = css.length
  let pos = 0
  let buffer = []
  let returned = []

  function position() {
    return pos
  }

  function unclosed(what) {
    throw input.error('Unclosed ' + what, pos)
  }

  function endOfFile() {
    return returned.length === 0 && pos >= length
  }

  function nextToken(opts) {
    if (returned.length) return returned.pop()
    if (pos >= length) return

    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false

    code = css.charCodeAt(pos)

    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos
        do {
          next += 1
          code = css.charCodeAt(next)
        } while (
          code === SPACE ||
          code === NEWLINE ||
          code === TAB ||
          code === CR ||
          code === FEED
        )

        currentToken = ['space', css.slice(pos, next)]
        pos = next - 1
        break
      }

      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code)
        currentToken = [controlChar, controlChar, pos]
        break
      }

      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : ''
        n = css.charCodeAt(pos + 1)
        if (
          prev === 'url' &&
          n !== SINGLE_QUOTE &&
          n !== DOUBLE_QUOTE &&
          n !== SPACE &&
          n !== NEWLINE &&
          n !== TAB &&
          n !== FEED &&
          n !== CR
        ) {
          next = pos
          do {
            escaped = false
            next = css.indexOf(')', next + 1)
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos
                break
              } else {
                unclosed('bracket')
              }
            }
            escapePos = next
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1
              escaped = !escaped
            }
          } while (escaped)

          currentToken = ['brackets', css.slice(pos, next + 1), pos, next]

          pos = next
        } else {
          next = css.indexOf(')', pos + 1)
          content = css.slice(pos, next + 1)

          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ['(', '(', pos]
          } else {
            currentToken = ['brackets', content, pos, next]
            pos = next
          }
        }

        break
      }

      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"'
        next = pos
        do {
          escaped = false
          next = css.indexOf(quote, next + 1)
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1
              break
            } else {
              unclosed('string')
            }
          }
          escapePos = next
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1
            escaped = !escaped
          }
        } while (escaped)

        currentToken = ['string', css.slice(pos, next + 1), pos, next]
        pos = next
        break
      }

      case AT: {
        RE_AT_END.lastIndex = pos + 1
        RE_AT_END.test(css)
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1
        } else {
          next = RE_AT_END.lastIndex - 2
        }

        currentToken = ['at-word', css.slice(pos, next + 1), pos, next]

        pos = next
        break
      }

      case BACKSLASH: {
        next = pos
        escape = true
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1
          escape = !escape
        }
        code = css.charCodeAt(next + 1)
        if (
          escape &&
          code !== SLASH &&
          code !== SPACE &&
          code !== NEWLINE &&
          code !== TAB &&
          code !== CR &&
          code !== FEED
        ) {
          next += 1
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1
            }
          }
        }

        currentToken = ['word', css.slice(pos, next + 1), pos, next]

        pos = next
        break
      }

      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf('*/', pos + 2) + 1
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length
            } else {
              unclosed('comment')
            }
          }

          currentToken = ['comment', css.slice(pos, next + 1), pos, next]
          pos = next
        } else {
          RE_WORD_END.lastIndex = pos + 1
          RE_WORD_END.test(css)
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1
          } else {
            next = RE_WORD_END.lastIndex - 2
          }

          currentToken = ['word', css.slice(pos, next + 1), pos, next]
          buffer.push(currentToken)
          pos = next
        }

        break
      }
    }

    pos++
    return currentToken
  }

  function back(token) {
    returned.push(token)
  }

  return {
    back,
    endOfFile,
    nextToken,
    position
  }
}


/***/ }),

/***/ "./node_modules/postcss/lib/warn-once.js":
/*!***********************************************!*\
  !*** ./node_modules/postcss/lib/warn-once.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
/* eslint-disable no-console */


let printed = {}

module.exports = function warnOnce(message) {
  if (printed[message]) return
  printed[message] = true

  if (typeof console !== 'undefined' && console.warn) {
    console.warn(message)
  }
}


/***/ }),

/***/ "./node_modules/postcss/lib/warning.js":
/*!*********************************************!*\
  !*** ./node_modules/postcss/lib/warning.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


class Warning {
  constructor(text, opts = {}) {
    this.type = 'warning'
    this.text = text

    if (opts.node && opts.node.source) {
      let range = opts.node.rangeBy(opts)
      this.line = range.start.line
      this.column = range.start.column
      this.endLine = range.end.line
      this.endColumn = range.end.column
    }

    for (let opt in opts) this[opt] = opts[opt]
  }

  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message
    }

    if (this.plugin) {
      return this.plugin + ': ' + this.text
    }

    return this.text
  }
}

module.exports = Warning
Warning.default = Warning


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMController.js":
/*!******************************!*\
  !*** ./src/DOMController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDOMController: () => (/* binding */ createDOMController)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createDOMController(){
    //state 0 is inbox, 1 is today, 2 is upcoming
    let state = 0
    function updateState(newState){
        state = newState;
    }

    function removeAll(){
        const listContainer = document.querySelector("#listContainer"); 
        while (listContainer.firstChild){
            listContainer.removeChild(listContainer.lastChild);
        }
    }

    function removeProjects(){
        const projectContainer = document.querySelector('#projectContainer');
        while (projectContainer.firstChild){
            projectContainer.removeChild(projectContainer.lastChild);
        }
    }

    function createCheck(parentNode, task){ 
        const checkBoxContainer = document.createElement('div');
        checkBoxContainer.id = 'checkBoxContainer';
        checkBoxContainer.classList.add('pr-3', 'flex', 'flex-col', 'justify-start');
        const checkBox = document.createElement('input'); 
        checkBox.classList.add('checked:bg-slate-300','rounded-full', 'appearance-none', 'w-6', 'h-6', 'border-2', 'border-black');
        checkBox.type = 'checkbox'; 
        checkBox.id = 'taskFinish'; 
        checkBox.name = 'task'; 
        checkBox.addEventListener('change', ()=>{
            if (checkBox.checked){
                parentNode.classList.add('line-through', 'decoration-2');
                task.finished = true;
            }
            else{
                parentNode.classList.remove('line-through', 'decoration-2');
                task.finished = false; 
            }
        })
        checkBoxContainer.appendChild(checkBox);
        return checkBoxContainer; 
    } 

    
    function createHeader(taskName){
        const header = document.createElement('div'); 
        header.innerText = taskName; 
        header.classList.add('text-lg', 'font-semibold', 'leading-none');
        return header; 
    }

    function createDescription(taskDescription){
        const description = document.createElement('div');
        description.innerHTML = taskDescription;
        description.classList.add('font-light');
        return description;

    }

    function createDate(dueDate){
        const taskDueDate = document.createElement('div');
        taskDueDate.innerHTML = dueDate; 
        taskDueDate.classList.add('text-xs');
        const inputDate = new Date(dueDate);
        const today = new Date();
        inputDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        if (inputDate < today){
            taskDueDate.classList.add('text-rose-800')
        }
        else{
            taskDueDate.classList.add('text-green-800');
        }
        return taskDueDate;
    }

    function displayTask(task){
        const taskContainer = document.createElement('div'); 
        taskContainer.classList.add('flex', 'py-3');
        taskContainer.id = 'taskContainer';

        //add checkbox 
        const checkBox = createCheck(taskContainer, task);
        taskContainer.appendChild(checkBox);
        //add task name and description
        const contentContainer = document.createElement('div');    
        const taskHeader = createHeader(task.name);
        const taskDescription = createDescription(task.description);
        contentContainer.appendChild(taskHeader);
        contentContainer.appendChild(taskDescription);
        //add due date if entered
        if (task.dueDate){
            const taskDueDate = createDate(task.dueDate);
            contentContainer.appendChild(taskDueDate); 
        }
        taskContainer.appendChild(contentContainer);

        document.querySelector("#listContainer").appendChild(taskContainer);
    }

    function displayProject(projectName){
        const projectContainer = document.querySelector('#projectContainer');

        const project = document.createElement('div'); 
        project.classList.add('flex', 'py-3', 'justify-between');
        project.id = projectName;

        const projectTitle = document.createElement('div');
        projectTitle.innerText = projectName;

        const removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.innerText = 'X';
        removeButton.type = 'button';

        project.appendChild(projectTitle);
        project.appendChild(removeButton);
        projectContainer.appendChild(project);
    }

    function displayProjectList(array){
        removeProjects();
        array.forEach((project) => {
            displayProject(project);
        })
    }

    function displayAll(array){
        let length = array.length;
        for (let i = 0; i < length; i++){
            displayTask(array[i]);
        }
    }
    
    function displayToday(array){
        let length = array.length; 
        const today = new Date();
        today.setHours(0,0,0,0);

        for (let i = 0; i < length; i++){
            if (array[i].dueDateObject < today){
                continue
            }
            else if (array[i].dueDateObject > today){
                continue
            }
            else{
                displayTask(array[i]);
            }
        }
    }

    function displayUpcoming(array){
        let length = array.length;
        const today = new Date();
        today.setHours(0,0,0,0);

        for (let i = 0; i < length; i++){
            if (array[i].dueDateObject >= today){
                displayTask(array[i]);
            }
        }
    }


    function refreshList(objectArray){ 
        console.log("state from refresh list call: " + state);
        removeAll(); 
        if (!objectArray){
            return;
        }

        const today = new Date()
        today.setHours(0,0,0,0);
        if (state === 0){
            displayAll(objectArray)
        }
        else if (state === 1){
            displayToday(objectArray);
        }
        else if (state === 2){
            displayUpcoming(objectArray);
        }
    }


    return {removeAll, displayTask, refreshList, updateState, displayProjectList}
}




/***/ }),

/***/ "./src/eventListener.js":
/*!******************************!*\
  !*** ./src/eventListener.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEventController: () => (/* binding */ createEventController)
/* harmony export */ });
/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.mjs");


function createEventController(listController, domController){
    const dialog = document.querySelector("#taskDialog"); 
    const projectDialog = document.querySelector('#projectDialog');
    function addModalListener(){
        //event listener for button to add tasks
        const inputButton = document.querySelector("#taskInputButton");
        inputButton.addEventListener('click', ()=>{
            //show modal 
            dialog.showModal(); 
            //close modal when clicking on cancel or clicking outside of form
            const cancel = document.querySelector("#taskCancel");
            cancel.addEventListener("click", ()=>{
                dialog.close();
            })
            const formContainer = document.querySelector("#formContainer");
            formContainer.addEventListener('click', (event)=>{event.stopPropagation()}) 
            dialog.addEventListener('click', ()=>{dialog.close();})
        });

        //dynmacailly resize description box 
        const textArea = document.querySelector("#taskDescription");
        textArea.addEventListener("keyup", ()=>{
            textArea.style.height = "10px";
            textArea.style.height = textArea.scrollHeight + 'px';
        });

        //event listener for button to add projects
        const projectSubmit = document.querySelector('#projectInputButton');
        projectSubmit.addEventListener('click', ()=>{
            projectDialog.showModal();
            const projectCancel = document.querySelector('#projectCancel')
            projectCancel.addEventListener('click', ()=>{
                projectDialog.close()
            });
            const projectForm = document.querySelector('#projectInput');
            projectForm.addEventListener('click', (event)=>{event.stopPropagation()});
            projectDialog.addEventListener('click', ()=>{projectDialog.close();});
        }) 

    }

    function addSubmitListener(){
        const modalForm = document.querySelector("#taskInput");
        modalForm.addEventListener('submit', (event)=>{
            event.preventDefault(); 
            let taskName = document.querySelector("#taskName").value;
            let taskDescription = document.querySelector("#taskDescription").value; 
            let dueDate = document.querySelector("#taskDate").value; 
            //create task and insert into taskList object
            let task = listController.createTask(taskName, taskDescription, dueDate); 
            listController.addTask(task);

            domController.refreshList(listController.todo);
            event.target.reset();

            dialog.close();
        })
    }

    function addProjectSubmitListener(){
        const form = document.querySelector('#projectInput');
        form.addEventListener('submit', (event)=>{
            event.preventDefault();
            let projectName = document.querySelector('#projectName').value;
            listController.addProject(projectName); 
            domController.displayProjectList(listController.projectList);
            event.target.reset();

            projectDialog.close();
        })
    }

    function addRemoveProjectListener(){
        const nodeList = document.querySelectorAll('.removeButton');
        nodeList.forEach((button)=>{
            button.addEventListener('click', ()=>{
                listController.removeProject(button.parentNode);
                domController.displayProjectList(listController.projectList);
                console.log(listController.projectList);
            })
        })
    }

    function addClearListener(){
        const clearButton = document.querySelector('#removeTaskButton');
        clearButton.addEventListener('click', ()=>{
            listController.clearCompleted();
            domController.refreshList(listController.todo);
        })
    }

    function addFilterViewListener(){
        const header = document.querySelector('#header');
        const inboxButton = document.querySelector('#inbox');
        inboxButton.addEventListener('click', ()=>{
            domController.updateState(0);
            header.innerText = 'inbox';
            domController.refreshList(listController.todo)
        })
        const todayButton = document.querySelector('#today');
        todayButton.addEventListener('click', ()=>{
            domController.updateState(1);
            header.innerText = 'today';
            domController.refreshList(listController.todo)
        })
        const upcomingButton = document.querySelector('#upcoming');
        upcomingButton.addEventListener('click', ()=>{
            domController.updateState(2);
            header.innerText = 'upcoming';
            domController.refreshList(listController.todo)
        })
    }

    return {addModalListener, addSubmitListener, 
        addClearListener, addFilterViewListener, 
        addProjectSubmitListener, addRemoveProjectListener};
}




/***/ }),

/***/ "./src/taskClasses.js":
/*!****************************!*\
  !*** ./src/taskClasses.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createListController: () => (/* binding */ createListController)
/* harmony export */ });
function createListController(){
    function createTask(name, description, dueDate, project){
        let finished = false;
        let dueDateObject;
        if (dueDate){
            dueDateObject = new Date(dueDate);
            dueDateObject.setHours(0, 0, 0, 0);
        }
        return {name, description, dueDate, finished, dueDateObject, project};
    }

    let todo = JSON.parse(localStorage.getItem('todo'));
    if (!todo){
        todo = [];
    }
    let todoLength = todo.length; 

    let projectList = JSON.parse(localStorage.getItem('projectList'));
    if (!projectList){
        projectList = [];
    }
    for (let i = 0; i < todoLength; i++){
        if (todo[i].dueDateObject){
            todo[i].dueDateObject = new Date(todo[i].dueDate);
        }
    }

    function sortByDate(){
        todo.sort((a,b) => a.dueDateObject - b.dueDateObject);
    }
    sortByDate(); //sort when instance is created 

    function updateLocalStorage(){
        let todoJSON = JSON.stringify(todo); 
        localStorage.setItem('todo', todoJSON);

        let projectJSON = JSON.stringify(projectList);
        localStorage.setItem('projectList', projectJSON);
    }


    function addTask(object){
        todo.push(object);
        sortByDate();
        updateLocalStorage();
    } 
    
    function addProject(project){
        projectList.push(project);
        updateLocalStorage();
    }

    function removeProject(projectName){
        let index = projectList.indexOf(projectName);
        if (index !== -1){
            projectList.splice(index, 1);
        }
    }
    
    function clearCompleted(){
        let length = todo.length; 
        for (let i = length -1; i >= 0; i--){
            if (todo[i].finished){
                todo.splice(i, 1);
            }
        }
        updateLocalStorage();
    }

    return {todo, projectList, addTask, addProject, clearCompleted, createTask, removeProject};
}




/***/ }),

/***/ "?5580":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?03fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6197":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b8cb":
/*!*******************************!*\
  !*** source-map-js (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c717":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/nanoid/non-secure/index.cjs":
/*!**************************************************!*\
  !*** ./node_modules/nanoid/non-secure/index.cjs ***!
  \**************************************************/
/***/ ((module) => {

let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = ''
    let i = size
    while (i--) {
      id += alphabet[(Math.random() * alphabet.length) | 0]
    }
    return id
  }
}
let nanoid = (size = 21) => {
  let id = ''
  let i = size
  while (i--) {
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}
module.exports = { nanoid, customAlphabet }


/***/ }),

/***/ "./node_modules/postcss/lib/postcss.mjs":
/*!**********************************************!*\
  !*** ./node_modules/postcss/lib/postcss.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AtRule: () => (/* binding */ AtRule),
/* harmony export */   Comment: () => (/* binding */ Comment),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   CssSyntaxError: () => (/* binding */ CssSyntaxError),
/* harmony export */   Declaration: () => (/* binding */ Declaration),
/* harmony export */   Document: () => (/* binding */ Document),
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   Node: () => (/* binding */ Node),
/* harmony export */   Processor: () => (/* binding */ Processor),
/* harmony export */   Result: () => (/* binding */ Result),
/* harmony export */   Root: () => (/* binding */ Root),
/* harmony export */   Rule: () => (/* binding */ Rule),
/* harmony export */   Warning: () => (/* binding */ Warning),
/* harmony export */   atRule: () => (/* binding */ atRule),
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   decl: () => (/* binding */ decl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   document: () => (/* binding */ document),
/* harmony export */   fromJSON: () => (/* binding */ fromJSON),
/* harmony export */   list: () => (/* binding */ list),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   plugin: () => (/* binding */ plugin),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   rule: () => (/* binding */ rule),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _postcss_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postcss.js */ "./node_modules/postcss/lib/postcss.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_postcss_js__WEBPACK_IMPORTED_MODULE_0__);

const stringify = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.stringify
const fromJSON = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.fromJSON
const plugin = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.plugin
const parse = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.parse
const list = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.list

const document = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.document
const comment = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.comment
const atRule = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.atRule
const rule = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.rule
const decl = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.decl
const root = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.root

const CssSyntaxError = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.CssSyntaxError
const Declaration = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Declaration
const Container = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Container
const Processor = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Processor
const Document = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Document
const Comment = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Comment
const Warning = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Warning
const AtRule = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.AtRule
const Result = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Result
const Input = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Input
const Rule = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Rule
const Root = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Root
const Node = _postcss_js__WEBPACK_IMPORTED_MODULE_0__.Node


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMController.js */ "./src/DOMController.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taskClasses_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskClasses.js */ "./src/taskClasses.js");
/* harmony import */ var _eventListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListener.js */ "./src/eventListener.js");






//create the listController and domController instances
let listController = (0,_taskClasses_js__WEBPACK_IMPORTED_MODULE_2__.createListController)();
let domController = (0,_DOMController_js__WEBPACK_IMPORTED_MODULE_0__.createDOMController)();
domController.refreshList(listController.todo);
domController.displayProjectList(listController.projectList);

//pass in the list controller and dom controller instances to the event controller
let eventController = (0,_eventListener_js__WEBPACK_IMPORTED_MODULE_3__.createEventController)(listController, domController);
eventController.addModalListener();
eventController.addSubmitListener();
eventController.addClearListener();
eventController.addFilterViewListener();
eventController.addProjectSubmitListener();
eventController.addRemoveProjectListener();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyx3Q0FBd0Msd0JBQXdCLHNCQUFzQix1QkFBdUI7QUFDanJMO0FBQ0EsaUVBQWUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsaUJBQWlCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaFdZOztBQUVaLGtCQUFrQixtQkFBTyxDQUFDLGdFQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWWTs7QUFFWixzQkFBc0I7O0FBRXRCLGlCQUFpQjs7Ozs7Ozs7Ozs7O0FDSkw7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLE9BQU87QUFDM0MsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTs7QUFFQSx1REFBdUQ7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pRQTtBQUNZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWlk7O0FBRVo7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQSxN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Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUQ7QUFDcEM7QUFDaUM7QUFDSTs7O0FBRzFEO0FBQ0EscUJBQXFCLHFFQUFvQjtBQUN6QyxvQkFBb0Isc0VBQW1CO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isd0VBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9waWNvY29sb3JzL3BpY29jb2xvcnMuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9wb3N0Y3NzL2xpYi9hdC1ydWxlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL2Nzcy1zeW50YXgtZXJyb3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvZGVjbGFyYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvZnJvbUpTT04uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvbGF6eS1yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9wb3N0Y3NzL2xpYi9tYXAtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL25vLXdvcmstcmVzdWx0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvcGFyc2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL3Bvc3Rjc3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvcHJldmlvdXMtbWFwLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL3Byb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9wb3N0Y3NzL2xpYi9yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvcm9vdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9wb3N0Y3NzL2xpYi9ydWxlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL3N0cmluZ2lmaWVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9wb3N0Y3NzL2xpYi9zeW1ib2xzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL3Rva2VuaXplLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGliL3dhcm4tb25jZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9wb3N0Y3NzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ldmVudExpc3RlbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tDbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG9saXN0L2lnbm9yZWR8L2hvbWUveW91bmcvb2Rpbi9qYXZhc2NyaXB0L3RvZG9saXN0L25vZGVfbW9kdWxlcy9wb3N0Y3NzL2xpYnwuL3Rlcm1pbmFsLWhpZ2hsaWdodCIsIndlYnBhY2s6Ly90b2RvbGlzdC9pZ25vcmVkfC9ob21lL3lvdW5nL29kaW4vamF2YXNjcmlwdC90b2RvbGlzdC9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWJ8ZnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvaWdub3JlZHwvaG9tZS95b3VuZy9vZGluL2phdmFzY3JpcHQvdG9kb2xpc3Qvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGlifHBhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvaWdub3JlZHwvaG9tZS95b3VuZy9vZGluL2phdmFzY3JpcHQvdG9kb2xpc3Qvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGlifHNvdXJjZS1tYXAtanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvaWdub3JlZHwvaG9tZS95b3VuZy9vZGluL2phdmFzY3JpcHQvdG9kb2xpc3Qvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MvbGlifHVybCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvbm9uLXNlY3VyZS9pbmRleC5janMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvcG9zdGNzcy9saWIvcG9zdGNzcy5tanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiEgdGFpbHdpbmRjc3MgdjMuNC40IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxuKi8vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J2J1dHRvbiddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdyZXNldCddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdzdWJtaXQnXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cbmRpYWxvZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cbiovXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLypcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxuKi9cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbi8qXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxuKi9cblxuYnV0dG9uLFxuW3JvbGU9XCJidXR0b25cIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxuKi9cbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLypcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgXFxgZGlzcGxheTogYmxvY2tcXGAgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4yLiBBZGQgXFxgdmVydGljYWwtYWxpZ246IG1pZGRsZVxcYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4qL1xuXG5pbWcsXG5zdmcsXG52aWRlbyxcbmNhbnZhcyxcbmF1ZGlvLFxuaWZyYW1lLFxuZW1iZWQsXG5vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXG59XG5cbi8qXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXG4qL1xuXG5pbWcsXG52aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBNYWtlIGVsZW1lbnRzIHdpdGggdGhlIEhUTUwgaGlkZGVuIGF0dHJpYnV0ZSBzdGF5IGhpZGRlbiBieSBkZWZhdWx0ICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgLS10dy1jb250YWluLXNpemU6ICA7XG4gIC0tdHctY29udGFpbi1sYXlvdXQ6ICA7XG4gIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgLS10dy1jb250YWluLXN0eWxlOiAgO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiAgO1xuICAtLXR3LXBhbi15OiAgO1xuICAtLXR3LXBpbmNoLXpvb206ICA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xuICAtLXR3LW9yZGluYWw6ICA7XG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAtLXR3LXJpbmctaW5zZXQ6ICA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgLS10dy1jb250YWluLXNpemU6ICA7XG4gIC0tdHctY29udGFpbi1sYXlvdXQ6ICA7XG4gIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgLS10dy1jb250YWluLXN0eWxlOiAgO1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcbiAgfVxufSBcbi52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0gXG4uY29sbGFwc2Uge1xuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcbn0gXG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59IFxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSBcbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0gXG4ubS0wIHtcbiAgbWFyZ2luOiAwcHg7XG59IFxuLm0tMTAge1xuICBtYXJnaW46IDIuNXJlbTtcbn0gXG4ubS0yIHtcbiAgbWFyZ2luOiAwLjVyZW07XG59IFxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59IFxuLmlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn0gXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59IFxuLnRhYmxlIHtcbiAgZGlzcGxheTogdGFibGU7XG59IFxuLmNvbnRlbnRzIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59IFxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59IFxuLmgtMTAge1xuICBoZWlnaHQ6IDIuNXJlbTtcbn0gXG4uaC0zIHtcbiAgaGVpZ2h0OiAwLjc1cmVtO1xufSBcbi5oLTUge1xuICBoZWlnaHQ6IDEuMjVyZW07XG59IFxuLmgtNiB7XG4gIGhlaWdodDogMS41cmVtO1xufSBcbi5oLWZ1bGwge1xuICBoZWlnaHQ6IDEwMCU7XG59IFxuLnctMyB7XG4gIHdpZHRoOiAwLjc1cmVtO1xufSBcbi53LTUge1xuICB3aWR0aDogMS4yNXJlbTtcbn0gXG4udy02IHtcbiAgd2lkdGg6IDEuNXJlbTtcbn0gXG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59IFxuLmJhc2lzLTgwIHtcbiAgZmxleC1iYXNpczogMjByZW07XG59IFxuLmJvcmRlci1jb2xsYXBzZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59IFxuLnRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xufSBcbi5yZXNpemUge1xuICByZXNpemU6IGJvdGg7XG59IFxuLmFwcGVhcmFuY2Utbm9uZSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG59IFxuLmZsZXgtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0gXG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0gXG4uanVzdGlmeS1zdGFydCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn0gXG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0gXG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSBcbi5qdXN0aWZ5LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSBcbi5qdXN0aWZ5LWV2ZW5seSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufSBcbi5zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufSBcbi5zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn0gXG4ucm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59IFxuLnJvdW5kZWQtM3hsIHtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xufSBcbi5yb3VuZGVkLWZ1bGwge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG59IFxuLnJvdW5kZWQteGwge1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xufSBcbi5ib3JkZXIge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn0gXG4uYm9yZGVyLTIge1xuICBib3JkZXItd2lkdGg6IDJweDtcbn0gXG4uYm9yZGVyLWJsYWNrIHtcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn0gXG4uYmctYmx1ZS0xMDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAyMzQsIDI1NCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCAyMzQsIDI1NCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufSBcbi5iZy1ibHVlLTUwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjQ2LCAyNTUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjQ2LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn0gXG4uYmctcmVkLTUwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NCwgMjQyLCAyNDIsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NCwgMjQyLCAyNDIsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn0gXG4ucC0wIHtcbiAgcGFkZGluZzogMHB4O1xufSBcbi5wLTEwIHtcbiAgcGFkZGluZzogMi41cmVtO1xufSBcbi5wLTIge1xuICBwYWRkaW5nOiAwLjVyZW07XG59IFxuLnAtMyB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59IFxuLnAtNSB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59IFxuLnB4LTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbn0gXG4ucHgtMjAge1xuICBwYWRkaW5nLWxlZnQ6IDVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDVyZW07XG59IFxuLnB4LTUge1xuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG59IFxuLnB5LTEwIHtcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbn0gXG4ucHktMjQge1xuICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XG59IFxuLnB5LTMge1xuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG59IFxuLnBiLTEwIHtcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbn0gXG4ucGItMTQge1xuICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xufSBcbi5wYi0yNCB7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xufSBcbi5wYi0zMiB7XG4gIHBhZGRpbmctYm90dG9tOiA4cmVtO1xufSBcbi5wYi02IHtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn0gXG4ucGItOCB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufSBcbi5wci0zIHtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbn0gXG4ucHQtMTAge1xuICBwYWRkaW5nLXRvcDogMi41cmVtO1xufSBcbi5wdC0zIHtcbiAgcGFkZGluZy10b3A6IDAuNzVyZW07XG59IFxuLnB0LTQge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn0gXG4udGV4dC0zeGwge1xuICBmb250LXNpemU6IDEuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbn0gXG4udGV4dC02eGwge1xuICBmb250LXNpemU6IDMuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufSBcbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59IFxuLnRleHQtc20ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbn0gXG4udGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG59IFxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59IFxuLmZvbnQtZXh0cmFsaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59IFxuLmZvbnQtbGlnaHQge1xuICBmb250LXdlaWdodDogMzAwO1xufSBcbi5mb250LXNlbWlib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0gXG4uY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSBcbi5sZWFkaW5nLW5vbmUge1xuICBsaW5lLWhlaWdodDogMTtcbn0gXG4udGV4dC1ibHVlLTk1MCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyMywgMzcsIDg0LCAxKTtcbiAgY29sb3I6IHJnYmEoMjMsIDM3LCA4NCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59IFxuLnRleHQtZ3JlZW4tMjAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE4NywgMjQ3LCAyMDgsIDEpO1xuICBjb2xvcjogcmdiYSgxODcsIDI0NywgMjA4LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn0gXG4udGV4dC1ncmVlbi04MDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjIsIDEwMSwgNTIsIDEpO1xuICBjb2xvcjogcmdiYSgyMiwgMTAxLCA1MiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59IFxuLnRleHQtcm9zZS0yMDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjU0LCAyMDUsIDIxMSwgMSk7XG4gIGNvbG9yOiByZ2JhKDI1NCwgMjA1LCAyMTEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufSBcbi50ZXh0LXJvc2UtODAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDE1OSwgMTgsIDU3LCAxKTtcbiAgY29sb3I6IHJnYmEoMTU5LCAxOCwgNTcsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufSBcbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufSBcbi5saW5lLXRocm91Z2gge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xufSBcbi5kZWNvcmF0aW9uLTEge1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAxcHg7XG59IFxuLmRlY29yYXRpb24tMiB7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcbn0gXG4uZGVjb3JhdGlvbi00IHtcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4O1xufSBcbi5kZWNvcmF0aW9uLTgge1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiA4cHg7XG59IFxuLmRlY29yYXRpb24tZnJvbS1mb250IHtcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogZnJvbS1mb250O1xufSBcbi5vdXRsaW5lIHtcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XG59IFxuLmZpbHRlciB7XG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcbn0gXG4uY2hlY2tlZFxcXFw6Ymctc2xhdGUtMzAwOmNoZWNrZWQge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAzLCAyMTMsIDIyNSwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAzLCAyMTMsIDIyNSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufSBcbkBrZXlmcmFtZXMgcHVsc2Uge1xuXG4gIDUwJSB7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn0gXG4uaG92ZXJcXFxcOmFuaW1hdGUtcHVsc2U6aG92ZXIge1xuICBhbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XG59IFxuLmhvdmVyXFxcXDpiZy1ncmF5LTIwMDpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4v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QjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsd0JBQW1CO0tBQW5CLHFCQUFtQjtVQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHNCQUFtQjtFQUFuQiw4QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkIsd0NBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CLHdDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQix3Q0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsa0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEscUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsbUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsaUJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxtQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxrQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsMEJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDZCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQiwyQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSxvQkFBbUI7RUFBbkIsNkJBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUEsb0JBQW1CO0VBQW5CLDJCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUZuQjtFQUFBLGtCQUlBO0VBSkEsd0NBSUE7RUFKQTtBQUlBO0FBSkE7O0VBQUE7SUFBQTtFQUlBO0FBQUE7QUFKQTtFQUFBO0FBSUE7QUFKQTtFQUFBLGtCQUlBO0VBSkEsd0NBSUE7RUFKQTtBQUlBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzOyBcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIHg9U3RyaW5nO1xudmFyIGNyZWF0ZT1mdW5jdGlvbigpIHtyZXR1cm4ge2lzQ29sb3JTdXBwb3J0ZWQ6ZmFsc2UscmVzZXQ6eCxib2xkOngsZGltOngsaXRhbGljOngsdW5kZXJsaW5lOngsaW52ZXJzZTp4LGhpZGRlbjp4LHN0cmlrZXRocm91Z2g6eCxibGFjazp4LHJlZDp4LGdyZWVuOngseWVsbG93OngsYmx1ZTp4LG1hZ2VudGE6eCxjeWFuOngsd2hpdGU6eCxncmF5OngsYmdCbGFjazp4LGJnUmVkOngsYmdHcmVlbjp4LGJnWWVsbG93OngsYmdCbHVlOngsYmdNYWdlbnRhOngsYmdDeWFuOngsYmdXaGl0ZTp4fX07XG5tb2R1bGUuZXhwb3J0cz1jcmVhdGUoKTtcbm1vZHVsZS5leHBvcnRzLmNyZWF0ZUNvbG9ycyA9IGNyZWF0ZTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5sZXQgQ29udGFpbmVyID0gcmVxdWlyZSgnLi9jb250YWluZXInKVxuXG5jbGFzcyBBdFJ1bGUgZXh0ZW5kcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIHN1cGVyKGRlZmF1bHRzKVxuICAgIHRoaXMudHlwZSA9ICdhdHJ1bGUnXG4gIH1cblxuICBhcHBlbmQoLi4uY2hpbGRyZW4pIHtcbiAgICBpZiAoIXRoaXMucHJveHlPZi5ub2RlcykgdGhpcy5ub2RlcyA9IFtdXG4gICAgcmV0dXJuIHN1cGVyLmFwcGVuZCguLi5jaGlsZHJlbilcbiAgfVxuXG4gIHByZXBlbmQoLi4uY2hpbGRyZW4pIHtcbiAgICBpZiAoIXRoaXMucHJveHlPZi5ub2RlcykgdGhpcy5ub2RlcyA9IFtdXG4gICAgcmV0dXJuIHN1cGVyLnByZXBlbmQoLi4uY2hpbGRyZW4pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBdFJ1bGVcbkF0UnVsZS5kZWZhdWx0ID0gQXRSdWxlXG5cbkNvbnRhaW5lci5yZWdpc3RlckF0UnVsZShBdFJ1bGUpXG4iLCIndXNlIHN0cmljdCdcblxubGV0IE5vZGUgPSByZXF1aXJlKCcuL25vZGUnKVxuXG5jbGFzcyBDb21tZW50IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoZGVmYXVsdHMpXG4gICAgdGhpcy50eXBlID0gJ2NvbW1lbnQnXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50XG5Db21tZW50LmRlZmF1bHQgPSBDb21tZW50XG4iLCIndXNlIHN0cmljdCdcblxubGV0IHsgaXNDbGVhbiwgbXkgfSA9IHJlcXVpcmUoJy4vc3ltYm9scycpXG5sZXQgRGVjbGFyYXRpb24gPSByZXF1aXJlKCcuL2RlY2xhcmF0aW9uJylcbmxldCBDb21tZW50ID0gcmVxdWlyZSgnLi9jb21tZW50JylcbmxldCBOb2RlID0gcmVxdWlyZSgnLi9ub2RlJylcblxubGV0IHBhcnNlLCBSdWxlLCBBdFJ1bGUsIFJvb3RcblxuZnVuY3Rpb24gY2xlYW5Tb3VyY2Uobm9kZXMpIHtcbiAgcmV0dXJuIG5vZGVzLm1hcChpID0+IHtcbiAgICBpZiAoaS5ub2RlcykgaS5ub2RlcyA9IGNsZWFuU291cmNlKGkubm9kZXMpXG4gICAgZGVsZXRlIGkuc291cmNlXG4gICAgcmV0dXJuIGlcbiAgfSlcbn1cblxuZnVuY3Rpb24gbWFya0RpcnR5VXAobm9kZSkge1xuICBub2RlW2lzQ2xlYW5dID0gZmFsc2VcbiAgaWYgKG5vZGUucHJveHlPZi5ub2Rlcykge1xuICAgIGZvciAobGV0IGkgb2Ygbm9kZS5wcm94eU9mLm5vZGVzKSB7XG4gICAgICBtYXJrRGlydHlVcChpKVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBOb2RlIHtcbiAgYXBwZW5kKC4uLmNoaWxkcmVuKSB7XG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGxldCBub2RlcyA9IHRoaXMubm9ybWFsaXplKGNoaWxkLCB0aGlzLmxhc3QpXG4gICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB0aGlzLnByb3h5T2Yubm9kZXMucHVzaChub2RlKVxuICAgIH1cblxuICAgIHRoaXMubWFya0RpcnR5KClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjbGVhblJhd3Moa2VlcEJldHdlZW4pIHtcbiAgICBzdXBlci5jbGVhblJhd3Moa2VlcEJldHdlZW4pXG4gICAgaWYgKHRoaXMubm9kZXMpIHtcbiAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykgbm9kZS5jbGVhblJhd3Moa2VlcEJldHdlZW4pXG4gICAgfVxuICB9XG5cbiAgZWFjaChjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5wcm94eU9mLm5vZGVzKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5nZXRJdGVyYXRvcigpXG5cbiAgICBsZXQgaW5kZXgsIHJlc3VsdFxuICAgIHdoaWxlICh0aGlzLmluZGV4ZXNbaXRlcmF0b3JdIDwgdGhpcy5wcm94eU9mLm5vZGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXggPSB0aGlzLmluZGV4ZXNbaXRlcmF0b3JdXG4gICAgICByZXN1bHQgPSBjYWxsYmFjayh0aGlzLnByb3h5T2Yubm9kZXNbaW5kZXhdLCBpbmRleClcbiAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSBicmVha1xuXG4gICAgICB0aGlzLmluZGV4ZXNbaXRlcmF0b3JdICs9IDFcbiAgICB9XG5cbiAgICBkZWxldGUgdGhpcy5pbmRleGVzW2l0ZXJhdG9yXVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGV2ZXJ5KGNvbmRpdGlvbikge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLmV2ZXJ5KGNvbmRpdGlvbilcbiAgfVxuXG4gIGdldEl0ZXJhdG9yKCkge1xuICAgIGlmICghdGhpcy5sYXN0RWFjaCkgdGhpcy5sYXN0RWFjaCA9IDBcbiAgICBpZiAoIXRoaXMuaW5kZXhlcykgdGhpcy5pbmRleGVzID0ge31cblxuICAgIHRoaXMubGFzdEVhY2ggKz0gMVxuICAgIGxldCBpdGVyYXRvciA9IHRoaXMubGFzdEVhY2hcbiAgICB0aGlzLmluZGV4ZXNbaXRlcmF0b3JdID0gMFxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBnZXRQcm94eVByb2Nlc3NvcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KG5vZGUsIHByb3ApIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwcm94eU9mJykge1xuICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gZWxzZSBpZiAoIW5vZGVbcHJvcF0pIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVtwcm9wXVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHByb3AgPT09ICdlYWNoJyB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycgJiYgcHJvcC5zdGFydHNXaXRoKCd3YWxrJykpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVbcHJvcF0oXG4gICAgICAgICAgICAgIC4uLmFyZ3MubWFwKGkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChjaGlsZCwgaW5kZXgpID0+IGkoY2hpbGQudG9Qcm94eSgpLCBpbmRleClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdldmVyeScgfHwgcHJvcCA9PT0gJ3NvbWUnKSB7XG4gICAgICAgICAgcmV0dXJuIGNiID0+IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlW3Byb3BdKChjaGlsZCwgLi4ub3RoZXIpID0+XG4gICAgICAgICAgICAgIGNiKGNoaWxkLnRvUHJveHkoKSwgLi4ub3RoZXIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdyb290Jykge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBub2RlLnJvb3QoKS50b1Byb3h5KClcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnbm9kZXMnKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUubm9kZXMubWFwKGkgPT4gaS50b1Byb3h5KCkpXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2ZpcnN0JyB8fCBwcm9wID09PSAnbGFzdCcpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVtwcm9wXS50b1Byb3h5KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVtwcm9wXVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBzZXQobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG5vZGVbcHJvcF0gPT09IHZhbHVlKSByZXR1cm4gdHJ1ZVxuICAgICAgICBub2RlW3Byb3BdID0gdmFsdWVcbiAgICAgICAgaWYgKHByb3AgPT09ICduYW1lJyB8fCBwcm9wID09PSAncGFyYW1zJyB8fCBwcm9wID09PSAnc2VsZWN0b3InKSB7XG4gICAgICAgICAgbm9kZS5tYXJrRGlydHkoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5kZXgoY2hpbGQpIHtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykgcmV0dXJuIGNoaWxkXG4gICAgaWYgKGNoaWxkLnByb3h5T2YpIGNoaWxkID0gY2hpbGQucHJveHlPZlxuICAgIHJldHVybiB0aGlzLnByb3h5T2Yubm9kZXMuaW5kZXhPZihjaGlsZClcbiAgfVxuXG4gIGluc2VydEFmdGVyKGV4aXN0LCBhZGQpIHtcbiAgICBsZXQgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpXG4gICAgbGV0IG5vZGVzID0gdGhpcy5ub3JtYWxpemUoYWRkLCB0aGlzLnByb3h5T2Yubm9kZXNbZXhpc3RJbmRleF0pLnJldmVyc2UoKVxuICAgIGV4aXN0SW5kZXggPSB0aGlzLmluZGV4KGV4aXN0KVxuICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHRoaXMucHJveHlPZi5ub2Rlcy5zcGxpY2UoZXhpc3RJbmRleCArIDEsIDAsIG5vZGUpXG5cbiAgICBsZXQgaW5kZXhcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5pbmRleGVzW2lkXVxuICAgICAgaWYgKGV4aXN0SW5kZXggPCBpbmRleCkge1xuICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gaW5kZXggKyBub2Rlcy5sZW5ndGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1hcmtEaXJ0eSgpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKGV4aXN0LCBhZGQpIHtcbiAgICBsZXQgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpXG4gICAgbGV0IHR5cGUgPSBleGlzdEluZGV4ID09PSAwID8gJ3ByZXBlbmQnIDogZmFsc2VcbiAgICBsZXQgbm9kZXMgPSB0aGlzLm5vcm1hbGl6ZShhZGQsIHRoaXMucHJveHlPZi5ub2Rlc1tleGlzdEluZGV4XSwgdHlwZSkucmV2ZXJzZSgpXG4gICAgZXhpc3RJbmRleCA9IHRoaXMuaW5kZXgoZXhpc3QpXG4gICAgZm9yIChsZXQgbm9kZSBvZiBub2RlcykgdGhpcy5wcm94eU9mLm5vZGVzLnNwbGljZShleGlzdEluZGV4LCAwLCBub2RlKVxuXG4gICAgbGV0IGluZGV4XG4gICAgZm9yIChsZXQgaWQgaW4gdGhpcy5pbmRleGVzKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXhlc1tpZF1cbiAgICAgIGlmIChleGlzdEluZGV4IDw9IGluZGV4KSB7XG4gICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gPSBpbmRleCArIG5vZGVzLmxlbmd0aFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubWFya0RpcnR5KClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBub3JtYWxpemUobm9kZXMsIHNhbXBsZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlcyA9IGNsZWFuU291cmNlKHBhcnNlKG5vZGVzKS5ub2RlcylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBub2RlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5vZGVzID0gW11cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobm9kZXMpKSB7XG4gICAgICBub2RlcyA9IG5vZGVzLnNsaWNlKDApXG4gICAgICBmb3IgKGxldCBpIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChpLnBhcmVudCkgaS5wYXJlbnQucmVtb3ZlQ2hpbGQoaSwgJ2lnbm9yZScpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2Rlcy50eXBlID09PSAncm9vdCcgJiYgdGhpcy50eXBlICE9PSAnZG9jdW1lbnQnKSB7XG4gICAgICBub2RlcyA9IG5vZGVzLm5vZGVzLnNsaWNlKDApXG4gICAgICBmb3IgKGxldCBpIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChpLnBhcmVudCkgaS5wYXJlbnQucmVtb3ZlQ2hpbGQoaSwgJ2lnbm9yZScpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2Rlcy50eXBlKSB7XG4gICAgICBub2RlcyA9IFtub2Rlc11cbiAgICB9IGVsc2UgaWYgKG5vZGVzLnByb3ApIHtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZXMudmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgZmllbGQgaXMgbWlzc2VkIGluIG5vZGUgY3JlYXRpb24nKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygbm9kZXMudmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5vZGVzLnZhbHVlID0gU3RyaW5nKG5vZGVzLnZhbHVlKVxuICAgICAgfVxuICAgICAgbm9kZXMgPSBbbmV3IERlY2xhcmF0aW9uKG5vZGVzKV1cbiAgICB9IGVsc2UgaWYgKG5vZGVzLnNlbGVjdG9yKSB7XG4gICAgICBub2RlcyA9IFtuZXcgUnVsZShub2RlcyldXG4gICAgfSBlbHNlIGlmIChub2Rlcy5uYW1lKSB7XG4gICAgICBub2RlcyA9IFtuZXcgQXRSdWxlKG5vZGVzKV1cbiAgICB9IGVsc2UgaWYgKG5vZGVzLnRleHQpIHtcbiAgICAgIG5vZGVzID0gW25ldyBDb21tZW50KG5vZGVzKV1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG5vZGUgdHlwZSBpbiBub2RlIGNyZWF0aW9uJylcbiAgICB9XG5cbiAgICBsZXQgcHJvY2Vzc2VkID0gbm9kZXMubWFwKGkgPT4ge1xuICAgICAgLyogYzggaWdub3JlIG5leHQgKi9cbiAgICAgIGlmICghaVtteV0pIENvbnRhaW5lci5yZWJ1aWxkKGkpXG4gICAgICBpID0gaS5wcm94eU9mXG4gICAgICBpZiAoaS5wYXJlbnQpIGkucGFyZW50LnJlbW92ZUNoaWxkKGkpXG4gICAgICBpZiAoaVtpc0NsZWFuXSkgbWFya0RpcnR5VXAoaSlcbiAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHNhbXBsZSAmJiB0eXBlb2Ygc2FtcGxlLnJhd3MuYmVmb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGkucmF3cy5iZWZvcmUgPSBzYW1wbGUucmF3cy5iZWZvcmUucmVwbGFjZSgvXFxTL2csICcnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpLnBhcmVudCA9IHRoaXMucHJveHlPZlxuICAgICAgcmV0dXJuIGlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHByb2Nlc3NlZFxuICB9XG5cbiAgcHJlcGVuZCguLi5jaGlsZHJlbikge1xuICAgIGNoaWxkcmVuID0gY2hpbGRyZW4ucmV2ZXJzZSgpXG4gICAgZm9yIChsZXQgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGxldCBub2RlcyA9IHRoaXMubm9ybWFsaXplKGNoaWxkLCB0aGlzLmZpcnN0LCAncHJlcGVuZCcpLnJldmVyc2UoKVxuICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2RlcykgdGhpcy5wcm94eU9mLm5vZGVzLnVuc2hpZnQobm9kZSlcbiAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuaW5kZXhlcykge1xuICAgICAgICB0aGlzLmluZGV4ZXNbaWRdID0gdGhpcy5pbmRleGVzW2lkXSArIG5vZGVzLmxlbmd0aFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubWFya0RpcnR5KClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdXNoKGNoaWxkKSB7XG4gICAgY2hpbGQucGFyZW50ID0gdGhpc1xuICAgIHRoaXMucHJveHlPZi5ub2Rlcy5wdXNoKGNoaWxkKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZW1vdmVBbGwoKSB7XG4gICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLnByb3h5T2Yubm9kZXMpIG5vZGUucGFyZW50ID0gdW5kZWZpbmVkXG4gICAgdGhpcy5wcm94eU9mLm5vZGVzID0gW11cblxuICAgIHRoaXMubWFya0RpcnR5KClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgIGNoaWxkID0gdGhpcy5pbmRleChjaGlsZClcbiAgICB0aGlzLnByb3h5T2Yubm9kZXNbY2hpbGRdLnBhcmVudCA9IHVuZGVmaW5lZFxuICAgIHRoaXMucHJveHlPZi5ub2Rlcy5zcGxpY2UoY2hpbGQsIDEpXG5cbiAgICBsZXQgaW5kZXhcbiAgICBmb3IgKGxldCBpZCBpbiB0aGlzLmluZGV4ZXMpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5pbmRleGVzW2lkXVxuICAgICAgaWYgKGluZGV4ID49IGNoaWxkKSB7XG4gICAgICAgIHRoaXMuaW5kZXhlc1tpZF0gPSBpbmRleCAtIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1hcmtEaXJ0eSgpXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVwbGFjZVZhbHVlcyhwYXR0ZXJuLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0c1xuICAgICAgb3B0cyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy53YWxrRGVjbHMoZGVjbCA9PiB7XG4gICAgICBpZiAob3B0cy5wcm9wcyAmJiAhb3B0cy5wcm9wcy5pbmNsdWRlcyhkZWNsLnByb3ApKSByZXR1cm5cbiAgICAgIGlmIChvcHRzLmZhc3QgJiYgIWRlY2wudmFsdWUuaW5jbHVkZXMob3B0cy5mYXN0KSkgcmV0dXJuXG5cbiAgICAgIGRlY2wudmFsdWUgPSBkZWNsLnZhbHVlLnJlcGxhY2UocGF0dGVybiwgY2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMubWFya0RpcnR5KClcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzb21lKGNvbmRpdGlvbikge1xuICAgIHJldHVybiB0aGlzLm5vZGVzLnNvbWUoY29uZGl0aW9uKVxuICB9XG5cbiAgd2FsayhjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmVhY2goKGNoaWxkLCBpKSA9PiB7XG4gICAgICBsZXQgcmVzdWx0XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhjaGlsZCwgaSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgY2hpbGQuYWRkVG9FcnJvcihlKVxuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UgJiYgY2hpbGQud2Fsaykge1xuICAgICAgICByZXN1bHQgPSBjaGlsZC53YWxrKGNhbGxiYWNrKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSlcbiAgfVxuXG4gIHdhbGtBdFJ1bGVzKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBuYW1lXG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2F0cnVsZScpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChuYW1lIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2F0cnVsZScgJiYgbmFtZS50ZXN0KGNoaWxkLm5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdhdHJ1bGUnICYmIGNoaWxkLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB3YWxrQ29tbWVudHMoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdjb21tZW50Jykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soY2hpbGQsIGkpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHdhbGtEZWNscyhwcm9wLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gcHJvcFxuICAgICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdkZWNsJykge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHByb3AgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiB0aGlzLndhbGsoKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSAnZGVjbCcgJiYgcHJvcC50ZXN0KGNoaWxkLnByb3ApKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdkZWNsJyAmJiBjaGlsZC5wcm9wID09PSBwcm9wKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgd2Fsa1J1bGVzKHNlbGVjdG9yLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gc2VsZWN0b3JcblxuICAgICAgcmV0dXJuIHRoaXMud2FsaygoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdydWxlJykge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhjaGlsZCwgaSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ3J1bGUnICYmIHNlbGVjdG9yLnRlc3QoY2hpbGQuc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy53YWxrKChjaGlsZCwgaSkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdydWxlJyAmJiBjaGlsZC5zZWxlY3RvciA9PT0gc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGNoaWxkLCBpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXQgZmlyc3QoKSB7XG4gICAgaWYgKCF0aGlzLnByb3h5T2Yubm9kZXMpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5wcm94eU9mLm5vZGVzWzBdXG4gIH1cblxuICBnZXQgbGFzdCgpIHtcbiAgICBpZiAoIXRoaXMucHJveHlPZi5ub2RlcykgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLnByb3h5T2Yubm9kZXNbdGhpcy5wcm94eU9mLm5vZGVzLmxlbmd0aCAtIDFdXG4gIH1cbn1cblxuQ29udGFpbmVyLnJlZ2lzdGVyUGFyc2UgPSBkZXBlbmRhbnQgPT4ge1xuICBwYXJzZSA9IGRlcGVuZGFudFxufVxuXG5Db250YWluZXIucmVnaXN0ZXJSdWxlID0gZGVwZW5kYW50ID0+IHtcbiAgUnVsZSA9IGRlcGVuZGFudFxufVxuXG5Db250YWluZXIucmVnaXN0ZXJBdFJ1bGUgPSBkZXBlbmRhbnQgPT4ge1xuICBBdFJ1bGUgPSBkZXBlbmRhbnRcbn1cblxuQ29udGFpbmVyLnJlZ2lzdGVyUm9vdCA9IGRlcGVuZGFudCA9PiB7XG4gIFJvb3QgPSBkZXBlbmRhbnRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250YWluZXJcbkNvbnRhaW5lci5kZWZhdWx0ID0gQ29udGFpbmVyXG5cbi8qIGM4IGlnbm9yZSBzdGFydCAqL1xuQ29udGFpbmVyLnJlYnVpbGQgPSBub2RlID0+IHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ2F0cnVsZScpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZSwgQXRSdWxlLnByb3RvdHlwZSlcbiAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdydWxlJykge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlLCBSdWxlLnByb3RvdHlwZSlcbiAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdkZWNsJykge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlLCBEZWNsYXJhdGlvbi5wcm90b3R5cGUpXG4gIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnY29tbWVudCcpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZSwgQ29tbWVudC5wcm90b3R5cGUpXG4gIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAncm9vdCcpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZSwgUm9vdC5wcm90b3R5cGUpXG4gIH1cblxuICBub2RlW215XSA9IHRydWVcblxuICBpZiAobm9kZS5ub2Rlcykge1xuICAgIG5vZGUubm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBDb250YWluZXIucmVidWlsZChjaGlsZClcbiAgICB9KVxuICB9XG59XG4vKiBjOCBpZ25vcmUgc3RvcCAqL1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmxldCBwaWNvID0gcmVxdWlyZSgncGljb2NvbG9ycycpXG5cbmxldCB0ZXJtaW5hbEhpZ2hsaWdodCA9IHJlcXVpcmUoJy4vdGVybWluYWwtaGlnaGxpZ2h0JylcblxuY2xhc3MgQ3NzU3ludGF4RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGxpbmUsIGNvbHVtbiwgc291cmNlLCBmaWxlLCBwbHVnaW4pIHtcbiAgICBzdXBlcihtZXNzYWdlKVxuICAgIHRoaXMubmFtZSA9ICdDc3NTeW50YXhFcnJvcidcbiAgICB0aGlzLnJlYXNvbiA9IG1lc3NhZ2VcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICB0aGlzLmZpbGUgPSBmaWxlXG4gICAgfVxuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlXG4gICAgfVxuICAgIGlmIChwbHVnaW4pIHtcbiAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luXG4gICAgfVxuICAgIGlmICh0eXBlb2YgbGluZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbHVtbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0eXBlb2YgbGluZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZVxuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saW5lID0gbGluZS5saW5lXG4gICAgICAgIHRoaXMuY29sdW1uID0gbGluZS5jb2x1bW5cbiAgICAgICAgdGhpcy5lbmRMaW5lID0gY29sdW1uLmxpbmVcbiAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBjb2x1bW4uY29sdW1uXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRNZXNzYWdlKClcblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQ3NzU3ludGF4RXJyb3IpXG4gICAgfVxuICB9XG5cbiAgc2V0TWVzc2FnZSgpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLnBsdWdpbiA/IHRoaXMucGx1Z2luICsgJzogJyA6ICcnXG4gICAgdGhpcy5tZXNzYWdlICs9IHRoaXMuZmlsZSA/IHRoaXMuZmlsZSA6ICc8Y3NzIGlucHV0PidcbiAgICBpZiAodHlwZW9mIHRoaXMubGluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWVzc2FnZSArPSAnOicgKyB0aGlzLmxpbmUgKyAnOicgKyB0aGlzLmNvbHVtblxuICAgIH1cbiAgICB0aGlzLm1lc3NhZ2UgKz0gJzogJyArIHRoaXMucmVhc29uXG4gIH1cblxuICBzaG93U291cmNlQ29kZShjb2xvcikge1xuICAgIGlmICghdGhpcy5zb3VyY2UpIHJldHVybiAnJ1xuXG4gICAgbGV0IGNzcyA9IHRoaXMuc291cmNlXG4gICAgaWYgKGNvbG9yID09IG51bGwpIGNvbG9yID0gcGljby5pc0NvbG9yU3VwcG9ydGVkXG4gICAgaWYgKHRlcm1pbmFsSGlnaGxpZ2h0KSB7XG4gICAgICBpZiAoY29sb3IpIGNzcyA9IHRlcm1pbmFsSGlnaGxpZ2h0KGNzcylcbiAgICB9XG5cbiAgICBsZXQgbGluZXMgPSBjc3Muc3BsaXQoL1xccj9cXG4vKVxuICAgIGxldCBzdGFydCA9IE1hdGgubWF4KHRoaXMubGluZSAtIDMsIDApXG4gICAgbGV0IGVuZCA9IE1hdGgubWluKHRoaXMubGluZSArIDIsIGxpbmVzLmxlbmd0aClcblxuICAgIGxldCBtYXhXaWR0aCA9IFN0cmluZyhlbmQpLmxlbmd0aFxuXG4gICAgbGV0IG1hcmssIGFzaWRlXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBsZXQgeyBib2xkLCBncmF5LCByZWQgfSA9IHBpY28uY3JlYXRlQ29sb3JzKHRydWUpXG4gICAgICBtYXJrID0gdGV4dCA9PiBib2xkKHJlZCh0ZXh0KSlcbiAgICAgIGFzaWRlID0gdGV4dCA9PiBncmF5KHRleHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmsgPSBhc2lkZSA9IHN0ciA9PiBzdHJcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZXNcbiAgICAgIC5zbGljZShzdGFydCwgZW5kKVxuICAgICAgLm1hcCgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IG51bWJlciA9IHN0YXJ0ICsgMSArIGluZGV4XG4gICAgICAgIGxldCBndXR0ZXIgPSAnICcgKyAoJyAnICsgbnVtYmVyKS5zbGljZSgtbWF4V2lkdGgpICsgJyB8ICdcbiAgICAgICAgaWYgKG51bWJlciA9PT0gdGhpcy5saW5lKSB7XG4gICAgICAgICAgbGV0IHNwYWNpbmcgPVxuICAgICAgICAgICAgYXNpZGUoZ3V0dGVyLnJlcGxhY2UoL1xcZC9nLCAnICcpKSArXG4gICAgICAgICAgICBsaW5lLnNsaWNlKDAsIHRoaXMuY29sdW1uIC0gMSkucmVwbGFjZSgvW15cXHRdL2csICcgJylcbiAgICAgICAgICByZXR1cm4gbWFyaygnPicpICsgYXNpZGUoZ3V0dGVyKSArIGxpbmUgKyAnXFxuICcgKyBzcGFjaW5nICsgbWFyaygnXicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcgJyArIGFzaWRlKGd1dHRlcikgKyBsaW5lXG4gICAgICB9KVxuICAgICAgLmpvaW4oJ1xcbicpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBsZXQgY29kZSA9IHRoaXMuc2hvd1NvdXJjZUNvZGUoKVxuICAgIGlmIChjb2RlKSB7XG4gICAgICBjb2RlID0gJ1xcblxcbicgKyBjb2RlICsgJ1xcbidcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmFtZSArICc6ICcgKyB0aGlzLm1lc3NhZ2UgKyBjb2RlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDc3NTeW50YXhFcnJvclxuQ3NzU3ludGF4RXJyb3IuZGVmYXVsdCA9IENzc1N5bnRheEVycm9yXG4iLCIndXNlIHN0cmljdCdcblxubGV0IE5vZGUgPSByZXF1aXJlKCcuL25vZGUnKVxuXG5jbGFzcyBEZWNsYXJhdGlvbiBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihkZWZhdWx0cykge1xuICAgIGlmIChcbiAgICAgIGRlZmF1bHRzICYmXG4gICAgICB0eXBlb2YgZGVmYXVsdHMudmFsdWUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgZGVmYXVsdHMudmFsdWUgIT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICBkZWZhdWx0cyA9IHsgLi4uZGVmYXVsdHMsIHZhbHVlOiBTdHJpbmcoZGVmYXVsdHMudmFsdWUpIH1cbiAgICB9XG4gICAgc3VwZXIoZGVmYXVsdHMpXG4gICAgdGhpcy50eXBlID0gJ2RlY2wnXG4gIH1cblxuICBnZXQgdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcC5zdGFydHNXaXRoKCctLScpIHx8IHRoaXMucHJvcFswXSA9PT0gJyQnXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWNsYXJhdGlvblxuRGVjbGFyYXRpb24uZGVmYXVsdCA9IERlY2xhcmF0aW9uXG4iLCIndXNlIHN0cmljdCdcblxubGV0IENvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJylcblxubGV0IExhenlSZXN1bHQsIFByb2Nlc3NvclxuXG5jbGFzcyBEb2N1bWVudCBleHRlbmRzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgLy8gdHlwZSBuZWVkcyB0byBiZSBwYXNzZWQgdG8gc3VwZXIsIG90aGVyd2lzZSBjaGlsZCByb290cyB3b24ndCBiZSBub3JtYWxpemVkIGNvcnJlY3RseVxuICAgIHN1cGVyKHsgdHlwZTogJ2RvY3VtZW50JywgLi4uZGVmYXVsdHMgfSlcblxuICAgIGlmICghdGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5ub2RlcyA9IFtdXG4gICAgfVxuICB9XG5cbiAgdG9SZXN1bHQob3B0cyA9IHt9KSB7XG4gICAgbGV0IGxhenkgPSBuZXcgTGF6eVJlc3VsdChuZXcgUHJvY2Vzc29yKCksIHRoaXMsIG9wdHMpXG5cbiAgICByZXR1cm4gbGF6eS5zdHJpbmdpZnkoKVxuICB9XG59XG5cbkRvY3VtZW50LnJlZ2lzdGVyTGF6eVJlc3VsdCA9IGRlcGVuZGFudCA9PiB7XG4gIExhenlSZXN1bHQgPSBkZXBlbmRhbnRcbn1cblxuRG9jdW1lbnQucmVnaXN0ZXJQcm9jZXNzb3IgPSBkZXBlbmRhbnQgPT4ge1xuICBQcm9jZXNzb3IgPSBkZXBlbmRhbnRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudFxuRG9jdW1lbnQuZGVmYXVsdCA9IERvY3VtZW50XG4iLCIndXNlIHN0cmljdCdcblxubGV0IERlY2xhcmF0aW9uID0gcmVxdWlyZSgnLi9kZWNsYXJhdGlvbicpXG5sZXQgUHJldmlvdXNNYXAgPSByZXF1aXJlKCcuL3ByZXZpb3VzLW1hcCcpXG5sZXQgQ29tbWVudCA9IHJlcXVpcmUoJy4vY29tbWVudCcpXG5sZXQgQXRSdWxlID0gcmVxdWlyZSgnLi9hdC1ydWxlJylcbmxldCBJbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQnKVxubGV0IFJvb3QgPSByZXF1aXJlKCcuL3Jvb3QnKVxubGV0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKVxuXG5mdW5jdGlvbiBmcm9tSlNPTihqc29uLCBpbnB1dHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoanNvbikpIHJldHVybiBqc29uLm1hcChuID0+IGZyb21KU09OKG4pKVxuXG4gIGxldCB7IGlucHV0czogb3duSW5wdXRzLCAuLi5kZWZhdWx0cyB9ID0ganNvblxuICBpZiAob3duSW5wdXRzKSB7XG4gICAgaW5wdXRzID0gW11cbiAgICBmb3IgKGxldCBpbnB1dCBvZiBvd25JbnB1dHMpIHtcbiAgICAgIGxldCBpbnB1dEh5ZHJhdGVkID0geyAuLi5pbnB1dCwgX19wcm90b19fOiBJbnB1dC5wcm90b3R5cGUgfVxuICAgICAgaWYgKGlucHV0SHlkcmF0ZWQubWFwKSB7XG4gICAgICAgIGlucHV0SHlkcmF0ZWQubWFwID0ge1xuICAgICAgICAgIC4uLmlucHV0SHlkcmF0ZWQubWFwLFxuICAgICAgICAgIF9fcHJvdG9fXzogUHJldmlvdXNNYXAucHJvdG90eXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlucHV0cy5wdXNoKGlucHV0SHlkcmF0ZWQpXG4gICAgfVxuICB9XG4gIGlmIChkZWZhdWx0cy5ub2Rlcykge1xuICAgIGRlZmF1bHRzLm5vZGVzID0ganNvbi5ub2Rlcy5tYXAobiA9PiBmcm9tSlNPTihuLCBpbnB1dHMpKVxuICB9XG4gIGlmIChkZWZhdWx0cy5zb3VyY2UpIHtcbiAgICBsZXQgeyBpbnB1dElkLCAuLi5zb3VyY2UgfSA9IGRlZmF1bHRzLnNvdXJjZVxuICAgIGRlZmF1bHRzLnNvdXJjZSA9IHNvdXJjZVxuICAgIGlmIChpbnB1dElkICE9IG51bGwpIHtcbiAgICAgIGRlZmF1bHRzLnNvdXJjZS5pbnB1dCA9IGlucHV0c1tpbnB1dElkXVxuICAgIH1cbiAgfVxuICBpZiAoZGVmYXVsdHMudHlwZSA9PT0gJ3Jvb3QnKSB7XG4gICAgcmV0dXJuIG5ldyBSb290KGRlZmF1bHRzKVxuICB9IGVsc2UgaWYgKGRlZmF1bHRzLnR5cGUgPT09ICdkZWNsJykge1xuICAgIHJldHVybiBuZXcgRGVjbGFyYXRpb24oZGVmYXVsdHMpXG4gIH0gZWxzZSBpZiAoZGVmYXVsdHMudHlwZSA9PT0gJ3J1bGUnKSB7XG4gICAgcmV0dXJuIG5ldyBSdWxlKGRlZmF1bHRzKVxuICB9IGVsc2UgaWYgKGRlZmF1bHRzLnR5cGUgPT09ICdjb21tZW50Jykge1xuICAgIHJldHVybiBuZXcgQ29tbWVudChkZWZhdWx0cylcbiAgfSBlbHNlIGlmIChkZWZhdWx0cy50eXBlID09PSAnYXRydWxlJykge1xuICAgIHJldHVybiBuZXcgQXRSdWxlKGRlZmF1bHRzKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBub2RlIHR5cGU6ICcgKyBqc29uLnR5cGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmcm9tSlNPTlxuZnJvbUpTT04uZGVmYXVsdCA9IGZyb21KU09OXG4iLCIndXNlIHN0cmljdCdcblxubGV0IHsgU291cmNlTWFwQ29uc3VtZXIsIFNvdXJjZU1hcEdlbmVyYXRvciB9ID0gcmVxdWlyZSgnc291cmNlLW1hcC1qcycpXG5sZXQgeyBmaWxlVVJMVG9QYXRoLCBwYXRoVG9GaWxlVVJMIH0gPSByZXF1aXJlKCd1cmwnKVxubGV0IHsgaXNBYnNvbHV0ZSwgcmVzb2x2ZSB9ID0gcmVxdWlyZSgncGF0aCcpXG5sZXQgeyBuYW5vaWQgfSA9IHJlcXVpcmUoJ25hbm9pZC9ub24tc2VjdXJlJylcblxubGV0IHRlcm1pbmFsSGlnaGxpZ2h0ID0gcmVxdWlyZSgnLi90ZXJtaW5hbC1oaWdobGlnaHQnKVxubGV0IENzc1N5bnRheEVycm9yID0gcmVxdWlyZSgnLi9jc3Mtc3ludGF4LWVycm9yJylcbmxldCBQcmV2aW91c01hcCA9IHJlcXVpcmUoJy4vcHJldmlvdXMtbWFwJylcblxubGV0IGZyb21PZmZzZXRDYWNoZSA9IFN5bWJvbCgnZnJvbU9mZnNldENhY2hlJylcblxubGV0IHNvdXJjZU1hcEF2YWlsYWJsZSA9IEJvb2xlYW4oU291cmNlTWFwQ29uc3VtZXIgJiYgU291cmNlTWFwR2VuZXJhdG9yKVxubGV0IHBhdGhBdmFpbGFibGUgPSBCb29sZWFuKHJlc29sdmUgJiYgaXNBYnNvbHV0ZSlcblxuY2xhc3MgSW5wdXQge1xuICBjb25zdHJ1Y3Rvcihjc3MsIG9wdHMgPSB7fSkge1xuICAgIGlmIChcbiAgICAgIGNzcyA9PT0gbnVsbCB8fFxuICAgICAgdHlwZW9mIGNzcyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICh0eXBlb2YgY3NzID09PSAnb2JqZWN0JyAmJiAhY3NzLnRvU3RyaW5nKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQb3N0Q1NTIHJlY2VpdmVkICR7Y3NzfSBpbnN0ZWFkIG9mIENTUyBzdHJpbmdgKVxuICAgIH1cblxuICAgIHRoaXMuY3NzID0gY3NzLnRvU3RyaW5nKClcblxuICAgIGlmICh0aGlzLmNzc1swXSA9PT0gJ1xcdUZFRkYnIHx8IHRoaXMuY3NzWzBdID09PSAnXFx1RkZGRScpIHtcbiAgICAgIHRoaXMuaGFzQk9NID0gdHJ1ZVxuICAgICAgdGhpcy5jc3MgPSB0aGlzLmNzcy5zbGljZSgxKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0JPTSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZnJvbSkge1xuICAgICAgaWYgKFxuICAgICAgICAhcGF0aEF2YWlsYWJsZSB8fFxuICAgICAgICAvXlxcdys6XFwvXFwvLy50ZXN0KG9wdHMuZnJvbSkgfHxcbiAgICAgICAgaXNBYnNvbHV0ZShvcHRzLmZyb20pXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5maWxlID0gb3B0cy5mcm9tXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbGUgPSByZXNvbHZlKG9wdHMuZnJvbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGF0aEF2YWlsYWJsZSAmJiBzb3VyY2VNYXBBdmFpbGFibGUpIHtcbiAgICAgIGxldCBtYXAgPSBuZXcgUHJldmlvdXNNYXAodGhpcy5jc3MsIG9wdHMpXG4gICAgICBpZiAobWFwLnRleHQpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXBcbiAgICAgICAgbGV0IGZpbGUgPSBtYXAuY29uc3VtZXIoKS5maWxlXG4gICAgICAgIGlmICghdGhpcy5maWxlICYmIGZpbGUpIHRoaXMuZmlsZSA9IHRoaXMubWFwUmVzb2x2ZShmaWxlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICB0aGlzLmlkID0gJzxpbnB1dCBjc3MgJyArIG5hbm9pZCg2KSArICc+J1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXApIHRoaXMubWFwLmZpbGUgPSB0aGlzLmZyb21cbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGxpbmUsIGNvbHVtbiwgb3B0cyA9IHt9KSB7XG4gICAgbGV0IHJlc3VsdCwgZW5kTGluZSwgZW5kQ29sdW1uXG5cbiAgICBpZiAobGluZSAmJiB0eXBlb2YgbGluZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBzdGFydCA9IGxpbmVcbiAgICAgIGxldCBlbmQgPSBjb2x1bW5cbiAgICAgIGlmICh0eXBlb2Ygc3RhcnQub2Zmc2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5mcm9tT2Zmc2V0KHN0YXJ0Lm9mZnNldClcbiAgICAgICAgbGluZSA9IHBvcy5saW5lXG4gICAgICAgIGNvbHVtbiA9IHBvcy5jb2xcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmUgPSBzdGFydC5saW5lXG4gICAgICAgIGNvbHVtbiA9IHN0YXJ0LmNvbHVtblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlbmQub2Zmc2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5mcm9tT2Zmc2V0KGVuZC5vZmZzZXQpXG4gICAgICAgIGVuZExpbmUgPSBwb3MubGluZVxuICAgICAgICBlbmRDb2x1bW4gPSBwb3MuY29sXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRMaW5lID0gZW5kLmxpbmVcbiAgICAgICAgZW5kQ29sdW1uID0gZW5kLmNvbHVtblxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWNvbHVtbikge1xuICAgICAgbGV0IHBvcyA9IHRoaXMuZnJvbU9mZnNldChsaW5lKVxuICAgICAgbGluZSA9IHBvcy5saW5lXG4gICAgICBjb2x1bW4gPSBwb3MuY29sXG4gICAgfVxuXG4gICAgbGV0IG9yaWdpbiA9IHRoaXMub3JpZ2luKGxpbmUsIGNvbHVtbiwgZW5kTGluZSwgZW5kQ29sdW1uKVxuICAgIGlmIChvcmlnaW4pIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBDc3NTeW50YXhFcnJvcihcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgb3JpZ2luLmVuZExpbmUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gb3JpZ2luLmxpbmVcbiAgICAgICAgICA6IHsgY29sdW1uOiBvcmlnaW4uY29sdW1uLCBsaW5lOiBvcmlnaW4ubGluZSB9LFxuICAgICAgICBvcmlnaW4uZW5kTGluZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBvcmlnaW4uY29sdW1uXG4gICAgICAgICAgOiB7IGNvbHVtbjogb3JpZ2luLmVuZENvbHVtbiwgbGluZTogb3JpZ2luLmVuZExpbmUgfSxcbiAgICAgICAgb3JpZ2luLnNvdXJjZSxcbiAgICAgICAgb3JpZ2luLmZpbGUsXG4gICAgICAgIG9wdHMucGx1Z2luXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBDc3NTeW50YXhFcnJvcihcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgZW5kTGluZSA9PT0gdW5kZWZpbmVkID8gbGluZSA6IHsgY29sdW1uLCBsaW5lIH0sXG4gICAgICAgIGVuZExpbmUgPT09IHVuZGVmaW5lZCA/IGNvbHVtbiA6IHsgY29sdW1uOiBlbmRDb2x1bW4sIGxpbmU6IGVuZExpbmUgfSxcbiAgICAgICAgdGhpcy5jc3MsXG4gICAgICAgIHRoaXMuZmlsZSxcbiAgICAgICAgb3B0cy5wbHVnaW5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXN1bHQuaW5wdXQgPSB7IGNvbHVtbiwgZW5kQ29sdW1uLCBlbmRMaW5lLCBsaW5lLCBzb3VyY2U6IHRoaXMuY3NzIH1cbiAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICBpZiAocGF0aFRvRmlsZVVSTCkge1xuICAgICAgICByZXN1bHQuaW5wdXQudXJsID0gcGF0aFRvRmlsZVVSTCh0aGlzLmZpbGUpLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5pbnB1dC5maWxlID0gdGhpcy5maWxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZnJvbU9mZnNldChvZmZzZXQpIHtcbiAgICBsZXQgbGFzdExpbmUsIGxpbmVUb0luZGV4XG4gICAgaWYgKCF0aGlzW2Zyb21PZmZzZXRDYWNoZV0pIHtcbiAgICAgIGxldCBsaW5lcyA9IHRoaXMuY3NzLnNwbGl0KCdcXG4nKVxuICAgICAgbGluZVRvSW5kZXggPSBuZXcgQXJyYXkobGluZXMubGVuZ3RoKVxuICAgICAgbGV0IHByZXZJbmRleCA9IDBcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGluZVRvSW5kZXhbaV0gPSBwcmV2SW5kZXhcbiAgICAgICAgcHJldkluZGV4ICs9IGxpbmVzW2ldLmxlbmd0aCArIDFcbiAgICAgIH1cblxuICAgICAgdGhpc1tmcm9tT2Zmc2V0Q2FjaGVdID0gbGluZVRvSW5kZXhcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZVRvSW5kZXggPSB0aGlzW2Zyb21PZmZzZXRDYWNoZV1cbiAgICB9XG4gICAgbGFzdExpbmUgPSBsaW5lVG9JbmRleFtsaW5lVG9JbmRleC5sZW5ndGggLSAxXVxuXG4gICAgbGV0IG1pbiA9IDBcbiAgICBpZiAob2Zmc2V0ID49IGxhc3RMaW5lKSB7XG4gICAgICBtaW4gPSBsaW5lVG9JbmRleC5sZW5ndGggLSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBtYXggPSBsaW5lVG9JbmRleC5sZW5ndGggLSAyXG4gICAgICBsZXQgbWlkXG4gICAgICB3aGlsZSAobWluIDwgbWF4KSB7XG4gICAgICAgIG1pZCA9IG1pbiArICgobWF4IC0gbWluKSA+PiAxKVxuICAgICAgICBpZiAob2Zmc2V0IDwgbGluZVRvSW5kZXhbbWlkXSkge1xuICAgICAgICAgIG1heCA9IG1pZCAtIDFcbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPj0gbGluZVRvSW5kZXhbbWlkICsgMV0pIHtcbiAgICAgICAgICBtaW4gPSBtaWQgKyAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWluID0gbWlkXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY29sOiBvZmZzZXQgLSBsaW5lVG9JbmRleFttaW5dICsgMSxcbiAgICAgIGxpbmU6IG1pbiArIDFcbiAgICB9XG4gIH1cblxuICBtYXBSZXNvbHZlKGZpbGUpIHtcbiAgICBpZiAoL15cXHcrOlxcL1xcLy8udGVzdChmaWxlKSkge1xuICAgICAgcmV0dXJuIGZpbGVcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmUodGhpcy5tYXAuY29uc3VtZXIoKS5zb3VyY2VSb290IHx8IHRoaXMubWFwLnJvb3QgfHwgJy4nLCBmaWxlKVxuICB9XG5cbiAgb3JpZ2luKGxpbmUsIGNvbHVtbiwgZW5kTGluZSwgZW5kQ29sdW1uKSB7XG4gICAgaWYgKCF0aGlzLm1hcCkgcmV0dXJuIGZhbHNlXG4gICAgbGV0IGNvbnN1bWVyID0gdGhpcy5tYXAuY29uc3VtZXIoKVxuXG4gICAgbGV0IGZyb20gPSBjb25zdW1lci5vcmlnaW5hbFBvc2l0aW9uRm9yKHsgY29sdW1uLCBsaW5lIH0pXG4gICAgaWYgKCFmcm9tLnNvdXJjZSkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgdG9cbiAgICBpZiAodHlwZW9mIGVuZExpbmUgPT09ICdudW1iZXInKSB7XG4gICAgICB0byA9IGNvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3IoeyBjb2x1bW46IGVuZENvbHVtbiwgbGluZTogZW5kTGluZSB9KVxuICAgIH1cblxuICAgIGxldCBmcm9tVXJsXG5cbiAgICBpZiAoaXNBYnNvbHV0ZShmcm9tLnNvdXJjZSkpIHtcbiAgICAgIGZyb21VcmwgPSBwYXRoVG9GaWxlVVJMKGZyb20uc291cmNlKVxuICAgIH0gZWxzZSB7XG4gICAgICBmcm9tVXJsID0gbmV3IFVSTChcbiAgICAgICAgZnJvbS5zb3VyY2UsXG4gICAgICAgIHRoaXMubWFwLmNvbnN1bWVyKCkuc291cmNlUm9vdCB8fCBwYXRoVG9GaWxlVVJMKHRoaXMubWFwLm1hcEZpbGUpXG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGNvbHVtbjogZnJvbS5jb2x1bW4sXG4gICAgICBlbmRDb2x1bW46IHRvICYmIHRvLmNvbHVtbixcbiAgICAgIGVuZExpbmU6IHRvICYmIHRvLmxpbmUsXG4gICAgICBsaW5lOiBmcm9tLmxpbmUsXG4gICAgICB1cmw6IGZyb21VcmwudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmIChmcm9tVXJsLnByb3RvY29sID09PSAnZmlsZTonKSB7XG4gICAgICBpZiAoZmlsZVVSTFRvUGF0aCkge1xuICAgICAgICByZXN1bHQuZmlsZSA9IGZpbGVVUkxUb1BhdGgoZnJvbVVybClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGM4IGlnbm9yZSBuZXh0IDIgKi9cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmaWxlOiBwcm90b2NvbCBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgUG9zdENTUyBidWlsZGApXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHNvdXJjZSA9IGNvbnN1bWVyLnNvdXJjZUNvbnRlbnRGb3IoZnJvbS5zb3VyY2UpXG4gICAgaWYgKHNvdXJjZSkgcmVzdWx0LnNvdXJjZSA9IHNvdXJjZVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0ge31cbiAgICBmb3IgKGxldCBuYW1lIG9mIFsnaGFzQk9NJywgJ2NzcycsICdmaWxlJywgJ2lkJ10pIHtcbiAgICAgIGlmICh0aGlzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAganNvbltuYW1lXSA9IHRoaXNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubWFwKSB7XG4gICAgICBqc29uLm1hcCA9IHsgLi4udGhpcy5tYXAgfVxuICAgICAgaWYgKGpzb24ubWFwLmNvbnN1bWVyQ2FjaGUpIHtcbiAgICAgICAganNvbi5tYXAuY29uc3VtZXJDYWNoZSA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ganNvblxuICB9XG5cbiAgZ2V0IGZyb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZSB8fCB0aGlzLmlkXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dFxuSW5wdXQuZGVmYXVsdCA9IElucHV0XG5cbmlmICh0ZXJtaW5hbEhpZ2hsaWdodCAmJiB0ZXJtaW5hbEhpZ2hsaWdodC5yZWdpc3RlcklucHV0KSB7XG4gIHRlcm1pbmFsSGlnaGxpZ2h0LnJlZ2lzdGVySW5wdXQoSW5wdXQpXG59XG4iLCIndXNlIHN0cmljdCdcblxubGV0IHsgaXNDbGVhbiwgbXkgfSA9IHJlcXVpcmUoJy4vc3ltYm9scycpXG5sZXQgTWFwR2VuZXJhdG9yID0gcmVxdWlyZSgnLi9tYXAtZ2VuZXJhdG9yJylcbmxldCBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpXG5sZXQgQ29udGFpbmVyID0gcmVxdWlyZSgnLi9jb250YWluZXInKVxubGV0IERvY3VtZW50ID0gcmVxdWlyZSgnLi9kb2N1bWVudCcpXG5sZXQgd2Fybk9uY2UgPSByZXF1aXJlKCcuL3dhcm4tb25jZScpXG5sZXQgUmVzdWx0ID0gcmVxdWlyZSgnLi9yZXN1bHQnKVxubGV0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5sZXQgUm9vdCA9IHJlcXVpcmUoJy4vcm9vdCcpXG5cbmNvbnN0IFRZUEVfVE9fQ0xBU1NfTkFNRSA9IHtcbiAgYXRydWxlOiAnQXRSdWxlJyxcbiAgY29tbWVudDogJ0NvbW1lbnQnLFxuICBkZWNsOiAnRGVjbGFyYXRpb24nLFxuICBkb2N1bWVudDogJ0RvY3VtZW50JyxcbiAgcm9vdDogJ1Jvb3QnLFxuICBydWxlOiAnUnVsZSdcbn1cblxuY29uc3QgUExVR0lOX1BST1BTID0ge1xuICBBdFJ1bGU6IHRydWUsXG4gIEF0UnVsZUV4aXQ6IHRydWUsXG4gIENvbW1lbnQ6IHRydWUsXG4gIENvbW1lbnRFeGl0OiB0cnVlLFxuICBEZWNsYXJhdGlvbjogdHJ1ZSxcbiAgRGVjbGFyYXRpb25FeGl0OiB0cnVlLFxuICBEb2N1bWVudDogdHJ1ZSxcbiAgRG9jdW1lbnRFeGl0OiB0cnVlLFxuICBPbmNlOiB0cnVlLFxuICBPbmNlRXhpdDogdHJ1ZSxcbiAgcG9zdGNzc1BsdWdpbjogdHJ1ZSxcbiAgcHJlcGFyZTogdHJ1ZSxcbiAgUm9vdDogdHJ1ZSxcbiAgUm9vdEV4aXQ6IHRydWUsXG4gIFJ1bGU6IHRydWUsXG4gIFJ1bGVFeGl0OiB0cnVlXG59XG5cbmNvbnN0IE5PVF9WSVNJVE9SUyA9IHtcbiAgT25jZTogdHJ1ZSxcbiAgcG9zdGNzc1BsdWdpbjogdHJ1ZSxcbiAgcHJlcGFyZTogdHJ1ZVxufVxuXG5jb25zdCBDSElMRFJFTiA9IDBcblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nXG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50cyhub2RlKSB7XG4gIGxldCBrZXkgPSBmYWxzZVxuICBsZXQgdHlwZSA9IFRZUEVfVE9fQ0xBU1NfTkFNRVtub2RlLnR5cGVdXG4gIGlmIChub2RlLnR5cGUgPT09ICdkZWNsJykge1xuICAgIGtleSA9IG5vZGUucHJvcC50b0xvd2VyQ2FzZSgpXG4gIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnYXRydWxlJykge1xuICAgIGtleSA9IG5vZGUubmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBpZiAoa2V5ICYmIG5vZGUuYXBwZW5kKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHR5cGUsXG4gICAgICB0eXBlICsgJy0nICsga2V5LFxuICAgICAgQ0hJTERSRU4sXG4gICAgICB0eXBlICsgJ0V4aXQnLFxuICAgICAgdHlwZSArICdFeGl0LScgKyBrZXlcbiAgICBdXG4gIH0gZWxzZSBpZiAoa2V5KSB7XG4gICAgcmV0dXJuIFt0eXBlLCB0eXBlICsgJy0nICsga2V5LCB0eXBlICsgJ0V4aXQnLCB0eXBlICsgJ0V4aXQtJyArIGtleV1cbiAgfSBlbHNlIGlmIChub2RlLmFwcGVuZCkge1xuICAgIHJldHVybiBbdHlwZSwgQ0hJTERSRU4sIHR5cGUgKyAnRXhpdCddXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFt0eXBlLCB0eXBlICsgJ0V4aXQnXVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvU3RhY2sobm9kZSkge1xuICBsZXQgZXZlbnRzXG4gIGlmIChub2RlLnR5cGUgPT09ICdkb2N1bWVudCcpIHtcbiAgICBldmVudHMgPSBbJ0RvY3VtZW50JywgQ0hJTERSRU4sICdEb2N1bWVudEV4aXQnXVxuICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ3Jvb3QnKSB7XG4gICAgZXZlbnRzID0gWydSb290JywgQ0hJTERSRU4sICdSb290RXhpdCddXG4gIH0gZWxzZSB7XG4gICAgZXZlbnRzID0gZ2V0RXZlbnRzKG5vZGUpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV2ZW50SW5kZXg6IDAsXG4gICAgZXZlbnRzLFxuICAgIGl0ZXJhdG9yOiAwLFxuICAgIG5vZGUsXG4gICAgdmlzaXRvckluZGV4OiAwLFxuICAgIHZpc2l0b3JzOiBbXVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuTWFya3Mobm9kZSkge1xuICBub2RlW2lzQ2xlYW5dID0gZmFsc2VcbiAgaWYgKG5vZGUubm9kZXMpIG5vZGUubm9kZXMuZm9yRWFjaChpID0+IGNsZWFuTWFya3MoaSkpXG4gIHJldHVybiBub2RlXG59XG5cbmxldCBwb3N0Y3NzID0ge31cblxuY2xhc3MgTGF6eVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHByb2Nlc3NvciwgY3NzLCBvcHRzKSB7XG4gICAgdGhpcy5zdHJpbmdpZmllZCA9IGZhbHNlXG4gICAgdGhpcy5wcm9jZXNzZWQgPSBmYWxzZVxuXG4gICAgbGV0IHJvb3RcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgY3NzID09PSAnb2JqZWN0JyAmJlxuICAgICAgY3NzICE9PSBudWxsICYmXG4gICAgICAoY3NzLnR5cGUgPT09ICdyb290JyB8fCBjc3MudHlwZSA9PT0gJ2RvY3VtZW50JylcbiAgICApIHtcbiAgICAgIHJvb3QgPSBjbGVhbk1hcmtzKGNzcylcbiAgICB9IGVsc2UgaWYgKGNzcyBpbnN0YW5jZW9mIExhenlSZXN1bHQgfHwgY3NzIGluc3RhbmNlb2YgUmVzdWx0KSB7XG4gICAgICByb290ID0gY2xlYW5NYXJrcyhjc3Mucm9vdClcbiAgICAgIGlmIChjc3MubWFwKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0cy5tYXAgPT09ICd1bmRlZmluZWQnKSBvcHRzLm1hcCA9IHt9XG4gICAgICAgIGlmICghb3B0cy5tYXAuaW5saW5lKSBvcHRzLm1hcC5pbmxpbmUgPSBmYWxzZVxuICAgICAgICBvcHRzLm1hcC5wcmV2ID0gY3NzLm1hcFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGFyc2VyID0gcGFyc2VcbiAgICAgIGlmIChvcHRzLnN5bnRheCkgcGFyc2VyID0gb3B0cy5zeW50YXgucGFyc2VcbiAgICAgIGlmIChvcHRzLnBhcnNlcikgcGFyc2VyID0gb3B0cy5wYXJzZXJcbiAgICAgIGlmIChwYXJzZXIucGFyc2UpIHBhcnNlciA9IHBhcnNlci5wYXJzZVxuXG4gICAgICB0cnkge1xuICAgICAgICByb290ID0gcGFyc2VyKGNzcywgb3B0cylcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHJvb3QgJiYgIXJvb3RbbXldKSB7XG4gICAgICAgIC8qIGM4IGlnbm9yZSBuZXh0IDIgKi9cbiAgICAgICAgQ29udGFpbmVyLnJlYnVpbGQocm9vdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlc3VsdCA9IG5ldyBSZXN1bHQocHJvY2Vzc29yLCByb290LCBvcHRzKVxuICAgIHRoaXMuaGVscGVycyA9IHsgLi4ucG9zdGNzcywgcG9zdGNzcywgcmVzdWx0OiB0aGlzLnJlc3VsdCB9XG4gICAgdGhpcy5wbHVnaW5zID0gdGhpcy5wcm9jZXNzb3IucGx1Z2lucy5tYXAocGx1Z2luID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luID09PSAnb2JqZWN0JyAmJiBwbHVnaW4ucHJlcGFyZSkge1xuICAgICAgICByZXR1cm4geyAuLi5wbHVnaW4sIC4uLnBsdWdpbi5wcmVwYXJlKHRoaXMucmVzdWx0KSB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGx1Z2luXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jKCkge1xuICAgIGlmICh0aGlzLmVycm9yKSByZXR1cm4gUHJvbWlzZS5yZWplY3QodGhpcy5lcnJvcilcbiAgICBpZiAodGhpcy5wcm9jZXNzZWQpIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXN1bHQpXG4gICAgaWYgKCF0aGlzLnByb2Nlc3NpbmcpIHtcbiAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRoaXMucnVuQXN5bmMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nXG4gIH1cblxuICBjYXRjaChvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMuYXN5bmMoKS5jYXRjaChvblJlamVjdGVkKVxuICB9XG5cbiAgZmluYWxseShvbkZpbmFsbHkpIHtcbiAgICByZXR1cm4gdGhpcy5hc3luYygpLnRoZW4ob25GaW5hbGx5LCBvbkZpbmFsbHkpXG4gIH1cblxuICBnZXRBc3luY0Vycm9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVXNlIHByb2Nlc3MoY3NzKS50aGVuKGNiKSB0byB3b3JrIHdpdGggYXN5bmMgcGx1Z2lucycpXG4gIH1cblxuICBoYW5kbGVFcnJvcihlcnJvciwgbm9kZSkge1xuICAgIGxldCBwbHVnaW4gPSB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luXG4gICAgdHJ5IHtcbiAgICAgIGlmIChub2RlKSBub2RlLmFkZFRvRXJyb3IoZXJyb3IpXG4gICAgICB0aGlzLmVycm9yID0gZXJyb3JcbiAgICAgIGlmIChlcnJvci5uYW1lID09PSAnQ3NzU3ludGF4RXJyb3InICYmICFlcnJvci5wbHVnaW4pIHtcbiAgICAgICAgZXJyb3IucGx1Z2luID0gcGx1Z2luLnBvc3Rjc3NQbHVnaW5cbiAgICAgICAgZXJyb3Iuc2V0TWVzc2FnZSgpXG4gICAgICB9IGVsc2UgaWYgKHBsdWdpbi5wb3N0Y3NzVmVyc2lvbikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGxldCBwbHVnaW5OYW1lID0gcGx1Z2luLnBvc3Rjc3NQbHVnaW5cbiAgICAgICAgICBsZXQgcGx1Z2luVmVyID0gcGx1Z2luLnBvc3Rjc3NWZXJzaW9uXG4gICAgICAgICAgbGV0IHJ1bnRpbWVWZXIgPSB0aGlzLnJlc3VsdC5wcm9jZXNzb3IudmVyc2lvblxuICAgICAgICAgIGxldCBhID0gcGx1Z2luVmVyLnNwbGl0KCcuJylcbiAgICAgICAgICBsZXQgYiA9IHJ1bnRpbWVWZXIuc3BsaXQoJy4nKVxuXG4gICAgICAgICAgaWYgKGFbMF0gIT09IGJbMF0gfHwgcGFyc2VJbnQoYVsxXSkgPiBwYXJzZUludChiWzFdKSkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICdVbmtub3duIGVycm9yIGZyb20gUG9zdENTUyBwbHVnaW4uIFlvdXIgY3VycmVudCBQb3N0Q1NTICcgK1xuICAgICAgICAgICAgICAgICd2ZXJzaW9uIGlzICcgK1xuICAgICAgICAgICAgICAgIHJ1bnRpbWVWZXIgK1xuICAgICAgICAgICAgICAgICcsIGJ1dCAnICtcbiAgICAgICAgICAgICAgICBwbHVnaW5OYW1lICtcbiAgICAgICAgICAgICAgICAnIHVzZXMgJyArXG4gICAgICAgICAgICAgICAgcGx1Z2luVmVyICtcbiAgICAgICAgICAgICAgICAnLiBQZXJoYXBzIHRoaXMgaXMgdGhlIHNvdXJjZSBvZiB0aGUgZXJyb3IgYmVsb3cuJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLyogYzggaWdub3JlIG5leHQgMyAqL1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIHByZXBhcmVWaXNpdG9ycygpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9XG4gICAgbGV0IGFkZCA9IChwbHVnaW4sIHR5cGUsIGNiKSA9PiB7XG4gICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW3R5cGVdKSB0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdXG4gICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXS5wdXNoKFtwbHVnaW4sIGNiXSlcbiAgICB9XG4gICAgZm9yIChsZXQgcGx1Z2luIG9mIHRoaXMucGx1Z2lucykge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAobGV0IGV2ZW50IGluIHBsdWdpbikge1xuICAgICAgICAgIGlmICghUExVR0lOX1BST1BTW2V2ZW50XSAmJiAvXltBLVpdLy50ZXN0KGV2ZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVW5rbm93biBldmVudCAke2V2ZW50fSBpbiAke3BsdWdpbi5wb3N0Y3NzUGx1Z2lufS4gYCArXG4gICAgICAgICAgICAgICAgYFRyeSB0byB1cGRhdGUgUG9zdENTUyAoJHt0aGlzLnByb2Nlc3Nvci52ZXJzaW9ufSBub3cpLmBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFOT1RfVklTSVRPUlNbZXZlbnRdKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBsdWdpbltldmVudF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGZpbHRlciBpbiBwbHVnaW5bZXZlbnRdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICBhZGQocGx1Z2luLCBldmVudCwgcGx1Z2luW2V2ZW50XVtmaWx0ZXJdKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBhZGQoXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbixcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgKyAnLScgKyBmaWx0ZXIudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luW2V2ZW50XVtmaWx0ZXJdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5bZXZlbnRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGFkZChwbHVnaW4sIGV2ZW50LCBwbHVnaW5bZXZlbnRdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmhhc0xpc3RlbmVyID0gT2JqZWN0LmtleXModGhpcy5saXN0ZW5lcnMpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIGFzeW5jIHJ1bkFzeW5jKCkge1xuICAgIHRoaXMucGx1Z2luID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcGx1Z2luID0gdGhpcy5wbHVnaW5zW2ldXG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMucnVuT25Sb290KHBsdWdpbilcbiAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBwcm9taXNlXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucHJlcGFyZVZpc2l0b3JzKClcbiAgICBpZiAodGhpcy5oYXNMaXN0ZW5lcikge1xuICAgICAgbGV0IHJvb3QgPSB0aGlzLnJlc3VsdC5yb290XG4gICAgICB3aGlsZSAoIXJvb3RbaXNDbGVhbl0pIHtcbiAgICAgICAgcm9vdFtpc0NsZWFuXSA9IHRydWVcbiAgICAgICAgbGV0IHN0YWNrID0gW3RvU3RhY2socm9vdCldXG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLnZpc2l0VGljayhzdGFjaylcbiAgICAgICAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhd2FpdCBwcm9taXNlXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGxldCBub2RlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0ubm9kZVxuICAgICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUsIG5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCkge1xuICAgICAgICBmb3IgKGxldCBbcGx1Z2luLCB2aXNpdG9yXSBvZiB0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCkge1xuICAgICAgICAgIHRoaXMucmVzdWx0Lmxhc3RQbHVnaW4gPSBwbHVnaW5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHJvb3QudHlwZSA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgICAgICAgICBsZXQgcm9vdHMgPSByb290Lm5vZGVzLm1hcChzdWJSb290ID0+XG4gICAgICAgICAgICAgICAgdmlzaXRvcihzdWJSb290LCB0aGlzLmhlbHBlcnMpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChyb290cylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF3YWl0IHZpc2l0b3Iocm9vdCwgdGhpcy5oZWxwZXJzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb2Nlc3NlZCA9IHRydWVcbiAgICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKVxuICB9XG5cbiAgcnVuT25Sb290KHBsdWdpbikge1xuICAgIHRoaXMucmVzdWx0Lmxhc3RQbHVnaW4gPSBwbHVnaW5cbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdvYmplY3QnICYmIHBsdWdpbi5PbmNlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdC5yb290LnR5cGUgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgICAgICBsZXQgcm9vdHMgPSB0aGlzLnJlc3VsdC5yb290Lm5vZGVzLm1hcChyb290ID0+XG4gICAgICAgICAgICBwbHVnaW4uT25jZShyb290LCB0aGlzLmhlbHBlcnMpXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKGlzUHJvbWlzZShyb290c1swXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyb290cylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gcm9vdHNcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbHVnaW4uT25jZSh0aGlzLnJlc3VsdC5yb290LCB0aGlzLmhlbHBlcnMpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbih0aGlzLnJlc3VsdC5yb290LCB0aGlzLnJlc3VsdClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlcnJvcilcbiAgICB9XG4gIH1cblxuICBzdHJpbmdpZnkoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHRocm93IHRoaXMuZXJyb3JcbiAgICBpZiAodGhpcy5zdHJpbmdpZmllZCkgcmV0dXJuIHRoaXMucmVzdWx0XG4gICAgdGhpcy5zdHJpbmdpZmllZCA9IHRydWVcblxuICAgIHRoaXMuc3luYygpXG5cbiAgICBsZXQgb3B0cyA9IHRoaXMucmVzdWx0Lm9wdHNcbiAgICBsZXQgc3RyID0gc3RyaW5naWZ5XG4gICAgaWYgKG9wdHMuc3ludGF4KSBzdHIgPSBvcHRzLnN5bnRheC5zdHJpbmdpZnlcbiAgICBpZiAob3B0cy5zdHJpbmdpZmllcikgc3RyID0gb3B0cy5zdHJpbmdpZmllclxuICAgIGlmIChzdHIuc3RyaW5naWZ5KSBzdHIgPSBzdHIuc3RyaW5naWZ5XG5cbiAgICBsZXQgbWFwID0gbmV3IE1hcEdlbmVyYXRvcihzdHIsIHRoaXMucmVzdWx0LnJvb3QsIHRoaXMucmVzdWx0Lm9wdHMpXG4gICAgbGV0IGRhdGEgPSBtYXAuZ2VuZXJhdGUoKVxuICAgIHRoaXMucmVzdWx0LmNzcyA9IGRhdGFbMF1cbiAgICB0aGlzLnJlc3VsdC5tYXAgPSBkYXRhWzFdXG5cbiAgICByZXR1cm4gdGhpcy5yZXN1bHRcbiAgfVxuXG4gIHN5bmMoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHRocm93IHRoaXMuZXJyb3JcbiAgICBpZiAodGhpcy5wcm9jZXNzZWQpIHJldHVybiB0aGlzLnJlc3VsdFxuICAgIHRoaXMucHJvY2Vzc2VkID0gdHJ1ZVxuXG4gICAgaWYgKHRoaXMucHJvY2Vzc2luZykge1xuICAgICAgdGhyb3cgdGhpcy5nZXRBc3luY0Vycm9yKClcbiAgICB9XG5cbiAgICBmb3IgKGxldCBwbHVnaW4gb2YgdGhpcy5wbHVnaW5zKSB7XG4gICAgICBsZXQgcHJvbWlzZSA9IHRoaXMucnVuT25Sb290KHBsdWdpbilcbiAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5nZXRBc3luY0Vycm9yKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByZXBhcmVWaXNpdG9ycygpXG4gICAgaWYgKHRoaXMuaGFzTGlzdGVuZXIpIHtcbiAgICAgIGxldCByb290ID0gdGhpcy5yZXN1bHQucm9vdFxuICAgICAgd2hpbGUgKCFyb290W2lzQ2xlYW5dKSB7XG4gICAgICAgIHJvb3RbaXNDbGVhbl0gPSB0cnVlXG4gICAgICAgIHRoaXMud2Fsa1N5bmMocm9vdClcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCkge1xuICAgICAgICBpZiAocm9vdC50eXBlID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICAgICAgZm9yIChsZXQgc3ViUm9vdCBvZiByb290Lm5vZGVzKSB7XG4gICAgICAgICAgICB0aGlzLnZpc2l0U3luYyh0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCwgc3ViUm9vdClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52aXNpdFN5bmModGhpcy5saXN0ZW5lcnMuT25jZUV4aXQsIHJvb3QpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXN1bHRcbiAgfVxuXG4gIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoJ2Zyb20nIGluIHRoaXMub3B0cykpIHtcbiAgICAgICAgd2Fybk9uY2UoXG4gICAgICAgICAgJ1dpdGhvdXQgYGZyb21gIG9wdGlvbiBQb3N0Q1NTIGNvdWxkIGdlbmVyYXRlIHdyb25nIHNvdXJjZSBtYXAgJyArXG4gICAgICAgICAgICAnYW5kIHdpbGwgbm90IGZpbmQgQnJvd3NlcnNsaXN0IGNvbmZpZy4gU2V0IGl0IHRvIENTUyBmaWxlIHBhdGggJyArXG4gICAgICAgICAgICAnb3IgdG8gYHVuZGVmaW5lZGAgdG8gcHJldmVudCB0aGlzIHdhcm5pbmcuJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFzeW5jKCkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmNzc1xuICB9XG5cbiAgdmlzaXRTeW5jKHZpc2l0b3JzLCBub2RlKSB7XG4gICAgZm9yIChsZXQgW3BsdWdpbiwgdmlzaXRvcl0gb2YgdmlzaXRvcnMpIHtcbiAgICAgIHRoaXMucmVzdWx0Lmxhc3RQbHVnaW4gPSBwbHVnaW5cbiAgICAgIGxldCBwcm9taXNlXG4gICAgICB0cnkge1xuICAgICAgICBwcm9taXNlID0gdmlzaXRvcihub2RlLCB0aGlzLmhlbHBlcnMpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSwgbm9kZS5wcm94eU9mKVxuICAgICAgfVxuICAgICAgaWYgKG5vZGUudHlwZSAhPT0gJ3Jvb3QnICYmIG5vZGUudHlwZSAhPT0gJ2RvY3VtZW50JyAmJiAhbm9kZS5wYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmIChpc1Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgdGhyb3cgdGhpcy5nZXRBc3luY0Vycm9yKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2aXNpdFRpY2soc3RhY2spIHtcbiAgICBsZXQgdmlzaXQgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXVxuICAgIGxldCB7IG5vZGUsIHZpc2l0b3JzIH0gPSB2aXNpdFxuXG4gICAgaWYgKG5vZGUudHlwZSAhPT0gJ3Jvb3QnICYmIG5vZGUudHlwZSAhPT0gJ2RvY3VtZW50JyAmJiAhbm9kZS5wYXJlbnQpIHtcbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodmlzaXRvcnMubGVuZ3RoID4gMCAmJiB2aXNpdC52aXNpdG9ySW5kZXggPCB2aXNpdG9ycy5sZW5ndGgpIHtcbiAgICAgIGxldCBbcGx1Z2luLCB2aXNpdG9yXSA9IHZpc2l0b3JzW3Zpc2l0LnZpc2l0b3JJbmRleF1cbiAgICAgIHZpc2l0LnZpc2l0b3JJbmRleCArPSAxXG4gICAgICBpZiAodmlzaXQudmlzaXRvckluZGV4ID09PSB2aXNpdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgdmlzaXQudmlzaXRvcnMgPSBbXVxuICAgICAgICB2aXNpdC52aXNpdG9ySW5kZXggPSAwXG4gICAgICB9XG4gICAgICB0aGlzLnJlc3VsdC5sYXN0UGx1Z2luID0gcGx1Z2luXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdmlzaXRvcihub2RlLnRvUHJveHkoKSwgdGhpcy5oZWxwZXJzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUsIG5vZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZpc2l0Lml0ZXJhdG9yICE9PSAwKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB2aXNpdC5pdGVyYXRvclxuICAgICAgbGV0IGNoaWxkXG4gICAgICB3aGlsZSAoKGNoaWxkID0gbm9kZS5ub2Rlc1tub2RlLmluZGV4ZXNbaXRlcmF0b3JdXSkpIHtcbiAgICAgICAgbm9kZS5pbmRleGVzW2l0ZXJhdG9yXSArPSAxXG4gICAgICAgIGlmICghY2hpbGRbaXNDbGVhbl0pIHtcbiAgICAgICAgICBjaGlsZFtpc0NsZWFuXSA9IHRydWVcbiAgICAgICAgICBzdGFjay5wdXNoKHRvU3RhY2soY2hpbGQpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2aXNpdC5pdGVyYXRvciA9IDBcbiAgICAgIGRlbGV0ZSBub2RlLmluZGV4ZXNbaXRlcmF0b3JdXG4gICAgfVxuXG4gICAgbGV0IGV2ZW50cyA9IHZpc2l0LmV2ZW50c1xuICAgIHdoaWxlICh2aXNpdC5ldmVudEluZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IGV2ZW50ID0gZXZlbnRzW3Zpc2l0LmV2ZW50SW5kZXhdXG4gICAgICB2aXNpdC5ldmVudEluZGV4ICs9IDFcbiAgICAgIGlmIChldmVudCA9PT0gQ0hJTERSRU4pIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZXMgJiYgbm9kZS5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICBub2RlW2lzQ2xlYW5dID0gdHJ1ZVxuICAgICAgICAgIHZpc2l0Lml0ZXJhdG9yID0gbm9kZS5nZXRJdGVyYXRvcigpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICB2aXNpdC52aXNpdG9ycyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgc3RhY2sucG9wKClcbiAgfVxuXG4gIHdhbGtTeW5jKG5vZGUpIHtcbiAgICBub2RlW2lzQ2xlYW5dID0gdHJ1ZVxuICAgIGxldCBldmVudHMgPSBnZXRFdmVudHMobm9kZSlcbiAgICBmb3IgKGxldCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIGlmIChldmVudCA9PT0gQ0hJTERSRU4pIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZXMpIHtcbiAgICAgICAgICBub2RlLmVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGlsZFtpc0NsZWFuXSkgdGhpcy53YWxrU3luYyhjaGlsZClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdmlzaXRvcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudF1cbiAgICAgICAgaWYgKHZpc2l0b3JzKSB7XG4gICAgICAgICAgaWYgKHRoaXMudmlzaXRTeW5jKHZpc2l0b3JzLCBub2RlLnRvUHJveHkoKSkpIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd2FybmluZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luYygpLndhcm5pbmdzKClcbiAgfVxuXG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpLmNvbnRlbnRcbiAgfVxuXG4gIGdldCBjc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KCkuY3NzXG4gIH1cblxuICBnZXQgbWFwKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpLm1hcFxuICB9XG5cbiAgZ2V0IG1lc3NhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLnN5bmMoKS5tZXNzYWdlc1xuICB9XG5cbiAgZ2V0IG9wdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0Lm9wdHNcbiAgfVxuXG4gIGdldCBwcm9jZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LnByb2Nlc3NvclxuICB9XG5cbiAgZ2V0IHJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3luYygpLnJvb3RcbiAgfVxuXG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gJ0xhenlSZXN1bHQnXG4gIH1cbn1cblxuTGF6eVJlc3VsdC5yZWdpc3RlclBvc3Rjc3MgPSBkZXBlbmRhbnQgPT4ge1xuICBwb3N0Y3NzID0gZGVwZW5kYW50XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGF6eVJlc3VsdFxuTGF6eVJlc3VsdC5kZWZhdWx0ID0gTGF6eVJlc3VsdFxuXG5Sb290LnJlZ2lzdGVyTGF6eVJlc3VsdChMYXp5UmVzdWx0KVxuRG9jdW1lbnQucmVnaXN0ZXJMYXp5UmVzdWx0KExhenlSZXN1bHQpXG4iLCIndXNlIHN0cmljdCdcblxubGV0IGxpc3QgPSB7XG4gIGNvbW1hKHN0cmluZykge1xuICAgIHJldHVybiBsaXN0LnNwbGl0KHN0cmluZywgWycsJ10sIHRydWUpXG4gIH0sXG5cbiAgc3BhY2Uoc3RyaW5nKSB7XG4gICAgbGV0IHNwYWNlcyA9IFsnICcsICdcXG4nLCAnXFx0J11cbiAgICByZXR1cm4gbGlzdC5zcGxpdChzdHJpbmcsIHNwYWNlcylcbiAgfSxcblxuICBzcGxpdChzdHJpbmcsIHNlcGFyYXRvcnMsIGxhc3QpIHtcbiAgICBsZXQgYXJyYXkgPSBbXVxuICAgIGxldCBjdXJyZW50ID0gJydcbiAgICBsZXQgc3BsaXQgPSBmYWxzZVxuXG4gICAgbGV0IGZ1bmMgPSAwXG4gICAgbGV0IGluUXVvdGUgPSBmYWxzZVxuICAgIGxldCBwcmV2UXVvdGUgPSAnJ1xuICAgIGxldCBlc2NhcGUgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgbGV0dGVyIG9mIHN0cmluZykge1xuICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICBlc2NhcGUgPSBmYWxzZVxuICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICdcXFxcJykge1xuICAgICAgICBlc2NhcGUgPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKGluUXVvdGUpIHtcbiAgICAgICAgaWYgKGxldHRlciA9PT0gcHJldlF1b3RlKSB7XG4gICAgICAgICAgaW5RdW90ZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGV0dGVyID09PSAnXCInIHx8IGxldHRlciA9PT0gXCInXCIpIHtcbiAgICAgICAgaW5RdW90ZSA9IHRydWVcbiAgICAgICAgcHJldlF1b3RlID0gbGV0dGVyXG4gICAgICB9IGVsc2UgaWYgKGxldHRlciA9PT0gJygnKSB7XG4gICAgICAgIGZ1bmMgKz0gMVxuICAgICAgfSBlbHNlIGlmIChsZXR0ZXIgPT09ICcpJykge1xuICAgICAgICBpZiAoZnVuYyA+IDApIGZ1bmMgLT0gMVxuICAgICAgfSBlbHNlIGlmIChmdW5jID09PSAwKSB7XG4gICAgICAgIGlmIChzZXBhcmF0b3JzLmluY2x1ZGVzKGxldHRlcikpIHNwbGl0ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc3BsaXQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQgIT09ICcnKSBhcnJheS5wdXNoKGN1cnJlbnQudHJpbSgpKVxuICAgICAgICBjdXJyZW50ID0gJydcbiAgICAgICAgc3BsaXQgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudCArPSBsZXR0ZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobGFzdCB8fCBjdXJyZW50ICE9PSAnJykgYXJyYXkucHVzaChjdXJyZW50LnRyaW0oKSlcbiAgICByZXR1cm4gYXJyYXlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3Rcbmxpc3QuZGVmYXVsdCA9IGxpc3RcbiIsIid1c2Ugc3RyaWN0J1xuXG5sZXQgeyBTb3VyY2VNYXBDb25zdW1lciwgU291cmNlTWFwR2VuZXJhdG9yIH0gPSByZXF1aXJlKCdzb3VyY2UtbWFwLWpzJylcbmxldCB7IGRpcm5hbWUsIHJlbGF0aXZlLCByZXNvbHZlLCBzZXAgfSA9IHJlcXVpcmUoJ3BhdGgnKVxubGV0IHsgcGF0aFRvRmlsZVVSTCB9ID0gcmVxdWlyZSgndXJsJylcblxubGV0IElucHV0ID0gcmVxdWlyZSgnLi9pbnB1dCcpXG5cbmxldCBzb3VyY2VNYXBBdmFpbGFibGUgPSBCb29sZWFuKFNvdXJjZU1hcENvbnN1bWVyICYmIFNvdXJjZU1hcEdlbmVyYXRvcilcbmxldCBwYXRoQXZhaWxhYmxlID0gQm9vbGVhbihkaXJuYW1lICYmIHJlc29sdmUgJiYgcmVsYXRpdmUgJiYgc2VwKVxuXG5jbGFzcyBNYXBHZW5lcmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmdpZnksIHJvb3QsIG9wdHMsIGNzc1N0cmluZykge1xuICAgIHRoaXMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG4gICAgdGhpcy5tYXBPcHRzID0gb3B0cy5tYXAgfHwge31cbiAgICB0aGlzLnJvb3QgPSByb290XG4gICAgdGhpcy5vcHRzID0gb3B0c1xuICAgIHRoaXMuY3NzID0gY3NzU3RyaW5nXG4gICAgdGhpcy5vcmlnaW5hbENTUyA9IGNzc1N0cmluZ1xuICAgIHRoaXMudXNlc0ZpbGVVcmxzID0gIXRoaXMubWFwT3B0cy5mcm9tICYmIHRoaXMubWFwT3B0cy5hYnNvbHV0ZVxuXG4gICAgdGhpcy5tZW1vaXplZEZpbGVVUkxzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5tZW1vaXplZFBhdGhzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5tZW1vaXplZFVSTHMgPSBuZXcgTWFwKClcbiAgfVxuXG4gIGFkZEFubm90YXRpb24oKSB7XG4gICAgbGV0IGNvbnRlbnRcblxuICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcbiAgICAgIGNvbnRlbnQgPVxuICAgICAgICAnZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgdGhpcy50b0Jhc2U2NCh0aGlzLm1hcC50b1N0cmluZygpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5tYXBPcHRzLmFubm90YXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbih0aGlzLm9wdHMudG8sIHRoaXMucm9vdClcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCA9IHRoaXMub3V0cHV0RmlsZSgpICsgJy5tYXAnXG4gICAgfVxuICAgIGxldCBlb2wgPSAnXFxuJ1xuICAgIGlmICh0aGlzLmNzcy5pbmNsdWRlcygnXFxyXFxuJykpIGVvbCA9ICdcXHJcXG4nXG5cbiAgICB0aGlzLmNzcyArPSBlb2wgKyAnLyojIHNvdXJjZU1hcHBpbmdVUkw9JyArIGNvbnRlbnQgKyAnICovJ1xuICB9XG5cbiAgYXBwbHlQcmV2TWFwcygpIHtcbiAgICBmb3IgKGxldCBwcmV2IG9mIHRoaXMucHJldmlvdXMoKSkge1xuICAgICAgbGV0IGZyb20gPSB0aGlzLnRvVXJsKHRoaXMucGF0aChwcmV2LmZpbGUpKVxuICAgICAgbGV0IHJvb3QgPSBwcmV2LnJvb3QgfHwgZGlybmFtZShwcmV2LmZpbGUpXG4gICAgICBsZXQgbWFwXG5cbiAgICAgIGlmICh0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIG1hcCA9IG5ldyBTb3VyY2VNYXBDb25zdW1lcihwcmV2LnRleHQpXG4gICAgICAgIGlmIChtYXAuc291cmNlc0NvbnRlbnQpIHtcbiAgICAgICAgICBtYXAuc291cmNlc0NvbnRlbnQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcCA9IHByZXYuY29uc3VtZXIoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcC5hcHBseVNvdXJjZU1hcChtYXAsIGZyb20sIHRoaXMudG9VcmwodGhpcy5wYXRoKHJvb3QpKSlcbiAgICB9XG4gIH1cblxuICBjbGVhckFubm90YXRpb24oKSB7XG4gICAgaWYgKHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uID09PSBmYWxzZSkgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICBsZXQgbm9kZVxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMucm9vdC5ub2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBub2RlID0gdGhpcy5yb290Lm5vZGVzW2ldXG4gICAgICAgIGlmIChub2RlLnR5cGUgIT09ICdjb21tZW50JykgY29udGludWVcbiAgICAgICAgaWYgKG5vZGUudGV4dC5pbmRleE9mKCcjIHNvdXJjZU1hcHBpbmdVUkw9JykgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnJvb3QucmVtb3ZlQ2hpbGQoaSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jc3MpIHtcbiAgICAgIHRoaXMuY3NzID0gdGhpcy5jc3MucmVwbGFjZSgvXFxuKj9cXC9cXCojW1xcU1xcc10qP1xcKlxcLyQvZ20sICcnKVxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlKCkge1xuICAgIHRoaXMuY2xlYXJBbm5vdGF0aW9uKClcbiAgICBpZiAocGF0aEF2YWlsYWJsZSAmJiBzb3VyY2VNYXBBdmFpbGFibGUgJiYgdGhpcy5pc01hcCgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZU1hcCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXN1bHQgPSAnJ1xuICAgICAgdGhpcy5zdHJpbmdpZnkodGhpcy5yb290LCBpID0+IHtcbiAgICAgICAgcmVzdWx0ICs9IGlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gW3Jlc3VsdF1cbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZU1hcCgpIHtcbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICB0aGlzLmdlbmVyYXRlU3RyaW5nKClcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJldmlvdXMoKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2aW91cygpWzBdLmNvbnN1bWVyKClcbiAgICAgIHByZXYuZmlsZSA9IHRoaXMub3V0cHV0RmlsZSgpXG4gICAgICB0aGlzLm1hcCA9IFNvdXJjZU1hcEdlbmVyYXRvci5mcm9tU291cmNlTWFwKHByZXYsIHtcbiAgICAgICAgaWdub3JlSW52YWxpZE1hcHBpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IFNvdXJjZU1hcEdlbmVyYXRvcih7XG4gICAgICAgIGZpbGU6IHRoaXMub3V0cHV0RmlsZSgpLFxuICAgICAgICBpZ25vcmVJbnZhbGlkTWFwcGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICBnZW5lcmF0ZWQ6IHsgY29sdW1uOiAwLCBsaW5lOiAxIH0sXG4gICAgICAgIG9yaWdpbmFsOiB7IGNvbHVtbjogMCwgbGluZTogMSB9LFxuICAgICAgICBzb3VyY2U6IHRoaXMub3B0cy5mcm9tXG4gICAgICAgICAgPyB0aGlzLnRvVXJsKHRoaXMucGF0aCh0aGlzLm9wdHMuZnJvbSkpXG4gICAgICAgICAgOiAnPG5vIHNvdXJjZT4nXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU291cmNlc0NvbnRlbnQoKSkgdGhpcy5zZXRTb3VyY2VzQ29udGVudCgpXG4gICAgaWYgKHRoaXMucm9vdCAmJiB0aGlzLnByZXZpb3VzKCkubGVuZ3RoID4gMCkgdGhpcy5hcHBseVByZXZNYXBzKClcbiAgICBpZiAodGhpcy5pc0Fubm90YXRpb24oKSkgdGhpcy5hZGRBbm5vdGF0aW9uKClcblxuICAgIGlmICh0aGlzLmlzSW5saW5lKCkpIHtcbiAgICAgIHJldHVybiBbdGhpcy5jc3NdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbdGhpcy5jc3MsIHRoaXMubWFwXVxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlU3RyaW5nKCkge1xuICAgIHRoaXMuY3NzID0gJydcbiAgICB0aGlzLm1hcCA9IG5ldyBTb3VyY2VNYXBHZW5lcmF0b3Ioe1xuICAgICAgZmlsZTogdGhpcy5vdXRwdXRGaWxlKCksXG4gICAgICBpZ25vcmVJbnZhbGlkTWFwcGluZzogdHJ1ZVxuICAgIH0pXG5cbiAgICBsZXQgbGluZSA9IDFcbiAgICBsZXQgY29sdW1uID0gMVxuXG4gICAgbGV0IG5vU291cmNlID0gJzxubyBzb3VyY2U+J1xuICAgIGxldCBtYXBwaW5nID0ge1xuICAgICAgZ2VuZXJhdGVkOiB7IGNvbHVtbjogMCwgbGluZTogMCB9LFxuICAgICAgb3JpZ2luYWw6IHsgY29sdW1uOiAwLCBsaW5lOiAwIH0sXG4gICAgICBzb3VyY2U6ICcnXG4gICAgfVxuXG4gICAgbGV0IGxpbmVzLCBsYXN0XG4gICAgdGhpcy5zdHJpbmdpZnkodGhpcy5yb290LCAoc3RyLCBub2RlLCB0eXBlKSA9PiB7XG4gICAgICB0aGlzLmNzcyArPSBzdHJcblxuICAgICAgaWYgKG5vZGUgJiYgdHlwZSAhPT0gJ2VuZCcpIHtcbiAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQubGluZSA9IGxpbmVcbiAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQuY29sdW1uID0gY29sdW1uIC0gMVxuICAgICAgICBpZiAobm9kZS5zb3VyY2UgJiYgbm9kZS5zb3VyY2Uuc3RhcnQpIHtcbiAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHRoaXMuc291cmNlUGF0aChub2RlKVxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwubGluZSA9IG5vZGUuc291cmNlLnN0YXJ0LmxpbmVcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmNvbHVtbiA9IG5vZGUuc291cmNlLnN0YXJ0LmNvbHVtbiAtIDFcbiAgICAgICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKG1hcHBpbmcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBub1NvdXJjZVxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWwubGluZSA9IDFcbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmNvbHVtbiA9IDBcbiAgICAgICAgICB0aGlzLm1hcC5hZGRNYXBwaW5nKG1hcHBpbmcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGluZXMgPSBzdHIubWF0Y2goL1xcbi9nKVxuICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgIGxpbmUgKz0gbGluZXMubGVuZ3RoXG4gICAgICAgIGxhc3QgPSBzdHIubGFzdEluZGV4T2YoJ1xcbicpXG4gICAgICAgIGNvbHVtbiA9IHN0ci5sZW5ndGggLSBsYXN0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4gKz0gc3RyLmxlbmd0aFxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZSAmJiB0eXBlICE9PSAnc3RhcnQnKSB7XG4gICAgICAgIGxldCBwID0gbm9kZS5wYXJlbnQgfHwgeyByYXdzOiB7fSB9XG4gICAgICAgIGxldCBjaGlsZGxlc3MgPVxuICAgICAgICAgIG5vZGUudHlwZSA9PT0gJ2RlY2wnIHx8IChub2RlLnR5cGUgPT09ICdhdHJ1bGUnICYmICFub2RlLm5vZGVzKVxuICAgICAgICBpZiAoIWNoaWxkbGVzcyB8fCBub2RlICE9PSBwLmxhc3QgfHwgcC5yYXdzLnNlbWljb2xvbikge1xuICAgICAgICAgIGlmIChub2RlLnNvdXJjZSAmJiBub2RlLnNvdXJjZS5lbmQpIHtcbiAgICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gdGhpcy5zb3VyY2VQYXRoKG5vZGUpXG4gICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsLmxpbmUgPSBub2RlLnNvdXJjZS5lbmQubGluZVxuICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5jb2x1bW4gPSBub2RlLnNvdXJjZS5lbmQuY29sdW1uIC0gMVxuICAgICAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQubGluZSA9IGxpbmVcbiAgICAgICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkLmNvbHVtbiA9IGNvbHVtbiAtIDJcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZE1hcHBpbmcobWFwcGluZylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBub1NvdXJjZVxuICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5saW5lID0gMVxuICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbC5jb2x1bW4gPSAwXG4gICAgICAgICAgICBtYXBwaW5nLmdlbmVyYXRlZC5saW5lID0gbGluZVxuICAgICAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWQuY29sdW1uID0gY29sdW1uIC0gMVxuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTWFwcGluZyhtYXBwaW5nKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpc0Fubm90YXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNJbmxpbmUoKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvblxuICAgIH1cbiAgICBpZiAodGhpcy5wcmV2aW91cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKS5zb21lKGkgPT4gaS5hbm5vdGF0aW9uKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaXNJbmxpbmUoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuaW5saW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXMubWFwT3B0cy5pbmxpbmVcbiAgICB9XG5cbiAgICBsZXQgYW5ub3RhdGlvbiA9IHRoaXMubWFwT3B0cy5hbm5vdGF0aW9uXG4gICAgaWYgKHR5cGVvZiBhbm5vdGF0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBhbm5vdGF0aW9uICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmV2aW91cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXMoKS5zb21lKGkgPT4gaS5pbmxpbmUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpc01hcCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5tYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gISF0aGlzLm9wdHMubWFwXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkubGVuZ3RoID4gMFxuICB9XG5cbiAgaXNTb3VyY2VzQ29udGVudCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubWFwT3B0cy5zb3VyY2VzQ29udGVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcE9wdHMuc291cmNlc0NvbnRlbnRcbiAgICB9XG4gICAgaWYgKHRoaXMucHJldmlvdXMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzKCkuc29tZShpID0+IGkud2l0aENvbnRlbnQoKSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG91dHB1dEZpbGUoKSB7XG4gICAgaWYgKHRoaXMub3B0cy50bykge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aCh0aGlzLm9wdHMudG8pXG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdHMuZnJvbSkge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aCh0aGlzLm9wdHMuZnJvbSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd0by5jc3MnXG4gICAgfVxuICB9XG5cbiAgcGF0aChmaWxlKSB7XG4gICAgaWYgKHRoaXMubWFwT3B0cy5hYnNvbHV0ZSkgcmV0dXJuIGZpbGVcbiAgICBpZiAoZmlsZS5jaGFyQ29kZUF0KDApID09PSA2MCAvKiBgPGAgKi8pIHJldHVybiBmaWxlXG4gICAgaWYgKC9eXFx3KzpcXC9cXC8vLnRlc3QoZmlsZSkpIHJldHVybiBmaWxlXG4gICAgbGV0IGNhY2hlZCA9IHRoaXMubWVtb2l6ZWRQYXRocy5nZXQoZmlsZSlcbiAgICBpZiAoY2FjaGVkKSByZXR1cm4gY2FjaGVkXG5cbiAgICBsZXQgZnJvbSA9IHRoaXMub3B0cy50byA/IGRpcm5hbWUodGhpcy5vcHRzLnRvKSA6ICcuJ1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm1hcE9wdHMuYW5ub3RhdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGZyb20gPSBkaXJuYW1lKHJlc29sdmUoZnJvbSwgdGhpcy5tYXBPcHRzLmFubm90YXRpb24pKVxuICAgIH1cblxuICAgIGxldCBwYXRoID0gcmVsYXRpdmUoZnJvbSwgZmlsZSlcbiAgICB0aGlzLm1lbW9pemVkUGF0aHMuc2V0KGZpbGUsIHBhdGgpXG5cbiAgICByZXR1cm4gcGF0aFxuICB9XG5cbiAgcHJldmlvdXMoKSB7XG4gICAgaWYgKCF0aGlzLnByZXZpb3VzTWFwcykge1xuICAgICAgdGhpcy5wcmV2aW91c01hcHMgPSBbXVxuICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICB0aGlzLnJvb3Qud2Fsayhub2RlID0+IHtcbiAgICAgICAgICBpZiAobm9kZS5zb3VyY2UgJiYgbm9kZS5zb3VyY2UuaW5wdXQubWFwKSB7XG4gICAgICAgICAgICBsZXQgbWFwID0gbm9kZS5zb3VyY2UuaW5wdXQubWFwXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJldmlvdXNNYXBzLmluY2x1ZGVzKG1hcCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c01hcHMucHVzaChtYXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGlucHV0ID0gbmV3IElucHV0KHRoaXMub3JpZ2luYWxDU1MsIHRoaXMub3B0cylcbiAgICAgICAgaWYgKGlucHV0Lm1hcCkgdGhpcy5wcmV2aW91c01hcHMucHVzaChpbnB1dC5tYXApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNNYXBzXG4gIH1cblxuICBzZXRTb3VyY2VzQ29udGVudCgpIHtcbiAgICBsZXQgYWxyZWFkeSA9IHt9XG4gICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgdGhpcy5yb290LndhbGsobm9kZSA9PiB7XG4gICAgICAgIGlmIChub2RlLnNvdXJjZSkge1xuICAgICAgICAgIGxldCBmcm9tID0gbm9kZS5zb3VyY2UuaW5wdXQuZnJvbVxuICAgICAgICAgIGlmIChmcm9tICYmICFhbHJlYWR5W2Zyb21dKSB7XG4gICAgICAgICAgICBhbHJlYWR5W2Zyb21dID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IGZyb21VcmwgPSB0aGlzLnVzZXNGaWxlVXJsc1xuICAgICAgICAgICAgICA/IHRoaXMudG9GaWxlVXJsKGZyb20pXG4gICAgICAgICAgICAgIDogdGhpcy50b1VybCh0aGlzLnBhdGgoZnJvbSkpXG4gICAgICAgICAgICB0aGlzLm1hcC5zZXRTb3VyY2VDb250ZW50KGZyb21VcmwsIG5vZGUuc291cmNlLmlucHV0LmNzcylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLmNzcykge1xuICAgICAgbGV0IGZyb20gPSB0aGlzLm9wdHMuZnJvbVxuICAgICAgICA/IHRoaXMudG9VcmwodGhpcy5wYXRoKHRoaXMub3B0cy5mcm9tKSlcbiAgICAgICAgOiAnPG5vIHNvdXJjZT4nXG4gICAgICB0aGlzLm1hcC5zZXRTb3VyY2VDb250ZW50KGZyb20sIHRoaXMuY3NzKVxuICAgIH1cbiAgfVxuXG4gIHNvdXJjZVBhdGgobm9kZSkge1xuICAgIGlmICh0aGlzLm1hcE9wdHMuZnJvbSkge1xuICAgICAgcmV0dXJuIHRoaXMudG9VcmwodGhpcy5tYXBPcHRzLmZyb20pXG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZXNGaWxlVXJscykge1xuICAgICAgcmV0dXJuIHRoaXMudG9GaWxlVXJsKG5vZGUuc291cmNlLmlucHV0LmZyb20pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnRvVXJsKHRoaXMucGF0aChub2RlLnNvdXJjZS5pbnB1dC5mcm9tKSlcbiAgICB9XG4gIH1cblxuICB0b0Jhc2U2NChzdHIpIHtcbiAgICBpZiAoQnVmZmVyKSB7XG4gICAgICByZXR1cm4gQnVmZmVyLmZyb20oc3RyKS50b1N0cmluZygnYmFzZTY0JylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSlcbiAgICB9XG4gIH1cblxuICB0b0ZpbGVVcmwocGF0aCkge1xuICAgIGxldCBjYWNoZWQgPSB0aGlzLm1lbW9pemVkRmlsZVVSTHMuZ2V0KHBhdGgpXG4gICAgaWYgKGNhY2hlZCkgcmV0dXJuIGNhY2hlZFxuXG4gICAgaWYgKHBhdGhUb0ZpbGVVUkwpIHtcbiAgICAgIGxldCBmaWxlVVJMID0gcGF0aFRvRmlsZVVSTChwYXRoKS50b1N0cmluZygpXG4gICAgICB0aGlzLm1lbW9pemVkRmlsZVVSTHMuc2V0KHBhdGgsIGZpbGVVUkwpXG5cbiAgICAgIHJldHVybiBmaWxlVVJMXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2BtYXAuYWJzb2x1dGVgIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgUG9zdENTUyBidWlsZCdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0b1VybChwYXRoKSB7XG4gICAgbGV0IGNhY2hlZCA9IHRoaXMubWVtb2l6ZWRVUkxzLmdldChwYXRoKVxuICAgIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWRcblxuICAgIGlmIChzZXAgPT09ICdcXFxcJykge1xuICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpXG4gICAgfVxuXG4gICAgbGV0IHVybCA9IGVuY29kZVVSSShwYXRoKS5yZXBsYWNlKC9bIz9dL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgICB0aGlzLm1lbW9pemVkVVJMcy5zZXQocGF0aCwgdXJsKVxuXG4gICAgcmV0dXJuIHVybFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwR2VuZXJhdG9yXG4iLCIndXNlIHN0cmljdCdcblxubGV0IE1hcEdlbmVyYXRvciA9IHJlcXVpcmUoJy4vbWFwLWdlbmVyYXRvcicpXG5sZXQgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKVxubGV0IHdhcm5PbmNlID0gcmVxdWlyZSgnLi93YXJuLW9uY2UnKVxubGV0IHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpXG5jb25zdCBSZXN1bHQgPSByZXF1aXJlKCcuL3Jlc3VsdCcpXG5cbmNsYXNzIE5vV29ya1Jlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHByb2Nlc3NvciwgY3NzLCBvcHRzKSB7XG4gICAgY3NzID0gY3NzLnRvU3RyaW5nKClcbiAgICB0aGlzLnN0cmluZ2lmaWVkID0gZmFsc2VcblxuICAgIHRoaXMuX3Byb2Nlc3NvciA9IHByb2Nlc3NvclxuICAgIHRoaXMuX2NzcyA9IGNzc1xuICAgIHRoaXMuX29wdHMgPSBvcHRzXG4gICAgdGhpcy5fbWFwID0gdW5kZWZpbmVkXG4gICAgbGV0IHJvb3RcblxuICAgIGxldCBzdHIgPSBzdHJpbmdpZnlcbiAgICB0aGlzLnJlc3VsdCA9IG5ldyBSZXN1bHQodGhpcy5fcHJvY2Vzc29yLCByb290LCB0aGlzLl9vcHRzKVxuICAgIHRoaXMucmVzdWx0LmNzcyA9IGNzc1xuXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucmVzdWx0LCAncm9vdCcsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYucm9vdFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgbWFwID0gbmV3IE1hcEdlbmVyYXRvcihzdHIsIHJvb3QsIHRoaXMuX29wdHMsIGNzcylcbiAgICBpZiAobWFwLmlzTWFwKCkpIHtcbiAgICAgIGxldCBbZ2VuZXJhdGVkQ1NTLCBnZW5lcmF0ZWRNYXBdID0gbWFwLmdlbmVyYXRlKClcbiAgICAgIGlmIChnZW5lcmF0ZWRDU1MpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQuY3NzID0gZ2VuZXJhdGVkQ1NTXG4gICAgICB9XG4gICAgICBpZiAoZ2VuZXJhdGVkTWFwKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm1hcCA9IGdlbmVyYXRlZE1hcFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXAuY2xlYXJBbm5vdGF0aW9uKClcbiAgICAgIHRoaXMucmVzdWx0LmNzcyA9IG1hcC5jc3NcbiAgICB9XG4gIH1cblxuICBhc3luYygpIHtcbiAgICBpZiAodGhpcy5lcnJvcikgcmV0dXJuIFByb21pc2UucmVqZWN0KHRoaXMuZXJyb3IpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc3VsdClcbiAgfVxuXG4gIGNhdGNoKG9uUmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5hc3luYygpLmNhdGNoKG9uUmVqZWN0ZWQpXG4gIH1cblxuICBmaW5hbGx5KG9uRmluYWxseSkge1xuICAgIHJldHVybiB0aGlzLmFzeW5jKCkudGhlbihvbkZpbmFsbHksIG9uRmluYWxseSlcbiAgfVxuXG4gIHN5bmMoKSB7XG4gICAgaWYgKHRoaXMuZXJyb3IpIHRocm93IHRoaXMuZXJyb3JcbiAgICByZXR1cm4gdGhpcy5yZXN1bHRcbiAgfVxuXG4gIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoJ2Zyb20nIGluIHRoaXMuX29wdHMpKSB7XG4gICAgICAgIHdhcm5PbmNlKFxuICAgICAgICAgICdXaXRob3V0IGBmcm9tYCBvcHRpb24gUG9zdENTUyBjb3VsZCBnZW5lcmF0ZSB3cm9uZyBzb3VyY2UgbWFwICcgK1xuICAgICAgICAgICAgJ2FuZCB3aWxsIG5vdCBmaW5kIEJyb3dzZXJzbGlzdCBjb25maWcuIFNldCBpdCB0byBDU1MgZmlsZSBwYXRoICcgK1xuICAgICAgICAgICAgJ29yIHRvIGB1bmRlZmluZWRgIHRvIHByZXZlbnQgdGhpcyB3YXJuaW5nLidcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFzeW5jKCkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9jc3NcbiAgfVxuXG4gIHdhcm5pbmdzKCkge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0LmNzc1xuICB9XG5cbiAgZ2V0IGNzcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQuY3NzXG4gIH1cblxuICBnZXQgbWFwKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5tYXBcbiAgfVxuXG4gIGdldCBtZXNzYWdlcygpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIGdldCBvcHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5vcHRzXG4gIH1cblxuICBnZXQgcHJvY2Vzc29yKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdC5wcm9jZXNzb3JcbiAgfVxuXG4gIGdldCByb290KCkge1xuICAgIGlmICh0aGlzLl9yb290KSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm9vdFxuICAgIH1cblxuICAgIGxldCByb290XG4gICAgbGV0IHBhcnNlciA9IHBhcnNlXG5cbiAgICB0cnkge1xuICAgICAgcm9vdCA9IHBhcnNlcih0aGlzLl9jc3MsIHRoaXMuX29wdHMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvclxuICAgIH1cblxuICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICB0aHJvdyB0aGlzLmVycm9yXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSByb290XG4gICAgICByZXR1cm4gcm9vdFxuICAgIH1cbiAgfVxuXG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gJ05vV29ya1Jlc3VsdCdcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV29ya1Jlc3VsdFxuTm9Xb3JrUmVzdWx0LmRlZmF1bHQgPSBOb1dvcmtSZXN1bHRcbiIsIid1c2Ugc3RyaWN0J1xuXG5sZXQgeyBpc0NsZWFuLCBteSB9ID0gcmVxdWlyZSgnLi9zeW1ib2xzJylcbmxldCBDc3NTeW50YXhFcnJvciA9IHJlcXVpcmUoJy4vY3NzLXN5bnRheC1lcnJvcicpXG5sZXQgU3RyaW5naWZpZXIgPSByZXF1aXJlKCcuL3N0cmluZ2lmaWVyJylcbmxldCBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpXG5cbmZ1bmN0aW9uIGNsb25lTm9kZShvYmosIHBhcmVudCkge1xuICBsZXQgY2xvbmVkID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpXG5cbiAgZm9yIChsZXQgaSBpbiBvYmopIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSB7XG4gICAgICAvKiBjOCBpZ25vcmUgbmV4dCAyICovXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoaSA9PT0gJ3Byb3h5Q2FjaGUnKSBjb250aW51ZVxuICAgIGxldCB2YWx1ZSA9IG9ialtpXVxuICAgIGxldCB0eXBlID0gdHlwZW9mIHZhbHVlXG5cbiAgICBpZiAoaSA9PT0gJ3BhcmVudCcgJiYgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwYXJlbnQpIGNsb25lZFtpXSA9IHBhcmVudFxuICAgIH0gZWxzZSBpZiAoaSA9PT0gJ3NvdXJjZScpIHtcbiAgICAgIGNsb25lZFtpXSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY2xvbmVkW2ldID0gdmFsdWUubWFwKGogPT4gY2xvbmVOb2RlKGosIGNsb25lZCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkgdmFsdWUgPSBjbG9uZU5vZGUodmFsdWUpXG4gICAgICBjbG9uZWRbaV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbG9uZWRcbn1cblxuY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzID0ge30pIHtcbiAgICB0aGlzLnJhd3MgPSB7fVxuICAgIHRoaXNbaXNDbGVhbl0gPSBmYWxzZVxuICAgIHRoaXNbbXldID0gdHJ1ZVxuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBkZWZhdWx0cykge1xuICAgICAgaWYgKG5hbWUgPT09ICdub2RlcycpIHtcbiAgICAgICAgdGhpcy5ub2RlcyA9IFtdXG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgZGVmYXVsdHNbbmFtZV0pIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG5vZGUuY2xvbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kKG5vZGUuY2xvbmUoKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmQobm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbbmFtZV0gPSBkZWZhdWx0c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFRvRXJyb3IoZXJyb3IpIHtcbiAgICBlcnJvci5wb3N0Y3NzTm9kZSA9IHRoaXNcbiAgICBpZiAoZXJyb3Iuc3RhY2sgJiYgdGhpcy5zb3VyY2UgJiYgL1xcblxcc3s0fWF0IC8udGVzdChlcnJvci5zdGFjaykpIHtcbiAgICAgIGxldCBzID0gdGhpcy5zb3VyY2VcbiAgICAgIGVycm9yLnN0YWNrID0gZXJyb3Iuc3RhY2sucmVwbGFjZShcbiAgICAgICAgL1xcblxcc3s0fWF0IC8sXG4gICAgICAgIGAkJiR7cy5pbnB1dC5mcm9tfToke3Muc3RhcnQubGluZX06JHtzLnN0YXJ0LmNvbHVtbn0kJmBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yXG4gIH1cblxuICBhZnRlcihhZGQpIHtcbiAgICB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcih0aGlzLCBhZGQpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGFzc2lnbihvdmVycmlkZXMgPSB7fSkge1xuICAgIGZvciAobGV0IG5hbWUgaW4gb3ZlcnJpZGVzKSB7XG4gICAgICB0aGlzW25hbWVdID0gb3ZlcnJpZGVzW25hbWVdXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBiZWZvcmUoYWRkKSB7XG4gICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIGFkZClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2xlYW5SYXdzKGtlZXBCZXR3ZWVuKSB7XG4gICAgZGVsZXRlIHRoaXMucmF3cy5iZWZvcmVcbiAgICBkZWxldGUgdGhpcy5yYXdzLmFmdGVyXG4gICAgaWYgKCFrZWVwQmV0d2VlbikgZGVsZXRlIHRoaXMucmF3cy5iZXR3ZWVuXG4gIH1cblxuICBjbG9uZShvdmVycmlkZXMgPSB7fSkge1xuICAgIGxldCBjbG9uZWQgPSBjbG9uZU5vZGUodGhpcylcbiAgICBmb3IgKGxldCBuYW1lIGluIG92ZXJyaWRlcykge1xuICAgICAgY2xvbmVkW25hbWVdID0gb3ZlcnJpZGVzW25hbWVdXG4gICAgfVxuICAgIHJldHVybiBjbG9uZWRcbiAgfVxuXG4gIGNsb25lQWZ0ZXIob3ZlcnJpZGVzID0ge30pIHtcbiAgICBsZXQgY2xvbmVkID0gdGhpcy5jbG9uZShvdmVycmlkZXMpXG4gICAgdGhpcy5wYXJlbnQuaW5zZXJ0QWZ0ZXIodGhpcywgY2xvbmVkKVxuICAgIHJldHVybiBjbG9uZWRcbiAgfVxuXG4gIGNsb25lQmVmb3JlKG92ZXJyaWRlcyA9IHt9KSB7XG4gICAgbGV0IGNsb25lZCA9IHRoaXMuY2xvbmUob3ZlcnJpZGVzKVxuICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLCBjbG9uZWQpXG4gICAgcmV0dXJuIGNsb25lZFxuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICBsZXQgeyBlbmQsIHN0YXJ0IH0gPSB0aGlzLnJhbmdlQnkob3B0cylcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5pbnB1dC5lcnJvcihcbiAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgeyBjb2x1bW46IHN0YXJ0LmNvbHVtbiwgbGluZTogc3RhcnQubGluZSB9LFxuICAgICAgICB7IGNvbHVtbjogZW5kLmNvbHVtbiwgbGluZTogZW5kLmxpbmUgfSxcbiAgICAgICAgb3B0c1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IENzc1N5bnRheEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBnZXRQcm94eVByb2Nlc3NvcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0KG5vZGUsIHByb3ApIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdwcm94eU9mJykge1xuICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3Jvb3QnKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IG5vZGUucm9vdCgpLnRvUHJveHkoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBub2RlW3Byb3BdXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHNldChub2RlLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICBpZiAobm9kZVtwcm9wXSA9PT0gdmFsdWUpIHJldHVybiB0cnVlXG4gICAgICAgIG5vZGVbcHJvcF0gPSB2YWx1ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcCA9PT0gJ3Byb3AnIHx8XG4gICAgICAgICAgcHJvcCA9PT0gJ3ZhbHVlJyB8fFxuICAgICAgICAgIHByb3AgPT09ICduYW1lJyB8fFxuICAgICAgICAgIHByb3AgPT09ICdwYXJhbXMnIHx8XG4gICAgICAgICAgcHJvcCA9PT0gJ2ltcG9ydGFudCcgfHxcbiAgICAgICAgICAvKiBjOCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIHByb3AgPT09ICd0ZXh0J1xuICAgICAgICApIHtcbiAgICAgICAgICBub2RlLm1hcmtEaXJ0eSgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtYXJrRGlydHkoKSB7XG4gICAgaWYgKHRoaXNbaXNDbGVhbl0pIHtcbiAgICAgIHRoaXNbaXNDbGVhbl0gPSBmYWxzZVxuICAgICAgbGV0IG5leHQgPSB0aGlzXG4gICAgICB3aGlsZSAoKG5leHQgPSBuZXh0LnBhcmVudCkpIHtcbiAgICAgICAgbmV4dFtpc0NsZWFuXSA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50KSByZXR1cm4gdW5kZWZpbmVkXG4gICAgbGV0IGluZGV4ID0gdGhpcy5wYXJlbnQuaW5kZXgodGhpcylcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQubm9kZXNbaW5kZXggKyAxXVxuICB9XG5cbiAgcG9zaXRpb25CeShvcHRzLCBzdHJpbmdSZXByZXNlbnRhdGlvbikge1xuICAgIGxldCBwb3MgPSB0aGlzLnNvdXJjZS5zdGFydFxuICAgIGlmIChvcHRzLmluZGV4KSB7XG4gICAgICBwb3MgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKG9wdHMuaW5kZXgsIHN0cmluZ1JlcHJlc2VudGF0aW9uKVxuICAgIH0gZWxzZSBpZiAob3B0cy53b3JkKSB7XG4gICAgICBzdHJpbmdSZXByZXNlbnRhdGlvbiA9IHRoaXMudG9TdHJpbmcoKVxuICAgICAgbGV0IGluZGV4ID0gc3RyaW5nUmVwcmVzZW50YXRpb24uaW5kZXhPZihvcHRzLndvcmQpXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSBwb3MgPSB0aGlzLnBvc2l0aW9uSW5zaWRlKGluZGV4LCBzdHJpbmdSZXByZXNlbnRhdGlvbilcbiAgICB9XG4gICAgcmV0dXJuIHBvc1xuICB9XG5cbiAgcG9zaXRpb25JbnNpZGUoaW5kZXgsIHN0cmluZ1JlcHJlc2VudGF0aW9uKSB7XG4gICAgbGV0IHN0cmluZyA9IHN0cmluZ1JlcHJlc2VudGF0aW9uIHx8IHRoaXMudG9TdHJpbmcoKVxuICAgIGxldCBjb2x1bW4gPSB0aGlzLnNvdXJjZS5zdGFydC5jb2x1bW5cbiAgICBsZXQgbGluZSA9IHRoaXMuc291cmNlLnN0YXJ0LmxpbmVcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXg7IGkrKykge1xuICAgICAgaWYgKHN0cmluZ1tpXSA9PT0gJ1xcbicpIHtcbiAgICAgICAgY29sdW1uID0gMVxuICAgICAgICBsaW5lICs9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiArPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29sdW1uLCBsaW5lIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIGxldCBpbmRleCA9IHRoaXMucGFyZW50LmluZGV4KHRoaXMpXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm5vZGVzW2luZGV4IC0gMV1cbiAgfVxuXG4gIHJhbmdlQnkob3B0cykge1xuICAgIGxldCBzdGFydCA9IHtcbiAgICAgIGNvbHVtbjogdGhpcy5zb3VyY2Uuc3RhcnQuY29sdW1uLFxuICAgICAgbGluZTogdGhpcy5zb3VyY2Uuc3RhcnQubGluZVxuICAgIH1cbiAgICBsZXQgZW5kID0gdGhpcy5zb3VyY2UuZW5kXG4gICAgICA/IHtcbiAgICAgICAgY29sdW1uOiB0aGlzLnNvdXJjZS5lbmQuY29sdW1uICsgMSxcbiAgICAgICAgbGluZTogdGhpcy5zb3VyY2UuZW5kLmxpbmVcbiAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICBjb2x1bW46IHN0YXJ0LmNvbHVtbiArIDEsXG4gICAgICAgIGxpbmU6IHN0YXJ0LmxpbmVcbiAgICAgIH1cblxuICAgIGlmIChvcHRzLndvcmQpIHtcbiAgICAgIGxldCBzdHJpbmdSZXByZXNlbnRhdGlvbiA9IHRoaXMudG9TdHJpbmcoKVxuICAgICAgbGV0IGluZGV4ID0gc3RyaW5nUmVwcmVzZW50YXRpb24uaW5kZXhPZihvcHRzLndvcmQpXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHN0YXJ0ID0gdGhpcy5wb3NpdGlvbkluc2lkZShpbmRleCwgc3RyaW5nUmVwcmVzZW50YXRpb24pXG4gICAgICAgIGVuZCA9IHRoaXMucG9zaXRpb25JbnNpZGUoaW5kZXggKyBvcHRzLndvcmQubGVuZ3RoLCBzdHJpbmdSZXByZXNlbnRhdGlvbilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdHMuc3RhcnQpIHtcbiAgICAgICAgc3RhcnQgPSB7XG4gICAgICAgICAgY29sdW1uOiBvcHRzLnN0YXJ0LmNvbHVtbixcbiAgICAgICAgICBsaW5lOiBvcHRzLnN0YXJ0LmxpbmVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcHRzLmluZGV4KSB7XG4gICAgICAgIHN0YXJ0ID0gdGhpcy5wb3NpdGlvbkluc2lkZShvcHRzLmluZGV4KVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5lbmQpIHtcbiAgICAgICAgZW5kID0ge1xuICAgICAgICAgIGNvbHVtbjogb3B0cy5lbmQuY29sdW1uLFxuICAgICAgICAgIGxpbmU6IG9wdHMuZW5kLmxpbmVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5lbmRJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZW5kID0gdGhpcy5wb3NpdGlvbkluc2lkZShvcHRzLmVuZEluZGV4KVxuICAgICAgfSBlbHNlIGlmIChvcHRzLmluZGV4KSB7XG4gICAgICAgIGVuZCA9IHRoaXMucG9zaXRpb25JbnNpZGUob3B0cy5pbmRleCArIDEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZW5kLmxpbmUgPCBzdGFydC5saW5lIHx8XG4gICAgICAoZW5kLmxpbmUgPT09IHN0YXJ0LmxpbmUgJiYgZW5kLmNvbHVtbiA8PSBzdGFydC5jb2x1bW4pXG4gICAgKSB7XG4gICAgICBlbmQgPSB7IGNvbHVtbjogc3RhcnQuY29sdW1uICsgMSwgbGluZTogc3RhcnQubGluZSB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZW5kLCBzdGFydCB9XG4gIH1cblxuICByYXcocHJvcCwgZGVmYXVsdFR5cGUpIHtcbiAgICBsZXQgc3RyID0gbmV3IFN0cmluZ2lmaWVyKClcbiAgICByZXR1cm4gc3RyLnJhdyh0aGlzLCBwcm9wLCBkZWZhdWx0VHlwZSlcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpXG4gICAgfVxuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHJlcGxhY2VXaXRoKC4uLm5vZGVzKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICBsZXQgYm9va21hcmsgPSB0aGlzXG4gICAgICBsZXQgZm91bmRTZWxmID0gZmFsc2VcbiAgICAgIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMpIHtcbiAgICAgICAgICBmb3VuZFNlbGYgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoZm91bmRTZWxmKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuaW5zZXJ0QWZ0ZXIoYm9va21hcmssIG5vZGUpXG4gICAgICAgICAgYm9va21hcmsgPSBub2RlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKGJvb2ttYXJrLCBub2RlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZm91bmRTZWxmKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcm9vdCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpc1xuICAgIHdoaWxlIChyZXN1bHQucGFyZW50ICYmIHJlc3VsdC5wYXJlbnQudHlwZSAhPT0gJ2RvY3VtZW50Jykge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnBhcmVudFxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICB0b0pTT04oXywgaW5wdXRzKSB7XG4gICAgbGV0IGZpeGVkID0ge31cbiAgICBsZXQgZW1pdElucHV0cyA9IGlucHV0cyA9PSBudWxsXG4gICAgaW5wdXRzID0gaW5wdXRzIHx8IG5ldyBNYXAoKVxuICAgIGxldCBpbnB1dHNOZXh0SW5kZXggPSAwXG5cbiAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsIG5hbWUpKSB7XG4gICAgICAgIC8qIGM4IGlnbm9yZSBuZXh0IDIgKi9cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lID09PSAncGFyZW50JyB8fCBuYW1lID09PSAncHJveHlDYWNoZScpIGNvbnRpbnVlXG4gICAgICBsZXQgdmFsdWUgPSB0aGlzW25hbWVdXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBmaXhlZFtuYW1lXSA9IHZhbHVlLm1hcChpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGkgPT09ICdvYmplY3QnICYmIGkudG9KU09OKSB7XG4gICAgICAgICAgICByZXR1cm4gaS50b0pTT04obnVsbCwgaW5wdXRzKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS50b0pTT04pIHtcbiAgICAgICAgZml4ZWRbbmFtZV0gPSB2YWx1ZS50b0pTT04obnVsbCwgaW5wdXRzKVxuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnc291cmNlJykge1xuICAgICAgICBsZXQgaW5wdXRJZCA9IGlucHV0cy5nZXQodmFsdWUuaW5wdXQpXG4gICAgICAgIGlmIChpbnB1dElkID09IG51bGwpIHtcbiAgICAgICAgICBpbnB1dElkID0gaW5wdXRzTmV4dEluZGV4XG4gICAgICAgICAgaW5wdXRzLnNldCh2YWx1ZS5pbnB1dCwgaW5wdXRzTmV4dEluZGV4KVxuICAgICAgICAgIGlucHV0c05leHRJbmRleCsrXG4gICAgICAgIH1cbiAgICAgICAgZml4ZWRbbmFtZV0gPSB7XG4gICAgICAgICAgZW5kOiB2YWx1ZS5lbmQsXG4gICAgICAgICAgaW5wdXRJZCxcbiAgICAgICAgICBzdGFydDogdmFsdWUuc3RhcnRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZml4ZWRbbmFtZV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbWl0SW5wdXRzKSB7XG4gICAgICBmaXhlZC5pbnB1dHMgPSBbLi4uaW5wdXRzLmtleXMoKV0ubWFwKGlucHV0ID0+IGlucHV0LnRvSlNPTigpKVxuICAgIH1cblxuICAgIHJldHVybiBmaXhlZFxuICB9XG5cbiAgdG9Qcm94eSgpIHtcbiAgICBpZiAoIXRoaXMucHJveHlDYWNoZSkge1xuICAgICAgdGhpcy5wcm94eUNhY2hlID0gbmV3IFByb3h5KHRoaXMsIHRoaXMuZ2V0UHJveHlQcm9jZXNzb3IoKSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucHJveHlDYWNoZVxuICB9XG5cbiAgdG9TdHJpbmcoc3RyaW5naWZpZXIgPSBzdHJpbmdpZnkpIHtcbiAgICBpZiAoc3RyaW5naWZpZXIuc3RyaW5naWZ5KSBzdHJpbmdpZmllciA9IHN0cmluZ2lmaWVyLnN0cmluZ2lmeVxuICAgIGxldCByZXN1bHQgPSAnJ1xuICAgIHN0cmluZ2lmaWVyKHRoaXMsIGkgPT4ge1xuICAgICAgcmVzdWx0ICs9IGlcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHdhcm4ocmVzdWx0LCB0ZXh0LCBvcHRzKSB7XG4gICAgbGV0IGRhdGEgPSB7IG5vZGU6IHRoaXMgfVxuICAgIGZvciAobGV0IGkgaW4gb3B0cykgZGF0YVtpXSA9IG9wdHNbaV1cbiAgICByZXR1cm4gcmVzdWx0Lndhcm4odGV4dCwgZGF0YSlcbiAgfVxuXG4gIGdldCBwcm94eU9mKCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb2RlXG5Ob2RlLmRlZmF1bHQgPSBOb2RlXG4iLCIndXNlIHN0cmljdCdcblxubGV0IENvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29udGFpbmVyJylcbmxldCBQYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcicpXG5sZXQgSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0JylcblxuZnVuY3Rpb24gcGFyc2UoY3NzLCBvcHRzKSB7XG4gIGxldCBpbnB1dCA9IG5ldyBJbnB1dChjc3MsIG9wdHMpXG4gIGxldCBwYXJzZXIgPSBuZXcgUGFyc2VyKGlucHV0KVxuICB0cnkge1xuICAgIHBhcnNlci5wYXJzZSgpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ0Nzc1N5bnRheEVycm9yJyAmJiBvcHRzICYmIG9wdHMuZnJvbSkge1xuICAgICAgICBpZiAoL1xcLnNjc3MkL2kudGVzdChvcHRzLmZyb20pKSB7XG4gICAgICAgICAgZS5tZXNzYWdlICs9XG4gICAgICAgICAgICAnXFxuWW91IHRyaWVkIHRvIHBhcnNlIFNDU1Mgd2l0aCAnICtcbiAgICAgICAgICAgICd0aGUgc3RhbmRhcmQgQ1NTIHBhcnNlcjsgJyArXG4gICAgICAgICAgICAndHJ5IGFnYWluIHdpdGggdGhlIHBvc3Rjc3Mtc2NzcyBwYXJzZXInXG4gICAgICAgIH0gZWxzZSBpZiAoL1xcLnNhc3MvaS50ZXN0KG9wdHMuZnJvbSkpIHtcbiAgICAgICAgICBlLm1lc3NhZ2UgKz1cbiAgICAgICAgICAgICdcXG5Zb3UgdHJpZWQgdG8gcGFyc2UgU2FzcyB3aXRoICcgK1xuICAgICAgICAgICAgJ3RoZSBzdGFuZGFyZCBDU1MgcGFyc2VyOyAnICtcbiAgICAgICAgICAgICd0cnkgYWdhaW4gd2l0aCB0aGUgcG9zdGNzcy1zYXNzIHBhcnNlcidcbiAgICAgICAgfSBlbHNlIGlmICgvXFwubGVzcyQvaS50ZXN0KG9wdHMuZnJvbSkpIHtcbiAgICAgICAgICBlLm1lc3NhZ2UgKz1cbiAgICAgICAgICAgICdcXG5Zb3UgdHJpZWQgdG8gcGFyc2UgTGVzcyB3aXRoICcgK1xuICAgICAgICAgICAgJ3RoZSBzdGFuZGFyZCBDU1MgcGFyc2VyOyAnICtcbiAgICAgICAgICAgICd0cnkgYWdhaW4gd2l0aCB0aGUgcG9zdGNzcy1sZXNzIHBhcnNlcidcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlXG4gIH1cblxuICByZXR1cm4gcGFyc2VyLnJvb3Rcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxucGFyc2UuZGVmYXVsdCA9IHBhcnNlXG5cbkNvbnRhaW5lci5yZWdpc3RlclBhcnNlKHBhcnNlKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmxldCBEZWNsYXJhdGlvbiA9IHJlcXVpcmUoJy4vZGVjbGFyYXRpb24nKVxubGV0IHRva2VuaXplciA9IHJlcXVpcmUoJy4vdG9rZW5pemUnKVxubGV0IENvbW1lbnQgPSByZXF1aXJlKCcuL2NvbW1lbnQnKVxubGV0IEF0UnVsZSA9IHJlcXVpcmUoJy4vYXQtcnVsZScpXG5sZXQgUm9vdCA9IHJlcXVpcmUoJy4vcm9vdCcpXG5sZXQgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpXG5cbmNvbnN0IFNBRkVfQ09NTUVOVF9ORUlHSEJPUiA9IHtcbiAgZW1wdHk6IHRydWUsXG4gIHNwYWNlOiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbmRMYXN0V2l0aFBvc2l0aW9uKHRva2Vucykge1xuICBmb3IgKGxldCBpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IHRva2VuID0gdG9rZW5zW2ldXG4gICAgbGV0IHBvcyA9IHRva2VuWzNdIHx8IHRva2VuWzJdXG4gICAgaWYgKHBvcykgcmV0dXJuIHBvc1xuICB9XG59XG5cbmNsYXNzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0XG5cbiAgICB0aGlzLnJvb3QgPSBuZXcgUm9vdCgpXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5yb290XG4gICAgdGhpcy5zcGFjZXMgPSAnJ1xuICAgIHRoaXMuc2VtaWNvbG9uID0gZmFsc2VcblxuICAgIHRoaXMuY3JlYXRlVG9rZW5pemVyKClcbiAgICB0aGlzLnJvb3Quc291cmNlID0geyBpbnB1dCwgc3RhcnQ6IHsgY29sdW1uOiAxLCBsaW5lOiAxLCBvZmZzZXQ6IDAgfSB9XG4gIH1cblxuICBhdHJ1bGUodG9rZW4pIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBBdFJ1bGUoKVxuICAgIG5vZGUubmFtZSA9IHRva2VuWzFdLnNsaWNlKDEpXG4gICAgaWYgKG5vZGUubmFtZSA9PT0gJycpIHtcbiAgICAgIHRoaXMudW5uYW1lZEF0cnVsZShub2RlLCB0b2tlbilcbiAgICB9XG4gICAgdGhpcy5pbml0KG5vZGUsIHRva2VuWzJdKVxuXG4gICAgbGV0IHR5cGVcbiAgICBsZXQgcHJldlxuICAgIGxldCBzaGlmdFxuICAgIGxldCBsYXN0ID0gZmFsc2VcbiAgICBsZXQgb3BlbiA9IGZhbHNlXG4gICAgbGV0IHBhcmFtcyA9IFtdXG4gICAgbGV0IGJyYWNrZXRzID0gW11cblxuICAgIHdoaWxlICghdGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCkpIHtcbiAgICAgIHRva2VuID0gdGhpcy50b2tlbml6ZXIubmV4dFRva2VuKClcbiAgICAgIHR5cGUgPSB0b2tlblswXVxuXG4gICAgICBpZiAodHlwZSA9PT0gJygnIHx8IHR5cGUgPT09ICdbJykge1xuICAgICAgICBicmFja2V0cy5wdXNoKHR5cGUgPT09ICcoJyA/ICcpJyA6ICddJylcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3snICYmIGJyYWNrZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYnJhY2tldHMucHVzaCgnfScpXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IGJyYWNrZXRzW2JyYWNrZXRzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIGJyYWNrZXRzLnBvcCgpXG4gICAgICB9XG5cbiAgICAgIGlmIChicmFja2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICc7Jykge1xuICAgICAgICAgIG5vZGUuc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24odG9rZW5bMl0pXG4gICAgICAgICAgbm9kZS5zb3VyY2UuZW5kLm9mZnNldCsrXG4gICAgICAgICAgdGhpcy5zZW1pY29sb24gPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAneycpIHtcbiAgICAgICAgICBvcGVuID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ30nKSB7XG4gICAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzaGlmdCA9IHBhcmFtcy5sZW5ndGggLSAxXG4gICAgICAgICAgICBwcmV2ID0gcGFyYW1zW3NoaWZ0XVxuICAgICAgICAgICAgd2hpbGUgKHByZXYgJiYgcHJldlswXSA9PT0gJ3NwYWNlJykge1xuICAgICAgICAgICAgICBwcmV2ID0gcGFyYW1zWy0tc2hpZnRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgICBub2RlLnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHByZXZbM10gfHwgcHJldlsyXSlcbiAgICAgICAgICAgICAgbm9kZS5zb3VyY2UuZW5kLm9mZnNldCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW5kKHRva2VuKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zLnB1c2godG9rZW4pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKHRva2VuKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCkpIHtcbiAgICAgICAgbGFzdCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlLnJhd3MuYmV0d2VlbiA9IHRoaXMuc3BhY2VzQW5kQ29tbWVudHNGcm9tRW5kKHBhcmFtcylcbiAgICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgICAgbm9kZS5yYXdzLmFmdGVyTmFtZSA9IHRoaXMuc3BhY2VzQW5kQ29tbWVudHNGcm9tU3RhcnQocGFyYW1zKVxuICAgICAgdGhpcy5yYXcobm9kZSwgJ3BhcmFtcycsIHBhcmFtcylcbiAgICAgIGlmIChsYXN0KSB7XG4gICAgICAgIHRva2VuID0gcGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXVxuICAgICAgICBub2RlLnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHRva2VuWzNdIHx8IHRva2VuWzJdKVxuICAgICAgICBub2RlLnNvdXJjZS5lbmQub2Zmc2V0KytcbiAgICAgICAgdGhpcy5zcGFjZXMgPSBub2RlLnJhd3MuYmV0d2VlblxuICAgICAgICBub2RlLnJhd3MuYmV0d2VlbiA9ICcnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUucmF3cy5hZnRlck5hbWUgPSAnJ1xuICAgICAgbm9kZS5wYXJhbXMgPSAnJ1xuICAgIH1cblxuICAgIGlmIChvcGVuKSB7XG4gICAgICBub2RlLm5vZGVzID0gW11cbiAgICAgIHRoaXMuY3VycmVudCA9IG5vZGVcbiAgICB9XG4gIH1cblxuICBjaGVja01pc3NlZFNlbWljb2xvbih0b2tlbnMpIHtcbiAgICBsZXQgY29sb24gPSB0aGlzLmNvbG9uKHRva2VucylcbiAgICBpZiAoY29sb24gPT09IGZhbHNlKSByZXR1cm5cblxuICAgIGxldCBmb3VuZGVkID0gMFxuICAgIGxldCB0b2tlblxuICAgIGZvciAobGV0IGogPSBjb2xvbiAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tqXVxuICAgICAgaWYgKHRva2VuWzBdICE9PSAnc3BhY2UnKSB7XG4gICAgICAgIGZvdW5kZWQgKz0gMVxuICAgICAgICBpZiAoZm91bmRlZCA9PT0gMikgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgdGhlIHRva2VuIGlzIGEgd29yZCwgZS5nLiBgIWltcG9ydGFudGAsIGByZWRgIG9yIGFueSBvdGhlciB2YWxpZCBwcm9wZXJ0eSdzIHZhbHVlLlxuICAgIC8vIFRoZW4gd2UgbmVlZCB0byByZXR1cm4gdGhlIGNvbG9uIGFmdGVyIHRoYXQgd29yZCB0b2tlbi4gWzNdIGlzIHRoZSBcImVuZFwiIGNvbG9uIG9mIHRoYXQgd29yZC5cbiAgICAvLyBBbmQgYmVjYXVzZSB3ZSBuZWVkIGl0IGFmdGVyIHRoYXQgb25lIHdlIGRvICsxIHRvIGdldCB0aGUgbmV4dCBvbmUuXG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgICdNaXNzZWQgc2VtaWNvbG9uJyxcbiAgICAgIHRva2VuWzBdID09PSAnd29yZCcgPyB0b2tlblszXSArIDEgOiB0b2tlblsyXVxuICAgIClcbiAgfVxuXG4gIGNvbG9uKHRva2Vucykge1xuICAgIGxldCBicmFja2V0cyA9IDBcbiAgICBsZXQgdG9rZW4sIHR5cGUsIHByZXZcbiAgICBmb3IgKGxldCBbaSwgZWxlbWVudF0gb2YgdG9rZW5zLmVudHJpZXMoKSkge1xuICAgICAgdG9rZW4gPSBlbGVtZW50XG4gICAgICB0eXBlID0gdG9rZW5bMF1cblxuICAgICAgaWYgKHR5cGUgPT09ICcoJykge1xuICAgICAgICBicmFja2V0cyArPSAxXG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJyknKSB7XG4gICAgICAgIGJyYWNrZXRzIC09IDFcbiAgICAgIH1cbiAgICAgIGlmIChicmFja2V0cyA9PT0gMCAmJiB0eXBlID09PSAnOicpIHtcbiAgICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgICAgdGhpcy5kb3VibGVDb2xvbih0b2tlbilcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2WzBdID09PSAnd29yZCcgJiYgcHJldlsxXSA9PT0gJ3Byb2dpZCcpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJldiA9IHRva2VuXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29tbWVudCh0b2tlbikge1xuICAgIGxldCBub2RlID0gbmV3IENvbW1lbnQoKVxuICAgIHRoaXMuaW5pdChub2RlLCB0b2tlblsyXSlcbiAgICBub2RlLnNvdXJjZS5lbmQgPSB0aGlzLmdldFBvc2l0aW9uKHRva2VuWzNdIHx8IHRva2VuWzJdKVxuICAgIG5vZGUuc291cmNlLmVuZC5vZmZzZXQrK1xuXG4gICAgbGV0IHRleHQgPSB0b2tlblsxXS5zbGljZSgyLCAtMilcbiAgICBpZiAoL15cXHMqJC8udGVzdCh0ZXh0KSkge1xuICAgICAgbm9kZS50ZXh0ID0gJydcbiAgICAgIG5vZGUucmF3cy5sZWZ0ID0gdGV4dFxuICAgICAgbm9kZS5yYXdzLnJpZ2h0ID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1hdGNoID0gdGV4dC5tYXRjaCgvXihcXHMqKShbXl0qXFxTKShcXHMqKSQvKVxuICAgICAgbm9kZS50ZXh0ID0gbWF0Y2hbMl1cbiAgICAgIG5vZGUucmF3cy5sZWZ0ID0gbWF0Y2hbMV1cbiAgICAgIG5vZGUucmF3cy5yaWdodCA9IG1hdGNoWzNdXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlVG9rZW5pemVyKCkge1xuICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyKHRoaXMuaW5wdXQpXG4gIH1cblxuICBkZWNsKHRva2VucywgY3VzdG9tUHJvcGVydHkpIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBEZWNsYXJhdGlvbigpXG4gICAgdGhpcy5pbml0KG5vZGUsIHRva2Vuc1swXVsyXSlcblxuICAgIGxldCBsYXN0ID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVxuICAgIGlmIChsYXN0WzBdID09PSAnOycpIHtcbiAgICAgIHRoaXMuc2VtaWNvbG9uID0gdHJ1ZVxuICAgICAgdG9rZW5zLnBvcCgpXG4gICAgfVxuXG4gICAgbm9kZS5zb3VyY2UuZW5kID0gdGhpcy5nZXRQb3NpdGlvbihcbiAgICAgIGxhc3RbM10gfHwgbGFzdFsyXSB8fCBmaW5kTGFzdFdpdGhQb3NpdGlvbih0b2tlbnMpXG4gICAgKVxuICAgIG5vZGUuc291cmNlLmVuZC5vZmZzZXQrK1xuXG4gICAgd2hpbGUgKHRva2Vuc1swXVswXSAhPT0gJ3dvcmQnKSB7XG4gICAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMSkgdGhpcy51bmtub3duV29yZCh0b2tlbnMpXG4gICAgICBub2RlLnJhd3MuYmVmb3JlICs9IHRva2Vucy5zaGlmdCgpWzFdXG4gICAgfVxuICAgIG5vZGUuc291cmNlLnN0YXJ0ID0gdGhpcy5nZXRQb3NpdGlvbih0b2tlbnNbMF1bMl0pXG5cbiAgICBub2RlLnByb3AgPSAnJ1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBsZXQgdHlwZSA9IHRva2Vuc1swXVswXVxuICAgICAgaWYgKHR5cGUgPT09ICc6JyB8fCB0eXBlID09PSAnc3BhY2UnIHx8IHR5cGUgPT09ICdjb21tZW50Jykge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgbm9kZS5wcm9wICs9IHRva2Vucy5zaGlmdCgpWzFdXG4gICAgfVxuXG4gICAgbm9kZS5yYXdzLmJldHdlZW4gPSAnJ1xuXG4gICAgbGV0IHRva2VuXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zLnNoaWZ0KClcblxuICAgICAgaWYgKHRva2VuWzBdID09PSAnOicpIHtcbiAgICAgICAgbm9kZS5yYXdzLmJldHdlZW4gKz0gdG9rZW5bMV1cbiAgICAgICAgYnJlYWtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0b2tlblswXSA9PT0gJ3dvcmQnICYmIC9cXHcvLnRlc3QodG9rZW5bMV0pKSB7XG4gICAgICAgICAgdGhpcy51bmtub3duV29yZChbdG9rZW5dKVxuICAgICAgICB9XG4gICAgICAgIG5vZGUucmF3cy5iZXR3ZWVuICs9IHRva2VuWzFdXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucHJvcFswXSA9PT0gJ18nIHx8IG5vZGUucHJvcFswXSA9PT0gJyonKSB7XG4gICAgICBub2RlLnJhd3MuYmVmb3JlICs9IG5vZGUucHJvcFswXVxuICAgICAgbm9kZS5wcm9wID0gbm9kZS5wcm9wLnNsaWNlKDEpXG4gICAgfVxuXG4gICAgbGV0IGZpcnN0U3BhY2VzID0gW11cbiAgICBsZXQgbmV4dFxuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBuZXh0ID0gdG9rZW5zWzBdWzBdXG4gICAgICBpZiAobmV4dCAhPT0gJ3NwYWNlJyAmJiBuZXh0ICE9PSAnY29tbWVudCcpIGJyZWFrXG4gICAgICBmaXJzdFNwYWNlcy5wdXNoKHRva2Vucy5zaGlmdCgpKVxuICAgIH1cblxuICAgIHRoaXMucHJlY2hlY2tNaXNzZWRTZW1pY29sb24odG9rZW5zKVxuXG4gICAgZm9yIChsZXQgaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV1cbiAgICAgIGlmICh0b2tlblsxXS50b0xvd2VyQ2FzZSgpID09PSAnIWltcG9ydGFudCcpIHtcbiAgICAgICAgbm9kZS5pbXBvcnRhbnQgPSB0cnVlXG4gICAgICAgIGxldCBzdHJpbmcgPSB0aGlzLnN0cmluZ0Zyb20odG9rZW5zLCBpKVxuICAgICAgICBzdHJpbmcgPSB0aGlzLnNwYWNlc0Zyb21FbmQodG9rZW5zKSArIHN0cmluZ1xuICAgICAgICBpZiAoc3RyaW5nICE9PSAnICFpbXBvcnRhbnQnKSBub2RlLnJhd3MuaW1wb3J0YW50ID0gc3RyaW5nXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2UgaWYgKHRva2VuWzFdLnRvTG93ZXJDYXNlKCkgPT09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgIGxldCBjYWNoZSA9IHRva2Vucy5zbGljZSgwKVxuICAgICAgICBsZXQgc3RyID0gJydcbiAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPiAwOyBqLS0pIHtcbiAgICAgICAgICBsZXQgdHlwZSA9IGNhY2hlW2pdWzBdXG4gICAgICAgICAgaWYgKHN0ci50cmltKCkuaW5kZXhPZignIScpID09PSAwICYmIHR5cGUgIT09ICdzcGFjZScpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIHN0ciA9IGNhY2hlLnBvcCgpWzFdICsgc3RyXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci50cmltKCkuaW5kZXhPZignIScpID09PSAwKSB7XG4gICAgICAgICAgbm9kZS5pbXBvcnRhbnQgPSB0cnVlXG4gICAgICAgICAgbm9kZS5yYXdzLmltcG9ydGFudCA9IHN0clxuICAgICAgICAgIHRva2VucyA9IGNhY2hlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuWzBdICE9PSAnc3BhY2UnICYmIHRva2VuWzBdICE9PSAnY29tbWVudCcpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaGFzV29yZCA9IHRva2Vucy5zb21lKGkgPT4gaVswXSAhPT0gJ3NwYWNlJyAmJiBpWzBdICE9PSAnY29tbWVudCcpXG5cbiAgICBpZiAoaGFzV29yZCkge1xuICAgICAgbm9kZS5yYXdzLmJldHdlZW4gKz0gZmlyc3RTcGFjZXMubWFwKGkgPT4gaVsxXSkuam9pbignJylcbiAgICAgIGZpcnN0U3BhY2VzID0gW11cbiAgICB9XG4gICAgdGhpcy5yYXcobm9kZSwgJ3ZhbHVlJywgZmlyc3RTcGFjZXMuY29uY2F0KHRva2VucyksIGN1c3RvbVByb3BlcnR5KVxuXG4gICAgaWYgKG5vZGUudmFsdWUuaW5jbHVkZXMoJzonKSAmJiAhY3VzdG9tUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuY2hlY2tNaXNzZWRTZW1pY29sb24odG9rZW5zKVxuICAgIH1cbiAgfVxuXG4gIGRvdWJsZUNvbG9uKHRva2VuKSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgICdEb3VibGUgY29sb24nLFxuICAgICAgeyBvZmZzZXQ6IHRva2VuWzJdIH0sXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gKyB0b2tlblsxXS5sZW5ndGggfVxuICAgIClcbiAgfVxuXG4gIGVtcHR5UnVsZSh0b2tlbikge1xuICAgIGxldCBub2RlID0gbmV3IFJ1bGUoKVxuICAgIHRoaXMuaW5pdChub2RlLCB0b2tlblsyXSlcbiAgICBub2RlLnNlbGVjdG9yID0gJydcbiAgICBub2RlLnJhd3MuYmV0d2VlbiA9ICcnXG4gICAgdGhpcy5jdXJyZW50ID0gbm9kZVxuICB9XG5cbiAgZW5kKHRva2VuKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudC5ub2RlcyAmJiB0aGlzLmN1cnJlbnQubm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1cnJlbnQucmF3cy5zZW1pY29sb24gPSB0aGlzLnNlbWljb2xvblxuICAgIH1cbiAgICB0aGlzLnNlbWljb2xvbiA9IGZhbHNlXG5cbiAgICB0aGlzLmN1cnJlbnQucmF3cy5hZnRlciA9ICh0aGlzLmN1cnJlbnQucmF3cy5hZnRlciB8fCAnJykgKyB0aGlzLnNwYWNlc1xuICAgIHRoaXMuc3BhY2VzID0gJydcblxuICAgIGlmICh0aGlzLmN1cnJlbnQucGFyZW50KSB7XG4gICAgICB0aGlzLmN1cnJlbnQuc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24odG9rZW5bMl0pXG4gICAgICB0aGlzLmN1cnJlbnQuc291cmNlLmVuZC5vZmZzZXQrK1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50LnBhcmVudFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuZXhwZWN0ZWRDbG9zZSh0b2tlbilcbiAgICB9XG4gIH1cblxuICBlbmRGaWxlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQucGFyZW50KSB0aGlzLnVuY2xvc2VkQmxvY2soKVxuICAgIGlmICh0aGlzLmN1cnJlbnQubm9kZXMgJiYgdGhpcy5jdXJyZW50Lm5vZGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJyZW50LnJhd3Muc2VtaWNvbG9uID0gdGhpcy5zZW1pY29sb25cbiAgICB9XG4gICAgdGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgPSAodGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXIgfHwgJycpICsgdGhpcy5zcGFjZXNcbiAgICB0aGlzLnJvb3Quc291cmNlLmVuZCA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy50b2tlbml6ZXIucG9zaXRpb24oKSlcbiAgfVxuXG4gIGZyZWVTZW1pY29sb24odG9rZW4pIHtcbiAgICB0aGlzLnNwYWNlcyArPSB0b2tlblsxXVxuICAgIGlmICh0aGlzLmN1cnJlbnQubm9kZXMpIHtcbiAgICAgIGxldCBwcmV2ID0gdGhpcy5jdXJyZW50Lm5vZGVzW3RoaXMuY3VycmVudC5ub2Rlcy5sZW5ndGggLSAxXVxuICAgICAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSAncnVsZScgJiYgIXByZXYucmF3cy5vd25TZW1pY29sb24pIHtcbiAgICAgICAgcHJldi5yYXdzLm93blNlbWljb2xvbiA9IHRoaXMuc3BhY2VzXG4gICAgICAgIHRoaXMuc3BhY2VzID0gJydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBIZWxwZXJzXG5cbiAgZ2V0UG9zaXRpb24ob2Zmc2V0KSB7XG4gICAgbGV0IHBvcyA9IHRoaXMuaW5wdXQuZnJvbU9mZnNldChvZmZzZXQpXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbHVtbjogcG9zLmNvbCxcbiAgICAgIGxpbmU6IHBvcy5saW5lLFxuICAgICAgb2Zmc2V0XG4gICAgfVxuICB9XG5cbiAgaW5pdChub2RlLCBvZmZzZXQpIHtcbiAgICB0aGlzLmN1cnJlbnQucHVzaChub2RlKVxuICAgIG5vZGUuc291cmNlID0ge1xuICAgICAgaW5wdXQ6IHRoaXMuaW5wdXQsXG4gICAgICBzdGFydDogdGhpcy5nZXRQb3NpdGlvbihvZmZzZXQpXG4gICAgfVxuICAgIG5vZGUucmF3cy5iZWZvcmUgPSB0aGlzLnNwYWNlc1xuICAgIHRoaXMuc3BhY2VzID0gJydcbiAgICBpZiAobm9kZS50eXBlICE9PSAnY29tbWVudCcpIHRoaXMuc2VtaWNvbG9uID0gZmFsc2VcbiAgfVxuXG4gIG90aGVyKHN0YXJ0KSB7XG4gICAgbGV0IGVuZCA9IGZhbHNlXG4gICAgbGV0IHR5cGUgPSBudWxsXG4gICAgbGV0IGNvbG9uID0gZmFsc2VcbiAgICBsZXQgYnJhY2tldCA9IG51bGxcbiAgICBsZXQgYnJhY2tldHMgPSBbXVxuICAgIGxldCBjdXN0b21Qcm9wZXJ0eSA9IHN0YXJ0WzFdLnN0YXJ0c1dpdGgoJy0tJylcblxuICAgIGxldCB0b2tlbnMgPSBbXVxuICAgIGxldCB0b2tlbiA9IHN0YXJ0XG4gICAgd2hpbGUgKHRva2VuKSB7XG4gICAgICB0eXBlID0gdG9rZW5bMF1cbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodHlwZSA9PT0gJygnIHx8IHR5cGUgPT09ICdbJykge1xuICAgICAgICBpZiAoIWJyYWNrZXQpIGJyYWNrZXQgPSB0b2tlblxuICAgICAgICBicmFja2V0cy5wdXNoKHR5cGUgPT09ICcoJyA/ICcpJyA6ICddJylcbiAgICAgIH0gZWxzZSBpZiAoY3VzdG9tUHJvcGVydHkgJiYgY29sb24gJiYgdHlwZSA9PT0gJ3snKSB7XG4gICAgICAgIGlmICghYnJhY2tldCkgYnJhY2tldCA9IHRva2VuXG4gICAgICAgIGJyYWNrZXRzLnB1c2goJ30nKVxuICAgICAgfSBlbHNlIGlmIChicmFja2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICc7Jykge1xuICAgICAgICAgIGlmIChjb2xvbikge1xuICAgICAgICAgICAgdGhpcy5kZWNsKHRva2VucywgY3VzdG9tUHJvcGVydHkpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3snKSB7XG4gICAgICAgICAgdGhpcy5ydWxlKHRva2VucylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnfScpIHtcbiAgICAgICAgICB0aGlzLnRva2VuaXplci5iYWNrKHRva2Vucy5wb3AoKSlcbiAgICAgICAgICBlbmQgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnOicpIHtcbiAgICAgICAgICBjb2xvbiA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBicmFja2V0c1ticmFja2V0cy5sZW5ndGggLSAxXSkge1xuICAgICAgICBicmFja2V0cy5wb3AoKVxuICAgICAgICBpZiAoYnJhY2tldHMubGVuZ3RoID09PSAwKSBicmFja2V0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICB0b2tlbiA9IHRoaXMudG9rZW5pemVyLm5leHRUb2tlbigpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9rZW5pemVyLmVuZE9mRmlsZSgpKSBlbmQgPSB0cnVlXG4gICAgaWYgKGJyYWNrZXRzLmxlbmd0aCA+IDApIHRoaXMudW5jbG9zZWRCcmFja2V0KGJyYWNrZXQpXG5cbiAgICBpZiAoZW5kICYmIGNvbG9uKSB7XG4gICAgICBpZiAoIWN1c3RvbVByb3BlcnR5KSB7XG4gICAgICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgdG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdWzBdXG4gICAgICAgICAgaWYgKHRva2VuICE9PSAnc3BhY2UnICYmIHRva2VuICE9PSAnY29tbWVudCcpIGJyZWFrXG4gICAgICAgICAgdGhpcy50b2tlbml6ZXIuYmFjayh0b2tlbnMucG9wKCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGVjbCh0b2tlbnMsIGN1c3RvbVByb3BlcnR5KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVua25vd25Xb3JkKHRva2VucylcbiAgICB9XG4gIH1cblxuICBwYXJzZSgpIHtcbiAgICBsZXQgdG9rZW5cbiAgICB3aGlsZSAoIXRoaXMudG9rZW5pemVyLmVuZE9mRmlsZSgpKSB7XG4gICAgICB0b2tlbiA9IHRoaXMudG9rZW5pemVyLm5leHRUb2tlbigpXG5cbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICAgIHRoaXMuc3BhY2VzICs9IHRva2VuWzFdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICc7JzpcbiAgICAgICAgICB0aGlzLmZyZWVTZW1pY29sb24odG9rZW4pXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICd9JzpcbiAgICAgICAgICB0aGlzLmVuZCh0b2tlbilcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2NvbW1lbnQnOlxuICAgICAgICAgIHRoaXMuY29tbWVudCh0b2tlbilcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ2F0LXdvcmQnOlxuICAgICAgICAgIHRoaXMuYXRydWxlKHRva2VuKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAneyc6XG4gICAgICAgICAgdGhpcy5lbXB0eVJ1bGUodG9rZW4pXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMub3RoZXIodG9rZW4pXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbmRGaWxlKClcbiAgfVxuXG4gIHByZWNoZWNrTWlzc2VkU2VtaWNvbG9uKC8qIHRva2VucyAqLykge1xuICAgIC8vIEhvb2sgZm9yIFNhZmUgUGFyc2VyXG4gIH1cblxuICByYXcobm9kZSwgcHJvcCwgdG9rZW5zLCBjdXN0b21Qcm9wZXJ0eSkge1xuICAgIGxldCB0b2tlbiwgdHlwZVxuICAgIGxldCBsZW5ndGggPSB0b2tlbnMubGVuZ3RoXG4gICAgbGV0IHZhbHVlID0gJydcbiAgICBsZXQgY2xlYW4gPSB0cnVlXG4gICAgbGV0IG5leHQsIHByZXZcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldXG4gICAgICB0eXBlID0gdG9rZW5bMF1cbiAgICAgIGlmICh0eXBlID09PSAnc3BhY2UnICYmIGkgPT09IGxlbmd0aCAtIDEgJiYgIWN1c3RvbVByb3BlcnR5KSB7XG4gICAgICAgIGNsZWFuID0gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICAgIHByZXYgPSB0b2tlbnNbaSAtIDFdID8gdG9rZW5zW2kgLSAxXVswXSA6ICdlbXB0eSdcbiAgICAgICAgbmV4dCA9IHRva2Vuc1tpICsgMV0gPyB0b2tlbnNbaSArIDFdWzBdIDogJ2VtcHR5J1xuICAgICAgICBpZiAoIVNBRkVfQ09NTUVOVF9ORUlHSEJPUltwcmV2XSAmJiAhU0FGRV9DT01NRU5UX05FSUdIQk9SW25leHRdKSB7XG4gICAgICAgICAgaWYgKHZhbHVlLnNsaWNlKC0xKSA9PT0gJywnKSB7XG4gICAgICAgICAgICBjbGVhbiA9IGZhbHNlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlICs9IHRva2VuWzFdXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFuID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgKz0gdG9rZW5bMV1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbGVhbikge1xuICAgICAgbGV0IHJhdyA9IHRva2Vucy5yZWR1Y2UoKGFsbCwgaSkgPT4gYWxsICsgaVsxXSwgJycpXG4gICAgICBub2RlLnJhd3NbcHJvcF0gPSB7IHJhdywgdmFsdWUgfVxuICAgIH1cbiAgICBub2RlW3Byb3BdID0gdmFsdWVcbiAgfVxuXG4gIHJ1bGUodG9rZW5zKSB7XG4gICAgdG9rZW5zLnBvcCgpXG5cbiAgICBsZXQgbm9kZSA9IG5ldyBSdWxlKClcbiAgICB0aGlzLmluaXQobm9kZSwgdG9rZW5zWzBdWzJdKVxuXG4gICAgbm9kZS5yYXdzLmJldHdlZW4gPSB0aGlzLnNwYWNlc0FuZENvbW1lbnRzRnJvbUVuZCh0b2tlbnMpXG4gICAgdGhpcy5yYXcobm9kZSwgJ3NlbGVjdG9yJywgdG9rZW5zKVxuICAgIHRoaXMuY3VycmVudCA9IG5vZGVcbiAgfVxuXG4gIHNwYWNlc0FuZENvbW1lbnRzRnJvbUVuZCh0b2tlbnMpIHtcbiAgICBsZXQgbGFzdFRva2VuVHlwZVxuICAgIGxldCBzcGFjZXMgPSAnJ1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICBsYXN0VG9rZW5UeXBlID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXVswXVxuICAgICAgaWYgKGxhc3RUb2tlblR5cGUgIT09ICdzcGFjZScgJiYgbGFzdFRva2VuVHlwZSAhPT0gJ2NvbW1lbnQnKSBicmVha1xuICAgICAgc3BhY2VzID0gdG9rZW5zLnBvcCgpWzFdICsgc3BhY2VzXG4gICAgfVxuICAgIHJldHVybiBzcGFjZXNcbiAgfVxuXG4gIC8vIEVycm9yc1xuXG4gIHNwYWNlc0FuZENvbW1lbnRzRnJvbVN0YXJ0KHRva2Vucykge1xuICAgIGxldCBuZXh0XG4gICAgbGV0IHNwYWNlcyA9ICcnXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIG5leHQgPSB0b2tlbnNbMF1bMF1cbiAgICAgIGlmIChuZXh0ICE9PSAnc3BhY2UnICYmIG5leHQgIT09ICdjb21tZW50JykgYnJlYWtcbiAgICAgIHNwYWNlcyArPSB0b2tlbnMuc2hpZnQoKVsxXVxuICAgIH1cbiAgICByZXR1cm4gc3BhY2VzXG4gIH1cblxuICBzcGFjZXNGcm9tRW5kKHRva2Vucykge1xuICAgIGxldCBsYXN0VG9rZW5UeXBlXG4gICAgbGV0IHNwYWNlcyA9ICcnXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGgpIHtcbiAgICAgIGxhc3RUb2tlblR5cGUgPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdWzBdXG4gICAgICBpZiAobGFzdFRva2VuVHlwZSAhPT0gJ3NwYWNlJykgYnJlYWtcbiAgICAgIHNwYWNlcyA9IHRva2Vucy5wb3AoKVsxXSArIHNwYWNlc1xuICAgIH1cbiAgICByZXR1cm4gc3BhY2VzXG4gIH1cblxuICBzdHJpbmdGcm9tKHRva2VucywgZnJvbSkge1xuICAgIGxldCByZXN1bHQgPSAnJ1xuICAgIGZvciAobGV0IGkgPSBmcm9tOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gdG9rZW5zW2ldWzFdXG4gICAgfVxuICAgIHRva2Vucy5zcGxpY2UoZnJvbSwgdG9rZW5zLmxlbmd0aCAtIGZyb20pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgdW5jbG9zZWRCbG9jaygpIHtcbiAgICBsZXQgcG9zID0gdGhpcy5jdXJyZW50LnNvdXJjZS5zdGFydFxuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoJ1VuY2xvc2VkIGJsb2NrJywgcG9zLmxpbmUsIHBvcy5jb2x1bW4pXG4gIH1cblxuICB1bmNsb3NlZEJyYWNrZXQoYnJhY2tldCkge1xuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXG4gICAgICAnVW5jbG9zZWQgYnJhY2tldCcsXG4gICAgICB7IG9mZnNldDogYnJhY2tldFsyXSB9LFxuICAgICAgeyBvZmZzZXQ6IGJyYWNrZXRbMl0gKyAxIH1cbiAgICApXG4gIH1cblxuICB1bmV4cGVjdGVkQ2xvc2UodG9rZW4pIHtcbiAgICB0aHJvdyB0aGlzLmlucHV0LmVycm9yKFxuICAgICAgJ1VuZXhwZWN0ZWQgfScsXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSArIDEgfVxuICAgIClcbiAgfVxuXG4gIHVua25vd25Xb3JkKHRva2Vucykge1xuICAgIHRocm93IHRoaXMuaW5wdXQuZXJyb3IoXG4gICAgICAnVW5rbm93biB3b3JkJyxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlbnNbMF1bMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlbnNbMF1bMl0gKyB0b2tlbnNbMF1bMV0ubGVuZ3RoIH1cbiAgICApXG4gIH1cblxuICB1bm5hbWVkQXRydWxlKG5vZGUsIHRva2VuKSB7XG4gICAgdGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcbiAgICAgICdBdC1ydWxlIHdpdGhvdXQgbmFtZScsXG4gICAgICB7IG9mZnNldDogdG9rZW5bMl0gfSxcbiAgICAgIHsgb2Zmc2V0OiB0b2tlblsyXSArIHRva2VuWzFdLmxlbmd0aCB9XG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyXG4iLCIndXNlIHN0cmljdCdcblxubGV0IENzc1N5bnRheEVycm9yID0gcmVxdWlyZSgnLi9jc3Mtc3ludGF4LWVycm9yJylcbmxldCBEZWNsYXJhdGlvbiA9IHJlcXVpcmUoJy4vZGVjbGFyYXRpb24nKVxubGV0IExhenlSZXN1bHQgPSByZXF1aXJlKCcuL2xhenktcmVzdWx0JylcbmxldCBDb250YWluZXIgPSByZXF1aXJlKCcuL2NvbnRhaW5lcicpXG5sZXQgUHJvY2Vzc29yID0gcmVxdWlyZSgnLi9wcm9jZXNzb3InKVxubGV0IHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5JylcbmxldCBmcm9tSlNPTiA9IHJlcXVpcmUoJy4vZnJvbUpTT04nKVxubGV0IERvY3VtZW50ID0gcmVxdWlyZSgnLi9kb2N1bWVudCcpXG5sZXQgV2FybmluZyA9IHJlcXVpcmUoJy4vd2FybmluZycpXG5sZXQgQ29tbWVudCA9IHJlcXVpcmUoJy4vY29tbWVudCcpXG5sZXQgQXRSdWxlID0gcmVxdWlyZSgnLi9hdC1ydWxlJylcbmxldCBSZXN1bHQgPSByZXF1aXJlKCcuL3Jlc3VsdC5qcycpXG5sZXQgSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0JylcbmxldCBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKVxubGV0IGxpc3QgPSByZXF1aXJlKCcuL2xpc3QnKVxubGV0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKVxubGV0IFJvb3QgPSByZXF1aXJlKCcuL3Jvb3QnKVxubGV0IE5vZGUgPSByZXF1aXJlKCcuL25vZGUnKVxuXG5mdW5jdGlvbiBwb3N0Y3NzKC4uLnBsdWdpbnMpIHtcbiAgaWYgKHBsdWdpbnMubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkocGx1Z2luc1swXSkpIHtcbiAgICBwbHVnaW5zID0gcGx1Z2luc1swXVxuICB9XG4gIHJldHVybiBuZXcgUHJvY2Vzc29yKHBsdWdpbnMpXG59XG5cbnBvc3Rjc3MucGx1Z2luID0gZnVuY3Rpb24gcGx1Z2luKG5hbWUsIGluaXRpYWxpemVyKSB7XG4gIGxldCB3YXJuaW5nUHJpbnRlZCA9IGZhbHNlXG4gIGZ1bmN0aW9uIGNyZWF0b3IoLi4uYXJncykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuICYmICF3YXJuaW5nUHJpbnRlZCkge1xuICAgICAgd2FybmluZ1ByaW50ZWQgPSB0cnVlXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBuYW1lICtcbiAgICAgICAgICAnOiBwb3N0Y3NzLnBsdWdpbiB3YXMgZGVwcmVjYXRlZC4gTWlncmF0aW9uIGd1aWRlOlxcbicgK1xuICAgICAgICAgICdodHRwczovL2V2aWxtYXJ0aWFucy5jb20vY2hyb25pY2xlcy9wb3N0Y3NzLTgtcGx1Z2luLW1pZ3JhdGlvbidcbiAgICAgIClcbiAgICAgIGlmIChwcm9jZXNzLmVudi5MQU5HICYmIHByb2Nlc3MuZW52LkxBTkcuc3RhcnRzV2l0aCgnY24nKSkge1xuICAgICAgICAvKiBjOCBpZ25vcmUgbmV4dCA3ICovXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICc6IOmHjOmdoiBwb3N0Y3NzLnBsdWdpbiDooqvlvIPnlKguIOi/geenu+aMh+WNlzpcXG4nICtcbiAgICAgICAgICAgICdodHRwczovL3d3dy53M2N0ZWNoLmNvbS90b3BpYy8yMjI2J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIGxldCB0cmFuc2Zvcm1lciA9IGluaXRpYWxpemVyKC4uLmFyZ3MpXG4gICAgdHJhbnNmb3JtZXIucG9zdGNzc1BsdWdpbiA9IG5hbWVcbiAgICB0cmFuc2Zvcm1lci5wb3N0Y3NzVmVyc2lvbiA9IG5ldyBQcm9jZXNzb3IoKS52ZXJzaW9uXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVyXG4gIH1cblxuICBsZXQgY2FjaGVcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0b3IsICdwb3N0Y3NzJywge1xuICAgIGdldCgpIHtcbiAgICAgIGlmICghY2FjaGUpIGNhY2hlID0gY3JlYXRvcigpXG4gICAgICByZXR1cm4gY2FjaGVcbiAgICB9XG4gIH0pXG5cbiAgY3JlYXRvci5wcm9jZXNzID0gZnVuY3Rpb24gKGNzcywgcHJvY2Vzc09wdHMsIHBsdWdpbk9wdHMpIHtcbiAgICByZXR1cm4gcG9zdGNzcyhbY3JlYXRvcihwbHVnaW5PcHRzKV0pLnByb2Nlc3MoY3NzLCBwcm9jZXNzT3B0cylcbiAgfVxuXG4gIHJldHVybiBjcmVhdG9yXG59XG5cbnBvc3Rjc3Muc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG5wb3N0Y3NzLnBhcnNlID0gcGFyc2VcbnBvc3Rjc3MuZnJvbUpTT04gPSBmcm9tSlNPTlxucG9zdGNzcy5saXN0ID0gbGlzdFxuXG5wb3N0Y3NzLmNvbW1lbnQgPSBkZWZhdWx0cyA9PiBuZXcgQ29tbWVudChkZWZhdWx0cylcbnBvc3Rjc3MuYXRSdWxlID0gZGVmYXVsdHMgPT4gbmV3IEF0UnVsZShkZWZhdWx0cylcbnBvc3Rjc3MuZGVjbCA9IGRlZmF1bHRzID0+IG5ldyBEZWNsYXJhdGlvbihkZWZhdWx0cylcbnBvc3Rjc3MucnVsZSA9IGRlZmF1bHRzID0+IG5ldyBSdWxlKGRlZmF1bHRzKVxucG9zdGNzcy5yb290ID0gZGVmYXVsdHMgPT4gbmV3IFJvb3QoZGVmYXVsdHMpXG5wb3N0Y3NzLmRvY3VtZW50ID0gZGVmYXVsdHMgPT4gbmV3IERvY3VtZW50KGRlZmF1bHRzKVxuXG5wb3N0Y3NzLkNzc1N5bnRheEVycm9yID0gQ3NzU3ludGF4RXJyb3JcbnBvc3Rjc3MuRGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvblxucG9zdGNzcy5Db250YWluZXIgPSBDb250YWluZXJcbnBvc3Rjc3MuUHJvY2Vzc29yID0gUHJvY2Vzc29yXG5wb3N0Y3NzLkRvY3VtZW50ID0gRG9jdW1lbnRcbnBvc3Rjc3MuQ29tbWVudCA9IENvbW1lbnRcbnBvc3Rjc3MuV2FybmluZyA9IFdhcm5pbmdcbnBvc3Rjc3MuQXRSdWxlID0gQXRSdWxlXG5wb3N0Y3NzLlJlc3VsdCA9IFJlc3VsdFxucG9zdGNzcy5JbnB1dCA9IElucHV0XG5wb3N0Y3NzLlJ1bGUgPSBSdWxlXG5wb3N0Y3NzLlJvb3QgPSBSb290XG5wb3N0Y3NzLk5vZGUgPSBOb2RlXG5cbkxhenlSZXN1bHQucmVnaXN0ZXJQb3N0Y3NzKHBvc3Rjc3MpXG5cbm1vZHVsZS5leHBvcnRzID0gcG9zdGNzc1xucG9zdGNzcy5kZWZhdWx0ID0gcG9zdGNzc1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmxldCB7IFNvdXJjZU1hcENvbnN1bWVyLCBTb3VyY2VNYXBHZW5lcmF0b3IgfSA9IHJlcXVpcmUoJ3NvdXJjZS1tYXAtanMnKVxubGV0IHsgZXhpc3RzU3luYywgcmVhZEZpbGVTeW5jIH0gPSByZXF1aXJlKCdmcycpXG5sZXQgeyBkaXJuYW1lLCBqb2luIH0gPSByZXF1aXJlKCdwYXRoJylcblxuZnVuY3Rpb24gZnJvbUJhc2U2NChzdHIpIHtcbiAgaWYgKEJ1ZmZlcikge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShzdHIsICdiYXNlNjQnKS50b1N0cmluZygpXG4gIH0gZWxzZSB7XG4gICAgLyogYzggaWdub3JlIG5leHQgMiAqL1xuICAgIHJldHVybiB3aW5kb3cuYXRvYihzdHIpXG4gIH1cbn1cblxuY2xhc3MgUHJldmlvdXNNYXAge1xuICBjb25zdHJ1Y3Rvcihjc3MsIG9wdHMpIHtcbiAgICBpZiAob3B0cy5tYXAgPT09IGZhbHNlKSByZXR1cm5cbiAgICB0aGlzLmxvYWRBbm5vdGF0aW9uKGNzcylcbiAgICB0aGlzLmlubGluZSA9IHRoaXMuc3RhcnRXaXRoKHRoaXMuYW5ub3RhdGlvbiwgJ2RhdGE6JylcblxuICAgIGxldCBwcmV2ID0gb3B0cy5tYXAgPyBvcHRzLm1hcC5wcmV2IDogdW5kZWZpbmVkXG4gICAgbGV0IHRleHQgPSB0aGlzLmxvYWRNYXAob3B0cy5mcm9tLCBwcmV2KVxuICAgIGlmICghdGhpcy5tYXBGaWxlICYmIG9wdHMuZnJvbSkge1xuICAgICAgdGhpcy5tYXBGaWxlID0gb3B0cy5mcm9tXG4gICAgfVxuICAgIGlmICh0aGlzLm1hcEZpbGUpIHRoaXMucm9vdCA9IGRpcm5hbWUodGhpcy5tYXBGaWxlKVxuICAgIGlmICh0ZXh0KSB0aGlzLnRleHQgPSB0ZXh0XG4gIH1cblxuICBjb25zdW1lcigpIHtcbiAgICBpZiAoIXRoaXMuY29uc3VtZXJDYWNoZSkge1xuICAgICAgdGhpcy5jb25zdW1lckNhY2hlID0gbmV3IFNvdXJjZU1hcENvbnN1bWVyKHRoaXMudGV4dClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uc3VtZXJDYWNoZVxuICB9XG5cbiAgZGVjb2RlSW5saW5lKHRleHQpIHtcbiAgICBsZXQgYmFzZUNoYXJzZXRVcmkgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uO2NoYXJzZXQ9dXRmLT84O2Jhc2U2NCwvXG4gICAgbGV0IGJhc2VVcmkgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uO2Jhc2U2NCwvXG4gICAgbGV0IGNoYXJzZXRVcmkgPSAvXmRhdGE6YXBwbGljYXRpb25cXC9qc29uO2NoYXJzZXQ9dXRmLT84LC9cbiAgICBsZXQgdXJpID0gL15kYXRhOmFwcGxpY2F0aW9uXFwvanNvbiwvXG5cbiAgICBpZiAoY2hhcnNldFVyaS50ZXN0KHRleHQpIHx8IHVyaS50ZXN0KHRleHQpKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHRleHQuc3Vic3RyKFJlZ0V4cC5sYXN0TWF0Y2gubGVuZ3RoKSlcbiAgICB9XG5cbiAgICBpZiAoYmFzZUNoYXJzZXRVcmkudGVzdCh0ZXh0KSB8fCBiYXNlVXJpLnRlc3QodGV4dCkpIHtcbiAgICAgIHJldHVybiBmcm9tQmFzZTY0KHRleHQuc3Vic3RyKFJlZ0V4cC5sYXN0TWF0Y2gubGVuZ3RoKSlcbiAgICB9XG5cbiAgICBsZXQgZW5jb2RpbmcgPSB0ZXh0Lm1hdGNoKC9kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjsoW14sXSspLC8pWzFdXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbnN1cHBvcnRlZCBzb3VyY2UgbWFwIGVuY29kaW5nICcgKyBlbmNvZGluZylcbiAgfVxuXG4gIGdldEFubm90YXRpb25VUkwoc291cmNlTWFwU3RyaW5nKSB7XG4gICAgcmV0dXJuIHNvdXJjZU1hcFN0cmluZy5yZXBsYWNlKC9eXFwvXFwqXFxzKiMgc291cmNlTWFwcGluZ1VSTD0vLCAnJykudHJpbSgpXG4gIH1cblxuICBpc01hcChtYXApIHtcbiAgICBpZiAodHlwZW9mIG1hcCAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgbWFwLm1hcHBpbmdzID09PSAnc3RyaW5nJyB8fFxuICAgICAgdHlwZW9mIG1hcC5fbWFwcGluZ3MgPT09ICdzdHJpbmcnIHx8XG4gICAgICBBcnJheS5pc0FycmF5KG1hcC5zZWN0aW9ucylcbiAgICApXG4gIH1cblxuICBsb2FkQW5ub3RhdGlvbihjc3MpIHtcbiAgICBsZXQgY29tbWVudHMgPSBjc3MubWF0Y2goL1xcL1xcKlxccyojIHNvdXJjZU1hcHBpbmdVUkw9L2dtKVxuICAgIGlmICghY29tbWVudHMpIHJldHVyblxuXG4gICAgLy8gc291cmNlTWFwcGluZ1VSTHMgZnJvbSBjb21tZW50cywgc3RyaW5ncywgZXRjLlxuICAgIGxldCBzdGFydCA9IGNzcy5sYXN0SW5kZXhPZihjb21tZW50cy5wb3AoKSlcbiAgICBsZXQgZW5kID0gY3NzLmluZGV4T2YoJyovJywgc3RhcnQpXG5cbiAgICBpZiAoc3RhcnQgPiAtMSAmJiBlbmQgPiAtMSkge1xuICAgICAgLy8gTG9jYXRlIHRoZSBsYXN0IHNvdXJjZU1hcHBpbmdVUkwgdG8gYXZvaWQgcGlja2luXG4gICAgICB0aGlzLmFubm90YXRpb24gPSB0aGlzLmdldEFubm90YXRpb25VUkwoY3NzLnN1YnN0cmluZyhzdGFydCwgZW5kKSlcbiAgICB9XG4gIH1cblxuICBsb2FkRmlsZShwYXRoKSB7XG4gICAgdGhpcy5yb290ID0gZGlybmFtZShwYXRoKVxuICAgIGlmIChleGlzdHNTeW5jKHBhdGgpKSB7XG4gICAgICB0aGlzLm1hcEZpbGUgPSBwYXRoXG4gICAgICByZXR1cm4gcmVhZEZpbGVTeW5jKHBhdGgsICd1dGYtOCcpLnRvU3RyaW5nKCkudHJpbSgpXG4gICAgfVxuICB9XG5cbiAgbG9hZE1hcChmaWxlLCBwcmV2KSB7XG4gICAgaWYgKHByZXYgPT09IGZhbHNlKSByZXR1cm4gZmFsc2VcblxuICAgIGlmIChwcmV2KSB7XG4gICAgICBpZiAodHlwZW9mIHByZXYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwcmV2XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcmV2ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxldCBwcmV2UGF0aCA9IHByZXYoZmlsZSlcbiAgICAgICAgaWYgKHByZXZQYXRoKSB7XG4gICAgICAgICAgbGV0IG1hcCA9IHRoaXMubG9hZEZpbGUocHJldlBhdGgpXG4gICAgICAgICAgaWYgKCFtYXApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgJ1VuYWJsZSB0byBsb2FkIHByZXZpb3VzIHNvdXJjZSBtYXA6ICcgKyBwcmV2UGF0aC50b1N0cmluZygpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtYXBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwcmV2IGluc3RhbmNlb2YgU291cmNlTWFwQ29uc3VtZXIpIHtcbiAgICAgICAgcmV0dXJuIFNvdXJjZU1hcEdlbmVyYXRvci5mcm9tU291cmNlTWFwKHByZXYpLnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAocHJldiBpbnN0YW5jZW9mIFNvdXJjZU1hcEdlbmVyYXRvcikge1xuICAgICAgICByZXR1cm4gcHJldi50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNNYXAocHJldikpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHByZXYpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ1Vuc3VwcG9ydGVkIHByZXZpb3VzIHNvdXJjZSBtYXAgZm9ybWF0OiAnICsgcHJldi50b1N0cmluZygpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5saW5lKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWNvZGVJbmxpbmUodGhpcy5hbm5vdGF0aW9uKVxuICAgIH0gZWxzZSBpZiAodGhpcy5hbm5vdGF0aW9uKSB7XG4gICAgICBsZXQgbWFwID0gdGhpcy5hbm5vdGF0aW9uXG4gICAgICBpZiAoZmlsZSkgbWFwID0gam9pbihkaXJuYW1lKGZpbGUpLCBtYXApXG4gICAgICByZXR1cm4gdGhpcy5sb2FkRmlsZShtYXApXG4gICAgfVxuICB9XG5cbiAgc3RhcnRXaXRoKHN0cmluZywgc3RhcnQpIHtcbiAgICBpZiAoIXN0cmluZykgcmV0dXJuIGZhbHNlXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHIoMCwgc3RhcnQubGVuZ3RoKSA9PT0gc3RhcnRcbiAgfVxuXG4gIHdpdGhDb250ZW50KCkge1xuICAgIHJldHVybiAhIShcbiAgICAgIHRoaXMuY29uc3VtZXIoKS5zb3VyY2VzQ29udGVudCAmJlxuICAgICAgdGhpcy5jb25zdW1lcigpLnNvdXJjZXNDb250ZW50Lmxlbmd0aCA+IDBcbiAgICApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcmV2aW91c01hcFxuUHJldmlvdXNNYXAuZGVmYXVsdCA9IFByZXZpb3VzTWFwXG4iLCIndXNlIHN0cmljdCdcblxubGV0IE5vV29ya1Jlc3VsdCA9IHJlcXVpcmUoJy4vbm8td29yay1yZXN1bHQnKVxubGV0IExhenlSZXN1bHQgPSByZXF1aXJlKCcuL2xhenktcmVzdWx0JylcbmxldCBEb2N1bWVudCA9IHJlcXVpcmUoJy4vZG9jdW1lbnQnKVxubGV0IFJvb3QgPSByZXF1aXJlKCcuL3Jvb3QnKVxuXG5jbGFzcyBQcm9jZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihwbHVnaW5zID0gW10pIHtcbiAgICB0aGlzLnZlcnNpb24gPSAnOC40LjM5J1xuICAgIHRoaXMucGx1Z2lucyA9IHRoaXMubm9ybWFsaXplKHBsdWdpbnMpXG4gIH1cblxuICBub3JtYWxpemUocGx1Z2lucykge1xuICAgIGxldCBub3JtYWxpemVkID0gW11cbiAgICBmb3IgKGxldCBpIG9mIHBsdWdpbnMpIHtcbiAgICAgIGlmIChpLnBvc3Rjc3MgPT09IHRydWUpIHtcbiAgICAgICAgaSA9IGkoKVxuICAgICAgfSBlbHNlIGlmIChpLnBvc3Rjc3MpIHtcbiAgICAgICAgaSA9IGkucG9zdGNzc1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGkgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkoaS5wbHVnaW5zKSkge1xuICAgICAgICBub3JtYWxpemVkID0gbm9ybWFsaXplZC5jb25jYXQoaS5wbHVnaW5zKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gJ29iamVjdCcgJiYgaS5wb3N0Y3NzUGx1Z2luKSB7XG4gICAgICAgIG5vcm1hbGl6ZWQucHVzaChpKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBub3JtYWxpemVkLnB1c2goaSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGkgPT09ICdvYmplY3QnICYmIChpLnBhcnNlIHx8IGkuc3RyaW5naWZ5KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdQb3N0Q1NTIHN5bnRheGVzIGNhbm5vdCBiZSB1c2VkIGFzIHBsdWdpbnMuIEluc3RlYWQsIHBsZWFzZSB1c2UgJyArXG4gICAgICAgICAgICAgICdvbmUgb2YgdGhlIHN5bnRheC9wYXJzZXIvc3RyaW5naWZpZXIgb3B0aW9ucyBhcyBvdXRsaW5lZCAnICtcbiAgICAgICAgICAgICAgJ2luIHlvdXIgUG9zdENTUyBydW5uZXIgZG9jdW1lbnRhdGlvbi4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoaSArICcgaXMgbm90IGEgUG9zdENTUyBwbHVnaW4nKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9ybWFsaXplZFxuICB9XG5cbiAgcHJvY2Vzcyhjc3MsIG9wdHMgPSB7fSkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLnBsdWdpbnMubGVuZ3RoICYmXG4gICAgICAhb3B0cy5wYXJzZXIgJiZcbiAgICAgICFvcHRzLnN0cmluZ2lmaWVyICYmXG4gICAgICAhb3B0cy5zeW50YXhcbiAgICApIHtcbiAgICAgIHJldHVybiBuZXcgTm9Xb3JrUmVzdWx0KHRoaXMsIGNzcywgb3B0cylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBMYXp5UmVzdWx0KHRoaXMsIGNzcywgb3B0cylcbiAgICB9XG4gIH1cblxuICB1c2UocGx1Z2luKSB7XG4gICAgdGhpcy5wbHVnaW5zID0gdGhpcy5wbHVnaW5zLmNvbmNhdCh0aGlzLm5vcm1hbGl6ZShbcGx1Z2luXSkpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2Nlc3NvclxuUHJvY2Vzc29yLmRlZmF1bHQgPSBQcm9jZXNzb3JcblxuUm9vdC5yZWdpc3RlclByb2Nlc3NvcihQcm9jZXNzb3IpXG5Eb2N1bWVudC5yZWdpc3RlclByb2Nlc3NvcihQcm9jZXNzb3IpXG4iLCIndXNlIHN0cmljdCdcblxubGV0IFdhcm5pbmcgPSByZXF1aXJlKCcuL3dhcm5pbmcnKVxuXG5jbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3Rvcihwcm9jZXNzb3IsIHJvb3QsIG9wdHMpIHtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvclxuICAgIHRoaXMubWVzc2FnZXMgPSBbXVxuICAgIHRoaXMucm9vdCA9IHJvb3RcbiAgICB0aGlzLm9wdHMgPSBvcHRzXG4gICAgdGhpcy5jc3MgPSB1bmRlZmluZWRcbiAgICB0aGlzLm1hcCA9IHVuZGVmaW5lZFxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3NzXG4gIH1cblxuICB3YXJuKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGlmICghb3B0cy5wbHVnaW4pIHtcbiAgICAgIGlmICh0aGlzLmxhc3RQbHVnaW4gJiYgdGhpcy5sYXN0UGx1Z2luLnBvc3Rjc3NQbHVnaW4pIHtcbiAgICAgICAgb3B0cy5wbHVnaW4gPSB0aGlzLmxhc3RQbHVnaW4ucG9zdGNzc1BsdWdpblxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB3YXJuaW5nID0gbmV3IFdhcm5pbmcodGV4dCwgb3B0cylcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2god2FybmluZylcblxuICAgIHJldHVybiB3YXJuaW5nXG4gIH1cblxuICB3YXJuaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlcy5maWx0ZXIoaSA9PiBpLnR5cGUgPT09ICd3YXJuaW5nJylcbiAgfVxuXG4gIGdldCBjb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNzc1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzdWx0XG5SZXN1bHQuZGVmYXVsdCA9IFJlc3VsdFxuIiwiJ3VzZSBzdHJpY3QnXG5cbmxldCBDb250YWluZXIgPSByZXF1aXJlKCcuL2NvbnRhaW5lcicpXG5cbmxldCBMYXp5UmVzdWx0LCBQcm9jZXNzb3JcblxuY2xhc3MgUm9vdCBleHRlbmRzIENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoZGVmYXVsdHMpXG4gICAgdGhpcy50eXBlID0gJ3Jvb3QnXG4gICAgaWYgKCF0aGlzLm5vZGVzKSB0aGlzLm5vZGVzID0gW11cbiAgfVxuXG4gIG5vcm1hbGl6ZShjaGlsZCwgc2FtcGxlLCB0eXBlKSB7XG4gICAgbGV0IG5vZGVzID0gc3VwZXIubm9ybWFsaXplKGNoaWxkKVxuXG4gICAgaWYgKHNhbXBsZSkge1xuICAgICAgaWYgKHR5cGUgPT09ICdwcmVwZW5kJykge1xuICAgICAgICBpZiAodGhpcy5ub2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgc2FtcGxlLnJhd3MuYmVmb3JlID0gdGhpcy5ub2Rlc1sxXS5yYXdzLmJlZm9yZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBzYW1wbGUucmF3cy5iZWZvcmVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpcnN0ICE9PSBzYW1wbGUpIHtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgIG5vZGUucmF3cy5iZWZvcmUgPSBzYW1wbGUucmF3cy5iZWZvcmVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2Rlc1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGlnbm9yZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXgoY2hpbGQpXG5cbiAgICBpZiAoIWlnbm9yZSAmJiBpbmRleCA9PT0gMCAmJiB0aGlzLm5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMubm9kZXNbMV0ucmF3cy5iZWZvcmUgPSB0aGlzLm5vZGVzW2luZGV4XS5yYXdzLmJlZm9yZVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5yZW1vdmVDaGlsZChjaGlsZClcbiAgfVxuXG4gIHRvUmVzdWx0KG9wdHMgPSB7fSkge1xuICAgIGxldCBsYXp5ID0gbmV3IExhenlSZXN1bHQobmV3IFByb2Nlc3NvcigpLCB0aGlzLCBvcHRzKVxuICAgIHJldHVybiBsYXp5LnN0cmluZ2lmeSgpXG4gIH1cbn1cblxuUm9vdC5yZWdpc3RlckxhenlSZXN1bHQgPSBkZXBlbmRhbnQgPT4ge1xuICBMYXp5UmVzdWx0ID0gZGVwZW5kYW50XG59XG5cblJvb3QucmVnaXN0ZXJQcm9jZXNzb3IgPSBkZXBlbmRhbnQgPT4ge1xuICBQcm9jZXNzb3IgPSBkZXBlbmRhbnRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb290XG5Sb290LmRlZmF1bHQgPSBSb290XG5cbkNvbnRhaW5lci5yZWdpc3RlclJvb3QoUm9vdClcbiIsIid1c2Ugc3RyaWN0J1xuXG5sZXQgQ29udGFpbmVyID0gcmVxdWlyZSgnLi9jb250YWluZXInKVxubGV0IGxpc3QgPSByZXF1aXJlKCcuL2xpc3QnKVxuXG5jbGFzcyBSdWxlIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IoZGVmYXVsdHMpIHtcbiAgICBzdXBlcihkZWZhdWx0cylcbiAgICB0aGlzLnR5cGUgPSAncnVsZSdcbiAgICBpZiAoIXRoaXMubm9kZXMpIHRoaXMubm9kZXMgPSBbXVxuICB9XG5cbiAgZ2V0IHNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gbGlzdC5jb21tYSh0aGlzLnNlbGVjdG9yKVxuICB9XG5cbiAgc2V0IHNlbGVjdG9ycyh2YWx1ZXMpIHtcbiAgICBsZXQgbWF0Y2ggPSB0aGlzLnNlbGVjdG9yID8gdGhpcy5zZWxlY3Rvci5tYXRjaCgvLFxccyovKSA6IG51bGxcbiAgICBsZXQgc2VwID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcsJyArIHRoaXMucmF3KCdiZXR3ZWVuJywgJ2JlZm9yZU9wZW4nKVxuICAgIHRoaXMuc2VsZWN0b3IgPSB2YWx1ZXMuam9pbihzZXApXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlXG5SdWxlLmRlZmF1bHQgPSBSdWxlXG5cbkNvbnRhaW5lci5yZWdpc3RlclJ1bGUoUnVsZSlcbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBERUZBVUxUX1JBVyA9IHtcbiAgYWZ0ZXI6ICdcXG4nLFxuICBiZWZvcmVDbG9zZTogJ1xcbicsXG4gIGJlZm9yZUNvbW1lbnQ6ICdcXG4nLFxuICBiZWZvcmVEZWNsOiAnXFxuJyxcbiAgYmVmb3JlT3BlbjogJyAnLFxuICBiZWZvcmVSdWxlOiAnXFxuJyxcbiAgY29sb246ICc6ICcsXG4gIGNvbW1lbnRMZWZ0OiAnICcsXG4gIGNvbW1lbnRSaWdodDogJyAnLFxuICBlbXB0eUJvZHk6ICcnLFxuICBpbmRlbnQ6ICcgICAgJyxcbiAgc2VtaWNvbG9uOiBmYWxzZVxufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn1cblxuY2xhc3MgU3RyaW5naWZpZXIge1xuICBjb25zdHJ1Y3RvcihidWlsZGVyKSB7XG4gICAgdGhpcy5idWlsZGVyID0gYnVpbGRlclxuICB9XG5cbiAgYXRydWxlKG5vZGUsIHNlbWljb2xvbikge1xuICAgIGxldCBuYW1lID0gJ0AnICsgbm9kZS5uYW1lXG4gICAgbGV0IHBhcmFtcyA9IG5vZGUucGFyYW1zID8gdGhpcy5yYXdWYWx1ZShub2RlLCAncGFyYW1zJykgOiAnJ1xuXG4gICAgaWYgKHR5cGVvZiBub2RlLnJhd3MuYWZ0ZXJOYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbmFtZSArPSBub2RlLnJhd3MuYWZ0ZXJOYW1lXG4gICAgfSBlbHNlIGlmIChwYXJhbXMpIHtcbiAgICAgIG5hbWUgKz0gJyAnXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZXMpIHtcbiAgICAgIHRoaXMuYmxvY2sobm9kZSwgbmFtZSArIHBhcmFtcylcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGVuZCA9IChub2RlLnJhd3MuYmV0d2VlbiB8fCAnJykgKyAoc2VtaWNvbG9uID8gJzsnIDogJycpXG4gICAgICB0aGlzLmJ1aWxkZXIobmFtZSArIHBhcmFtcyArIGVuZCwgbm9kZSlcbiAgICB9XG4gIH1cblxuICBiZWZvcmVBZnRlcihub2RlLCBkZXRlY3QpIHtcbiAgICBsZXQgdmFsdWVcbiAgICBpZiAobm9kZS50eXBlID09PSAnZGVjbCcpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZSwgbnVsbCwgJ2JlZm9yZURlY2wnKVxuICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnY29tbWVudCcpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZSwgbnVsbCwgJ2JlZm9yZUNvbW1lbnQnKVxuICAgIH0gZWxzZSBpZiAoZGV0ZWN0ID09PSAnYmVmb3JlJykge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlLCBudWxsLCAnYmVmb3JlUnVsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yYXcobm9kZSwgbnVsbCwgJ2JlZm9yZUNsb3NlJylcbiAgICB9XG5cbiAgICBsZXQgYnVmID0gbm9kZS5wYXJlbnRcbiAgICBsZXQgZGVwdGggPSAwXG4gICAgd2hpbGUgKGJ1ZiAmJiBidWYudHlwZSAhPT0gJ3Jvb3QnKSB7XG4gICAgICBkZXB0aCArPSAxXG4gICAgICBidWYgPSBidWYucGFyZW50XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCdcXG4nKSkge1xuICAgICAgbGV0IGluZGVudCA9IHRoaXMucmF3KG5vZGUsIG51bGwsICdpbmRlbnQnKVxuICAgICAgaWYgKGluZGVudC5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBkZXB0aDsgc3RlcCsrKSB2YWx1ZSArPSBpbmRlbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGJsb2NrKG5vZGUsIHN0YXJ0KSB7XG4gICAgbGV0IGJldHdlZW4gPSB0aGlzLnJhdyhub2RlLCAnYmV0d2VlbicsICdiZWZvcmVPcGVuJylcbiAgICB0aGlzLmJ1aWxkZXIoc3RhcnQgKyBiZXR3ZWVuICsgJ3snLCBub2RlLCAnc3RhcnQnKVxuXG4gICAgbGV0IGFmdGVyXG4gICAgaWYgKG5vZGUubm9kZXMgJiYgbm9kZS5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYm9keShub2RlKVxuICAgICAgYWZ0ZXIgPSB0aGlzLnJhdyhub2RlLCAnYWZ0ZXInKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlciA9IHRoaXMucmF3KG5vZGUsICdhZnRlcicsICdlbXB0eUJvZHknKVxuICAgIH1cblxuICAgIGlmIChhZnRlcikgdGhpcy5idWlsZGVyKGFmdGVyKVxuICAgIHRoaXMuYnVpbGRlcignfScsIG5vZGUsICdlbmQnKVxuICB9XG5cbiAgYm9keShub2RlKSB7XG4gICAgbGV0IGxhc3QgPSBub2RlLm5vZGVzLmxlbmd0aCAtIDFcbiAgICB3aGlsZSAobGFzdCA+IDApIHtcbiAgICAgIGlmIChub2RlLm5vZGVzW2xhc3RdLnR5cGUgIT09ICdjb21tZW50JykgYnJlYWtcbiAgICAgIGxhc3QgLT0gMVxuICAgIH1cblxuICAgIGxldCBzZW1pY29sb24gPSB0aGlzLnJhdyhub2RlLCAnc2VtaWNvbG9uJylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IG5vZGUubm9kZXNbaV1cbiAgICAgIGxldCBiZWZvcmUgPSB0aGlzLnJhdyhjaGlsZCwgJ2JlZm9yZScpXG4gICAgICBpZiAoYmVmb3JlKSB0aGlzLmJ1aWxkZXIoYmVmb3JlKVxuICAgICAgdGhpcy5zdHJpbmdpZnkoY2hpbGQsIGxhc3QgIT09IGkgfHwgc2VtaWNvbG9uKVxuICAgIH1cbiAgfVxuXG4gIGNvbW1lbnQobm9kZSkge1xuICAgIGxldCBsZWZ0ID0gdGhpcy5yYXcobm9kZSwgJ2xlZnQnLCAnY29tbWVudExlZnQnKVxuICAgIGxldCByaWdodCA9IHRoaXMucmF3KG5vZGUsICdyaWdodCcsICdjb21tZW50UmlnaHQnKVxuICAgIHRoaXMuYnVpbGRlcignLyonICsgbGVmdCArIG5vZGUudGV4dCArIHJpZ2h0ICsgJyovJywgbm9kZSlcbiAgfVxuXG4gIGRlY2wobm9kZSwgc2VtaWNvbG9uKSB7XG4gICAgbGV0IGJldHdlZW4gPSB0aGlzLnJhdyhub2RlLCAnYmV0d2VlbicsICdjb2xvbicpXG4gICAgbGV0IHN0cmluZyA9IG5vZGUucHJvcCArIGJldHdlZW4gKyB0aGlzLnJhd1ZhbHVlKG5vZGUsICd2YWx1ZScpXG5cbiAgICBpZiAobm9kZS5pbXBvcnRhbnQpIHtcbiAgICAgIHN0cmluZyArPSBub2RlLnJhd3MuaW1wb3J0YW50IHx8ICcgIWltcG9ydGFudCdcbiAgICB9XG5cbiAgICBpZiAoc2VtaWNvbG9uKSBzdHJpbmcgKz0gJzsnXG4gICAgdGhpcy5idWlsZGVyKHN0cmluZywgbm9kZSlcbiAgfVxuXG4gIGRvY3VtZW50KG5vZGUpIHtcbiAgICB0aGlzLmJvZHkobm9kZSlcbiAgfVxuXG4gIHJhdyhub2RlLCBvd24sIGRldGVjdCkge1xuICAgIGxldCB2YWx1ZVxuICAgIGlmICghZGV0ZWN0KSBkZXRlY3QgPSBvd25cblxuICAgIC8vIEFscmVhZHkgaGFkXG4gICAgaWYgKG93bikge1xuICAgICAgdmFsdWUgPSBub2RlLnJhd3Nbb3duXVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudFxuXG4gICAgaWYgKGRldGVjdCA9PT0gJ2JlZm9yZScpIHtcbiAgICAgIC8vIEhhY2sgZm9yIGZpcnN0IHJ1bGUgaW4gQ1NTXG4gICAgICBpZiAoIXBhcmVudCB8fCAocGFyZW50LnR5cGUgPT09ICdyb290JyAmJiBwYXJlbnQuZmlyc3QgPT09IG5vZGUpKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuXG4gICAgICAvLyBgcm9vdGAgbm9kZXMgaW4gYGRvY3VtZW50YCBzaG91bGQgdXNlIG9ubHkgdGhlaXIgb3duIHJhd3NcbiAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnR5cGUgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmxvYXRpbmcgY2hpbGQgd2l0aG91dCBwYXJlbnRcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuIERFRkFVTFRfUkFXW2RldGVjdF1cblxuICAgIC8vIERldGVjdCBzdHlsZSBieSBvdGhlciBub2Rlc1xuICAgIGxldCByb290ID0gbm9kZS5yb290KClcbiAgICBpZiAoIXJvb3QucmF3Q2FjaGUpIHJvb3QucmF3Q2FjaGUgPSB7fVxuICAgIGlmICh0eXBlb2Ygcm9vdC5yYXdDYWNoZVtkZXRlY3RdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHJvb3QucmF3Q2FjaGVbZGV0ZWN0XVxuICAgIH1cblxuICAgIGlmIChkZXRlY3QgPT09ICdiZWZvcmUnIHx8IGRldGVjdCA9PT0gJ2FmdGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlQWZ0ZXIobm9kZSwgZGV0ZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbWV0aG9kID0gJ3JhdycgKyBjYXBpdGFsaXplKGRldGVjdClcbiAgICAgIGlmICh0aGlzW21ldGhvZF0pIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzW21ldGhvZF0ocm9vdCwgbm9kZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3Qud2FsayhpID0+IHtcbiAgICAgICAgICB2YWx1ZSA9IGkucmF3c1tvd25dXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB2YWx1ZSA9IERFRkFVTFRfUkFXW2RldGVjdF1cblxuICAgIHJvb3QucmF3Q2FjaGVbZGV0ZWN0XSA9IHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByYXdCZWZvcmVDbG9zZShyb290KSB7XG4gICAgbGV0IHZhbHVlXG4gICAgcm9vdC53YWxrKGkgPT4ge1xuICAgICAgaWYgKGkubm9kZXMgJiYgaS5ub2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmFmdGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmFmdGVyXG4gICAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCdcXG4nKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcbl0rJC8sICcnKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHZhbHVlKSB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCAnJylcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHJhd0JlZm9yZUNvbW1lbnQocm9vdCwgbm9kZSkge1xuICAgIGxldCB2YWx1ZVxuICAgIHJvb3Qud2Fsa0NvbW1lbnRzKGkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZWZvcmVcbiAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCdcXG4nKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCAnJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmF3KG5vZGUsIG51bGwsICdiZWZvcmVEZWNsJylcbiAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCAnJylcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByYXdCZWZvcmVEZWNsKHJvb3QsIG5vZGUpIHtcbiAgICBsZXQgdmFsdWVcbiAgICByb290LndhbGtEZWNscyhpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3MuYmVmb3JlXG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnXFxuJykpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxuXSskLywgJycpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSB0aGlzLnJhdyhub2RlLCBudWxsLCAnYmVmb3JlUnVsZScpXG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFMvZywgJycpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmF3QmVmb3JlT3Blbihyb290KSB7XG4gICAgbGV0IHZhbHVlXG4gICAgcm9vdC53YWxrKGkgPT4ge1xuICAgICAgaWYgKGkudHlwZSAhPT0gJ2RlY2wnKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLmJldHdlZW5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByYXdCZWZvcmVSdWxlKHJvb3QpIHtcbiAgICBsZXQgdmFsdWVcbiAgICByb290LndhbGsoaSA9PiB7XG4gICAgICBpZiAoaS5ub2RlcyAmJiAoaS5wYXJlbnQgIT09IHJvb3QgfHwgcm9vdC5maXJzdCAhPT0gaSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpLnJhd3MuYmVmb3JlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHZhbHVlID0gaS5yYXdzLmJlZm9yZVxuICAgICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnXFxuJykpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXG5dKyQvLCAnJylcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICh2YWx1ZSkgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXFMvZywgJycpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByYXdDb2xvbihyb290KSB7XG4gICAgbGV0IHZhbHVlXG4gICAgcm9vdC53YWxrRGVjbHMoaSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGkucmF3cy5iZXR3ZWVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YWx1ZSA9IGkucmF3cy5iZXR3ZWVuLnJlcGxhY2UoL1teXFxzOl0vZywgJycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByYXdFbXB0eUJvZHkocm9vdCkge1xuICAgIGxldCB2YWx1ZVxuICAgIHJvb3Qud2FsayhpID0+IHtcbiAgICAgIGlmIChpLm5vZGVzICYmIGkubm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhbHVlID0gaS5yYXdzLmFmdGVyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmF3SW5kZW50KHJvb3QpIHtcbiAgICBpZiAocm9vdC5yYXdzLmluZGVudCkgcmV0dXJuIHJvb3QucmF3cy5pbmRlbnRcbiAgICBsZXQgdmFsdWVcbiAgICByb290LndhbGsoaSA9PiB7XG4gICAgICBsZXQgcCA9IGkucGFyZW50XG4gICAgICBpZiAocCAmJiBwICE9PSByb290ICYmIHAucGFyZW50ICYmIHAucGFyZW50ID09PSByb290KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaS5yYXdzLmJlZm9yZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBsZXQgcGFydHMgPSBpLnJhd3MuYmVmb3JlLnNwbGl0KCdcXG4nKVxuICAgICAgICAgIHZhbHVlID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcUy9nLCAnJylcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICByYXdTZW1pY29sb24ocm9vdCkge1xuICAgIGxldCB2YWx1ZVxuICAgIHJvb3Qud2FsayhpID0+IHtcbiAgICAgIGlmIChpLm5vZGVzICYmIGkubm9kZXMubGVuZ3RoICYmIGkubGFzdC50eXBlID09PSAnZGVjbCcpIHtcbiAgICAgICAgdmFsdWUgPSBpLnJhd3Muc2VtaWNvbG9uXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmF3VmFsdWUobm9kZSwgcHJvcCkge1xuICAgIGxldCB2YWx1ZSA9IG5vZGVbcHJvcF1cbiAgICBsZXQgcmF3ID0gbm9kZS5yYXdzW3Byb3BdXG4gICAgaWYgKHJhdyAmJiByYXcudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gcmF3LnJhd1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcm9vdChub2RlKSB7XG4gICAgdGhpcy5ib2R5KG5vZGUpXG4gICAgaWYgKG5vZGUucmF3cy5hZnRlcikgdGhpcy5idWlsZGVyKG5vZGUucmF3cy5hZnRlcilcbiAgfVxuXG4gIHJ1bGUobm9kZSkge1xuICAgIHRoaXMuYmxvY2sobm9kZSwgdGhpcy5yYXdWYWx1ZShub2RlLCAnc2VsZWN0b3InKSlcbiAgICBpZiAobm9kZS5yYXdzLm93blNlbWljb2xvbikge1xuICAgICAgdGhpcy5idWlsZGVyKG5vZGUucmF3cy5vd25TZW1pY29sb24sIG5vZGUsICdlbmQnKVxuICAgIH1cbiAgfVxuXG4gIHN0cmluZ2lmeShub2RlLCBzZW1pY29sb24pIHtcbiAgICAvKiBjOCBpZ25vcmUgc3RhcnQgKi9cbiAgICBpZiAoIXRoaXNbbm9kZS50eXBlXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVW5rbm93biBBU1Qgbm9kZSB0eXBlICcgK1xuICAgICAgICAgIG5vZGUudHlwZSArXG4gICAgICAgICAgJy4gJyArXG4gICAgICAgICAgJ01heWJlIHlvdSBuZWVkIHRvIGNoYW5nZSBQb3N0Q1NTIHN0cmluZ2lmaWVyLidcbiAgICAgIClcbiAgICB9XG4gICAgLyogYzggaWdub3JlIHN0b3AgKi9cbiAgICB0aGlzW25vZGUudHlwZV0obm9kZSwgc2VtaWNvbG9uKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5naWZpZXJcblN0cmluZ2lmaWVyLmRlZmF1bHQgPSBTdHJpbmdpZmllclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmxldCBTdHJpbmdpZmllciA9IHJlcXVpcmUoJy4vc3RyaW5naWZpZXInKVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkobm9kZSwgYnVpbGRlcikge1xuICBsZXQgc3RyID0gbmV3IFN0cmluZ2lmaWVyKGJ1aWxkZXIpXG4gIHN0ci5zdHJpbmdpZnkobm9kZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcbnN0cmluZ2lmeS5kZWZhdWx0ID0gc3RyaW5naWZ5XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMuaXNDbGVhbiA9IFN5bWJvbCgnaXNDbGVhbicpXG5cbm1vZHVsZS5leHBvcnRzLm15ID0gU3ltYm9sKCdteScpXG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgU0lOR0xFX1FVT1RFID0gXCInXCIuY2hhckNvZGVBdCgwKVxuY29uc3QgRE9VQkxFX1FVT1RFID0gJ1wiJy5jaGFyQ29kZUF0KDApXG5jb25zdCBCQUNLU0xBU0ggPSAnXFxcXCcuY2hhckNvZGVBdCgwKVxuY29uc3QgU0xBU0ggPSAnLycuY2hhckNvZGVBdCgwKVxuY29uc3QgTkVXTElORSA9ICdcXG4nLmNoYXJDb2RlQXQoMClcbmNvbnN0IFNQQUNFID0gJyAnLmNoYXJDb2RlQXQoMClcbmNvbnN0IEZFRUQgPSAnXFxmJy5jaGFyQ29kZUF0KDApXG5jb25zdCBUQUIgPSAnXFx0Jy5jaGFyQ29kZUF0KDApXG5jb25zdCBDUiA9ICdcXHInLmNoYXJDb2RlQXQoMClcbmNvbnN0IE9QRU5fU1FVQVJFID0gJ1snLmNoYXJDb2RlQXQoMClcbmNvbnN0IENMT1NFX1NRVUFSRSA9ICddJy5jaGFyQ29kZUF0KDApXG5jb25zdCBPUEVOX1BBUkVOVEhFU0VTID0gJygnLmNoYXJDb2RlQXQoMClcbmNvbnN0IENMT1NFX1BBUkVOVEhFU0VTID0gJyknLmNoYXJDb2RlQXQoMClcbmNvbnN0IE9QRU5fQ1VSTFkgPSAneycuY2hhckNvZGVBdCgwKVxuY29uc3QgQ0xPU0VfQ1VSTFkgPSAnfScuY2hhckNvZGVBdCgwKVxuY29uc3QgU0VNSUNPTE9OID0gJzsnLmNoYXJDb2RlQXQoMClcbmNvbnN0IEFTVEVSSVNLID0gJyonLmNoYXJDb2RlQXQoMClcbmNvbnN0IENPTE9OID0gJzonLmNoYXJDb2RlQXQoMClcbmNvbnN0IEFUID0gJ0AnLmNoYXJDb2RlQXQoMClcblxuY29uc3QgUkVfQVRfRU5EID0gL1tcXHRcXG5cXGZcXHIgXCIjJygpLztbXFxcXFxcXXt9XS9nXG5jb25zdCBSRV9XT1JEX0VORCA9IC9bXFx0XFxuXFxmXFxyICFcIiMnKCk6O0BbXFxcXFxcXXt9XXxcXC8oPz1cXCopL2dcbmNvbnN0IFJFX0JBRF9CUkFDS0VUID0gLy5bXFxyXFxuXCInKC9cXFxcXS9cbmNvbnN0IFJFX0hFWF9FU0NBUEUgPSAvW1xcZGEtZl0vaVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRva2VuaXplcihpbnB1dCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjc3MgPSBpbnB1dC5jc3MudmFsdWVPZigpXG4gIGxldCBpZ25vcmUgPSBvcHRpb25zLmlnbm9yZUVycm9yc1xuXG4gIGxldCBjb2RlLCBuZXh0LCBxdW90ZSwgY29udGVudCwgZXNjYXBlXG4gIGxldCBlc2NhcGVkLCBlc2NhcGVQb3MsIHByZXYsIG4sIGN1cnJlbnRUb2tlblxuXG4gIGxldCBsZW5ndGggPSBjc3MubGVuZ3RoXG4gIGxldCBwb3MgPSAwXG4gIGxldCBidWZmZXIgPSBbXVxuICBsZXQgcmV0dXJuZWQgPSBbXVxuXG4gIGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICAgIHJldHVybiBwb3NcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuY2xvc2VkKHdoYXQpIHtcbiAgICB0aHJvdyBpbnB1dC5lcnJvcignVW5jbG9zZWQgJyArIHdoYXQsIHBvcylcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZE9mRmlsZSgpIHtcbiAgICByZXR1cm4gcmV0dXJuZWQubGVuZ3RoID09PSAwICYmIHBvcyA+PSBsZW5ndGhcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRUb2tlbihvcHRzKSB7XG4gICAgaWYgKHJldHVybmVkLmxlbmd0aCkgcmV0dXJuIHJldHVybmVkLnBvcCgpXG4gICAgaWYgKHBvcyA+PSBsZW5ndGgpIHJldHVyblxuXG4gICAgbGV0IGlnbm9yZVVuY2xvc2VkID0gb3B0cyA/IG9wdHMuaWdub3JlVW5jbG9zZWQgOiBmYWxzZVxuXG4gICAgY29kZSA9IGNzcy5jaGFyQ29kZUF0KHBvcylcblxuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgY2FzZSBORVdMSU5FOlxuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgIGNhc2UgVEFCOlxuICAgICAgY2FzZSBDUjpcbiAgICAgIGNhc2UgRkVFRDoge1xuICAgICAgICBuZXh0ID0gcG9zXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBuZXh0ICs9IDFcbiAgICAgICAgICBjb2RlID0gY3NzLmNoYXJDb2RlQXQobmV4dClcbiAgICAgICAgfSB3aGlsZSAoXG4gICAgICAgICAgY29kZSA9PT0gU1BBQ0UgfHxcbiAgICAgICAgICBjb2RlID09PSBORVdMSU5FIHx8XG4gICAgICAgICAgY29kZSA9PT0gVEFCIHx8XG4gICAgICAgICAgY29kZSA9PT0gQ1IgfHxcbiAgICAgICAgICBjb2RlID09PSBGRUVEXG4gICAgICAgIClcblxuICAgICAgICBjdXJyZW50VG9rZW4gPSBbJ3NwYWNlJywgY3NzLnNsaWNlKHBvcywgbmV4dCldXG4gICAgICAgIHBvcyA9IG5leHQgLSAxXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgT1BFTl9TUVVBUkU6XG4gICAgICBjYXNlIENMT1NFX1NRVUFSRTpcbiAgICAgIGNhc2UgT1BFTl9DVVJMWTpcbiAgICAgIGNhc2UgQ0xPU0VfQ1VSTFk6XG4gICAgICBjYXNlIENPTE9OOlxuICAgICAgY2FzZSBTRU1JQ09MT046XG4gICAgICBjYXNlIENMT1NFX1BBUkVOVEhFU0VTOiB7XG4gICAgICAgIGxldCBjb250cm9sQ2hhciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgICAgY3VycmVudFRva2VuID0gW2NvbnRyb2xDaGFyLCBjb250cm9sQ2hhciwgcG9zXVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlIE9QRU5fUEFSRU5USEVTRVM6IHtcbiAgICAgICAgcHJldiA9IGJ1ZmZlci5sZW5ndGggPyBidWZmZXIucG9wKClbMV0gOiAnJ1xuICAgICAgICBuID0gY3NzLmNoYXJDb2RlQXQocG9zICsgMSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByZXYgPT09ICd1cmwnICYmXG4gICAgICAgICAgbiAhPT0gU0lOR0xFX1FVT1RFICYmXG4gICAgICAgICAgbiAhPT0gRE9VQkxFX1FVT1RFICYmXG4gICAgICAgICAgbiAhPT0gU1BBQ0UgJiZcbiAgICAgICAgICBuICE9PSBORVdMSU5FICYmXG4gICAgICAgICAgbiAhPT0gVEFCICYmXG4gICAgICAgICAgbiAhPT0gRkVFRCAmJlxuICAgICAgICAgIG4gIT09IENSXG4gICAgICAgICkge1xuICAgICAgICAgIG5leHQgPSBwb3NcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBlc2NhcGVkID0gZmFsc2VcbiAgICAgICAgICAgIG5leHQgPSBjc3MuaW5kZXhPZignKScsIG5leHQgKyAxKVxuICAgICAgICAgICAgaWYgKG5leHQgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGlmIChpZ25vcmUgfHwgaWdub3JlVW5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gcG9zXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmNsb3NlZCgnYnJhY2tldCcpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVzY2FwZVBvcyA9IG5leHRcbiAgICAgICAgICAgIHdoaWxlIChjc3MuY2hhckNvZGVBdChlc2NhcGVQb3MgLSAxKSA9PT0gQkFDS1NMQVNIKSB7XG4gICAgICAgICAgICAgIGVzY2FwZVBvcyAtPSAxXG4gICAgICAgICAgICAgIGVzY2FwZWQgPSAhZXNjYXBlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gd2hpbGUgKGVzY2FwZWQpXG5cbiAgICAgICAgICBjdXJyZW50VG9rZW4gPSBbJ2JyYWNrZXRzJywgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdXG5cbiAgICAgICAgICBwb3MgPSBuZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCA9IGNzcy5pbmRleE9mKCcpJywgcG9zICsgMSlcbiAgICAgICAgICBjb250ZW50ID0gY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpXG5cbiAgICAgICAgICBpZiAobmV4dCA9PT0gLTEgfHwgUkVfQkFEX0JSQUNLRVQudGVzdChjb250ZW50KSkge1xuICAgICAgICAgICAgY3VycmVudFRva2VuID0gWycoJywgJygnLCBwb3NdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRUb2tlbiA9IFsnYnJhY2tldHMnLCBjb250ZW50LCBwb3MsIG5leHRdXG4gICAgICAgICAgICBwb3MgPSBuZXh0XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSBTSU5HTEVfUVVPVEU6XG4gICAgICBjYXNlIERPVUJMRV9RVU9URToge1xuICAgICAgICBxdW90ZSA9IGNvZGUgPT09IFNJTkdMRV9RVU9URSA/IFwiJ1wiIDogJ1wiJ1xuICAgICAgICBuZXh0ID0gcG9zXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBlc2NhcGVkID0gZmFsc2VcbiAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YocXVvdGUsIG5leHQgKyAxKVxuICAgICAgICAgIGlmIChuZXh0ID09PSAtMSkge1xuICAgICAgICAgICAgaWYgKGlnbm9yZSB8fCBpZ25vcmVVbmNsb3NlZCkge1xuICAgICAgICAgICAgICBuZXh0ID0gcG9zICsgMVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdW5jbG9zZWQoJ3N0cmluZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVzY2FwZVBvcyA9IG5leHRcbiAgICAgICAgICB3aGlsZSAoY3NzLmNoYXJDb2RlQXQoZXNjYXBlUG9zIC0gMSkgPT09IEJBQ0tTTEFTSCkge1xuICAgICAgICAgICAgZXNjYXBlUG9zIC09IDFcbiAgICAgICAgICAgIGVzY2FwZWQgPSAhZXNjYXBlZFxuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoZXNjYXBlZClcblxuICAgICAgICBjdXJyZW50VG9rZW4gPSBbJ3N0cmluZycsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XVxuICAgICAgICBwb3MgPSBuZXh0XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVQ6IHtcbiAgICAgICAgUkVfQVRfRU5ELmxhc3RJbmRleCA9IHBvcyArIDFcbiAgICAgICAgUkVfQVRfRU5ELnRlc3QoY3NzKVxuICAgICAgICBpZiAoUkVfQVRfRU5ELmxhc3RJbmRleCA9PT0gMCkge1xuICAgICAgICAgIG5leHQgPSBjc3MubGVuZ3RoIC0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQgPSBSRV9BVF9FTkQubGFzdEluZGV4IC0gMlxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFRva2VuID0gWydhdC13b3JkJywgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdXG5cbiAgICAgICAgcG9zID0gbmV4dFxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTTEFTSDoge1xuICAgICAgICBuZXh0ID0gcG9zXG4gICAgICAgIGVzY2FwZSA9IHRydWVcbiAgICAgICAgd2hpbGUgKGNzcy5jaGFyQ29kZUF0KG5leHQgKyAxKSA9PT0gQkFDS1NMQVNIKSB7XG4gICAgICAgICAgbmV4dCArPSAxXG4gICAgICAgICAgZXNjYXBlID0gIWVzY2FwZVxuICAgICAgICB9XG4gICAgICAgIGNvZGUgPSBjc3MuY2hhckNvZGVBdChuZXh0ICsgMSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGVzY2FwZSAmJlxuICAgICAgICAgIGNvZGUgIT09IFNMQVNIICYmXG4gICAgICAgICAgY29kZSAhPT0gU1BBQ0UgJiZcbiAgICAgICAgICBjb2RlICE9PSBORVdMSU5FICYmXG4gICAgICAgICAgY29kZSAhPT0gVEFCICYmXG4gICAgICAgICAgY29kZSAhPT0gQ1IgJiZcbiAgICAgICAgICBjb2RlICE9PSBGRUVEXG4gICAgICAgICkge1xuICAgICAgICAgIG5leHQgKz0gMVxuICAgICAgICAgIGlmIChSRV9IRVhfRVNDQVBFLnRlc3QoY3NzLmNoYXJBdChuZXh0KSkpIHtcbiAgICAgICAgICAgIHdoaWxlIChSRV9IRVhfRVNDQVBFLnRlc3QoY3NzLmNoYXJBdChuZXh0ICsgMSkpKSB7XG4gICAgICAgICAgICAgIG5leHQgKz0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNzcy5jaGFyQ29kZUF0KG5leHQgKyAxKSA9PT0gU1BBQ0UpIHtcbiAgICAgICAgICAgICAgbmV4dCArPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFRva2VuID0gWyd3b3JkJywgY3NzLnNsaWNlKHBvcywgbmV4dCArIDEpLCBwb3MsIG5leHRdXG5cbiAgICAgICAgcG9zID0gbmV4dFxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmIChjb2RlID09PSBTTEFTSCAmJiBjc3MuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gQVNURVJJU0spIHtcbiAgICAgICAgICBuZXh0ID0gY3NzLmluZGV4T2YoJyovJywgcG9zICsgMikgKyAxXG4gICAgICAgICAgaWYgKG5leHQgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChpZ25vcmUgfHwgaWdub3JlVW5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgbmV4dCA9IGNzcy5sZW5ndGhcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVuY2xvc2VkKCdjb21tZW50JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJyZW50VG9rZW4gPSBbJ2NvbW1lbnQnLCBjc3Muc2xpY2UocG9zLCBuZXh0ICsgMSksIHBvcywgbmV4dF1cbiAgICAgICAgICBwb3MgPSBuZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUkVfV09SRF9FTkQubGFzdEluZGV4ID0gcG9zICsgMVxuICAgICAgICAgIFJFX1dPUkRfRU5ELnRlc3QoY3NzKVxuICAgICAgICAgIGlmIChSRV9XT1JEX0VORC5sYXN0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIG5leHQgPSBjc3MubGVuZ3RoIC0gMVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0ID0gUkVfV09SRF9FTkQubGFzdEluZGV4IC0gMlxuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1cnJlbnRUb2tlbiA9IFsnd29yZCcsIGNzcy5zbGljZShwb3MsIG5leHQgKyAxKSwgcG9zLCBuZXh0XVxuICAgICAgICAgIGJ1ZmZlci5wdXNoKGN1cnJlbnRUb2tlbilcbiAgICAgICAgICBwb3MgPSBuZXh0XG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIHBvcysrXG4gICAgcmV0dXJuIGN1cnJlbnRUb2tlblxuICB9XG5cbiAgZnVuY3Rpb24gYmFjayh0b2tlbikge1xuICAgIHJldHVybmVkLnB1c2godG9rZW4pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJhY2ssXG4gICAgZW5kT2ZGaWxlLFxuICAgIG5leHRUb2tlbixcbiAgICBwb3NpdGlvblxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4ndXNlIHN0cmljdCdcblxubGV0IHByaW50ZWQgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgaWYgKHByaW50ZWRbbWVzc2FnZV0pIHJldHVyblxuICBwcmludGVkW21lc3NhZ2VdID0gdHJ1ZVxuXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jbGFzcyBXYXJuaW5nIHtcbiAgY29uc3RydWN0b3IodGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgdGhpcy50eXBlID0gJ3dhcm5pbmcnXG4gICAgdGhpcy50ZXh0ID0gdGV4dFxuXG4gICAgaWYgKG9wdHMubm9kZSAmJiBvcHRzLm5vZGUuc291cmNlKSB7XG4gICAgICBsZXQgcmFuZ2UgPSBvcHRzLm5vZGUucmFuZ2VCeShvcHRzKVxuICAgICAgdGhpcy5saW5lID0gcmFuZ2Uuc3RhcnQubGluZVxuICAgICAgdGhpcy5jb2x1bW4gPSByYW5nZS5zdGFydC5jb2x1bW5cbiAgICAgIHRoaXMuZW5kTGluZSA9IHJhbmdlLmVuZC5saW5lXG4gICAgICB0aGlzLmVuZENvbHVtbiA9IHJhbmdlLmVuZC5jb2x1bW5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBvcHQgaW4gb3B0cykgdGhpc1tvcHRdID0gb3B0c1tvcHRdXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlLmVycm9yKHRoaXMudGV4dCwge1xuICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgcGx1Z2luOiB0aGlzLnBsdWdpbixcbiAgICAgICAgd29yZDogdGhpcy53b3JkXG4gICAgICB9KS5tZXNzYWdlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGx1Z2luKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbHVnaW4gKyAnOiAnICsgdGhpcy50ZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGV4dFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2FybmluZ1xuV2FybmluZy5kZWZhdWx0ID0gV2FybmluZ1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlRE9NQ29udHJvbGxlcigpe1xuICAgIC8vc3RhdGUgMCBpcyBpbmJveCwgMSBpcyB0b2RheSwgMiBpcyB1cGNvbWluZ1xuICAgIGxldCBzdGF0ZSA9IDBcbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuZXdTdGF0ZSl7XG4gICAgICAgIHN0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCl7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RDb250YWluZXJcIik7IFxuICAgICAgICB3aGlsZSAobGlzdENvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIGxpc3RDb250YWluZXIucmVtb3ZlQ2hpbGQobGlzdENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdHMoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDaGVjayhwYXJlbnROb2RlLCB0YXNrKXsgXG4gICAgICAgIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmlkID0gJ2NoZWNrQm94Q29udGFpbmVyJztcbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHItMycsICdmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktc3RhcnQnKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyBcbiAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZCgnY2hlY2tlZDpiZy1zbGF0ZS0zMDAnLCdyb3VuZGVkLWZ1bGwnLCAnYXBwZWFyYW5jZS1ub25lJywgJ3ctNicsICdoLTYnLCAnYm9yZGVyLTInLCAnYm9yZGVyLWJsYWNrJyk7XG4gICAgICAgIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnOyBcbiAgICAgICAgY2hlY2tCb3guaWQgPSAndGFza0ZpbmlzaCc7IFxuICAgICAgICBjaGVja0JveC5uYW1lID0gJ3Rhc2snOyBcbiAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PntcbiAgICAgICAgICAgIGlmIChjaGVja0JveC5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2xpbmUtdGhyb3VnaCcsICdkZWNvcmF0aW9uLTInKTtcbiAgICAgICAgICAgICAgICB0YXNrLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdsaW5lLXRocm91Z2gnLCAnZGVjb3JhdGlvbi0yJyk7XG4gICAgICAgICAgICAgICAgdGFzay5maW5pc2hlZCA9IGZhbHNlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgICAgICByZXR1cm4gY2hlY2tCb3hDb250YWluZXI7IFxuICAgIH0gXG5cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIodGFza05hbWUpe1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSB0YXNrTmFtZTsgXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCd0ZXh0LWxnJywgJ2ZvbnQtc2VtaWJvbGQnLCAnbGVhZGluZy1ub25lJyk7XG4gICAgICAgIHJldHVybiBoZWFkZXI7IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZm9udC1saWdodCcpO1xuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRlKGR1ZURhdGUpe1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRHVlRGF0ZS5pbm5lckhUTUwgPSBkdWVEYXRlOyBcbiAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGV4dC14cycpO1xuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpbnB1dERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgICAgIGlmIChpbnB1dERhdGUgPCB0b2RheSl7XG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXJvc2UtODAwJylcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGV4dC1ncmVlbi04MDAnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFza0R1ZURhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzayl7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdweS0zJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuaWQgPSAndGFza0NvbnRhaW5lcic7XG5cbiAgICAgICAgLy9hZGQgY2hlY2tib3ggXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gY3JlYXRlQ2hlY2sodGFza0NvbnRhaW5lciwgdGFzayk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgICAgICAvL2FkZCB0YXNrIG5hbWUgYW5kIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgXG4gICAgICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBjcmVhdGVIZWFkZXIodGFzay5uYW1lKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24odGFzay5kZXNjcmlwdGlvbik7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgLy9hZGQgZHVlIGRhdGUgaWYgZW50ZXJlZFxuICAgICAgICBpZiAodGFzay5kdWVEYXRlKXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gY3JlYXRlRGF0ZSh0YXNrLmR1ZURhdGUpO1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7IFxuICAgICAgICB9XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0Q29udGFpbmVyXCIpLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Q29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ3B5LTMnLCAnanVzdGlmeS1iZXR3ZWVuJyk7XG4gICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0TmFtZTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3ROYW1lO1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlQnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ1dHRvbi5pbm5lclRleHQgPSAnWCc7XG4gICAgICAgIHJlbW92ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3RMaXN0KGFycmF5KXtcbiAgICAgICAgcmVtb3ZlUHJvamVjdHMoKTtcbiAgICAgICAgYXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUFsbChhcnJheSl7XG4gICAgICAgIGxldCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgZGlzcGxheVRhc2soYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRpc3BsYXlUb2RheShhcnJheSl7XG4gICAgICAgIGxldCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IFxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRvZGF5LnNldEhvdXJzKDAsMCwwLDApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGFycmF5W2ldLmR1ZURhdGVPYmplY3QgPCB0b2RheSl7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFycmF5W2ldLmR1ZURhdGVPYmplY3QgPiB0b2RheSl7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZGlzcGxheVRhc2soYXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVwY29taW5nKGFycmF5KXtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0b2RheS5zZXRIb3VycygwLDAsMCwwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChhcnJheVtpXS5kdWVEYXRlT2JqZWN0ID49IHRvZGF5KXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGFzayhhcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMaXN0KG9iamVjdEFycmF5KXsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGUgZnJvbSByZWZyZXNoIGxpc3QgY2FsbDogXCIgKyBzdGF0ZSk7XG4gICAgICAgIHJlbW92ZUFsbCgpOyBcbiAgICAgICAgaWYgKCFvYmplY3RBcnJheSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgdG9kYXkuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMCl7XG4gICAgICAgICAgICBkaXNwbGF5QWxsKG9iamVjdEFycmF5KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAxKXtcbiAgICAgICAgICAgIGRpc3BsYXlUb2RheShvYmplY3RBcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IDIpe1xuICAgICAgICAgICAgZGlzcGxheVVwY29taW5nKG9iamVjdEFycmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtyZW1vdmVBbGwsIGRpc3BsYXlUYXNrLCByZWZyZXNoTGlzdCwgdXBkYXRlU3RhdGUsIGRpc3BsYXlQcm9qZWN0TGlzdH1cbn1cblxuZXhwb3J0IHtjcmVhdGVET01Db250cm9sbGVyfVxuIiwiaW1wb3J0IHsgbGlzdCB9IGZyb20gXCJwb3N0Y3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50Q29udHJvbGxlcihsaXN0Q29udHJvbGxlciwgZG9tQ29udHJvbGxlcil7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrRGlhbG9nXCIpOyBcbiAgICBjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3REaWFsb2cnKTtcbiAgICBmdW5jdGlvbiBhZGRNb2RhbExpc3RlbmVyKCl7XG4gICAgICAgIC8vZXZlbnQgbGlzdGVuZXIgZm9yIGJ1dHRvbiB0byBhZGQgdGFza3NcbiAgICAgICAgY29uc3QgaW5wdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tJbnB1dEJ1dHRvblwiKTtcbiAgICAgICAgaW5wdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgLy9zaG93IG1vZGFsIFxuICAgICAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpOyBcbiAgICAgICAgICAgIC8vY2xvc2UgbW9kYWwgd2hlbiBjbGlja2luZyBvbiBjYW5jZWwgb3IgY2xpY2tpbmcgb3V0c2lkZSBvZiBmb3JtXG4gICAgICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tDYW5jZWxcIik7XG4gICAgICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9KSBcbiAgICAgICAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57ZGlhbG9nLmNsb3NlKCk7fSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9keW5tYWNhaWxseSByZXNpemUgZGVzY3JpcHRpb24gYm94IFxuICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKCk9PntcbiAgICAgICAgICAgIHRleHRBcmVhLnN0eWxlLmhlaWdodCA9IFwiMTBweFwiO1xuICAgICAgICAgICAgdGV4dEFyZWEuc3R5bGUuaGVpZ2h0ID0gdGV4dEFyZWEuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9ldmVudCBsaXN0ZW5lciBmb3IgYnV0dG9uIHRvIGFkZCBwcm9qZWN0c1xuICAgICAgICBjb25zdCBwcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dEJ1dHRvbicpO1xuICAgICAgICBwcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RDYW5jZWwnKVxuICAgICAgICAgICAgcHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgcHJvamVjdERpYWxvZy5jbG9zZSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9KTtcbiAgICAgICAgICAgIHByb2plY3REaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e3Byb2plY3REaWFsb2cuY2xvc2UoKTt9KTtcbiAgICAgICAgfSkgXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTdWJtaXRMaXN0ZW5lcigpe1xuICAgICAgICBjb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tJbnB1dFwiKTtcbiAgICAgICAgbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCk9PntcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrTmFtZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tEZXNjcmlwdGlvblwiKS52YWx1ZTsgXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza0RhdGVcIikudmFsdWU7IFxuICAgICAgICAgICAgLy9jcmVhdGUgdGFzayBhbmQgaW5zZXJ0IGludG8gdGFza0xpc3Qgb2JqZWN0XG4gICAgICAgICAgICBsZXQgdGFzayA9IGxpc3RDb250cm9sbGVyLmNyZWF0ZVRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSk7IFxuICAgICAgICAgICAgbGlzdENvbnRyb2xsZXIuYWRkVGFzayh0YXNrKTtcblxuICAgICAgICAgICAgZG9tQ29udHJvbGxlci5yZWZyZXNoTGlzdChsaXN0Q29udHJvbGxlci50b2RvKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuXG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0U3VibWl0TGlzdGVuZXIoKXtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpPT57XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJykudmFsdWU7XG4gICAgICAgICAgICBsaXN0Q29udHJvbGxlci5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTsgXG4gICAgICAgICAgICBkb21Db250cm9sbGVyLmRpc3BsYXlQcm9qZWN0TGlzdChsaXN0Q29udHJvbGxlci5wcm9qZWN0TGlzdCk7XG4gICAgICAgICAgICBldmVudC50YXJnZXQucmVzZXQoKTtcblxuICAgICAgICAgICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFJlbW92ZVByb2plY3RMaXN0ZW5lcigpe1xuICAgICAgICBjb25zdCBub2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVCdXR0b24nKTtcbiAgICAgICAgbm9kZUxpc3QuZm9yRWFjaCgoYnV0dG9uKT0+e1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICBsaXN0Q29udHJvbGxlci5yZW1vdmVQcm9qZWN0KGJ1dHRvbi5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBkb21Db250cm9sbGVyLmRpc3BsYXlQcm9qZWN0TGlzdChsaXN0Q29udHJvbGxlci5wcm9qZWN0TGlzdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdENvbnRyb2xsZXIucHJvamVjdExpc3QpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDbGVhckxpc3RlbmVyKCl7XG4gICAgICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZVRhc2tCdXR0b24nKTtcbiAgICAgICAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgbGlzdENvbnRyb2xsZXIuY2xlYXJDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIucmVmcmVzaExpc3QobGlzdENvbnRyb2xsZXIudG9kbyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRmlsdGVyVmlld0xpc3RlbmVyKCl7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICAgICAgY29uc3QgaW5ib3hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5ib3gnKTtcbiAgICAgICAgaW5ib3hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgZG9tQ29udHJvbGxlci51cGRhdGVTdGF0ZSgwKTtcbiAgICAgICAgICAgIGhlYWRlci5pbm5lclRleHQgPSAnaW5ib3gnO1xuICAgICAgICAgICAgZG9tQ29udHJvbGxlci5yZWZyZXNoTGlzdChsaXN0Q29udHJvbGxlci50b2RvKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuICAgICAgICB0b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBkb21Db250cm9sbGVyLnVwZGF0ZVN0YXRlKDEpO1xuICAgICAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9ICd0b2RheSc7XG4gICAgICAgICAgICBkb21Db250cm9sbGVyLnJlZnJlc2hMaXN0KGxpc3RDb250cm9sbGVyLnRvZG8pXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHVwY29taW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwY29taW5nJyk7XG4gICAgICAgIHVwY29taW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIudXBkYXRlU3RhdGUoMik7XG4gICAgICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ3VwY29taW5nJztcbiAgICAgICAgICAgIGRvbUNvbnRyb2xsZXIucmVmcmVzaExpc3QobGlzdENvbnRyb2xsZXIudG9kbylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZE1vZGFsTGlzdGVuZXIsIGFkZFN1Ym1pdExpc3RlbmVyLCBcbiAgICAgICAgYWRkQ2xlYXJMaXN0ZW5lciwgYWRkRmlsdGVyVmlld0xpc3RlbmVyLCBcbiAgICAgICAgYWRkUHJvamVjdFN1Ym1pdExpc3RlbmVyLCBhZGRSZW1vdmVQcm9qZWN0TGlzdGVuZXJ9O1xufVxuXG5leHBvcnQge2NyZWF0ZUV2ZW50Q29udHJvbGxlcn1cbiIsImZ1bmN0aW9uIGNyZWF0ZUxpc3RDb250cm9sbGVyKCl7XG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCl7XG4gICAgICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgZHVlRGF0ZU9iamVjdDtcbiAgICAgICAgaWYgKGR1ZURhdGUpe1xuICAgICAgICAgICAgZHVlRGF0ZU9iamVjdCA9IG5ldyBEYXRlKGR1ZURhdGUpO1xuICAgICAgICAgICAgZHVlRGF0ZU9iamVjdC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge25hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBmaW5pc2hlZCwgZHVlRGF0ZU9iamVjdCwgcHJvamVjdH07XG4gICAgfVxuXG4gICAgbGV0IHRvZG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvJykpO1xuICAgIGlmICghdG9kbyl7XG4gICAgICAgIHRvZG8gPSBbXTtcbiAgICB9XG4gICAgbGV0IHRvZG9MZW5ndGggPSB0b2RvLmxlbmd0aDsgXG5cbiAgICBsZXQgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKTtcbiAgICBpZiAoIXByb2plY3RMaXN0KXtcbiAgICAgICAgcHJvamVjdExpc3QgPSBbXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAodG9kb1tpXS5kdWVEYXRlT2JqZWN0KXtcbiAgICAgICAgICAgIHRvZG9baV0uZHVlRGF0ZU9iamVjdCA9IG5ldyBEYXRlKHRvZG9baV0uZHVlRGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzb3J0QnlEYXRlKCl7XG4gICAgICAgIHRvZG8uc29ydCgoYSxiKSA9PiBhLmR1ZURhdGVPYmplY3QgLSBiLmR1ZURhdGVPYmplY3QpO1xuICAgIH1cbiAgICBzb3J0QnlEYXRlKCk7IC8vc29ydCB3aGVuIGluc3RhbmNlIGlzIGNyZWF0ZWQgXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKXtcbiAgICAgICAgbGV0IHRvZG9KU09OID0gSlNPTi5zdHJpbmdpZnkodG9kbyk7IFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kbycsIHRvZG9KU09OKTtcblxuICAgICAgICBsZXQgcHJvamVjdEpTT04gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIHByb2plY3RKU09OKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGFkZFRhc2sob2JqZWN0KXtcbiAgICAgICAgdG9kby5wdXNoKG9iamVjdCk7XG4gICAgICAgIHNvcnRCeURhdGUoKTtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfSBcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3Qpe1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0TmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpe1xuICAgICAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjbGVhckNvbXBsZXRlZCgpe1xuICAgICAgICBsZXQgbGVuZ3RoID0gdG9kby5sZW5ndGg7IFxuICAgICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0xOyBpID49IDA7IGktLSl7XG4gICAgICAgICAgICBpZiAodG9kb1tpXS5maW5pc2hlZCl7XG4gICAgICAgICAgICAgICAgdG9kby5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHt0b2RvLCBwcm9qZWN0TGlzdCwgYWRkVGFzaywgYWRkUHJvamVjdCwgY2xlYXJDb21wbGV0ZWQsIGNyZWF0ZVRhc2ssIHJlbW92ZVByb2plY3R9O1xufVxuXG5leHBvcnQge2NyZWF0ZUxpc3RDb250cm9sbGVyfTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsImxldCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xubGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSA9IDIxKSA9PiB7XG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICBsZXQgaSA9IHNpemVcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZCArPSBhbHBoYWJldFsoTWF0aC5yYW5kb20oKSAqIGFscGhhYmV0Lmxlbmd0aCkgfCAwXVxuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfVxufVxubGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+IHtcbiAgbGV0IGlkID0gJydcbiAgbGV0IGkgPSBzaXplXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZCArPSB1cmxBbHBoYWJldFsoTWF0aC5yYW5kb20oKSAqIDY0KSB8IDBdXG4gIH1cbiAgcmV0dXJuIGlkXG59XG5tb2R1bGUuZXhwb3J0cyA9IHsgbmFub2lkLCBjdXN0b21BbHBoYWJldCB9XG4iLCJpbXBvcnQgcG9zdGNzcyBmcm9tICcuL3Bvc3Rjc3MuanMnXG5cbmV4cG9ydCBkZWZhdWx0IHBvc3Rjc3NcblxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9IHBvc3Rjc3Muc3RyaW5naWZ5XG5leHBvcnQgY29uc3QgZnJvbUpTT04gPSBwb3N0Y3NzLmZyb21KU09OXG5leHBvcnQgY29uc3QgcGx1Z2luID0gcG9zdGNzcy5wbHVnaW5cbmV4cG9ydCBjb25zdCBwYXJzZSA9IHBvc3Rjc3MucGFyc2VcbmV4cG9ydCBjb25zdCBsaXN0ID0gcG9zdGNzcy5saXN0XG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IHBvc3Rjc3MuZG9jdW1lbnRcbmV4cG9ydCBjb25zdCBjb21tZW50ID0gcG9zdGNzcy5jb21tZW50XG5leHBvcnQgY29uc3QgYXRSdWxlID0gcG9zdGNzcy5hdFJ1bGVcbmV4cG9ydCBjb25zdCBydWxlID0gcG9zdGNzcy5ydWxlXG5leHBvcnQgY29uc3QgZGVjbCA9IHBvc3Rjc3MuZGVjbFxuZXhwb3J0IGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnJvb3RcblxuZXhwb3J0IGNvbnN0IENzc1N5bnRheEVycm9yID0gcG9zdGNzcy5Dc3NTeW50YXhFcnJvclxuZXhwb3J0IGNvbnN0IERlY2xhcmF0aW9uID0gcG9zdGNzcy5EZWNsYXJhdGlvblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHBvc3Rjc3MuQ29udGFpbmVyXG5leHBvcnQgY29uc3QgUHJvY2Vzc29yID0gcG9zdGNzcy5Qcm9jZXNzb3JcbmV4cG9ydCBjb25zdCBEb2N1bWVudCA9IHBvc3Rjc3MuRG9jdW1lbnRcbmV4cG9ydCBjb25zdCBDb21tZW50ID0gcG9zdGNzcy5Db21tZW50XG5leHBvcnQgY29uc3QgV2FybmluZyA9IHBvc3Rjc3MuV2FybmluZ1xuZXhwb3J0IGNvbnN0IEF0UnVsZSA9IHBvc3Rjc3MuQXRSdWxlXG5leHBvcnQgY29uc3QgUmVzdWx0ID0gcG9zdGNzcy5SZXN1bHRcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHBvc3Rjc3MuSW5wdXRcbmV4cG9ydCBjb25zdCBSdWxlID0gcG9zdGNzcy5SdWxlXG5leHBvcnQgY29uc3QgUm9vdCA9IHBvc3Rjc3MuUm9vdFxuZXhwb3J0IGNvbnN0IE5vZGUgPSBwb3N0Y3NzLk5vZGVcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZURPTUNvbnRyb2xsZXIgfSBmcm9tICcuL0RPTUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2NyZWF0ZUxpc3RDb250cm9sbGVyfSBmcm9tICcuL3Rhc2tDbGFzc2VzLmpzJztcbmltcG9ydCB7IGNyZWF0ZUV2ZW50Q29udHJvbGxlcn0gZnJvbSAnLi9ldmVudExpc3RlbmVyLmpzJztcblxuXG4vL2NyZWF0ZSB0aGUgbGlzdENvbnRyb2xsZXIgYW5kIGRvbUNvbnRyb2xsZXIgaW5zdGFuY2VzXG5sZXQgbGlzdENvbnRyb2xsZXIgPSBjcmVhdGVMaXN0Q29udHJvbGxlcigpO1xubGV0IGRvbUNvbnRyb2xsZXIgPSBjcmVhdGVET01Db250cm9sbGVyKCk7XG5kb21Db250cm9sbGVyLnJlZnJlc2hMaXN0KGxpc3RDb250cm9sbGVyLnRvZG8pO1xuZG9tQ29udHJvbGxlci5kaXNwbGF5UHJvamVjdExpc3QobGlzdENvbnRyb2xsZXIucHJvamVjdExpc3QpO1xuXG4vL3Bhc3MgaW4gdGhlIGxpc3QgY29udHJvbGxlciBhbmQgZG9tIGNvbnRyb2xsZXIgaW5zdGFuY2VzIHRvIHRoZSBldmVudCBjb250cm9sbGVyXG5sZXQgZXZlbnRDb250cm9sbGVyID0gY3JlYXRlRXZlbnRDb250cm9sbGVyKGxpc3RDb250cm9sbGVyLCBkb21Db250cm9sbGVyKTtcbmV2ZW50Q29udHJvbGxlci5hZGRNb2RhbExpc3RlbmVyKCk7XG5ldmVudENvbnRyb2xsZXIuYWRkU3VibWl0TGlzdGVuZXIoKTtcbmV2ZW50Q29udHJvbGxlci5hZGRDbGVhckxpc3RlbmVyKCk7XG5ldmVudENvbnRyb2xsZXIuYWRkRmlsdGVyVmlld0xpc3RlbmVyKCk7XG5ldmVudENvbnRyb2xsZXIuYWRkUHJvamVjdFN1Ym1pdExpc3RlbmVyKCk7XG5ldmVudENvbnRyb2xsZXIuYWRkUmVtb3ZlUHJvamVjdExpc3RlbmVyKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==