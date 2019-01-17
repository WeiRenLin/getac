/* �Relayware. All Rights Reserved 2014 */
//  javascript function which opens a window 
//  syntax
//  openWin('../elements/ElementDrillDown.cfm?ElementID=#Val(application.TopLeftMenuID)#','ElementEdit','width=950,height=600,toolbar=0,location=0,directories=0,status=1,menuBar=0,scrollBars=1,resizable=1');
//  WAB 28/11/05 added test for pop up blocking
// DXC 06-10-2014 #441826 openWin throws errors if no windowName passed to it
// ACPK 2015-02-03	443652 added document.onready function to ensure previous window reloads properly if left open when opening new files in IE

function openWin( windowURL, windowName, windowFeatures ) { 
	var browserName = navigator.appName;
	var browserVersion = parseInt(navigator.appVersion);
	
	// START DXC 06-10-2014 #441826
	if (windowName){
		var winName = windowName.replace(/[^a-z0-9_]/gi,'');
	} else {
		// if no windowName param is passed in
		// location.replace instead...
		location.replace(windowURL);
		return false;
	}
	if (!windowFeatures){
		var windowFeatures="";	
	}
	// END DXC 06-10-2014 #441826
	newWindow=window.open( windowURL, winName, windowFeatures );
	if (newWindow == null) {
		alert ('Please enable Pop-ups for this site')
	} else {
	// ACPK 2015-02-03	443652 added document.onready function to ensure previous window reloads properly if left open when opening new files in IE
		document.onready = function() {
			newWindow.focus();
		};		
	}
	return newWindow;
}


function openDialog(url,dialogOptions,ajaxCallOptions) {
			
		if (jQuery('#dialog').length == 0) {
			jQuery('<div id="dialog"/>').appendTo('body');
		}
		
		var dialogOpts = {
			autoOpen: false,
			modal:true,
			title:'',
		    close: function() {
		   		jQuery(this).dialog('destroy').remove();
		   	},
		   	create: function() {
				var winHeight = jQuery(window).height()-150;
				var winWidth = jQuery(window).width()-150;
				
		        jQuery(this).css("max-height",winHeight+'px');
		        jQuery(this).css("max-width",winWidth+'px');
		    },
		    width:'auto'		
		}
		
		jQuery.extend(dialogOpts,(dialogOptions)?dialogOptions:{});
		
		var $dialog = jQuery("#dialog").dialog(dialogOpts);

		$dialog.html('<div class="loading" style="width:100px"><img src="/images/icons/loading.gif" alt="Loading"/><span style="padding-left:5px;">Loading ...</span></div>');
		$dialog.dialog("open");

		var ajaxCallOpts = {
			type:"GET",
			url:url,
			contentType: "application/json; charset=utf-8",
			data: {returnFormat:'json'},
			dataType:'json',
			success: function (data,textStatus,jqXHR) {				
				 $dialog.find('div.loading').fadeOut(500, function(){
					 $dialog.html('<div>' + data.CONTENT + '</div>').dialog('option', 'position', 'center');
				 });	
			},
			error: function(){alert('failed')}
		}
		
		jQuery.extend(ajaxCallOpts,(ajaxCallOptions)?ajaxCallOptions:{});
		jQuery.ajax(ajaxCallOpts);
	}