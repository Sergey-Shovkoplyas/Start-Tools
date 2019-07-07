/* window.onload = function () {
	
	console.log('js is working!!!'); 

} */

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

});