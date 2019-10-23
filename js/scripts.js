$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var word1Input = $("input#word1").val();

  $(".word1").text(word1Input.toUpperCase());

  $("#story").show();

  event.preventDefault();
});
});
