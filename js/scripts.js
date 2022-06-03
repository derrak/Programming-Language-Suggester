$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const image1Val = parseInt($("input[name='image1']:checked").val());
    const image2Val = parseInt($("input[name='image2']:checked").val());

    const totalScore = image1Val+image2Val;

      
    console.log("image1Val = " + image1Val);
    console.log("image2Val = " + image2Val);
    console.log("totalScore = " + totalScore);

  // $("#story").show();

    if (totalScore >= 14) {
      $('#HighScore').show();
    }
    else if (totalScore >= 7) {
      $('#MediumScore').show();
    }
    else {
      $('#LowScore').show();
    }
  });
});



