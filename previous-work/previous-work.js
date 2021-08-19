// Load the navbar from the navbar file
$(document).ready(() => {
    $(() => {
        $(".navigation").load("../navbar/navbar.html");
    });
    $("#page-title").css({
      "text-align": "center",
      "color": "whitesmoke",
      "margin-bottom": "40px",
      // "margin-top": "50px"
    });
    $("h3").css({
      "color": "whitesmoke"
    });
    $(".work").css({
      "margin-left": "15%",
      "margin-right": "15%"
    });
});

// Get the modal
var resume_modal = document.getElementById("resume-modal");

// Get the button that opens the modal
var button = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
button.onclick = () => {
  resume_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  resume_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == resume_modal) {
    resume_modal.style.display = "none";
  }
}
