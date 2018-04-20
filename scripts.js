// ----------------------------------------
// Minimalism: JS > Scripts
// ----------------------------------------

$(document).ready(function() {
        
	// ------------------------------
	// Make language selector invisible on scrolling down
	// ------------------------------

	$('#main').on('scroll', function () {
		var scrollTop = $('#main').scrollTop();

		if (scrollTop > 20) {
			$('.language-selector').addClass('language-selector--hide');
		} else {
			$('.language-selector').removeClass('language-selector--hide');
		}
	});
    	
    $(document).bind("DOMSubtreeModified",function(){
    	
    	// ------------------------------
    	// Change language selector style if the navigation is open
    	// ------------------------------
    	
    	var isMenuOpen = $('.extendednavigation').find('.open');
    	
    	if (isMenuOpen.length > 0) {
    		$('.language-selector').addClass('language-selector--menu-open');
    	} else {
    		$('.language-selector').removeClass('language-selector--menu-open');
    	} 
	
    });
	
});