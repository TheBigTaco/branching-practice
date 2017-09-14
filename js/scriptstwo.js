$(document).ready(function(){
  var height = parseInt(prompt("What is your height? Enter in Inches"));

  if (height === 48) {
    $("#ferrisWheel").addClass("highlight");
  } else if (height <= 47){
    $("#babyRollerCoaster").addClass("highlight");
  } else if (height > 60) {
    $("#rollerCoaster").addClass("highlight");
  } else {
    $("#merryGoRound").addClass("highlight");
  }

});
