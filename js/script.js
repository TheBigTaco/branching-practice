$(document).ready(function() {
  $("form#animalForm").click(function() {
    var animals = $("input:radio[name=animals]:checked").val();
    if (animals === "snakes") {
      $('#snakes').show();
      $('#turtles').hide();
      $('#geese').hide();
    } else if (animals === "geese") {
      $('#geese').show();
      $('#turtles').hide();
      $('#snakes').hide();
    } else {
      $('#turtles').show();
      $('#snakes').hide();
      $('#geese').hide();
    }
  });
});
