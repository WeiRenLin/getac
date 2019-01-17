/* �Relayware. All Rights Reserved 2014 */
// function for tracking clicks on links
// WAB / SWJ October 2005
// called from relaytagtemplates/linktracker among others
// 2013/11/11 Case 437772 - NJH use ajax to call remove.cfm as Chrome doesn't load image when moving away from a page. 

function onClickLink(entityType,entityID,personid,href){
	var page = '/remote.cfm?a=ct&e=' + entityID + '&t=' + entityType + '&p=' + personid + '&g=' + escape(href) ;
	
	var myAjax = new Ajax.Request(
						page,
						{
							method: 'get',
							evalJSON: 'force',
							debug : false,
							asynchronous: false
						}
					);
					
	/*imageURL = '/remote.cfm?a=ct&e=' + entityID + '&t=' + entityType + '&p=' + personid + '&g=' + escape(href) ;
	(new Image()).src = imageURL;*/
//	alert(imageURL)
	return true;
	}