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
    const option = {
        method: "POST",
        body: JSON.stringify({
            email: email.value,
            password: password.value,
            address: address.value,
            city: city.value,
            state: state.value,
            zip: zip.value
        }),
        headers: {"Content-type": "application/json"}
    };
    const response = await fetch('/createAccount', option);
});

del.addEventListener('click', async () => {
    const options =  {
        method: "POST",
        body: JSON.stringify({
            email: currentEmail.value,
        }),
        headers: { "Content-type": "application/json" }
    };
    await fetch('/deleteAccount', options);
});

loginButton.addEventListener('click', async()=>{
    const response = await fetch(`/readAccount?email=${loginEmail.value}`);
    //activeAccount = await response.json();
});

detailsButton.addEventListener('click', async()=>{
    const response = await fetch(`/readCurrent`);
    let data = await response.json();
    currentEmail.value = data.email;
    nameText.value = data.name;
    income.value = data.income;
    rent.value = data.rent;
    spending.value = data.spending;
    job.value = data.job;
    saving.value = data.saving;
});



updateButton.addEventListener('click', async ()=>{
    const response = await fetch(`/readAccount?email=${currentEmail.value}`);
    const json = await response.json();
    console.log(json);
    const options =  {
        method: "POST",
        body: JSON.stringify({
            email: json[0].email,
            password: json[0].password,
            name: nameText.value,
            job: job.value,
            income: income.value,
            rent: rent.value,
            spending: spending.value,
            saving: saving.value
        }),
        headers: { "Content-type": "application/json" }
    };
   await fetch('/updateAccount', options);
});