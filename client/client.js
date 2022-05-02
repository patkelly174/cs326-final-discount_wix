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

const detailsButton = document.getElementById('readAccount');
const updateButton = document.getElementById('updateAccount');
const loginButton = document.getElementById('login-button');

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
    saving.value= saving[0].saving;
});

updateButton.addEventListener('click', async ()=>{
    const rows = await crud.updateAccount(currentEmail.value, nameText.value, income.value, rent.value, spending.value, job.value, saving.value);
});