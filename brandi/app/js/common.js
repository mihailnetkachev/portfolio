$(function() {

	var $window = $(window);
	var $htmlAndBody = $('html, body');
	var $headerMenuButton = $('.js__header__menuButton');
	var $headerMenuList = $('.js__header__menuList');
	var $insidePageLinks = $('a[href*="#"]');


	// Custom JS

	$window.on('load resize', function () {
		if ($window.width() > 1024) {
			$headerMenuButton.addClass('undisplay');
			$headerMenuList.removeClass('undisplay');
		} else {
			$headerMenuButton.removeClass('undisplay');
			$headerMenuList.addClass('undisplay');
		}
	});

	// menu navigation

	$insidePageLinks.on('click', function (event) {

		$htmlAndBody.animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500);

		event.preventDefault();
	});

	// toggle menu

	$headerMenuButton.on('click', function (event) {

		$headerMenuList.toggleClass('undisplay');

		event.preventDefault();
	});

	// works gallery -->

	var $controlsList = $('.works__controlsItem');
	var $galleryItemsList = $('.works__galleryItem');

	$controlsList.each(function (index, elem) {
		$(this).on('click', function (event) {
			var controlType = $(this).attr('data-type');

			// active element
			$controlsList.each(function (index, controlItem) {
				$(controlItem).removeClass('active');
			});
			$(this).addClass('active');

			// gallery items displaying
			$galleryItemsList.each(function (index, galleryItem) {
				var $galleryItem = $(galleryItem);

				if (controlType == 'all') {
					$galleryItem.removeClass('undisplay');
				} else {

					var galleryItemClassList = $galleryItem.attr('data-categories').split(' ');
					var result = false;
					
					$(galleryItemClassList).each(function (index, itemClass) {
						if (itemClass == controlType) {
							result = true;
						}
					});

					(result) ? $galleryItem.removeClass('undisplay') : $galleryItem.addClass('undisplay');
				}
			});

			event.preventDefault();
		});
	});

	// <-- works gallery 

	// content-animation

	var $sectionText = $('.sectionText');
	var $factsItems = $('.facts__listItem');

	$window.on('scroll', function () {

		$sectionText.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('animated fadeInUp');
			};
		});

		$factsItems.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('animated rotateInUpRight');
			};
		});

	});

	// carousels

	var $bannerList = $('.js__banner__list');
	var $featuresList = $('.js__features__list');
	var $teamList = $('.js__team__list');

	var $bannerCarouselOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav: false,
		dotsEach: true,
		items: 1
	}

	var $featuresCarouselOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 7500,
		margin: 22,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 2
			},
			750: {
				items: 3
			}
		}
	}

	var $teamCarouselOptions = {
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		margin: 16,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 2
			},
			750: {
				items: 3
			},
			1025: {
				items: 4
			}
		}
	}

	$bannerList.owlCarousel($bannerCarouselOptions);
	$featuresList.owlCarousel($featuresCarouselOptions);
	$teamList.owlCarousel($teamCarouselOptions);

});
