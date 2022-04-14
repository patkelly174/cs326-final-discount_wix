import * as http from 'http';
import * as url from 'url';
import * as crud from './crud.js';

async function basicServer(request, response) {
  // TODO: Implement the server
  
  const parsedUrl = url.parse(request.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Grab the HTTP method.
  const method = request.method;

  // Implement each of the CRUD operations.
  //   NOTE: for clarity we have not implemented any error checking. You will
  //         need to add error checking in your team project.
  if (method === 'POST' && pathname.startsWith('/createAccount')) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const user = await crud.createAccount(query.email);
    response.write(JSON.stringify(user));
    response.end();
  } else {
    // If the pathname does not start with any of these, then we will return a
    // 404.
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Not found');
    response.end();
  }

}


// Start the server on port 3000.
http.createServer(basicServer).listen(3000, () => {
  console.log('Server started on port 3000');
});