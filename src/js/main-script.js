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
				margin: 20,
				autoHeight: true,
			},
			768: {
				margin: 20,
				slideBy: slide,
				items: items,
			},
			1280: {
				margin: 20,
				slideBy: slide,
				items: items,
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

});
