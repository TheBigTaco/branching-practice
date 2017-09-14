$(document).ready(function(){
  var height = parseInt(prompt("What is your height? Enter in Inches"));

  if (height === 48) {
    $("#ferrisWheel").show();

  } else if (height < 48, height > 30){
    $("#babyRollerCoaster").show();
  } else if (height > 48) {
    $("#rollerCoaster").show();
  } else {
    $("#merryGoRound").show();
  }

});
