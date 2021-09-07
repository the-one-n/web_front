(function() {
    const cartToggle = document.querySelector('.cart-total__toggle');
    const cartTotal = document.querySelector('.cart-total');

    cartToggle.addEventListener('click', () => {
        if (cartTotal.classList.contains('cart-total--hidden')) {
            cartTotal.classList.remove('cart-total--hidden');
            cartToggle.classList.add('open');
        } else {
            cartTotal.classList.add('cart-total--hidden');
            cartToggle.classList.remove('open');
        }
    })
})();