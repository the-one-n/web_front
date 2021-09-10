(function() {
    const collapsedWindowToggle = document.querySelector('.collapsed-window-toggle');
    const collapsedWindow = document.querySelector('.collapsed-window');

    collapsedWindowToggle.addEventListener('click', () => {
        if (collapsedWindow.classList.contains('collapsed-window--collapsed')) {
            collapsedWindow.classList.remove('collapsed-window--collapsed');
            collapsedWindowToggle.classList.add('open');
        } else {
            collapsedWindow.classList.add('collapsed-window--collapsed');
            collapsedWindowToggle.classList.remove('open');
        }
    })
})();