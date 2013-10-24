var client_id = '1ff3601991d9fcdd7d55d737080fbe4a';

var SEARCH_ARTIST_URL = 'https://api.soundcloud.com/tracks.json?client_id='+
	client_id +'&q=';

var SEARCH_YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=wutang&key=AIzaSyDqOskIfAmyH9bciyMTcbjGyLWqxHWaSjQ'


//Search for an artist/band
$("#search_button").click(function() {
  	//clear previous search
	$("#results").empty();

  	//Get search term
  	var search_term = $("#search_artist").val();
        $.getJSON(SEARCH_ARTIST_URL + search_term, function(tracks) {
          $(tracks).each(function(track) {
          	$("#results").append("<p>"+this.title+"</p>");
           })
         });
		 
		$.getJSON(SEARCH_YOUTUBE_URL + search_term, function(tracks) {
          $(tracks).each(function(track) {
          	$("#YTresults").append("<p>"+this.title+"</p>");
           })
         });
		 

});
