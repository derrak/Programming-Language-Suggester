$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const image1Val = parseInt($("input[name='image1']:checked").val());
    console.log("image1Val = " + image1Val);

    
    const score = image1Val;

  // $("#story").show();

    if (score >= 14) {
      $('#HighScore').show();
    }
    else if (score >= 7) {
      $('#MediumScore').show();
    }
    else {
      $('#LowScore').show();
    }
  });
});



