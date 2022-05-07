import * as crud from './crud.js';

const currentEmail = document.getElementById('email');
const email = document.getElementById('signup-email');
const password = document.getElementById('signup-password');
const nameText = document.getElementById("name");
const job = document.getElementById('job');
const rent = document.getElementById('rent');
const income = document.getElementById('income');
const spending = document.getElementById('spending');
const saving = document.getElementById('saving');
const signup = document.getElementById('signup-button');
const address = document.getElementById('signup-address');
const city = document.getElementById('signup-city');
const state = document.getElementById('signup-state');
const zip = document.getElementById('signup-zip');
const del = document.getElementById('deleteAccount');
const loginEmail = document.getElementById('login-email');
const expenseName = document.getElementById('expenseName_1');
const expense = document.getElementById('expenseAmount_1');

const detailsButton = document.getElementById('readAccount');
const updateButton = document.getElementById('updateAccount');
const loginButton = document.getElementById('login-button');
const spendButton = document.getElementById('spending');
const spendingsButton = document.getElementById('spendStuff');
const logOut = document.getElementById('logout');

if (window.localStorage.getItem('currentEmail') !== null) {
    currentEmail.value = JSON.parse(window.localStorage.getItem('currentEmail'));
}
if (window.localStorage.getItem('budgetTab') !== null) {
    document.getElementById("totalBudget").innerHTML = JSON.parse(window.localStorage.getItem('budgetTab'));
}
if (window.localStorage.getItem('totalBudgetTab') !== null) {
    document.getElementById("currentBalance").innerHTML = JSON.parse(window.localStorage.getItem('totalBudgetTab'));
}
if (window.localStorage.getItem('expenseTab') !== null) {
    document.getElementById("totalExpense").innerHTML = JSON.parse(window.localStorage.getItem('expenseTab'));
}

logOut.addEventListener('click', async () => {
    window.localStorage.clear();
    window.location.reload();
});

signup.addEventListener('click', async () => {
   await crud.createAccount(email.value, password.value, address.value, city.value, state.value, zip.value, "none", "none", 0, 0, 0, 0);
});

del.addEventListener('click', async () => {
   await crud.removeAccount(currentEmail.value);
});

loginButton.addEventListener('click', async()=>{
    const rows = await crud.readAccount(loginEmail.value);
    currentEmail.value = rows[0].email;
    window.localStorage.setItem('currentEmail', JSON.stringify(currentEmail.value));
    
});

detailsButton.addEventListener('click', async()=>{
    const rows = await crud.readAccount(currentEmail.value);
    nameText.value = rows[0].name;
    income.value = rows[0].income;
    rent.value = rows[0].rent;
    spending.value = rows[0].spending;
    job.value = rows[0].job;
    saving.value= rows[0].saving;
});

updateButton.addEventListener('click', async ()=>{
    await crud.updateAccount(currentEmail.value, nameText.value, job.value, rent.value, income.value, spending.value, saving.value);
});

spendButton.addEventListener('click', async()=>{
    const rows = await crud.spending(currentEmail.value, expenseName.value, expense.value);
});

spendingsButton.addEventListener('click', async()=>{
    const rows = await crud.getSpending(currentEmail.value);
    //console.log(rows);
    for (let i = 0; i < rows.length; ++i){
        let expensename = rows[i].expensename;
        let amount = rows[i].spending;
        let date = rows[i].date;
        let text = "Expense Name: " + expensename + " --- " + "Amount: " + amount + 
        " --- " + "Date: " + date;
        let val = document.createTextNode(text);
        let bar = document.createElement("br");
        document.getElementById('spending-details').appendChild(val);
        document.getElementById('spending-details').appendChild(bar);
    }
});