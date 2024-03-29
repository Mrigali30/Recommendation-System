//==============================================================================
// Title:       Global Footer JavaScript
// Purpose:     Javascript code to be included at bottom of all web pages.
//------------------------------------------------------------------------------
// Revision Authors:
// TTM: Thomas Mroczkowski
// 
// Notes:
// * This file is archived to /common_scripts/Tacoda.old/
// * tacoda footer voided 01.31.07, original content backed at /common_scripts/Tacoda.old/Tacoda_footer.v4.js
// * WebTrends code removed, 12.15.2009, part of BW i49.2 release
// * comScore tracking code block added, 12.15.2009, part of BW i49.2 release
//==============================================================================

/* removed 6.24.08  - Related Items from SPHERE */


//========================================= Interstitial Impl

document.write('<scr' + 'ipt type="text/javascript" src="http://static.btrd.net/js/master.js"></scr' + 'ipt>');
document.write('<scr' + 'ipt type="text/javascript" src="http://static.btrd.net/js/interstitial.js"></scr' + 'ipt>');

//==============================================================================
// Revenue Science 
//------------------------------------------------------------------------------
// * (see also Tacoda_AMS_DDC_Header.js) install with channel map 06.19.07
//==============================================================================

/* DM_cat removed 7.28.07 - DM tag removed 6/1/12 */
//if (window.DM_tag) {
	//DM_tag();
//}
 
 /* iCrossing tracking code : removed 4/29/09 */

 

//==============================================================================
// Dynamic Logic Node Tag
//------------------------------------------------------------------------------
// Notes:
// * Added on 5/20/2010 -- PY
// * There is no corresponding code in header
// * Added as per BBG DRQS 19807734
//==============================================================================

document.write('<scr'+'ipt type="text/javascript" src="http://content.dl-rms.com/rms/mother/516/nodetag.js"></scr'+'ipt>');


//==============================================================================
// comScore
//------------------------------------------------------------------------------
// Notes:
// * First added on 12.15.2009
// * There is no corresponding code in header
//==============================================================================
/*
$(document).ready(function(){
			$.getScript('http://b.scorecardresearch.com/beacon.js',function(){
	  			COMSCORE.beacon({
	    			c1:2,
	    			c2:3005059,
	    			c3:"",
	    			c4:"",
	    			c5:"",
	    			c6:"",
	    			c15:""
	  			});
	  		});
  		});
*/

//==============================================================================
// comScore v 2
//------------------------------------------------------------------------------
// Notes:
// * First added on 11.07.2011
// * There should be a call to http://static.btrd.net/js/bw_comscore.js in the head
//==============================================================================

var cg_2 = "";
var strap = $('meta[name="strap"]').attr('content');
var headline = document.title;
var attributor = $('meta[name="content_source"]').attr('content');

var channel = $('meta[name="channel"]').attr('content');

if (typeof(channel) == "undefined" ){
	if( window.location.pathname.toString().indexOf("ceo_guide") != -1 ) {
	    channel = "Technology";
	} else {
        channel = window.location.pathname.toString().split("/")[1] ;
    }
}

channel = channel.charAt(0).toUpperCase() + channel.slice(1);

var content_type= $('meta[name="mediatype"]').attr('content');
if( typeof( content_type) == "undefined" ){
    if( window.location.pathname.toString().indexOf("ceo_guide") != -1 || window.location.pathname.toString().indexOf("/special_reports/") != -1) {
        content_type = "special report";
	 cg_2 = channel;
    } else if( window.location.pathname.toString().charAt( window.location.pathname.toString().length-1 ) == "/" || window.location.pathname.toString().indexOf( 'index.htm' ) == window.location.pathname.toString().length-9 || window.location.pathname.toString().indexOf("/magazine/toc/") != -1) {
		content_type = "index page";
		cg_2 = "Index";
	} else if( window.location.pathname.toString().indexOf("/archives/") != -1 ){
		content_type = "blog";
		cg_2 = $('#mainBanner span').text(); // Blog Name
	} else if( window.location.host.toString() == "search.businessweek.com" ) {
		content_type = 'index page';
		channel = 'search';
		cg_2 = 'basic';
		headline = $('input#searchTerm').val();
	} else if( window.location.host.toString() == "images.businessweek.com" && window.location.pathname.toString().indexOf("/more.htm") != -1 ) {
		content_type = 'index page';
		channel = 'topnews';
		cg_2 = 'slideshow';
		cg_3 = "More Slide Shows";
	
	} else if(window.location.href.toString().indexOf("www.businessweek.com/ap/") > 0){
		content_type= "ap stories";
	} else {
		content_type= "story";
		cg_2 = strap;
    }
}
// Capitalize the first character. We dont need to capitalize the content type . So commenting them.
//content_type = content_type.charAt(0).toUpperCase() + content_type.slice(1);

var author = $('meta[name="author"]').attr('content');
var pub_date = $('meta[name="pub_date"]').attr('content');

if(!window.BW_sitezone) BW_sitezone = channel.toLowerCase() + "/general";
var sitezone = "bw." + window.BW_sitezone.replace("/", ".")
if((window.location.href.toString().indexOf("jobs.businessweek.com")!= -1) || (window.location.href.toString().indexOf("investing.businessweek.com")!= -1) || ((window.location.href.toString().indexOf("www.bloomberg.com")!= -1) && (window.location.pathname.toString().indexOf("/research/") != -1) )  ){
}
else {
 BBBW_comScore.params = {
   name: sitezone,
   bb_c_type: content_type,
   bb_cg_1: channel,
   bb_cg_2: cg_2, 			// varies based on c_type
   bb_cg_3: headline,
   bb_attributor: attributor,
   bb_author: author,
   bb_pub_d: pub_date
 };
 BBBW_comScore.track();
}
//==============================================================================
// Start - Story Tools function - for BW1.0 Story pages
//------------------------------------------------------------------------------
//============================================================================== 








//processStoryToolsAjaxViaJquery();

//if ( $.browser.mozilla  ) $('iframe').each(function(){ $(this).attr('src', $(this).attr('src') )  });

// * End of storytools fucntion for BW1.0 Story Pages








