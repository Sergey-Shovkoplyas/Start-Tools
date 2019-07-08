$( document ).ready(function() {

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
	$('.banner__slider').slick();

});