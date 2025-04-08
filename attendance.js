document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("attendanceForm");
    const attendanceTable = document.getElementById("attendanceTable");


    const sampleData = [{
            name: "Alice Johnson",
            id: "S101",
            status: "Present",
            date: "25-03-2025"
        },
        {
            name: "Bob Smith",
            id: "S102",
            status: "Absent",
            date: "25-03-2025"
        },
        {
            name: "Charlie Davis",
            id: "S103",
            status: "Present",
            date: "25-03-2025"
        },
        {
            name: "David Williams",
            id: "S104",
            status: "Present",
            date: "25-03-2025"
        },
        {
            name: "Emma Brown",
            id: "S105",
            status: "Absent",
            date: "25-03-2025"
        }
    ];


    function addRow(studentName, studentID, status, date) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${studentName}</td>
            <td>${studentID}</td>
            <td>${status}</td>
            <td>${date}</td>
            <td>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        attendanceTable.appendChild(row);

        row.querySelector(".delete-btn").addEventListener("click", function() {
            attendanceTable.removeChild(row);
        });
    }


    sampleData.forEach(student => addRow(student.name, student.id, student.status, student.date));


    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const studentName = document.getElementById("studentName").value;
        const studentID = document.getElementById("studentID").value;
        const status = document.getElementById("attendanceStatus").value;
        const date = new Date().toLocaleDateString();

        addRow(studentName, studentID, status, date);
        form.reset();
    });
});document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("attendanceForm");
    const attendanceTable = document.getElementById("attendanceTable");


    const sampleData = [{
            name: "Alice Johnson",
            id: "S101",
            status: "Present",
            date: "25-03-2025"
        },
        {
            name: "Bob Smith",
            id: "S102",
            status: "Absent",
            date: "25-03-2025"
        },
        {
            name: "Charlie Davis",
            id: "S103",
            status: "Present",
            date: "25-03-2025"
        },
        {
            name: "David Williams",
            id: "S104",
            status: "Present",
            date: "25-03-2025"
        },
        {
            name: "Emma Brown",
            id: "S105",
            status: "Absent",
            date: "25-03-2025"
        }
    ];


    function addRow(studentName, studentID, status, date) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${studentName}</td>
            <td>${studentID}</td>
            <td>${status}</td>
            <td>${date}</td>
            <td>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        attendanceTable.appendChild(row);

        row.querySelector(".delete-btn").addEventListener("click", function() {
            attendanceTable.removeChild(row);
        });
    }


    sampleData.forEach(student => addRow(student.name, student.id, student.status, student.date));


    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const studentName = document.getElementById("studentName").value;
        const studentID = document.getElementById("studentID").value;
        const status = document.getElementById("attendanceStatus").value;
        const date = new Date().toLocaleDateString();

        addRow(studentName, studentID, status, date);
        form.reset();
    });
});