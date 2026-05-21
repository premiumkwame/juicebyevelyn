// POPUP FORM CONTROL
document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("mc_embed_shell");
    const form = popup.querySelector("form");

    // Hide popup permanently if already subscribed
    if (localStorage.getItem("subscribed") === "true") {
        popup.style.display = "none";
        return;
    }

    // Detect successful form submission
    form.addEventListener("submit", function () {

        // Save subscription status
        localStorage.setItem("subscribed", "true");

        // Hide popup after submit
        popup.style.display = "none";
    });

});