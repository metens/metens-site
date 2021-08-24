
$(document).ready(() => {
    $(() => {
        $(".navbar").load("../navbar/navbar.html");
    });
    $("#title").append(
        $("<h1>").attr("class", "name")
        .attr("id", "first-name")
        .text("Nathan"),
        $("<h1>").attr("class", "name")
        .attr("id", "last-name")
        .text("Metens")
    ),
    $("#copyright").append(
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