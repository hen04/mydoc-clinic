"use strict";

$(function (){

	$('.js-menu-mobile').on('click', function(){
		$('body').toggleClass('menu-opened');

		$('.main-header__menu').toggleClass('opened');
	});

	$('.has-submenu').on('click', function(){
		$(this).toggleClass('opened');
	});



	$(window).on('load resize', function () {
		if ($(this).width() <= 1365) {
			$('.has-submenu-arrow').on('click', function (event) {
				$('.has-submenu').removeClass('opened');
				$(this).parents('.has-submenu').toggleClass('opened');
			});
		}
	});

	var carousel = $(".js-carousel");
	var nav = carousel.data('nav');
	var dots = carousel.data('dots');
	var auto = carousel.data('auto');
	var loop = carousel.data('loop');
	carousel.owlCarousel({
		responsiveClass: true,
		nav: nav,
		dots: dots,
		autoplay: auto,
		loop: loop,
		autoHeight: false,
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			768: {
				margin: 20,
				slideBy: 2,
				items: 2,
				autoHeight: true,
			},
			1280: {
				margin: 32,
				slideBy: 2,
				items: 2
			}
		}
	});

	var carousel = $(".js-sert-carousel");
	var nav = carousel.data('nav');
	var dots = carousel.data('dots');
	var auto = carousel.data('auto');
	var loop = carousel.data('loop');
	carousel.owlCarousel({
		responsiveClass: true,
		nav: nav,
		dots: dots,
		autoplay: auto,
		loop: loop,
		autoHeight: false,
		responsive: {
			0: {
				items: 1,
				margin: 20,
				autoHeight: true,
			},
			768: {
				margin: 20,
				slideBy: 3,
				items: 3,
			},
			1280: {
				margin: 20,
				slideBy: 2,
				items: 2,
			}
		}
	});


});
