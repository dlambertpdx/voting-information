$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if(age >= 17) {
    $('#eligible').show();
  } else {
    $('#notEligible').show();
  }
});
