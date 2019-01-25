$(document).ready(function() {
  $("#robotForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    $("#answers").show();

  })
})
