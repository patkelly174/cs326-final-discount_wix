const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

// name income rent spending job savings
const email = document.getElementById('email');
const signupEmail = document.getElementById('signup-email');
const password = document.getElementById('signup-password');
const namer = document.getElementById('name');
const income = document.getElementById('income');
const rent = document.getElementById('rent');
const spending = document.getElementById('spending');
const job = document.getElementById('job');
const savings = document.getElementById('savings');
const address = document.getElementById('signup-address');
const city = document.getElementById('signup-city');
const state = document.getElementById('signup-state');
const zip = document.getElementById('signup-zip');

let currentAccount = [];

const updateButton = document.getElementById('update');
const loginButton = document.getElementById('login-button');
const del = document.getElementById('delete-button');
const signup = document.getElementById('signup-button');

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    })
})


/*loginButton.addEventListener('click', async ()=>{
    /*const options =  {
        method: "GET",
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
        headers: { "Content-type": "application/json" }
    };
    const response = await fetch("/readAccount?email=" + email.value + "?password=" + password.value);
    currentAccount = await response.json();
    console.log("hi");
});*/

updateButton.addEventListener('click', async ()=>{
    console.log("hi");
    const response = await fetch(`/readAccount?email=${email.value}`);
    const json = await response.json();
    console.log(json);

    const options =  {
        method: "POST",
        body: JSON.stringify({
            email: json[0].email,
            password: json[0].password,
            name: namer.value,
            job: job.value,
            income: income.value,
            rent: rent.value,
            spending: spending.value,
            savings: savings.value
        }),
        headers: { "Content-type": "application/json" }
    };
   await fetch('/updateAccount', options);
});

del.addEventListener('click', async () => {
    const options =  {
        method: "POST",
        body: JSON.stringify({
            email: email.value,
        }),
        headers: { "Content-type": "application/json" }
    };
    await fetch('/deleteAccount', options);
});

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