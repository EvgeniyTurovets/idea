
; /* Start:"a:4:{s:4:"full";s:72:"/local/components/kombox/filter/templates/vivon/script.js?15090810883303";s:6:"source";s:57:"/local/components/kombox/filter/templates/vivon/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$('#over').click(function () {
	$(".catalog-filter-form-item").removeClass("active");
	$("#over").removeClass('active');
});

$(".catalog-filter-form-name").click(function () {

	//console.log(this);
	if ($(this).parent().hasClass('active')) {
		$(".catalog-filter-form-item").removeClass("active");
		$("#over").removeClass('active');
	}
	else {
		$(".catalog-filter-form-item").removeClass("active");
		$(this).parent().toggleClass("active");
		$("#over").addClass('active');
	}
});
$(".catalog-filter-form-hide-close").click(function () {
	$(".catalog-filter-form-item").removeClass("active");
	return false;
});

$('.more-filters', this.wrapper).click(function () {
	if ($(this).hasClass('hidden-open')) {
		$('.catalog-filter-form-item.has-hidden', this.wrapper).addClass('hidden').removeClass('has-hidden');
		$(this).removeClass('hidden-open');
		$(this).html('Ещё фильтры');
		$(this).parents('.catalog-filter-form').removeClass('has-hidden');
	}
	else {
		$('.catalog-filter-form-item.hidden', this.wrapper).removeClass('hidden').addClass('has-hidden');
		//$(this).parent().addClass('hidden');
		$(this).addClass('hidden-open');
		$(this).html('Скрыть');
		$(this).parents('.catalog-filter-form').addClass('has-hidden');
	}
	return false;
});

$(document).ready(function () {

	$(function () {
		var popularBrandsCarusel = $('#popularBrandsCarusel .carousel-content');
		popularBrandsCarusel.owlCarousel({
			items: 4,
			scrollPerPage: true,
			navigation: false, nav: true,
			slideSpeed: 600,
		});

		var owlpopularBrandsCarusel = popularBrandsCarusel.data('owlCarousel');

		$('#prew_popularBrandsCarusel').click(function () {
			owlpopularBrandsCarusel.prev();
		});

		$('#next_popularBrandsCarusel').click(function () {
			owlpopularBrandsCarusel.next();
		});
	});


})