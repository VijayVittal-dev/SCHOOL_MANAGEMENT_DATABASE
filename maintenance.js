document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("maintenanceForm");
    const maintenanceTable = document.getElementById("maintenanceTable");

    // Sample maintenance requests
    const sampleData = [{
            type: "Classroom Repair",
            description: "Broken window in Room 12",
            reportedBy: "Mr. Johnson",
            date: "03/25/2025",
            status: "Pending"
        },
        {
            type: "Electrical Problem",
            description: "Flickering lights in Hall A",
            reportedBy: "Ms. Adams",
            date: "03/25/2025",
            status: "In Progress"
        },
        {
            type: "Plumbing Issue",
            description: "Leaky faucet in Science Lab",
            reportedBy: "Mr. Smith",
            date: "03/25/2025",
            status: "Completed"
        }
    ];

    // Function to add a row to the maintenance table
    function addMaintenanceRow(issueType, description, reporterName, date, status) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${issueType}</td>
            <td>${description}</td>
            <td>${reporterName}</td>
            <td>${date}</td>
            <td>
                <select class="status-dropdown">
                    <option value="Pending" ${status === "Pending" ? "selected" : ""}>Pending</option>
                    <option value="In Progress" ${status === "In Progress" ? "selected" : ""}>In Progress</option>
                    <option value="Completed" ${status === "Completed" ? "selected" : ""}>Completed</option>
                </select>
            </td>
            <td>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        maintenanceTable.appendChild(row);

        // Handle status update
        row.querySelector(".status-dropdown").addEventListener("change", function() {
            alert(`Status updated to: ${this.value}`);
        });

        // Handle delete request
        row.querySelector(".delete-btn").addEventListener("click", function() {
            maintenanceTable.removeChild(row);
        });
    }

    // Load sample data
    sampleData.forEach(entry => {
        addMaintenanceRow(entry.type, entry.description, entry.reportedBy, entry.date, entry.status);
    });

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const issueType = document.getElementById("issueType").value;
        const description = document.getElementById("description").value;
        const reporterName = document.getElementById("reporterName").value;
        const date = new Date().toLocaleDateString();

        addMaintenanceRow(issueType, description, reporterName, date, "Pending");
        form.reset();
    });
});