$(document).ready(function () {
	$('.fe-navbar-icon').on('click', function () {
		$('.fe-full-navbar').addClass('open');
	});
	$('.fe-full-navbar-close').on('click', function () {
		$('.fe-full-navbar').removeClass('open');
	});

	$(window).scroll(function () {
		const sc = $(window).scrollTop();
		if (sc > 100) {
			$('.fe-navbar').addClass('sticky');
		} else {
			$('.fe-navbar').removeClass('sticky');
		}
	});

	$('.fe-bxslider').bxSlider({
		mode: 'horizontal',
		moveSlides: 1,
		slideMargin: 0,
		infiniteLoop: true,
		minSlides: 1,
		maxSlides: 1,
		controls: false,
		adaptiveHeight: true,
		speed: 500,
	});

	$('#feWork').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
		},
	});

	const swiper = new Swiper('.mySwiper', {
		slidesPerView: '3',
		allowTouchMove: true,
		effect: 'coverflow',
		loop: true,
		grabCursor: true,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			0: {
				slidesPerView: '1',
			},
			567: {
				slidesPerView: '1',
			},
			767: {
				slidesPerView: '2',
			},
			992: {
				slidesPerView: '3',
			},
		},
	});
});

$('#fePostSlider').owlCarousel({
	items: 3,
	loop: true,
	itemsDesktop: [1199, 3],
	itemsDesktopSmall: [1000, 2],
	itemsMobile: [599, 1],
	pagination: false,
	navigationText: false,
	autoplay: true,
	responsive: {
		0: {
			items: 1,
		},
		400: {
			items: 1,
		},
		767: {
			items: 2,
		},
		992: {
			items: 3,
		},
	},
});

$('#feClientCarousel').owlCarousel({
	items: 6,
	loop: true,
	smartSpeed: 700,
	autoplay: true,
	autoPlayHoverPause: true,
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 2,
		},
		400: {
			items: 3,
		},
		767: {
			items: 4,
		},
		992: {
			items: 6,
		},
	},
});

$('.fe-counter-section-count').counterUp({
	delay: 10,
	time: 1000,
});
