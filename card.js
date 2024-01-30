//This fun project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test.

window.addEventListener("load", function (e) {
  $("#sign-up-success").css("display", "none");
  let confirmCard = function () {
    let cardHolderName = document.getElementById("card-name");
    console.log(cardHolderName);
    let cardNumber = document.getElementById("card-number")
    let cardNameDisplay = document.getElementById("cardholder-name");
    let cardNumberDisplay = document.getElementById("card-num");
    if (cardHolderName && cardNumber) {
      cardNumberDisplay.innerHTML = "<p>" + cardNumber.value + "</p>";
      $("#sign-up-success").css("display", "block");
    } else {
      //add the error class to the input fields
    }
  }
  let submit = document.getElementById("confirm-card");
  submit.onclick = confirmCard;
  e.preventDefault();

  //Hide the e.g. texts when you click on any input field.
  $("input").click(function () {
    $("input").attr("value", " ");
    console.log('Clicked');
  })
  // inputField.addEventListener("click", function(){
  //     inputSpan.style.visibility = "hidden";
  //   })



  $("#card-sign-up button").click(function () {
    $("#card-sign-up").hide();
    $("sign-up-success").show();
  })
  /*
  Your users should be able to:
  
  -Fill in the form and see the card details update in real-time
  Receive error messages when the form is submitted if:
  -Any input field is empty
  -The card number, expiry date, or CVC fields are in the wrong format
  -View the optimal layout depending on their device's screen size
  -See hover, active, and focus states for interactive elements on the page
  */

})
