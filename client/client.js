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
const expenseName = document.getElementById('expenseName');
const expense = document.getElementById('expenseAmount');

const detailsButton = document.getElementById('readAccount');
const updateButton = document.getElementById('updateAccount');
const loginButton = document.getElementById('login-button');
const spendButton = document.getElementById('addExpense');

signup.addEventListener('click', async () => {
   await crud.createAccount(email.value, password.value, address.value, city.value, state.value, zip.value, "none", "none", 0, 0, 0, 0);
});

del.addEventListener('click', async () => {
   await crud.removeAccount(currentEmail.value);
});

loginButton.addEventListener('click', async()=>{
    const rows = await crud.readAccount(loginEmail.value);
    currentEmail.value = rows[0].email
    
});

detailsButton.addEventListener('click', async()=>{
    const rows = await crud.readAccount(currentEmail.value);
    nameText.value = rows[0].name;
    income.value = rows[0].income;
    rent.value = rows[0].rent;
    spending.value = rows[0].spending;
    job.value = rows[0].job;
    saving.value= rows[0].saving;

    const spending = await crud.getSpending(currentEmail.value);
});

updateButton.addEventListener('click', async ()=>{
    await crud.updateAccount(currentEmail.value, nameText.value, job.value, rent.value, income.value, spending.value, saving.value);
});

spendButton.addEventListener('click', async()=>{
    await crud.spending(currentEmail.value, expenseName.value, expense.value);
});

