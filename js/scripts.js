$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();
    var phoneInput = $("input#phone").val();


  $(".name").text(nameInput);
  $(".email").text(emailInput);
  $(".phone").text(phoneInput);





  })
}
