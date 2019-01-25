










$(document).ready(function() {
  $("form#robotForm").submit(function(event){
    event.preventDefault();
    console.log("submitted")
    var userInput = ($("input#userInput").val());
    $("#answers").text(result);

  })
})
