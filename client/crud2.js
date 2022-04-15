export async function createAccount(email, name, job, rent, income, spending, saving) {
    const response = await fetch(
        '/account/create?email=${email}&name=${name}&job=${job}&rent=${rent}&income=${income}&spending=${spending}&saving=${saving}',
        {
            method: 'POST',
        }
    );
    const data = await response.json();
    return data;
}

export async function readAccount(email) {
    const response = await fetch('/account/read?email=${email}', {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  }

  export async function readALlUsers() {
    const response = await fetch('/person/all', {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } 