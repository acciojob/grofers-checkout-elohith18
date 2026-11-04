// script.js — calculates the total automatically on page load (no button)
const getSum = () => {
    // Remove any previously added total row to avoid duplicates
    const existing = document.getElementById("ans");
    if (existing) existing.parentElement.remove();

    // Sum all price cells
    const prices = document.querySelectorAll(".prices");
    let total = 0;
    prices.forEach(cell => {
        total += parseFloat(cell.textContent) || 0;
    });

    // Build the total row and append it to the table
    const row = document.createElement("tr");
    const totalVal = document.createElement("td");
    totalVal.id = "ans";
    totalVal.append("Total:" + total);
    row.append(totalVal);
    document.querySelector("table").appendChild(row);
};

// Run immediately: the script tag sits at the end of <body>, so the table already exists
getSum();