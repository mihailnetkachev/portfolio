$(function() {

	// Custom JS

	var $menuLinks = $('[class*="__menuLink"]');
	var $window = $(window);
	

	// header menu navigation

	$menuLinks.on('click', function (event) {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		}, 500);
		event.preventDefault();
	});

	// content-animation

	var $animatedItems = $('.about__text');
	var $worksItemIcon = $('.works__itemIcon');

	$window.on('scroll', function () {

		$animatedItems.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('animated fadeInUp');
			};
		});

		$worksItemIcon.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('animated zoomIn');
			};
		});

	});

	// carousel

	var $reviewsList = $('.js__reviews__list');
	var reviewsCarouselOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		nav: false,
		items: 1
	};

	$reviewsList.owlCarousel(reviewsCarouselOptions);

});
