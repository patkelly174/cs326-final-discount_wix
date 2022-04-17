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


signup.addEventListener('click', async () => {
    try {
        let url= `http://127.0.0.1:3000/createAccount?email=${email.value}&password=${password.value}&address=${address.value}&city=${city.value}&state=${state.value}&zip=${zip.value}`;
        let response = await fetch(url, {method: 'POST', headers: {accept: 'application/json'}, mode: 'same-origin' });
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
    } 
    catch (err) {
        console.log(err);
    }
    /*
    nameText.value = response.name;
    job.value = 0;
    rent.value = response.rent;
    income.value = response.income;
    spending.value = response.spending;
    saving.value = response.saving;
    */
});

