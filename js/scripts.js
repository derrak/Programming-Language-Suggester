$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const image1Val = parseInt($("input[name='image1']:checked").val());
    const image2Val = parseInt($("input[name='image2']:checked").val());
    const image3Val = parseInt($("input[name='image3']:checked").val());
    const image4Val = parseInt($("input[name='image4']:checked").val());
    const image5Val = parseInt($("input[name='image5']:checked").val());
    const totalScore = image1Val+image2Val+image3Val+image4Val+image5Val;

    if (totalScore >= 7) { //Ruby
      $('#MediumScorem').hide();
      $('#LowScore').hide();
      $('#HighScore').show();

    }
    else if (totalScore >= 5) { //Python
      $('#HighScore').hide();
      $('#LowScore').hide();
      $('#MediumScore').show();
    }
    else { //Swift
      $('#HighScore').hide();
      $('#MediumScore').hide();
      $('#LowScore').show();
    }

  });
});



