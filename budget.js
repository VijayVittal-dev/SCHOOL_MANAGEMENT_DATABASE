document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("budgetForm");
    const budgetTable = document.getElementById("budgetTable");
    const totalIncomeSpan = document.getElementById("totalIncome");
    const totalExpensesSpan = document.getElementById("totalExpenses");
    const balanceSpan = document.getElementById("balance");

    let totalIncome = 0;
    let totalExpenses = 0;

    function updateSummary() {
        totalIncomeSpan.textContent = totalIncome;
        totalExpensesSpan.textContent = totalExpenses;
        balanceSpan.textContent = totalIncome - totalExpenses;
    }

    function addRow(category, amount, type, date) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${category}</td>
            <td>₹${amount}</td>
            <td>${type}</td>
            <td>${date}</td>
            <td>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        budgetTable.appendChild(row);

        if (type === "Income") {
            totalIncome += parseFloat(amount);
        } else {
            totalExpenses += parseFloat(amount);
        }

        updateSummary();

        row.querySelector(".delete-btn").addEventListener("click", function() {
            budgetTable.removeChild(row);

            if (type === "Income") {
                totalIncome -= parseFloat(amount);
            } else {
                totalExpenses -= parseFloat(amount);
            }

            updateSummary();
        });
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const category = document.getElementById("category").value;
        const amount = document.getElementById("amount").value;
        const type = document.getElementById("type").value;
        const date = new Date().toLocaleDateString();

        addRow(category, amount, type, date);
        form.reset();
    });

    // Preload some budget data
    const sampleBudget = [{
            category: "Government Grant",
            amount: 50000,
            type: "Income",
            date: "25-03-2025"
        },
        {
            category: "Teacher Salaries",
            amount: 30000,
            type: "Expense",
            date: "25-03-2025"
        },
        {
            category: "Library Books",
            amount: 5000,
            type: "Expense",
            date: "25-03-2025"
        },
        {
            category: "School Fundraising",
            amount: 15000,
            type: "Income",
            date: "25-03-2025"
        }
    ];

    sampleBudget.forEach(entry => addRow(entry.category, entry.amount, entry.type, entry.date));
});