// Load the navbar from the navbar file
$(document).ready(() => {
  // Load the navigation html code:
    $(() => {
        $(".navigation").load("../navbar/navbar.html");
    });
    // CSS in JQuery for styling elements:
    $(".page-content").css({
      "marginLeft": "15%",
      "margin-right": "15%",
      "height": "100%",
      "borderRadius": "10px"
    })
    $("h1").css({
      "text-align": "center",
      "fontWeight": "bold"
    });
    $("h3").css({
      "color": "whitesmoke",
      "textAlign": "center",
    });
    $(".work").css({
      "color": "whitesmoke",
      "opacity": "none",
      "padding": "30px"
    });
    $(".flex-container").css({
      "display": "flex",
      "justifyContent": "center",
      "gap": "20px",
      "overflow": "visible"
    });
    $(".oofty-image").css({
      "opacity": "none",
      "height": "150px",
      "margin": "8px 0 8px 0"
    });
    $(".pool-image").css("height", "350px");
    $("#copyright").append(
      $("<div>").text("\u00A9 2021 nmetens, Inc.")
      .css({
          textAlign: "center",
          color: "whitesmoke",
          position: "relative",
          marginBottom: "30px"
      })
  );
    // Got to GitHub profile in new window:
    $("#github").on("click", () => {
      window.open("https://github.com/nmetens");
    })
    // Got to LinkedIn profile in new window:
    $("#linkedin").on("click", () => {
      window.open("https://www.linkedin.com/in/nathan-metens-52674521a/")
    });
    // Go to Yelp page for Oofty Business:
    $("#yelp").on("click", () => {
      window.open("https://www.yelp.com/biz/oofty-waffles-and-cr%C3%A8pes-beaverton");
    });
});