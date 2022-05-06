function addMoney() {
    let totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    let currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    let money = parseInt(document.getElementById("money").value);
    if(money === "" || isNaN(money)) {
        alert("Please add money");
    } else {
        totalBudget += money;
        currentBalance += money;
        document.getElementById("totalBudget").innerHTML = totalBudget;
        document.getElementById("currentBalance").innerHTML = currentBalance;
    }
}

function removeMoney() {
    let totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    let currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    let money = parseInt(document.getElementById("money_1").value);
    if(money === "" || isNaN(money)) {
        alert("Please add money");
    } else {
        totalBudget -= money;
        currentBalance -= money;
        document.getElementById("totalBudget").innerHTML = totalBudget;
        document.getElementById("currentBalance").innerHTML = currentBalance;
    }
}

function addExpense() {
    let currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    let expenseName = document.getElementById("expenseName_1").value;
    let expenseAmount = parseInt(document.getElementById("expenseAmount_1").value);
    let totalExpense = parseInt(document.getElementById("totalExpense").innerHTML);
    if(expenseName.length === "") {
        alert("Please add expense name");
    } else if(expenseAmount === "" || isNaN(expenseAmount)) {
        alert("Please add valid amount");
    } else if(expenseAmount < currentBalance) {
        currentBalance -= expenseAmount;
        document.getElementById("currentBalance").innerHTML = currentBalance;
        let para = document.createElement('p');
        para.innerHTML = `Expense Name : ${expenseName} <br> Expense Amount: ${expenseAmount}`;
        totalExpense += expenseAmount;
        document.getElementById("totalExpense").innerHTML = totalExpense;
        document.getElementById("addedExpenses").appendChild(para);
    } else {
        alert("Amount is higher than your current balance");
    }
}

function removeExpense() {
    let currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    let expenseName = document.getElementById("expenseName_2").value;
    let expenseAmount = parseInt(document.getElementById("expenseAmount_2").value);
    let totalExpense = parseInt(document.getElementById("totalExpense").innerHTML);
    if(expenseName.length === "") {
        alert("Please add expense name");
    } else if(expenseAmount === "" || isNaN(expenseAmount)) {
        alert("Please add valid amount");
    } else if(expenseAmount < currentBalance) {
        currentBalance += expenseAmount;
        document.getElementById("currentBalance").innerHTML = currentBalance;
        let para = document.createElement('p');
        para.innerHTML = `Expense Name : ${expenseName} <br> Expense Amount: ${expenseAmount}`;
        totalExpense -= expenseAmount;
        document.getElementById("totalExpense").innerHTML = totalExpense;
        document.getElementById("removedExpenses").appendChild(para);
    } else {
        alert("Amount is lower than your current balance");
    }
}