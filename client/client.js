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

