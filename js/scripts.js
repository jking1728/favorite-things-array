$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
    var inputs = ["animal", "food", "movie"];
    //alert(inputs.toString());
    //alert(inputs.toString());

    inputs.forEach(function(input) {
      var userInput = $("input#" + input).val();
      $("." + input).text(userInput);

      $("#output").show();
  });
});
});
/*$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    alert("jQuery is working");
    var blanks = ["animal", "food", "movie"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#output").show();

    event.preventDefault();
  });
});*/
