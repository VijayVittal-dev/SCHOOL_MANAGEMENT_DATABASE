document.addEventListener("DOMContentLoaded", function() {
    const studentTableBody = document.querySelector("#studentTable tbody");
    const teacherTableBody = document.querySelector("#teacherTable tbody");

    let students = JSON.parse(localStorage.getItem("students")) || [{
            id: 1,
            name: "Alice Johnson",
            grade: "Grade 5"
        },
        {
            id: 2,
            name: "Bob Smith",
            grade: "Grade 6"
        },
        {
            id: 3,
            name: "Charlie Brown",
            grade: "Grade 7"
        },
        {
            id: 4,
            name: "David Wilson",
            grade: "Grade 8"
        },
        {
            id: 5,
            name: "Ella Davis",
            grade: "Grade 9"
        }
    ];

    let teachers = JSON.parse(localStorage.getItem("teachers")) || [{
            id: 1,
            name: "Mr. Johnson",
            subject: "Mathematics"
        },
        {
            id: 2,
            name: "Ms. Smith",
            subject: "Science"
        },
        {
            id: 3,
            name: "Mrs. Adams",
            subject: "English"
        },
        {
            id: 4,
            name: "Mr. Brown",
            subject: "History"
        },
        {
            id: 5,
            name: "Ms. Garcia",
            subject: "Physics"
        }
    ];

    function displayData() {
        studentTableBody.innerHTML = "";
        teacherTableBody.innerHTML = "";

        students.forEach((student, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            `;
            studentTableBody.appendChild(row);
        });

        teachers.forEach((teacher, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${teacher.id}</td>
                <td>${teacher.name}</td>
                <td>${teacher.subject}</td>
                <td>
                    <button onclick="editTeacher(${index})">Edit</button>
                    <button onclick="deleteTeacher(${index})">Delete</button>
                </td>
            `;
            teacherTableBody.appendChild(row);
        });

        localStorage.setItem("students", JSON.stringify(students));
        localStorage.setItem("teachers", JSON.stringify(teachers));
    }

    displayData();

    window.addStudent = function() {
        const name = prompt("Enter student name:");
        const grade = prompt("Enter grade:");
        if (name && grade) {
            students.push({
                id: students.length + 1,
                name,
                grade
            });
            displayData();
        }
    };

    window.editStudent = function(index) {
        const name = prompt("Edit student name:", students[index].name);
        const grade = prompt("Edit grade:", students[index].grade);
        if (name && grade) {
            students[index] = {
                ...students[index],
                name,
                grade
            };
            displayData();
        }
    };

    window.deleteStudent = function(index) {
        if (confirm("Are you sure you want to delete this student?")) {
            students.splice(index, 1);
            displayData();
        }
    };

    window.addTeacher = function() {
        const name = prompt("Enter teacher name:");
        const subject = prompt("Enter subject:");
        if (name && subject) {
            teachers.push({
                id: teachers.length + 1,
                name,
                subject
            });
            displayData();
        }
    };

    window.editTeacher = function(index) {
        const name = prompt("Edit teacher name:", teachers[index].name);
        const subject = prompt("Edit subject:", teachers[index].subject);
        if (name && subject) {
            teachers[index] = {
                ...teachers[index],
                name,
                subject
            };
            displayData();
        }
    };

    window.deleteTeacher = function(index) {
        if (confirm("Are you sure you want to delete this teacher?")) {
            teachers.splice(index, 1);
            displayData();
        }
    };
});