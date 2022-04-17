const emailText = document.getElementById('email');
const passText = document.getElementById('password');
const nameText = document.getElementById("name");
const jobText = document.getElementById('job');
const rentAmount = document.getElementById('rent');
const incomeAmount = document.getElementById('income');
const spendingAmount = document.getElementById('spending');
const savingAmount = document.getElementById('savings');

const createButton = document.getElementById('create');
const updateButton = document.getElementById('update');

async function createAccount(email, password){
    try {
      let url= `http://127.0.0.1:3000/createAccount$email=${email}$passwrd=${password}}`;
      let response = await fetch(url, {method: 'GET', headers: {accept: 'application/json',}, mode: 'same-origin',});
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
        const result = await response.json();
        return result;
      } catch (err) {
        console.log(err);
      }
  }

  createButton.addEventListener('click', async (e) => {
    const user = await createAccount(emailText.value, passText.value);
    if(!user.hasOwnProperty('status')){
        nameText.value = user.name;
        jobText.value = user.job;
        rentAmount.value = user.rent;
        incomeAmount.value = user.income;
        spendingAmount.value = user.speding;
        savingAmount.value = user.saving;
    }
  });

async function updateAccount(email, password, name, job, rent, income, spending, saving){
  const options =  {
    method: "POST",
    body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        job: job,
        rent: rent,
        income: income,
        spending: spending,
        saving: saving
    }),
    headers: { "Content-type": "application/json" }
  };
  return await fetch('/updateAccount', options);
}

updateButton.addEventListener('click', async (e) => {
  const response = await updateAccount(emailText.value, passText.value, nameText.value, jobText.value, 
    rentAmount.value, incomeAmount.value, spendingAmount.value, savingAmount.value);
  
});