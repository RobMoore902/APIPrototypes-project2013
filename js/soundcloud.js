var soudcloud_client_id = '1ff3601991d9fcdd7d55d737080fbe4a';
var SEARCH_ARTIST_URL = 'https://api.soundcloud.com/tracks.json?client_id='+
	soudcloud_client_id +'&q=';

//Search for an artist/band
function searchSoundcloud() {

//Initialize SC
SC.initialize({
  client_id: soudcloud_client_id
});

  gather_options();

  //clear previous search
	$("#soundcloud_results").empty();

  	//Get search term
  	var search_term = $("#search_input").val();
        $.getJSON(SEARCH_ARTIST_URL + search_term, {limit: limit}, function(tracks) {
          $(tracks).each(function(track) {
            
            //Embed the widget player
            if(embed == true)
            {
              SC.oEmbed(this.uri, {iframe: true}, function(data){
                var lol = $('<div/>');
                lol.html(data['html']);
                  $("#soundcloud_results").append(lol);
              });
            }
            //Otherwise just link to the song
            else
            {
              $("#soundcloud_results").append("<p><a href="+this.permalink_url+">"+this.title +"</a></p>");
            }
           });
         
         });
}

//Gather most recent option selections
function gather_options(){
  if($("#limit_input").val() != "")
  {
    limit = $("#limit_input").val();
  }
  
  embed = $("#embed_input").prop('checked');
}
