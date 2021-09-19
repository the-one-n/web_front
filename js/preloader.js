(function() {
    const helloPreloader = document.querySelector(".hellopreloader_preload");

    function fadeOut(el) {
        el.style.opacity = 1;
        const interHelloPreloader = setInterval(
            function() {
                el.style.opacity = el.style.opacity - 0.05;

                if (el.style.opacity <= 0.05) {
                    clearInterval(interHelloPreloader);
                    helloPreloader.style.display = "none";
                }
                },16);
    }

    if (helloPreloader) {
        window.onload = function() {
            setTimeout(
                function() {
                    fadeOut(helloPreloader);
                },1000);
        };
    }
})();