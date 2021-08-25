$(document).ready(() => {
    // Load the navbar:
    $(() => {
        $(".navbar").load("../navbar/navbar.html");
    });
    $("#copyright").append( // Create copyright
        $("<div>").text("\u00A9 2021 nmetens")
        .css({
            textAlign: "center",
            color: "whitesmoke",
            position: "relative",
            marginBottom: "30px"
        })
    );
});

// Create slideshow function:
function slideShow(n) {
    var slides = document.getElementsByClassName("slides"); // Get slides class
    console.log("Slide ", slideIndex + "/" + slides.length);
    if (n > slides.length) { // Slide.length = 8 slides
        slideIndex = 1; // If the slide index passes 8, then go back to slide #1
    }    
    if (n < 1) {
        slideIndex = slides.length; // If the slide index gows below slide #1, go to slide #8
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   // Hide all of the slides
    }
    slides[slideIndex-1].style.display = "block"; // Show the slide we are currently on

    // Tried adding a slide number but after passing slide 8, the slide numbers multiply:
    // slides[slideIndex-1].append(slideIndex + "/" + slides.length);
}

var slideIndex = 1; // The slide we are on (start on slide #1)
slideShow(slideIndex); // Pass slide #1 to slideshow function
    
const plusSlides = (plus_or_minus) => { // To go to the next slide, incriment or decrement the slideIndex always by a value of +- 1
    slideShow(slideIndex += plus_or_minus);
}

// Create variables for the next and prev buttons:
let prev_btn = document.getElementById("prev");
let next_btn = document.getElementById("next");

// Decrement the slide number when clicking on the prev button:
prev_btn.onclick = (event) => {
    plusSlides(-1);
};

// Increment the slide number when clicking on the prev button:
next_btn.onclick = (event) => {
    plusSlides(1);
};