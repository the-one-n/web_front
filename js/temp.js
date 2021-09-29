$(document).ready(function() {
    const $productPopUp = $('.product-pop-up');
    const $productShadowBox = $('.product-pop-up__shadowbox');
    const $productPopUpMenu = $('.product-pop-up-menu');
    const $menuItem = $('.submenu-sublist-item, .submenu-item');
    const $productPopUpClose = $('.product-pop-up__close');

    function openPopUp($target) {
      let $children = $target.children('.product-menu').clone();

      console.log($children);

      if (!!$.trim($children.html())) {
        $productPopUp.addClass('product-pop-up--active');

        $productPopUpMenu.append($children);
      }
    }

    $menuItem.click((e) => {
      const $target = $(e.currentTarget);

      openPopUp($target);
    });

    $($productPopUpClose, $productShadowBox).click(() => {
      $productPopUpMenu.html('');
      $productPopUp.removeClass('product-pop-up--active');
    });
  });