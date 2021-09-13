"use strict";

$(function () {
  $('#burger-btn').on('click', function () {
    $('.header-nav-dropdown').show();
  });
  $('#burger-close').on('click', function () {
    $('.header-nav-dropdown').hide();
  });
  $('.catalog-nav-link-arrow').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.catalog-nav-dropdown').toggleClass('active');
  });
});
//# sourceMappingURL=main.js.map
