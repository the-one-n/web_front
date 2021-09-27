$(document).ready(function() {
    const $productPopUp = $('.product-pop-up');
    const $productShadowBox = $('.product-pop-up__shadowbox');
    const $productPopUpMenu = $('.product-pop-up-menu');
    const $sublistItems = $('.submenu-sublist-item');
    const $submenuSublistItemLink = $('.submenu-sublist-item__link');
    const $productPopUpClose = $('.product-pop-up__close');

    function openPopUp($target) {
        let $children = $target.children('.product-menu').clone();

        $productPopUp.addClass('product-pop-up--active');

        $productPopUpMenu.append($children);
    }

    $sublistItems.click((e) => {
        const $target = $(e.target);

        openPopUp($target);
    });

    $submenuSublistItemLink.click((e) => {
        const $target = $(e.target).parent();

        openPopUp($target);
    });

    $($productPopUpClose, $productShadowBox).click(() => {
        $productPopUpMenu.html('');
        $productPopUp.removeClass('product-pop-up--active');
    });
});