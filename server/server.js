import express from 'express';
import logger from 'morgan';
import { readFile, writeFile } from 'fs/promises';

// TODO: import the morgan middleware from 'morgan'


const ACCOUNT_FILE = 'account.json';

// Returns a function that will read a score file.

async function createAccount(email, password) {
  const user = {email: email, password: password, name: "none", job: "none", rent: 0, income: 0, spending: 0, saving: 0};
  try {
    const data = await readFile(ACCOUNT_FILE, 'utf8');
    const userDirectory = JSON.parse(data);
    //Making sure there is no dupllicate accounts
    if(userDirectory.filter(obj => obj.email === email).length !== 0){
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
 
async function readAccount(email, password) {
  try {
    const data = await readFile(ACCOUNT_FILE, 'utf8');
    const userDirectory = JSON.parse(data);
    return userDirectory.filter(obj => obj.email === email && obj.password === password);
  } catch (err) {
    console.error('Error reading file: ', err);
    return undefined;
  }
}

async function readAllAccounts() {
  try {
    const data = await readFile(ACCOUNT_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading file: ', err);
    return undefined;
  }
}


// Create the Express app and set the port number.
const app = express();
const port = 3000;

// Add Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: Add the morgan middleware to the app.
app.use(logger('dev'));
// TODO: Add the express.static middleware to the app.
app.use('/client', express.static('client'));

// TODO: Implement the ExpressJS routes for this server.

// Add your code here. 😎 👍
// You can do this! Make sure you reference example applications covered in
// class and in the associated exercises!


app.post('/createAccount', async (req, res) => {
  const bool = await createAccount(req.query.email, req.query.password);
  console.log(bool);
  if(bool !== false){
    res.status(200).json(bool);
  }
  else{
    res.status(400).json({"status": "failure"});
  }
});


app.get('/readAccount', async (req, res) => {
  const account = await readAccount(req.query.email, req.query.password);
  res.status(200).json(account);
});

app.get('/readAllAccounts', async (req, res) => {
  const accounts = await readAllAccounts();
  res.status(200).json(accounts);
});


// This matches all routes that are not defined.
app.all('*', async (request, response) => {
  response.status(404).send(`Not found: ${request.path}`);
});

// Start the server.
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});