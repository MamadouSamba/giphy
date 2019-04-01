// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var userInput=$("input").val();
    var searchInsert="https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=dc6zaTOxFJmzC"
  $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response){
            console.log( response.data[0].images.fixed_width.url)
            $(".gallery").html("<img src=" + response.data[0].images.fixed_width.url + ">");
            
  
        }
  });
});

