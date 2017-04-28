$( document ).ready(function() {
  var counter = 0;

  $("#jsonTable").on("click", function(){
    $.getJSON( "http://jsonplaceholder.typicode.com/posts", function( data ) {
      $("#jsonObject").append("<tr><td><b>ID</b> "+ data[counter].id +"</td></tr>");
      $("#jsonObject").append("<tr><td><b>TITLE</b> "+ data[counter].title +"</td></tr>");
      $("#jsonObject").append("<tr><td><b>BODY</b> "+ data[counter].body +"</td></tr>");
      counter++;
      if(counter > 100){
        counter = 0;
      }
    });
  });
});
