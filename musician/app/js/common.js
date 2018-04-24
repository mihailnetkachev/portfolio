$(function() {

	// Custom JS

	var $window = $(window);
	var $menuButton = $('.js__header__menuButton');
	var $menuList = $('.js__header__menuList');
	var $menuLinks = $('[class*="__menuLink"]');
	var $miInner = $('.miInner');

	// menu navigations

		$menuLinks.on('click', function (event) {

			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - 50
			}, 500);

			event.preventDefault();
		});

	// Menu-button functionality

	$menuButton.on('click', function (event) {

		if ($miInner.hasClass('miInner__open')) {
			$miInner.removeClass('miInner__open');
			$miInner.addClass('miInner__close');
		} else {
			$miInner.removeClass('miInner__close');
			$miInner.addClass('miInner__open');
		}
		$menuList.slideToggle();

		event.preventDefault();
	});

	// content-animations

	var $fadeInUpItems = $('.sectionText, .tracks__listItem');
	var $fadeInLeftItems = $('.tours__article, .events__list');

	$window.on('scroll', function () {

		$fadeInUpItems.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('fadeInUp');
			};
		});

		$fadeInLeftItems.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('fadeInLeft');
			};
		});

	});

	// Carousels

	var $factsList = $('.js__facts__list');
	var facrsCarouselOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		nav: true,
		navText: ['‹', '›'],
		items: 1
	}

	var $historyList = $('.js__history__list');
	var historyCarouselOptions = {
		center: true,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			1350: {
				items: 3
			}
		}
	};

	$factsList.owlCarousel(facrsCarouselOptions);
	$historyList.owlCarousel(historyCarouselOptions);

});
