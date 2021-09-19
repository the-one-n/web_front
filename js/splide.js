(function () {
    const slider = document.querySelector('.splide');

    if (slider) {
        const splideOptions = {
            type: 'loop',
            rewind: true,
            autoplay: true,
            pauseOnHover: false,
        }

        new Splide('.splide', splideOptions).mount();
    }
})();