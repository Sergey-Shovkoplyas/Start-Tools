$( document ).ready(function() {

	//header-1 user block hover
	let $user = $('.header-1__user');
	let $login = $('.header-1__login');
	let $registration = $('.header-1__registration');


	$login.hover( userHovered, userNoHovered );
	$registration.hover( userHovered, userNoHovered );

	function userHovered() {
		$user.addClass('header-1__user--hovered');
	}

	function userNoHovered() {
		$user.removeClass('header-1__user--hovered');
	}
	
	// show lenguage-list
	let $lenguageList = $('.header-1__lenguage-list');

	$('.header-1__lenguage').on('click', function() {
		$lenguageList.toggle('fast');
	});

	//shov navigation on mobile

	$('.nav__hamburger').on('click', function() {
		$('.nav__list').toggle('fast');
	});

	// show navigation submenu

	$('.nav__link').on('click', function() {
		$(this).next().toggle('fast');
	});

	

	// show catalog
	let $catalog = $('.catalog');
	let $catalogMenu = $('.catalog__menu');
	$catalog.hover(
		function(){
			$catalogMenu.slideDown();
		},
		function(){
			$catalogMenu.slideUp();
		}
	);
	

	// show catalog__submenu
	let $catalogCategory = $('.catalog__menu li');
	$catalogCategory.hover(
		function(){
			$(this).find('.catalog__submenu-wrap').fadeIn(100);
		},
		function(){
			$(this).find('.catalog__submenu-wrap').fadeOut(100);
		}
	);

	// initialize sales__slider
	$('.sales__slider').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	// initialize video__slider
	$('.video__slider').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	// initialize banner__slider
	$('.banner__slider').slick({
		dots: true,
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false
				}
			}
		]
	});

});