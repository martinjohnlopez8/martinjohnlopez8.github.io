(function ($) {
	$(document).ready(function(){

		// TODO: Optimize Selector
		// TODO: Optimize Selector
		// TODO: Beautify Transition

	    $(function () {
	    	$(window).scroll(function () {

				var topElement = $('#who-we').offset().top;
				var scrollTop = $(this).scrollTop();

				// set distance user needs to scroll before we start fadeIn
				if ( scrollTop > topElement - 130) {
					$('.about-nav').fadeIn();
				} else {
					$('.about-nav').fadeOut();
				}
			});
		});
	});
}(jQuery));