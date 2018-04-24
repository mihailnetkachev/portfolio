$(function() {

	// Custom JS
	var $window = $(window);
	var $htmlBody = $('html, body');
	var $header = $('.header')
	var $menuLinks = $('a[class*="__menuLink"]');
	var $menuButton = $('.header__menuButton');
	var $miInner = $('.miInner');
	var $headerMenuList = $('.header__menuList');
	var $banner = $('.banner');
	var $charger = $('.charger');

	// Mobile-header functional

	$window.on('scroll', function () {
		($window.scrollTop() > $banner.height() && $window.scrollTop() < $charger.offset().top) ? 
			$header.addClass('header__mobile') : 
				$header.removeClass('header__mobile');
	});

	// Menu-links navigation

	$menuLinks.on('click', function (event) {

		$htmlBody.animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, 500);

		event.preventDefault();
	});

	// Menu-button functional

	$menuButton.on('click', function (event) {

		if ($miInner.hasClass('miInner__open')) {
			$miInner.removeClass('miInner__open');
			$miInner.addClass('miInner__close');
		} else {
			$miInner.removeClass('miInner__close');
			$miInner.addClass('miInner__open');
		}

		$headerMenuList.toggleClass('undisplay');

		event.preventDefault();
	});

	// content-animation

	var $articles = $('[class*="__articleWrapper"]');
	var $servicesItems = $('.services__listItem');

	$window.on('scroll', function () {

		$articles.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('animated fadeInUp');
			};
		});

		$servicesItems.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('animated rotateInUpRight');
			};
		});

	});

	// carousels

	var $bannerList = $('.js__banner__list');
	var bannerCarouselOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav: false,
		dots: false,
		items: 1
	}

	var $projectsList = $('.js__projects__list');
	var projectsCarouselOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: false,
		dots: false,
		margin: 16,
		stagePadding: 32,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			750: {
				items: 2
			},
			1360: {
				items: 3
			}
		}
	};

	var $reviewsList = $('.js__reviews__list');
	var reviewsCarouselOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		nav: true,
		navText: ['&lsaquo;', '&rsaquo;'],
		dots: false,
		items: 1
	};

	$bannerList.owlCarousel(bannerCarouselOptions);
	$reviewsList.owlCarousel(reviewsCarouselOptions);
	$projectsList.owlCarousel(projectsCarouselOptions);

});
