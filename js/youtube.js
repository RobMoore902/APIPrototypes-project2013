//Search for an artist/band

var SEARCH_YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDqOskIfAmyH9bciyMTcbjGyLWqxHWaSjQ&q='

function searchYoutube() {

	var search_term = $("#search_input").val();
	$.getJSON(SEARCH_YOUTUBE_URL + search_term, function(tracks) {
          $(tracks.items).each(function(track) {
          	$("#YTresults").append("<p>"+this.snippet.title+"</p>");
           })
         });
}