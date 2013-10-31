//Search for an artist/band

var SEARCH_YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDqOskIfAmyH9bciyMTcbjGyLWqxHWaSjQ&q='

function searchYoutube() {
	$("#youtube_results").empty(); //clear old results
	var search_term = $("#search_input").val();
	
	//get 5 youtube videos from search_term
	$.getJSON(SEARCH_YOUTUBE_URL + search_term, function(tracks) {
	
          $(tracks.items).each(function(track) {
				if(this.id.videoId != undefined){
					// embed youtube video in its own collapsable window
					$("#youtube_results").append("<div class=\"widget\"> \
						<div class=\"widget-head\" id=\"youtube_video\">\
						<div class=\"pull-left\">"+this.snippet.title+"</div>\
						<div class=\"clearfix\"></div>\
						</div>\
						<div class=\"widget-content\" style=\"display: none;\">\
						<div id=\"youtube_results\" class=\"padd\">\
						<iframe width=\"420\" \
						height=\"315\" \
						src=\"http://www.youtube.com/v/"+ 
						this.id.videoId+"?version=3&enablejsapi=1\" \
						frameborder=\"0\" allowfullscreen></iframe>\"\
						</div>\
						</div>\
						</div>"
					);
				}
					
           })
         });
}

//event handler for newly added youtube results
$( '#youtube_results' ).on( 'click', '#youtube_video', function () { 
	//access the hidden content
	var item = $(this).next();
	
	//toggle display value on or off
	if(item.attr('style') == 'display: none;'){
		item.attr('style', 'display: true;'); 
	}
	else{
		item.attr('style', 'display: none;'); 
	}
 });