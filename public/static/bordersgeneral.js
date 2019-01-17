/*===========================
Edit History 
17/02/2016 SB Fixed to mobile menu for iPhone. 
===========================*/
jQuery(function($){
	
	/*===========================
	  *************************** 
	  ** FUNCTIONS DECLARATION **
	  ***************************
	===========================*/
	showViewportSize();
	cookiesMessage();
	googleAnalytics();	
	detectIphone();
	businessPlan();
	mobileMenu();
	/*===================
	  SB 06/14: VIEWPORT RESIZE REMOVE WHEN DEPLOYED
	=====================*/
	$(window).resize(function(e) {
		   showViewportSize();
		});
	
	function showViewportSize() {
		   var the_width = $(window).width();
		   var the_height = $(window).height();                   
		   $('#width').text(the_width);
		   $('#height').text(the_height);
		}
	/*===================
	  SB 06/14: COOKIES MESSAGE
	=====================*/
	function cookiesMessage(){
		$('#cookiesContainer button').click(function(){
			
			$('#cookiesContainer').slideUp();
			 
	        /* If you just want the cookie for a session don't provide an expires
	         Set the path as root, so the cookie will be valid across the whole site */
	        /* 2015/07/06 GCC 443431 extend to 90 days so partners aren't forced to accept every 7 days */
	        $.cookie('cookiesContainer', 'closed', { expires: 90 });
	    });
		
		// Check if alert has been closed
	    if( $.cookie('cookiesContainer') === 'closed' ){
	        $('#cookiesContainer').hide();
	    }
	    else {
	    	 $('#cookiesContainer').show();
	    }
	}	
	/*===================
	  SB 06/14: GOOGLE ANALYTICS
	=====================*/
	function googleAnalytics(){
		
		/* Logout Desktop Header - !!!!!WORKING */
		$('#logout a').on('click', function() {
			//alert("Logout Desktop Header");
			ga('send','event','Click','Logout','Header');
		});
		
		/* Logout Mobile Nav */		
		$('a#mobileLogout').on('click', function() {
			ga('send','event','Click','Logout','MobileNav');
		});
		
		/*Home Nav !!!!!WORKING*/
		$('.navbar-header a.navbar-brand').on('click', function() {
			//alert("Home Nav");
			ga('send','event','Click','Home','Nav');
		});
		
		/*Logo which links to homepage !!WORKING */
		$('header a.logo').on('click', function() {
			//alert("Home Logo");
			ga('send','event','Click','Home','Logo');
		});
		
		/*Login form button !!!! WORKING */
		$('#loginForm button').on('click', function() {		
			ga('send','event','Click','Login','Login Form');
		});		
	}
	/*===================
	  SB 06/14: DETECT IPHONE AND HIDE FILE UPLOAD TOOL ON IOS
	=====================*/
	function detectIphone(){
		(function (a) {
			jQuery.browser.iDevice = /ip(hone|od|ad)/i.test(a);
		})(navigator.userAgent || navigator.vendor || window.opera);
		
		if ($.browser.iDevice) {
			$('.relatedFilelink a').click(function(e){ 
				e.preventDefault(); 
				
			});
			$(".relatedFilelink a").addClass("relatedFilelinkIOS");
			$("#relatedFileShowMsgIOS").show();
		}
		
		else {				
			$(".hideIOS").show();
		}	
	}
	/*===================
	  RMC 08/14: Business plan navigation links ("Previous" & "Next") to trigger tabs  
	=====================*/	
	function businessPlan(){
		$('.btnNext').click(function(){
			$('.nav-tabs > .active').next('li').find('a').trigger('click');
		});

		$('.btnPrevious').click(function(){
			$('.nav-tabs > .active').prev('li').find('a').trigger('click');
		});
	}

	
	/*===================
	  YMA 07/08/14: Remove lowerlevel class from body on logged in homepage
	=====================*/
	jQuery(document).ready(function() {
		jQuery('body.myClass_451').removeClass('lowerlevel')
	});
	

	/*===================
	  SB 24/11/2014: Slide out menu for mobile 
	=====================*/
	function mobileMenu(){
		
		/*===================
		  FUNCTIONS 
		=====================*/	
		/* Slide out function */
		function mobileMenuSlideOut(){
			jQuery('.mobile-wrapper').animate({ marginLeft: "70%" }, 1, function() {
	    		jQuery(".mobile-wrapper").css("position", "fixed");	
	    		jQuery('.navbar-toggle').removeClass('fa-bars');
	    		jQuery('.navbar-toggle').addClass('fa-times');
	        });
	    	jQuery('.mobile-wrapper-sidebar').animate({ marginLeft: "0px" }, 1);
	    	jQuery('#wrapper').removeClass('notActive');
		}	
				
		/* Slide int function */
		function mobileMenuSlideIn(){	
			jQuery('.mobile-wrapper').animate({ marginLeft: "0px" }, 'fast', function() {
				jQuery('.mobile-wrapper').css('position', 'absolute');
				jQuery('.navbar-toggle').removeClass('fa-times'); 
				jQuery('.navbar-toggle').addClass('fa-bars');
			});
			jQuery('.mobile-wrapper-sidebar').animate({ marginLeft: "-70%" }, 'fast');
			jQuery('#wrapper').addClass('notActive');
		}
		
		/* Swipe funtion function */
		function swipeLeftMenu(){
			if (jQuery(this).width() < 767){
				
				jQuery( ".mobile-wrapper" ).on("swipeleft", function() {	
					mobileMenuSlideIn();	
				});
				
			} else {
			}
		}
	
		/*===================
		  ACTIONS 
		=====================*/	
		swipeLeftMenu();

		/* Add click function to toggle mobile menu */
		$(function() {
			jQuery('[data-toggle="mobile-wrapper"]').click(function() {     
				if(jQuery('#wrapper').hasClass('notActive')) {
					mobileMenuSlideOut();
				} 
				else {
					mobileMenuSlideIn();
					jQuery('wrapper').addClass('notActive');
				}
			});
		});
		
		/* Adjust to screen size increase */
		jQuery( window ).resize(function() {
			if (jQuery(this).width() > 767){ 
				jQuery('.mobile-wrapper').css('margin-left', '0');
				//SB Fix to mobile menu 
				jQuery('.mobile-wrapper').addClass('notActive');
				jQuery(".mobile-wrapper").css("position", "inherit");
			}
			else {
			}
		});
	}
	

	/*===========================
	  AS 12/08/2016 - fixes document uploads table layout on smaller devices
	===========================*/
	grabText();
  function grabText() {
    $('#relatedFileTable tbody td').each(function(index, el) {
      // Grab title
      var title = $(this).children('b').detach();    
      // Grab value
      var value = $(this).html();
      $(this).html('');
      // Create new layout
      var span = "<span class=\"text\">"+value+"</span>";
      // Reattach new layout
      $(this).append(title).append(span);
    });    
  }	

	
 	/* ^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
	  A. Sarabi [#2579] 26/10/2016
		MAIN NAV submenus
	^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^ */
	var $submenuCaret = jQuery('.dropdown-submenu i.fa');
	$submenuCaret.on('click',function(e){
		e.preventDefault();
		e.stopPropagation();
		if (jQuery(this).hasClass('fa-caret-right')) {
			jQuery(this).parent().siblings('ul.dropdown-menu').css('display','block');
			jQuery(this).removeClass('fa-caret-right').addClass('fa-caret-down');
		} else if (jQuery(this).hasClass('fa-caret-down')) {
			jQuery(this).parent().siblings('ul.dropdown-menu').css('display','none');
			jQuery(this).removeClass('fa-caret-down').addClass('fa-caret-right');
		}
	});

	// On board screen layout
	var getHeader = $('.onboard-container');
	if (getHeader.length > 0) {
		var counter = 0;
		for (var h = 0; h < getHeader.length; h++) {
			$(getHeader[h]).closest('#relayFormDisplay').addClass('on-board-container').parent().find('.actionContainer').hide();
			var children = $(getHeader[h]).closest('#relayFormDisplay').children();
			var htmlDiv, idName;
			var className = '.on-board';
			var faIcons = '<span class="fa fa-check-circle fa-2x checkbox-icon"></span><i class="fa fa-minus-circle fa-2x checkbox-icon"></i>'
			for (var i = 0; i < children.length; i++) {

				if ($(children[i]).find(className).length > 0) {
					counter += 1;
					htmlDiv = '<div id="on-board' + counter + '" class="on-board-col"></div>';
					idName = '#on-board' + counter;
					$(htmlDiv).insertBefore(children[i]);
					$(idName).append(children[i]);
                    
				} else {
					var child = $(children[i]).find('.checkbox-inline');
					var isLink = child.text().split('|');
					if (isLink.length == 2) {
						var input = child.find('input');
						var anchor = "<a href='" + isLink[0] + "'>" + isLink[1] + "</a>"; 
						child.text("");
						child.append(input);
						child.append(anchor);
					}
					$(children[i]).find('.checkbox-inline').append(faIcons).find('.checkbox').prop('disabled', true);
					$(idName).append(children[i]);
				}

			}
		}
	}
	$( '#leftNav .selected' ).each(function( index ) {
		if ($(this).find(".selected").length > 0){ 
			$(this).removeClass('selected');
			$(this).addClass('selected-parent');
		}
	});
	
	$( '#leftNav .selected-parent' ).each(function( index ) {
				$(this).addClass('open');
	});
	
	$( '#leftNav .selected' ).each(function( index ) {
				$(this).addClass('open');
	});

	$( '#leftNav li li' ).each(function( index ) {
		if ($(this).find("ul").length > 0){ 
		
			$(this).find("a").first().append( '<div class="left-carat"> </div>' );
			$(this).addClass('left-dropdown');
		}
	});
	

	$( ".left-carat" ).toggle(function() {
		
		if ( $( this ).parent('a').parent('li').hasClass( "open" ) ) {
			$( this ).parent('a').parent('li').removeClass( 'open' );
		}
		else{
			$( this ).parent('a').parent('li').addClass( 'open' );
		}
		
	}, function() {
		
		if ( $( this ).parent('a').parent('li').hasClass( "open" ) ) {
			$( this ).parent('a').parent('li').removeClass( 'open' );
		}
		else{
			$( this ).parent('a').parent('li').addClass( 'open' );
		}

	});
	

	$( "#leftNav li li" ).hover(
		  function() {
			if($(this).is(':last-child'))
			{
				$( this ).last().parent('ul').parent('li').addClass( 'preceding-parent' );
			}
		  }, function() {
				$( this ).last().parent('ul').parent('li').removeClass( 'preceding-parent' );
		  }
	);


 	/* ^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^
	  A. Sarabi [#2175] 16/08/2016
	^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^ */
	var highestBox;
	$('.boxRow').each(function(){        
    
		highestBox = 0;
    
    $(this).children('.boxContentBox').each(function(index, el) {
    	if ($(this).height() > highestBox) {
    		highestBox = $(this).height();
    	}
    });

    $(this).children('.boxContentBox').each(function(index, el) {
    	$(this).height(highestBox);
    });                     

  }); 
});


(function(){

	document.addEventListener("DOMContentLoaded", function(event) {

		var getTables = document.querySelectorAll('.table-js');

		// Responsive table when using JS version
		if (getTables.length > 0) {
			for (var i = 0; i < getTables.length; i++) {
				var tableHeaders = getTables[i].querySelectorAll('th');
				if (tableHeaders.length > 0) {
					var tableBodyRows = getTables[i].querySelectorAll('tbody tr');
					for (var j = 0; j < tableBodyRows.length; j++) {
						var bodyRowsData = tableBodyRows[j].querySelectorAll('td');
						for (var k = 0; k < tableHeaders.length; k++) {
							var span = document.createElement('span');
							span.innerHTML = tableHeaders[k].innerHTML;
							span.classList.add('td-header');
							bodyRowsData[k].insertBefore(span, bodyRowsData[k].firstChild);
						}
					}
				}
			}
		}
  });

})();