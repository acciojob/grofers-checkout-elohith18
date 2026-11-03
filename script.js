const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);

    const getSum = () => {
       
        const totalSum = document.getElementById("ans");
        if (totalSum) totalSum.parentElement.remove();

       
        const price = document.querySelectorAll(".prices");
        let total = 0;
        price.forEach(cell => {
            total += (parseFloat(cell.textContent) || 0);
        });

        let row = document.createElement("tr");
        const totalVal = document.createElement("td");
        totalVal.id = "ans";
        totalVal.append("Total:" + total);
        row.append(totalVal);

        
        document.querySelector("table").appendChild(row);
    };
    getSumBtn.addEventListener("click", getSum);