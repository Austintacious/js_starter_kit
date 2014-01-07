$(document).ready(function() {
  
  $('#again').hide();
  var random_number = Math.floor(Math.random()*100) + 1
  var num_guesses = 0

  $('input').keydown( function(e) {
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    if(key == 13) {
      e.preventDefault();
      var guess = document.getElementById('input');
      if (guess.value.match(/[^,.\d]/)) {
        alert("Invalid input, must enter a number between 0 and 100");
        num_guesses++;
        guess.value = "";
      } else if (guess.value > 100 || guess.value < 0) {
        $('.alert-box').after("<p>" + guess.value + " was outside of the range. Try again!" + "</p>");
        alert(guess.value + " was outside of the range. Try again!");
        num_guesses++;
        guess.value = "";
      } else if (guess.value < random_number) {
        $('.alert-box').after("<p>" + guess.value + " was too low..." + "</p>");
        num_guesses++;
        guess.value = "";
      } else if (guess.value > random_number) {
        $('.alert-box').after("<p>" + guess.value + " was too high..." + "</p>");
        num_guesses++;
        guess.value = "";
      } else {
        $('.alert-box').after("<p>Congratulations, you've guessed the number in " + num_guesses + " guesses! </p>");
        guess.value = "";
        $('#again').show(); 
      }
    }
  });

});
