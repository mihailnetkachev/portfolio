$(function() {

	// General variables

	var $htmlAndBody = $('html, body');
	var $window = $(window);
	var $header = $('.header');
	var $headerMenuButton = $('.header__menuButton');
	var $headerMenuList = $('.header__menuList');
	var $headerMenuLinks = $('.js-header__menuLink');
	var $topBannerButton = $('.js-topBanner__button');
	var $aboutOffsetTop = $('#about').offset().top;
	var $anchor = $('.anchor');

	// headerMenuLinks, topBannerButton

	$headerMenuLinks.on('click', function (event) {
		event.preventDefault();
		
		var linkID = $(this).attr('id');
		var sectionID = linkID.split('').slice(0, -5).join('');

		$htmlAndBody.animate({scrollTop: $('#' + sectionID).offset().top + 1}, 400);
	});

	$topBannerButton.on('click', function(event) {
		event.preventDefault();

		$htmlAndBody.animate({scrollTop: $aboutOffsetTop + 1}, 400);
	});

	// menuStyle

	$window.on('load resize', function () {

		if ($window.width() > 768) {
			$headerMenuButton.addClass('undisplayed');
			$headerMenuList.removeClass('undisplayed');
		} else {
			$headerMenuButton.removeClass('undisplayed');
			$headerMenuList.addClass('undisplayed');
		}

	});

	// anchor

	$window.on('scroll', function () {

		if ($window.scrollTop() > $aboutOffsetTop) {
			$anchor.removeClass('undisplayed');
		} else {
			$anchor.addClass('undisplayed');
		}

	});

	$anchor.on('click', function (event) {
		event.preventDefault();

		$htmlAndBody.animate({scrollTop: 0}, 400);
	});

	// mobileMenu

	$headerMenuButton.on('click', function (event) {
		event.preventDefault();

		$header.toggleClass('translucentBackground');
		$headerMenuList.slideToggle(400);
	});

	// offers

	var $offersItemText = $('.js-offers__itemText');
	var $offersItemTitle = $('.js-offers__itemTitle');

	$offersItemText.hide();

	$offersItemTitle.on('click', function (event) {
		event.preventDefault();

		$(this).next().slideToggle(400);
		$(this).children('.fa').toggleClass('fa-angle-down');
		$(this).children('.fa').toggleClass('fa-angle-up');
	});

	$offersItemTitle.first().click();

	// content animations

	var $fadeInItems = $('.sectionText, .works__itemLink, .clients__listItem');
	var $rotateItems = $('.services__listItem, .partners__listItem');

	$window.on('scroll', function () {

		$fadeInItems.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('animated fadeInUp');
			};
		});

		$rotateItems.each(function () {
			var itemTop = $(this).offset().top;
			var viewportTop = $window.scrollTop();
			if (itemTop < viewportTop + $window.height()) {
				$(this).addClass('animated rotateInUpRight');
			};
		});

	});

	// carousels

	var carouselParamsFirst = {
		nav: false,
		loop: true,
		smartSpeed: 400,
		autoplay: true,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 5,
				loop: false
			}
		}
	};

	var carouselsParamsSecond = {
		nav: true,
		navText: 
			['<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		loop: true,
		smartSpeed: 400,
		autoplay: true,
		autoplayTimeout: 8000,
		items: 1
	};

	$('.js-facts__list').owlCarousel(carouselParamsFirst);

	$('.js-quotes__list').owlCarousel(carouselsParamsSecond);
	$('.js-reviews__list').owlCarousel(carouselsParamsSecond);

});

// mapSection

function initMap() {

	function addMarker(options) {
		var marker = new google.maps.Marker({
			position: options.coordinates,
			map: myMap
		});

		if (options.image) {
			marker.setIcon(options.image);
		}

		if (options.info) {
			var infoWindow = new google.maps.InfoWindow({
				content: options.info
			});

			marker.addListener('click', function() {
				infoWindow.open(myMap, marker);
			});
		}
	}

	var element = document.getElementById('map');
	var mapPoint = {lat: 46.483968, lng: 30.743395};

	var options = {
		zoom: 13,
		center: mapPoint
	};

	var myMap = new google.maps.Map(element, options);

	var markers = [
		{
			coordinates: mapPoint,
			// image: './img/mapIcon.svg',
			info: '<span class="map__tooltipText">MoGo Office</span>'
		}
	];

	markers.forEach(function (elem) {
		addMarker(elem);
	});

}