$(document).ready(() => {
    // Load the navbar:
    $(() => {
        $(".navbar").load("../navbar/navbar.html");
    });
    $("#title").append( // Create page title using JQuery
        $("<h1>").attr("class", "name")
        .attr("id", "first-name")
        .text("Nathan"),
        $("<h1>").attr("class", "name")
        .attr("id", "last-name")
        .text("Metens")
    ),
    $("#copyright").append( // Create copyright in footer element
        $("<div>").attr("id", "copy")
        .text("\u00A9 2021 nmetens")
        .css({
            textAlign: "center",
            color: "whitesmoke",
            position: "relative",
            marginBottom: "30px",
        })
    );
});