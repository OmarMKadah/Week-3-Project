function test(input) {

  var results = [];
  for (var i = 1; i <= input; i++) {

    if (i % 3 == 0 ) {
      results.push(" I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (i.toString().match(/1/)) {
      results.push(" Beep!")

    } else if (i.toString().match(/2/)) {
      results.push(" Boop!")

    } else {
      results.push(i);
    }
  }
  return results;
}
// above
// The below function is for the user-interface logic//

$(document).ready(function() {
  $("form#robotForm").submit(function(event){
    event.preventDefault();
    console.log("submitted")
    var userInput = parseInt($("input#userInput").val());
    $("#answers").text(test(userInput));

  })
})
