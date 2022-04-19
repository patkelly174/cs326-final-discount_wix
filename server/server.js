import express from 'express';
import logger from 'morgan';
import { readFile, writeFile } from 'fs/promises';


const ACCOUNT_FILE = 'account.json';

// Returns a function that will read a score file.

async function createAccount(email, password, address, city, state, zip) {
  const user = {email: email, password: password, address: address, city: city, state: state, zip: zip, name: "none", job: "none", rent: 0, income: 0, spending: 0, saving: 0};
  try {
    const data = await readFile(ACCOUNT_FILE, 'utf8');
    const userDirectory = JSON.parse(data);
    //Making sure there is no dupllicate accounts
    if(userDirectory.filter(obj => obj.email === email).length !== 0 || !(email.substring(1,email.length-1)).includes("@")){
      return false;
    }
    userDirectory.push(user);
    await writeFile(ACCOUNT_FILE, JSON.stringify(userDirectory));
    return user;
  } catch (err) {
    console.error('Error writing to file: ', err);
    return undefined;
  }
}

async function deleteAccount(email) {
  try {
    const data = await readFile(ACCOUNT_FILE, 'utf8');
    let userDirectory = JSON.parse(data);
    //Making sure account exists
    if(userDirectory.filter(obj => obj.email === email).length === 0){
      return false;
    }
    userDirectory = userDirectory.filter(obj => obj.email !== email);
    await writeFile(ACCOUNT_FILE, JSON.stringify(userDirectory));
  } catch (err) {
    console.error('Error writing to file: ', err);
    return undefined;
  }
}

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use('/client', express.static('client'));


app.post('/createAccount', async (req, res) => {
  console.log(req.body.email);
  const bool = await createAccount(req.body.email, req.body.password, req.body.address, req.body.city, req.body.state, req.body.zip);
  console.log(bool);
  if(bool !== false){
    res.status(200).json(bool);
  }
  else{
    res.status(400).json({"status": "failure"});
  }
});

app.post('/deleteAccount', async (req, res) => {
  console.log(req.body.email);
  const bool = await deleteAccount(req.body.email);
  console.log(bool);
  if(bool !== false){
    res.status(200).json(bool);
  }
  else{
    res.status(400).json({"status": "failure"});
  }
});


// This matches all routes that are not defined.
app.all('*', async (request, response) => {
  response.status(404).send(`Not found: ${request.path}`);
});

// Start the server.
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
