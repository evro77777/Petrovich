'use strict';

$('.product__area').html(data.map(function (item) {
    return template(item);
}).join(''));

$(document).ready(function () {
    $('.stepper-arrow.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        return false;
    });
    $('.stepper-arrow.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        return false;
    });

    $('.unit--select').click(function (event) {
        if ($(this).hasClass('unit--active')) {
            return;
        }

        $(this).parent().find('.unit--select').removeClass('unit--active');
        $(this).closest('.product').find('.product-price').hide();
        var targetPrice = $(this).closest('.product').find('.product-price' + '.product-price_unit_' + $(this).data('unit')).show();
        $(this).parent().find('.unit--select' + '.unit--select_unit_' + $(this).data('unit')).addClass('unit--active');
    });
});