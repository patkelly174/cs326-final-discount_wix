export async function createAccount(email, password, address, city, state, zip, name, job, rent, income, spending, saving) {
  const response = await fetch(
    `/createAccount?email=${email}&password=${password}&address=${address}&city=${city}&state=${state}&zip=${zip}&name=${name}&job=${job}&rent=${rent}&income=${income}&spending=${spending}&saving=${saving}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data;
}

export async function removeAccount(email) {
  const response = await fetch(`/removeAccount?email=${email}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}


export async function readAccount(email) {
  const response = await fetch(`/readAccount?email=${email}`, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
}


export async function updateAccount(email, password, job, rent, income, spending, saving) {
  const response = await fetch(
    `/updateAccount?email=${email}&password=${password}&job=${job}&rent=${rent}&income=${income}&spending=${spending}&saving=${saving}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data;
}
