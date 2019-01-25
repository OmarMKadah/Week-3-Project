$(document).ready(function() {
  $("form#robotForm").submit(function(event){
    event.preventDefault();
    console.log("submitted")
    var userInput = parseInt($("input#userInput").val());
    $("#answers").text(test(userInput));

  })
})
