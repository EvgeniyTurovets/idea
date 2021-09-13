
; /* Start:"a:4:{s:4:"full";s:97:"/local/templates/Vivon2019/components/codenails/catalog.element/new2020/script.js?163099401028765";s:6:"source";s:81:"/local/templates/Vivon2019/components/codenails/catalog.element/new2020/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
//
// нельзя выбрать несколько однотипных зеркал
//
if ($('#tovar-page').length) {


	fotoramaDefaults = {
		width: 800,
		allowfullscreen: true
	}

	function arrows() {
		if ($('.fotorama__arr--next').prop('disabled')) { $('.fotor-next').hide(); } else { $('.fotor-next').show(); }
		if ($('.fotorama__arr--prev').prop('disabled')) { $('.fotor-prev').hide(); } else { $('.fotor-next').show(); }
	}
	$(document)
		.on('click', '.fotor-next', function () { //Fucking fotorama!
			var e = $.Event("keydown", { keyCode: 39 });
			$("body").trigger(e);
			//setTimeout(arrows(), 100);
		})
		.on('click', '.fotor-prev', function () { //Fucking fotorama!
			var e = $.Event("keydown", { keyCode: 37 });
			$("body").trigger(e);
			//setTimeout(arrows(), 100);
		})
		.on('ready', function () {
			$('.largeimg').magnificPopup({
				type: 'inline',
				src: '#show',
				callbacks: {
					open: function (e, b) {
						var x = 0;
						if ($("#show").data("video-exists") == "1") {
							x = this.currItem.el.data('x') - 1;
						}
						else {
							x = this.currItem.el.data('x');
						}

						var fotorama = $('.fotorama').data('fotorama');
						fotorama.show(x);

						$('.fotorama__img').on('contextmenu', function (e) {
							return false;
						});
					}
				}
			});
		
			$('.fotorama').on(
				'fotorama:load fotorama:show fotorama:ready fotorama:showend',
				function (e, fotorama, extra) {
					//console.log($('.fotorama img'));
					//console.log($('.fotorama__img'));
					$('.fotorama__img').css('border', '1px solid red');
					$('.fotorama__img').on('contextmenu', function (e) {
						return false;
					});
				}
			).fotorama();
			//$('#show .fotorama').after('<span class="fotor-next js-arrow" data-fotorama="#keyboard" data-show=">"></span>');
			//$('#show .fotorama').before('<span class="fotor-prev js-arrow" data-fotorama="#keyboard" data-show="<"></span>');
			//setTimeout(arrows(), 100);
		});
	/*.on('click', 'ul.other-image li a', function() {
		$('.largeimg > img').attr('src', $(this).data('href'));
		//console.log($(this).data('href'));
		return false;
	})*/
	$(function () {

		$(".fancybox").fancybox({

			padding: 0,
			closeBtn: true,
			helpers: {
				overlay: {
					locked: false
				}
			},
		});

		/*
		 *  Оставить отзыв о товаре
		 */
		$(document).on('click', '.js--send-review-popup', function (e) {

			e.preventDefault();

			// function previewFile() {
			// 	var preview = document.querySelector('img');
			// 	var file    = document.querySelector('input[type=file]').files[0];
			// 	var reader  = new FileReader();

			// 	reader.onloadend = function () {
			// 		preview.src = reader.result;
			// 	}

			// 	if (file) {
			// 		reader.readAsDataURL(file);
			// 	} else {
			// 		preview.src = "";
			// 	}
			// }

			$.fancybox.open($('#popup_product_review'), {
				padding: 0,
				closeBtn: true,
				helpers: {
					overlay: {
						locked: false
					}
				},
				beforeShow: function () {
					$('.attached-image-list').html(" ");

				},
				afterShow: function () {
					$("#popup_product_review .gray-button").click(function () { $.fancybox.close(true); return false; });
					// $("#popup-callback-phone").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}).focus();
					$("#popup-review-name").focus();

					// $(".add-review-images-btn").on('click', function(){
					// 	$("#js--review-attached-files").
					// });

					var reviewAttachedFiles; // переменная. будет содержать данные файлов

					// заполняем переменную данными, при изменении значения поля file
					$('#js--review-attached-files').on('change', function () {
						reviewAttachedFiles = this.files;
						// console.log(reviewAttachedFiles);

						var previewContainer = $(".attached-image-list");
						previewContainer.html(" ");

						var clearfix = $('<div>', {
							'class': 'clearfix'
						});

						$.each(reviewAttachedFiles, function (key, objFile) {

							// console.log(objFile);

							// var objCurrentFile = objFile;

							var attachedImageDIV = $('<div>', {
								'class': 'attached-image-list-item'//,
								// 'text': 'Текст... ['+ now() +'])'
							});

							var preview = $('<img>', {
								'id': 'attached-image-' + key,
								'class': 'attached-image',
								'src': '',
								'alt': objFile.name,
								'title': objFile.name
								// 'text': 'Текст... ['+ now() +'])'
							});

							// var preview = document.querySelector('img');
							// var file    = document.querySelector('input[type=file]').files[0];
							var reader = new FileReader();

							reader.onloadend = function () {
								$(preview).attr('src', reader.result);
							}

							if (objFile) {
								reader.readAsDataURL(objFile);
								preview.src = reader.result;
								preview.alt = objFile.name;
								preview.title = objFile.name;
								// console.log(reader);
								// console.log('=================================================');
							} else {
								preview.src = "";
							}

							$(attachedImageDIV).append(preview);
							$(previewContainer).append(attachedImageDIV);
						});

						$(previewContainer).append(clearfix);

						$.fancybox.update();
					});

					$("#popup_product_review .order-button").on('click', function (event) {

						$('.fancybox-opened').showWaitWindow();

						$("#popup_product_review .popup-oneclick-mess").html(" ");

						event.stopPropagation(); // остановка всех текущих JS событий
						event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега

						// создадим объект данных формы
						var data = new FormData();

						data.append('action', 'add_review');
						data.append('rating', $("input[name='rating']:checked").val());
						data.append('name', $("#popup-review-name").val());
						data.append('comment', $("#popup-review-comment").val());
						data.append('product_id', $("#productJSData").data("json").id);
						data.append('url', window.location.href);

						// ничего не делаем если files пустой
						// if( typeof reviewAttachedFiles == 'undefined' ) return;

						// заполняем объект данных файлами в подходящем для отправки формате
						if (typeof reviewAttachedFiles != 'undefined') {
							// data.append( 'arAttachedFiles', reviewAttachedFiles );
							$.each(reviewAttachedFiles, function (key, value) {
								// data.append( 'append_file_'+key, value );
								data.append('REVIEW_ATTACHED_FILES[]', value);
							});

							// добавим переменную для идентификации запроса
							data.append('bAppendFilesExists', 1);
						}
						else {
							data.append('bAppendFilesExists', 0);
						}

						$.ajax({
							type: "POST",
							url: '/ajax/ajax_product_review.php',
							cache: false,
							// contentType: 'multipart/form-data',
							contentType: false,
							processData: false,
							dataType: 'json',
							data: data,
							/*
							data: {
								'action':'add_review',
								'rating':$("input[name='rating']:checked").val(),
								'name':$("#popup-review-name").val(),
								'comment':$("#popup-review-comment").val(),
								'product_id':$("#productJSData").data("json").id,
								// 'arAttachedFiles':$("input[name='reviewAttachedFiles[]']").attr('files'),
								'arAttachedFiles':$("#js--review-attached-files").attr('files'),
								// 'phone':$("#popup-callback-phone").val(),
								'url':window.location.href,
							},
							*/
							//	respond [response], status, jqXHR
							success: function (result, status, jqXHR) {
								$('.fancybox-opened').closeWaitWindow();
								// console.log(result);
								if (result.error)
									$("#popup_product_review .popup-oneclick-mess").html(result['error']);
								else if (result.success) {
									$(".star-rating__input").each(function () {
										$(this).attr('checked', false);
									});

									$("#popup_product_review input").each(function () {
										$(this).val('');
									});

									$("#popup-review-comment").val('');

									$("#popup_product_review .popup-oneclick-mess").html(result['mess']);
									$("#ajaxLoader_").css('height', $(".fancybox-opened").css("height"));

									setTimeout(function () {
										$.fancybox.close();
									}, 2000);
								}
							},
							error: function (jqXHR, status, errorThrown) {
								// $('.fancybox-opened').closeWaitWindow();
								$('.fancybox-opened').closeWaitWindow();
								console.log('ОШИБКА AJAX запроса: ' + status, jqXHR);
							}
						});
					});
				},
				afterClose: function () {
					$("#popup_product_review .popup-oneclick-mess").html("");
				}
			});
			return false;
		});

		/*
		 *  Задать вопрос
		 */
		$(document).on('click', '.js--send-faq-popup', function (e) {

			e.preventDefault();

			$.fancybox.open($('#popup_product_faq'), {
				padding: 0,
				closeBtn: true,
				helpers: {
					overlay: {
						locked: false
					}
				},
				beforeShow: function () {


				},
				afterShow: function () {
					$("#popup_product_faq .gray-button").click(function () { $.fancybox.close(true); return false; });
					// $("#popup-callback-phone").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}).focus();
					$("#popup-faq-name").focus();

					$("#popup_product_faq .order-button").on('click', function () {

						// для теста
						// $("#popup_product_faq .popup-oneclick-mess").html('тест тест тест');
						// return false;

						$.ajax({
							type: "POST",
							url: '/ajax/ajax_product_faq.php',
							dataType: 'json',
							data: {
								'action': 'add_question',
								'name': $("#popup-faq-name").val(),
								'email': $("#popup-faq-email").val(),
								'question': $("#popup-faq-question").val(),
								'product_id': $("#productJSData").data("json").id,
								// 'phone':$("#popup-callback-phone").val(),
								'url': window.location.href,
							},
							success: function (result) {
								if (result.error)
									$("#popup_product_faq .popup-oneclick-mess").html(result['error']);
								else if (result.success) {
									$("#popup_product_faq input").each(function () {
										$(this).val('');
									});

									$("#popup-faq-question").val('');

									$("#popup_product_faq .popup-oneclick-mess").html(result['mess']);

									setTimeout(function () {
										$.fancybox.close();
									}, 2000);
								}
							}
						});
					});
				},
				afterClose: function () {
					$("#popup_product_faq .popup-oneclick-mess").html("");
				}
			});
			return false;
		});





		// console.log(jsComplectSet);

		$(".bubble2 .fa").click(function () {
			$(this).parent().addClass('hide');
		});
		$(".bubble .fa").click(function () {
			$(this).parent().addClass('hide');
		});

		$('.product-slider-item img, .other-image img, #show img').bind('contextmenu', function (e) {
			return false;
		});


		// Табы "Описание товара", "Характеристики", "Отзывы", "Вопросы-ответы""

		$.ionTabs(".ionTabs", {
			// type: "storage"
			type: "none"
		});

		if ($(".comments-list").data("reviews-cnt") == 0)
			$(".product-reviews__head .rating").hide();

		$(".q__link a").on("mouseover", function (e) {
			// e.preventDefault();
			// $(".product-features-item .hint .bubble").each().hide();
			$(this).parent().parent().find(".bubble").show();
			return false;
		});

		$(".q__link a").on("mouseout", function (e) {
			$(this).parent().parent().find(".bubble").hide();
			return false;
		});

		$(".hint .bubble .fa-times").click(function (e) {
			// e.preventDefault();
			// $(".product-features-item .hint .bubble").each().hide();
			$(this).parent().hide();
			return false;
		});

		$(".product-info-reviews-link a[href^='#']").on("click", function (e) {
			// $('a[href^="#"]').on('click', function(event) {

			// отменяем стандартное действие
			e.preventDefault();

			/*
			 * sc - в переменную заносим информацию о том, к какому блоку надо перейти
			 * dn - определяем положение блока на странице
			 */
			var sc = $('.product-block-tabs'),
				dn = $(sc).offset().top - 200;

			/*
			 * 1000 скорость перехода в миллисекундах
			 */
			$('html, body').animate({ scrollTop: dn }, 500);

			// });

			$.ionTabs.setTab("Product_Info_Tabs", "tab_reviwes");
		});

		$(".show-hidden-props a[href^='#']").on("click", function (e) {

			e.preventDefault();

			/*
			 * sc - в переменную заносим информацию о том, к какому блоку надо перейти
			 * dn - определяем положение блока на странице
			 */
			var sc = $('.product-block-tabs'),
				dn = $(sc).offset().top - 200;

			/*
			 * 1000 скорость перехода в миллисекундах
			 */
			$('html, body').animate({ scrollTop: dn }, 500);

			$.ionTabs.setTab("Product_Info_Tabs", "tab_specifications");
		});

		// главное фото и мини-галерея
		var sync1 = $("#sync1");
		sync1.owlCarousel({
			singleItem: true,
			navigation: true,
			navigationText: false,
			pagination: false,
			// afterAction : syncPosition
		});
		var owlDataPictures = sync1.data('owlCarousel');

		var otherPicturesLst = $("#other-small-imgs");
		otherPicturesLst.owlCarousel({
			singleItem: false,
			slideBy: 1,
			itemElement: 'li',
			nestedItemSelector: 'sm-owl-carousel-item',
			loop: true,
			mouseDrag: true,
			nav: true,
			navigation: true,
			navigationText: true,
			pagination: true,
			navText: ['prev', 'next'],
			slideSpeed: 600,
			itemsDesktop: [2200, 6],
			itemsTablet: [1200, 4],
			itemsMobile: [560, 3],
		});
		var owlDataSmallPictures = otherPicturesLst.data('owlCarousel');

		$('div.other-image div a').hover(function () {
			//$('.largeimg > img').attr('src', $(this).data('href'));
			//console.log($(this).data('href'));
			//if($('#frog').hasClass('active'))
			if ($(this).hasClass('frog')) {
				// var sc = $('.product-block-tabs'),
				// 	dn = $(sc).offset().top - 200;
				//     //1000 скорость перехода в миллисекундах
				// 	$('html, body').animate({scrollTop: dn}, 500);
				//alert("Something");
				owlDataPictures.goTo($(this).data('x'));
				$('.sm-owl-carousel-item').find('a').removeClass('active');
				$(this).addClass('active');
				return false;
			} else {
				;
				//vide

				owlDataPictures.goTo($(this).data('x'));
				// owlDataSmallPictures.goTo($(this).data('x'));
				// console.log(owlDataSmallPictures);
				// itemIndex = owlDataSmallPictures.currentItem;
				$('.sm-owl-carousel-item').find('a').removeClass('active');
				// alert(owlDataSmallPictures.currentItem);
				$(this).addClass('active');
				return false;
			}
		});

		$('div.other-image div a').on('click', function (e) {

			e.preventDefault();
			//$('.largeimg > img').attr('src', $(this).data('href'));
			//console.log($(this).data('href'));
			//if($('#frog').hasClass('active'))
			if ($(this).hasClass('frog')) {
				// var sc = $('.product-block-tabs'),
				// 	//dn = $(sc).offset().top - 200;
				// 	dn = $(sc).offset().top;
				//     //1000 скорость перехода в миллисекундах
				// 	$('html, body').animate({scrollTop: dn}, 500);
				//alert("Something");

				var videoItems = [];
				for (i in jsVideoList) {
					videoItems.push({
						src: jsVideoList[i],
						type: 'iframe' // this overrides default type
					});
				}


				$.magnificPopup.open({
					items: videoItems,
					gallery: {
						enabled: true
					},
					type: 'iframe'
				});
			} else {

			}
		});

		$(".js-modal-btn").on('click', function (e) {

			// console.log($(this));
			// console.log($(this).data("href"));
			$.magnificPopup.open({
				items: {
					src: $(this).data("href"),
					type: 'iframe'
				},

				type: 'iframe'
			});
		});

		$('div.other-image .owl-prev').on('click', function () {
			itemIndex = owlDataSmallPictures.currentItem;

			if ((itemIndex >= owlDataSmallPictures.itemsAmount - owlDataSmallPictures.orignalItems)) {
				itemIndex = parseInt($('div.other-image a.active').data('x'));
				itemIndex--;
				owlDataSmallPictures.goTo(itemIndex);
			}

			owlDataPictures.goTo(itemIndex);
			$('div.other-image a').removeClass('active');
			$('div.other-image a[data-x="' + itemIndex + '"]').addClass('active');
			// console.log(itemIndex);
		})

		$('div.other-image .owl-next').on('click', function () {
			itemIndex = owlDataSmallPictures.currentItem;

			if ((itemIndex >= owlDataSmallPictures.itemsAmount - owlDataSmallPictures.orignalItems)) {
				itemIndex = parseInt($('div.other-image a.active').data('x'));
				if ((itemIndex + 1) < owlDataSmallPictures.itemsAmount) {
					itemIndex++;
					owlDataSmallPictures.goTo(itemIndex);
				}
			}

			owlDataPictures.goTo(itemIndex);
			$('div.other-image a').removeClass('active');
			$('div.other-image a[data-x="' + itemIndex + '"]').addClass('active');

			// console.log(owlDataSmallPictures);
		})

		$('div.product-slider .owl-prev').on('click', function () {
			itemIndex = owlDataPictures.currentItem;
			owlDataSmallPictures.goTo(itemIndex);
			$('div.other-image a').removeClass('active');
			$('div.other-image a[data-x="' + itemIndex + '"]').addClass('active');
			// console.log(itemIndex);
		})

		$('div.product-slider .owl-next').on('click', function () {
			itemIndex = owlDataPictures.currentItem;
			owlDataSmallPictures.goTo(itemIndex);
			$('div.other-image a').removeClass('active');
			$('div.other-image a[data-x="' + itemIndex + '"]').addClass('active');
			// console.log(itemIndex);
		})

		// Listen to owl events:
		// owlDataSmallPictures.on('changed.owl.carousel', function(event) {
		// var itemIndex = event.item.index;
		// alert(itemIndex);
		// $('.sm-owl-carousel-item a').each().removeClass('active');
		// $('.sm-owl-carousel-item a').find('.sm-owl-carousel-item a[data-x="'+itemIndex+'"]').parent().addClass('active');
		// });

		// раскрытие списка комплекта

		$(".product-kit-block-link").click(function (e) {
			e.preventDefault();
			if ($(this).data('status') == 'opened') {
				$(this).data('status', 'hidden');
				// $('.product-kit-block').css("max-height", "890px");
				$('.product-kit-block').css("max-height", "590px");
				$(this).find('a').text('показать все');
			}
			else {
				$(this).data('status', 'opened');
				$('.product-kit-block').css("max-height", "100%");
				$(this).find('a').text('свернуть');
			}
			// $(".product-kit-block::before").css("background-image", "none");

			if ($('.product-kit-block-link').hasClass('product-kit-block-link-gradient'))
				$('.product-kit-block-link').removeClass('product-kit-block-link-gradient')
			else
				$('.product-kit-block-link').addClass('product-kit-block-link-gradient')
		});


		if ($('.product-kit-block').length) {
			$(window).scroll(function () {
				if ($(this).scrollTop() > ($('.product-kit-block').offset().top - 118)) {
					$('.product-kit-block-sum-price').addClass('product-kit-block-sum-price-fixed');
				}
				else {
					$('.product-kit-block-sum-price').removeClass('product-kit-block-sum-price-fixed');
				}
			});
		}
		else {
			$(window).scroll(function () {
				// console.log($('.product-block-item.price').offset().top);
				if ($(this).scrollTop() > ($('.product-block-info__content-left').offset().top - 50)) {
					$('.product-block-item.price').addClass('product-block-item-price-fixed');

					// if($('.product-block-info__content-left').offset().top - 158 < 0) {
					// 	$('.product-block-item.price').removeClass('product-block-item-price-fixed');	
					// }
				}
				else {
					$('.product-block-item.price').removeClass('product-block-item-price-fixed');
				}
			});
		}


		var otherProducts = $('#other-products')
		otherProducts.owlCarousel({
			items: 5,
			//slideBy: 3,
			scrollPerPage: true,
			// autoWidth: true,
			// itemElement: 'li',
			// nestedItemSelector: 'carousel-item',
			itemsDesktop: [1430, 5],
			//itemsDesktopSmall     : [1140,4],
			// itemsTablet       : [768,4],
			// itemsMobile       : [479,4],
			// loop: true,
			// speed: 1000,
			// margin: 10.5,
			// mouseDrag : true,
			navigation: false,
			nav: true,
			slideSpeed: 600,
			// navText: ['','']
			// navContainer: '.cb-carousel-nav'
			// scrollPerPage: true,
			// autoHeight: true
		});
		var owl_otherProducts = otherProducts.data('owlCarousel');
		$('#prew_other').click(function () {
			owl_otherProducts.prev();
		});
		$('#next_other').click(function () {
			owl_otherProducts.next();
		});

		var viewedProducts = $('#viewed-products')
		viewedProducts.owlCarousel({
			items: 5,
			//slideBy: 3,
			scrollPerPage: true,
			// autoWidth: true,
			// itemElement: 'li',
			// nestedItemSelector: 'carousel-item',
			itemsDesktop: [1430, 5],
			//itemsDesktopSmall     : [1140,4],
			// itemsTablet       : [768,4],
			// itemsMobile       : [479,4],
			// loop: true,
			// speed: 1000,
			// margin: 10.5,
			// mouseDrag : true,
			navigation: false,
			nav: true,
			slideSpeed: 600,
			// navText: ['','']
			// navContainer: '.cb-carousel-nav'
			// scrollPerPage: true,
			// autoHeight: true
		});
		var owl_viewedProducts = viewedProducts.data('owlCarousel');
		$('#prew_cviewed').click(function () {
			owl_viewedProducts.prev();
		});
		$('#next_cviewed').click(function () {
			owl_viewedProducts.next();
		});

		// $('.carousel-content-wrapper .carousel-content').width('10000px');

	});
	/* End */
	;
	; /* Start:"a:4:{s:4:"full";s:104:"/local/templates/Vivon2019/components/bitrix/catalog.products.viewed/new2020/script.min.js?1497824408911";s:6:"source";s:86:"/local/templates/Vivon2019/components/bitrix/catalog.products.viewed/new2020/script.js";s:3:"min";s:90:"/local/templates/Vivon2019/components/bitrix/catalog.products.viewed/new2020/script.min.js";s:3:"map";s:90:"/local/templates/Vivon2019/components/bitrix/catalog.products.viewed/new2020/script.map.js";}"*/
	(function () { "use strict"; if (!!window.JCCatalogProductsViewedComponent) return; window.JCCatalogProductsViewedComponent = function (t) { this.container = document.querySelector('[data-entity="' + t.container + '"]'); if (t.initiallyShowHeader) { BX.ready(BX.delegate(this.showHeader, this)) } }; window.JCCatalogProductsViewedComponent.prototype = { showHeader: function (t) { var e = BX.findParent(this.container, { attr: { "data-entity": "parent-container" } }), i; if (e && BX.type.isDomNode(e)) { i = e.querySelector('[data-entity="header"'); if (i && i.getAttribute("data-showed") != "true") { i.style.display = ""; if (t) { new BX.easing({ duration: 2e3, start: { opacity: 0 }, finish: { opacity: 100 }, transition: BX.easing.makeEaseOut(BX.easing.transitions.quad), step: function (t) { i.style.opacity = t.opacity / 100 }, complete: function () { i.removeAttribute("style"); i.setAttribute("data-showed", "true") } }).animate() } else { i.style.opacity = 100 } } } } } })();
	/* End */
	;
	; /* Start:"a:4:{s:4:"full";s:60:"/local/templates/Vivon2019/js/ion.tabs.min.js?15832928902303";s:6:"source";s:45:"/local/templates/Vivon2019/js/ion.tabs.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
	// Ion.Tabs
	// version 1.0.2 Build: 17
	// https://github.com/IonDen/ion.tabs
	(function (a, w, g, n) { if (!a.ionTabs) { var h = {}, q = {}, k = {}, b, d, r, v = a(g), t = function () { try { if (g.localStorage && null !== g.localStorage) return { save: function (b, a) { "object" === typeof a && (a = JSON.stringify(a)); try { localStorage.setItem(b, a) } catch (c) { "QUOTA_EXCEEDED_ERR" === c && (localStorage.clear(), localStorage.setItem(b, a)) } }, load: function (a) { try { return JSON.parse(localStorage.getItem(a)) } catch (b) { return localStorage.getItem(a) } }, del: function (a) { localStorage.removeItem(a) } } } catch (b) { return { save: function () { return null }, load: function () { return null }, del: function () { return null } } } return null }(), u = function (a) { this.container = a }; u.prototype = { init: function () { var c = this.container, m = c.find(".ionTabs__tab"), d = c.find(".ionTabs__item"), s = c.find(".ionTabs__preloader"), l, f = c.data("name"), e; m.each(function () { l = a(this); e = "Button__" + f + "__" + l.data("target"); l.prop("id", e) }); d.each(function () { l = a(this); e = "Tab__" + f + "__" + l.data("name"); l.prop("id", e) }); m.on("click.ionTabs", function (b) { b.preventDefault(); s[0].style.display = "block"; p(a(this).data("target")) }); var p = function (c) { c = decodeURIComponent(c); e = "#Button__" + f + "__" + c; a(e).addClass("ionTabs__tab_state_active").siblings().removeClass("ionTabs__tab_state_active"); e = "#Tab__" + f + "__" + c; a(e).addClass("ionTabs__item_state_active").siblings().removeClass("ionTabs__item_state_active"); s[0].style.display = "none"; var d; k[f] = c; b = "tabs"; for (d in k) k.hasOwnProperty(d) && (b += "|" + encodeURIComponent(d) + ":" + encodeURIComponent(k[d])); "hash" === h.type && (n.hash = b); "storage" === h.type && t.save(n.hostname + "__ionTabsPosition", b); v.trigger("ionTabsChange", { group: f, tab: c, tabId: e }); if ("function" === typeof h.onChange) h.onChange({ group: f, tab: c, tabId: e }) }; k[f] ? p(k[f]) : p(m.eq(0).data("target")); this.setTab = function (a) { p(a) } } }; a.ionTabs = function (c, m) { if (c) { var g; h = a.extend({ type: "hash", onChange: null }, m); "hash" === h.type && (b = n.hash); "storage" === h.type && (b = t.load(n.hostname + "__ionTabsPosition")); if (b) { b = b.split("|"); if (1 < b.length) for (d = 1; d < b.length; d += 1)r = b[d].split(":"), k[decodeURIComponent(r[0])] = decodeURIComponent(r[1]); b = "" } a(c).each(function () { g = a(this); var b = encodeURIComponent(g.data("name")); q[b] = new u(g); q[b].init() }) } }; a.ionTabs.setTab = function (a, b) { q[a].setTab(b) } } })(jQuery, document, window, location);
	/* End */
	;

	;; /* /local/templates/Vivon2019/components/codenails/catalog.element/new2020/script.js?163099401028765*/
	; /* /local/templates/Vivon2019/components/bitrix/catalog.products.viewed/new2020/script.min.js?1497824408911*/
	; /* /local/templates/Vivon2019/js/ion.tabs.min.js?15832928902303*/
	; /* /local/templates/Vivon2019/js/owl.carousel.min.js?158329289014916*/

	//# sourceMappingURL=page_4d2130e817434403acf4f9ae3334efb3.map.js
}