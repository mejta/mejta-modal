# JS Native Modal

- Uses native implementation of `<dialog>`
- loads polyfills when necessary
- should work on IE6+, Safari, Firefox, Chrome
- very lightweight

## Usage

- copy `dist` directory to the project
- import `dist/modal.js` into HTML document
- create `<dialog id="someid">...</dialog>` with modal content
- call `window.openModalDialog(document.getElementById('someid'));` (e.g. on click on a button)
- to close modal call `document.getElementById('someid').close()`
- example usage in `demo.html`
