document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    // Create and style the custom alert div
    const alertBox = document.createElement("div");
    alertBox.className = "custom-alert";
    document.body.appendChild(alertBox);

    function showCustomAlert(message, redirectUrl) {
        alertBox.textContent = message;
        alertBox.style.display = "block";

        setTimeout(() => {
            alertBox.style.display = "none";
            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
        }, 500);
    }

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const section = card.querySelector("h2").textContent;
            const url = card.getAttribute("data-url");
            showCustomAlert(`Navigating to "${section}" section`, url);
        });
    });
});
