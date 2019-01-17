/*
Jan 2013 WAB
My first attempt at a jquery plugin
Displays a spinner on or next to any object

calls
	$(obj).spinner()
	$(obj).removeSpinner()

options
	position: left|right|center
	size: large|small	
default options chnage slightly depending upon the object and its size

*/

(function( $ ){


  $.fn.spinner = function(passedoptions) {
  
	this.each(function () {

			obj = $(this)

			// does this object already have a loading div?
			spinnerDiv = obj.data('spinnerDiv')
			
			if (!spinnerDiv) {
				var defaultOptions = {position:'center',size:'small'}

				// for an anchor the default is left
				if(this.tagName == 'A') {defaultOptions.position = 'left'}
		
				// for large object then default to large icon
				var dimensions = {height: obj.height(),width:obj.width()}
				if (dimensions.width > 100 && dimensions.height > 100) {defaultOptions.size = 'large'}
	
				// combine the default and passed options
				options = $.extend(defaultOptions, passedoptions);

				if (options.size == 'large') {
					var img = {url:'/images/misc/ajax-loading.gif',size:60}
				} else {
					var img = {url:'/images/icons/loading.gif',size:16}
				}

				// where are we going to create the spinner div
				// Inside for div,a
				// After for input,textarea   TDB

				// create the div
					divHTML = '<div class="spinnerOuter" style="position:relative;display:inline;"><div style="position:absolute;z-index:1;top:0;left:0;" class="spinnerInner"><img src="'+img.url+'"></div></div>'	
					spinnerDiv = $(divHTML)
					spinnerDiv.prependTo(obj);
					spinnerDivInner = spinnerDiv.find(':first-child')
					objPosition = obj.offset()
					obj.data ('spinnerDiv', spinnerDiv)


					spinnerDivPosition = spinnerDiv.offset()
					relativePosition = {top:spinnerDivPosition.top- objPosition.top , left:spinnerDivPosition.left - objPosition.left }
	
											
					// work out where to position the image
					if (options.position == 'left') {
						positionRelativeToTopLeft = {left:-img.size -2 ,top:0}
					} else if (options.position == 'right') {
						positionRelativeToTopLeft = {left:dimensions.width + 2 ,top:0}
					} else {
						// ie center
						positionRelativeToTopLeft = {left:(dimensions.width /2 - img.size/2),top:(dimensions.height/2 - img.size/2)} 
					}

					shift = {top:(-relativePosition.top + positionRelativeToTopLeft.top),left:(-relativePosition.left + positionRelativeToTopLeft.left )}

					spinnerDivInner[0].style.marginLeft = shift.left + 'px' //(-positionRelativeToTopLeft.left) + 'px' //(relativePosition.left + positionRelativeToTopLeft.left) + 'px'
					spinnerDivInner[0].style.marginTop = shift.top + 'px' // (relativePosition.top + positionRelativeToTopLeft.top) + 'px'
	
			//return false
		}

		})
	
	

	
	

  }


  $.fn.removeSpinner = function(spinneroptions) { 

	this.each(function () {
			obj = $(this)
			spinnerDiv = obj.data('spinnerDiv')
			if(spinnerDiv) {
				spinnerDiv.remove()
			}
			obj.data('spinnerDiv',null)

	})


  }
  

})( jQuery );
