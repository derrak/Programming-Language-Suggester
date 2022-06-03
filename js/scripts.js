$(document).ready(function() {
  $("#formOne").submit(function() {
    $(".person1").append("blah blah");
    $(".person2").append("blah blah");
    $(".animal").append("blah blah");
    $(".exclamation").append("blah blah");
    $(".verb").append("blah blah");
    $(".noun").append("blah blah");

    $("#story").show();


  const image1Val = $("input:radio[name=image1]:checked").val().parseInt();
  console.log(image1Val);
  
});