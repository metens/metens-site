$(document).ready(() => {
  // Load the navbar html code:
    $(() => {
        $(".navbar").load("../navbar/navbar.html");
    });
    // CSS in JQuery for styling elements:
    $(".page-content").css({
      width: "80%",
      margin: "auto",
      height: "100%",
      borderRadius: "10px"
    })
    $("h1").css({ // Page title
      textAlign: "center",
      fontWeight: "bold",
      color: "whitesmoke",
      textShadow: "3px 3px 3px #000, 0 0 5px #000"
    });
    $("h3").css({ // Job titles/dates worked
      color: "whitesmoke",
      textAlign: "center",
    });
    $(".work").css({ // Job description and details
      color: "whitesmoke",
      opacity: "none",
      padding: "15px"
    });
    $("#copyright").append( // Copyright footer
      $("<div>").text("\u00A9 2021 nmetens")
      .css({
          textAlign: "center",
          color: "whitesmoke",
          position: "relative",
          marginBottom: "30px"
      })
  );
    // Got to GitHub profile in new window on click:
    $("#github").on("click", () => {
      window.open("https://github.com/nmetens");
    })
    // Got to LinkedIn profile in new window on click:
    $("#linkedin").on("click", () => {
      window.open("https://www.linkedin.com/in/nathan-metens-52674521a/")
    });
    // Go to Yelp page for Oofty Business on click:
    $("#yelp").on("click", () => {
      window.open("https://www.yelp.com/biz/oofty-waffles-and-cr%C3%A8pes-beaverton");
    });
});