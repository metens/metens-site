$(document).ready(() => {
    $(() => {
        $(".navbar").load("../navbar/navbar.html");
    });

    document.getElementById("contact-form").addEventListener("submit", async (e) => {
        e.preventDefault();
      
        const data = {
          name: document.getElementById("first-name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value
        };
      
        await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
      
        alert("Thank you! Message sent!");
        form.reset();
      });
});