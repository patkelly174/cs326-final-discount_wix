import { readFile, writeFile, access, unlink } from 'fs/promises';
import { constants } from 'fs';
import readline from 'readline';

// The file we want to store data in.
const userFile = 'userData.json';

async function init() {
  try {
    // Check if the file exists.
    await access(userFile, constants.R_OK | constants.W_OK);
  } catch (err) {
    // File does not exist. Create it.
    await writeFile(userFile, '{}');
  }
}

export async function createAccount(email) {
  const user = { name: "none", job: "none", rent: 0, income: 0, spending: 0, saving: 0};
  try {
    const data = await readFile(userFile, 'utf8');
    const userDirectory = JSON.parse(data);
    userDirectory[email] = user;
    await writeFile(userFile, JSON.stringify(userDirectory));
    return user;
  } catch (err) {
    console.error('Error writing to file: ', err);
    return undefined;
  }
}
init();