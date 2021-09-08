
; /* Start:"a:4:{s:4:"full";s:95:"/local/templates/Vivon2019/components/bitrix/sale.basket.basket/basket/script.js?15832928903468";s:6:"source";s:80:"/local/templates/Vivon2019/components/bitrix/sale.basket.basket/basket/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function ($) {

	$(function () {

		var stopBlockR = $('.footer-block');
		var blockR = $('.basket-right-col');
		var blockRIn = $('.basket-right-col-inner');

		$(window).scroll(function () {

			var ScrollStart = (blockR.offset().top - 45);
			var ScrollStop = (stopBlockR.offset().top - 260);

			if ($(this).scrollTop() > ScrollStart && $(this).scrollTop() < ScrollStop) {
				blockRIn.addClass('basket-right-col-inner-fixed');
				blockRIn.removeClass('stop-fixed');
				blockRIn.css('top', 45);
			}
			else if ($(this).scrollTop() >= ScrollStop) {
				if (!blockRIn.hasClass('stop-fixed')) {
					blockRIn.addClass('stop-fixed');
					blockRIn.css('top', ScrollStop - 305);
					blockRIn.removeClass('basket-right-col-inner-fixed');
				}
			}
			else {
				blockRIn.removeClass('basket-right-col-inner-fixed');
				blockRIn.css('top', 0);
				blockRIn.removeClass('stop-fixed');
			}
		});
	});


	$(".quantity_minus").on('click', function () {
		var inp = $(this).parents('.q_counter').find('.q_counter_input');
		var cel = parseFloat(inp.data('cel') || 1);
		var val = inp.val();
		//if(val > 1) val --;
		if (val > cel) val = val - cel;
		val = Math.round(val * 100) / 100;
		inp.val(val);
		recalcAllSumm(true);
	});
	$(".quantity_plus").on('click', function () {
		var inp = $(this).parents('.q_counter').find('.q_counter_input');
		var val = parseFloat(inp.val());
		var cel = parseFloat(inp.data('cel') || 1);

		// val ++;
		val = val + cel;
		val = Math.round(val * 100) / 100;
		inp.val(val);
		recalcAllSumm(true);
	});
	$(".delete-link").on('click', function () {
		var basketItem = $(this).closest('.basket-item');
		basketItem.data('delete', true);
		basketItem.hide();
		recalcAllSumm(true);
	});

	recalcAllSumm();
});
function recalcAllSumm(bRecalc) {
	var commonInp = $(".common-price-price");

	var $allSum = 0;
	$allSum += recalcSummBasket(bRecalc);

	var deliveryPrice = parseInt($('.delivery-block .delivery-change:checked').data('price'));
	if (deliveryPrice) {
		$allSum += deliveryPrice;
		$("#total-price-delivery").html(deliveryPrice).parents('.row.delivery').show();
	}
	else {
		$("#total-price-delivery").parents('.row.delivery').hide();
	}

	commonInp.html(number_format($allSum, 0, '.', ' ') + ' руб.');
	commonInp.data('common-price', $allSum);
}
function recalcSummBasket(bRecalc) {
	bRecalc = bRecalc || false;
	var $allSum = 0;
	var dataItem = [];
	$items = $('.basket-item');
	$items.each(function () {

		if (!$(this).data('delete')) {
			var $q = parseFloat($(this).find('.q_counter_input').val());
			var $p = parseFloat($(this).data('price'));
			$allSum += ($p * $q);
		}
		dataItem[dataItem.length] = { 'id': $(this).data('basket_id'), 'quantity': $q, 'delete': $(this).data('delete') };
	});

	if (bRecalc) {
		$.ajax({
			type: "POST",
			url: '/local/templates/Vivon-2017/components/bitrix/sale.basket.basket/basket/ajax.php',
			dataType: 'json',
			data: { 'action': 'recalc', 'dataItems': dataItem },
			success: function (result) {
				if (result) {
					if (result.allSumDiscount) {
						$("#total-price-discount").html(result.allSumDiscount).parents('.row.discount').show();
					}
					else {
						$("#total-price-discount").parents('.row.discount').hide();
					}
					if (result.allSumNoDiscount) {
						$("#total-price").html(result.allSumNoDiscount);
					}
					if (result.allSum == 0) {
						window.location.href = "";
					}
				}
			}
		});
	}
	return $allSum;
}
function number_format(number, decimals, dec_point, thousands_sep) {
	var i, j, kw, kd, km;
	if (isNaN(decimals = Math.abs(decimals))) {
		decimals = 2;
	}
	if (dec_point == undefined) {
		dec_point = ",";
	}
	if (thousands_sep == undefined) {
		thousands_sep = ".";
	}
	i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

	if ((j = i.length) > 3) {
		j = j % 3;
	} else {
		j = 0;
	}
	km = (j ? i.substr(0, j) + thousands_sep : "");
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	//kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
	kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
	return km + kw + kd;
}
function checkOut() {
	if (!!BX('coupon'))
		BX('coupon').disabled = true;

	if (typeof yaCounter6071065 !== 'undefined')
		yaCounter6071065.reachGoal('korzina');

	BX("basket_form").submit();
	return true;
}
/* End */
;; /* /local/templates/Vivon2019/components/bitrix/sale.basket.basket/basket/script.js?15832928903468*/
