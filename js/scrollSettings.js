$(document).ready(function(){

  //Calling Local Scroll Function
	/**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://flesler.demos.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
	 */
		
	
	// Scroll initially if there's a hash (#something) in the url 
	$.localScroll.hash({
		queue:true,
		duration:1500,
		offset: {left:0, top:-90},
		onAfter: trigger
	});
	
	
	$.localScroll({
		//easing:'elasout',
		stop:true,
		queue:true,
		duration:1000,
		offset: {left:0, top:-70},
		hash:true,
		onAfter: trigger
		});

	// bind the navigation clicks to update the selected nav:
	$('#navigation').find('a').click(selectNav);

	// handle nav selection - lots of nice chaining :-)
	function selectNav() {
		$(this)
    			.parents('ul:first') // find the first UL parent
      			.find('a') // find all the A elements
        				.removeClass('selected') // remove from all
      				.end() // go back to all A elements
    				.end() // go back to 'this' element
    			.addClass('selected');
	}

	function trigger(data) {
  	// within the #navigation element, find the = element
  	// whose href ends with ID ($= is ends with)
		var el = $('#navigation').find('a[href$="' + data.id + '"]').get(0);
  
  	// we're passing the actual element, and not the jQuery instance.
		selectNav.call(el);
	}

	if (!window.location.hash) {
      	$('#navigation a:first').click();
	}

  });