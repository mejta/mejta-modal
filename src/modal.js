if (typeof document.currentScript === 'undefined') {
    require('current-script-polyfill');
}

const currentScript = document.currentScript.src;
__webpack_public_path__ = currentScript.substring(0, currentScript.lastIndexOf('/') + 1);

(function () {    
    import('./modal.scss');

    window.openModalDialog = async function(dialog) {
        if (!dialog) {
            return;
        }

        // HTMLDialogElement polyfill
        if (typeof HTMLDialogElement !== 'function') {
            const { default: dialogPolyfill } = await import('dialog-polyfill');
            dialogPolyfill.registerDialog(dialog);
        }
        
        dialog.showModal();

        const button = document.createElement('button');
        button.classList.add('dialog-close-button');
        button.appendChild(document.createTextNode('╳'));
        button.addEventListener('click', () => {
            dialog.removeChild(button);
            dialog.close();
        });

        dialog.appendChild(button);
    }
})();
