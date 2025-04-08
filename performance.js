document.addEventListener("DOMContentLoaded", function() {

    const studentPerformanceCtx = document.getElementById("studentPerformanceChart").getContext("2d");
    new Chart(studentPerformanceCtx, {
        type: "bar",
        data: {
            labels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
            datasets: [{
                label: "Average Score",
                data: [75, 80, 85, 70, 90],
                backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#C70039"]
            }]
        },
        options: {
            responsive: true
        }
    });


    const teacherEffectivenessCtx = document.getElementById("teacherEffectivenessChart").getContext("2d");
    new Chart(teacherEffectivenessCtx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                label: "Teacher Effectiveness Score",
                data: [75, 78, 82, 85, 88],
                borderColor: "#33A2FF",
                fill: false
            }]
        },
        options: {
            responsive: true
        }
    });


    const attendanceCtx = document.getElementById("attendanceChart").getContext("2d");
    new Chart(attendanceCtx, {
        type: "pie",
        data: {
            labels: ["Present", "Absent", "Late"],
            datasets: [{
                label: "Overall Attendance",
                data: [85, 10, 5],
                backgroundColor: ["#28a745", "#dc3545", "#ffc107"]
            }]
        },
        options: {
            responsive: true
        }
    });
});