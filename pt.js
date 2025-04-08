document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("messageForm");
    const messageList = document.getElementById("messageList");

    // Load stored messages
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    function displayMessages() {
        messageList.innerHTML = "";
        messages.forEach((msg, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${msg.parent} → ${msg.teacher}:</strong> ${msg.text} 
                            <button class="delete-btn" data-index="${index}">Delete</button>`;
            messageList.appendChild(li);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function() {
                const index = this.getAttribute("data-index");
                messages.splice(index, 1);
                localStorage.setItem("messages", JSON.stringify(messages));
                displayMessages();
            });
        });
    }

    displayMessages();

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const parentName = document.getElementById("parentName").value;
        const teacherName = document.getElementById("teacherName").value;
        const message = document.getElementById("message").value;

        messages.push({
            parent: parentName,
            teacher: teacherName,
            text: message
        });
        localStorage.setItem("messages", JSON.stringify(messages));

        displayMessages();
        form.reset();
    });
});