import { all } from 'express/lib/application';
import * as curd from './crud2.js'

const emailText = document.getElementById('email');
const nameText = document.getElementById("name");
const jobText = document.getElementById('job');
const rentAmount = document.getElementById('rent');
const incomeAmount = document.getElementById('income');
const spendingAmount = document.getElementById('spending');
const savingAmount = document.getElementById('saving');
const createButton = document.getElementById('create');
const readButton = document.getElementById('read');

async function allUsers() {
    const allUsers = await curd.readAllUsers();
    all.innerHTML = JSON.stringify(allUsers);
}

createAccount.addEventListener('click', async (e) => {
    const email = emailText.value;
    const name = nameText.value;
    const job = jobText.value;
    const rent = rentAmount.value;
    const income = incomeAmount.value;
    const spending = spendingAmount.value;
    const saving = savingAmount.value;
    const user = await curd.createAccount(email, name, job, rent, income, spending, saving);
    output.innerHTML = JSON.stringify(user);
    await allUsers();
});

readAccount.addEventListener('click', async (e) => {
    const email = emailText.value;
    const user = await crud.readAccount(email);
    output.innerHTML = JSON.stringify(person);
    await allUsers();
})