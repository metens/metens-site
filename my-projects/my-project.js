
$(document).ready(() => {
    // Load the navbar from the navbar file:
    $(() => {
        $(".navbar").load("../navbar/navbar.html");
    });

    // Creating the copyright footer:
    $("#copyright").append(
        $("<div>").text("\u00A9 2021 nmetens")
        .css({
            textAlign: "center",
            color: "whitesmoke",
            position: "relative",
            marginBottom: "30px"
        })
    );
});

// Creating variables for each card in the card deck:
let wave_machine = document.querySelector(".card1");
let console_game = document.querySelector(".card2");
let java_parser = document.querySelector(".card3");
let math_website = document.querySelector(".card4");

// Adding events that will open a new window link on card click:
wave_machine.addEventListener("click", () => {
    window.location = "https://github.com/nmetens/The-Pendulum-Wave-Machine";
});

console_game.addEventListener("click", () => {
    window.location = "https://github.com/nmetens/ConsoleGame";
});

java_parser.addEventListener("click", () => {
    window.location = "https://github.com/nmetens/JavaParser";
});
math_website.addEventListener("click", () => {
    window.location = "https://nmetens.github.io/mth-review/home.html";
});