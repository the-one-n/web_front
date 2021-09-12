(function() {
    const windowsToggles = document.querySelectorAll('[data-collapsed-window-toggle-id]');

    windowsToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const collapsedWindow = document.querySelector('[data-collapsed-window-id='
                + toggle.getAttribute('data-collapsed-window-toggle-id') + ']');

            if (collapsedWindow.classList.contains('collapsed-window--collapsed')) {
                collapsedWindow.classList.remove('collapsed-window--collapsed');
                toggle.classList.add('open');
            } else {
                collapsedWindow.classList.add('collapsed-window--collapsed');
                toggle.classList.remove('open');
            }
        })
    })
})();