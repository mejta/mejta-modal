# JS Modal

- Uses native implementation of `<dialog>`
- loads polyfills when necessary
- should work on IE6+, Safari, Firefox, Chrome
- very lightweight

## Usage

- add all files in `dist` directory into your assets
- import `dist/modal.js` into HTML document
- create `<dialog id="someid">...</dialog>` with modal content
- call javascript `openModalDialog(document.getElementById('someid'));` (e.g. on click on a button)
- example usage in `demo.html`
