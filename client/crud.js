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


export async function updateAccount(email, name, job, rent, income, spending, saving) {
  const response = await fetch(
    `/updateAccount?email=${email}&name=${name}&job=${job}&rent=${rent}&income=${income}&spending=${spending}&saving=${saving}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data;
}

export async function spending(email, expenseName, spending) {
  const response = await fetch(
    `/spending?email=${email}&expenseName=${expenseName}&spending=${spending}`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data;
}

export async function getSpending(email) {
  const response = await fetch(
    `/getSpending?email=${email}`,
    {
      method: 'GET',
    }
  );
  const data = await response.json();
  return data;
}
