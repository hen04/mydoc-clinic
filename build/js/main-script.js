"use strict";

$(function (){

	$('.js-menu-mobile').on('click', function(){
		$('body').toggleClass('menu-opened');

		$('.main-header__menu').toggleClass('opened');
	});

	$('.has-submenu').on('click', function(){
		$(this).toggleClass('opened');
	});

	$('.js-blind').on('click', function() {
		let $target = $(this).prev();
		blindPanel($target);
	});

	function blindPanel($target) {
		if ( $target.hasClass('active') ) {
			$target.removeClass('active');
		} else {
			$target.addClass('active');
		}
	}

	$('.js-font-plus').on('click', function (){
		$('html').addClass('font-plus');
		$('.font-default').removeClass('hidden');
		blindVersion(this);

		let $target = $(this).parent();
		blindPanel($target);

	});

	$('.js-font-reset').on('click', function (){
		$('html').removeClass('font-plus');
		$('.font-extra').removeClass('hidden');
		blindVersion(this);	

		let $target = $(this).parent();
		blindPanel($target);
	});

	$('.js-color-off').on('click', function (){
		$('html').addClass('color-off');
		$('.color-version').removeClass('hidden');
		blindVersion(this);	

		let $target = $(this).parent();
		blindPanel($target);
	});

	$('.js-color-on').on('click', function (){
		$('html').removeClass('color-off');
		$('.black-version').removeClass('hidden');
		blindVersion(this);	

		let $target = $(this).parent();
		blindPanel($target);
	});

	function blindVersion($class) {
		$($class).addClass('hidden');
		$(this).parent().removeClass('active');
	}

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
	var responsive= carousel.data('responsive');
	carousel.owlCarousel({
		responsiveClass: true,
		nav: nav,
		dots: dots,
		autoplay: auto,
		loop: loop,
		autoHeight: false,
		responsive: responsive
	});

	var carousel = $(".js-sert-carousel");
	var nav = carousel.data('nav');
	var dots = carousel.data('dots');
	var auto = carousel.data('auto');
	var loop = carousel.data('loop');
	var items= carousel.data('items');
	var slide= carousel.data('slide');
	carousel.owlCarousel({
		responsiveClass: true,
		nav: nav,
		dots: dots,
		autoplay: auto,
		loop: loop,
		autoHeight: false,
		responsive: {
			0: {
				items: items,
				slideBy: slide,
				margin: 20,
				autoHeight: true,
			}
		}
	});

	$(".js-doctor-carousel").owlCarousel({
		responsiveClass: true,
		nav: true,
		dots: false,
		autoHeight: false,
		responsive: {
			0: {
				items: 1,
				slideBy: 1,
				margin: 20,
				autoHeight: true,
			},
			768: {
				items: 2,
				slideBy: 2,
				margin: 20,
				autoHeight: true,
			}
		}
	});

	const headers = document.querySelectorAll('.tabs-header-item');
	const tabs = document.querySelectorAll('.tabs-content-item');

	function onTabClick(item) {
		item.addEventListener('click', () => {
			let currentHeader = item;
			let tabId = currentHeader.getAttribute('data-tab');
			let currentTab = document.querySelector(tabId);

			if (!currentHeader.classList.contains('active')) {
				headers.forEach((item) => {
					item.classList.remove('active');
				});

				tabs.forEach((item) => {
					item.classList.remove('active');
				});

				currentHeader.classList.add('active');
				currentTab.classList.add('active');
			}
		});
	}

	headers.forEach(onTabClick);

	$('.js-modal').on('click', function(event){
		event.preventDefault();
		var linkhref = $(this).attr('href');
		$(linkhref).arcticmodal();
	});

	
	$('.js-gallery a').simpleLightbox();


});
