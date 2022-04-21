# Division of Labor:
    Patrick Kelly: Front-end design & styling; Merged other group member's work together & managed branches
    Cecilia Chan: Worked with duality.js & server.js; Update API; Part of Read API; Minor changes to web aesthetic 
    Alex Chan: Worked with client.js & server.js; Create & Delete API; Part of Read API; Minor changes to web aesthetic
    Jinsoo Yang: budget.js, basic server implementation, minor fixes on the html and packages

# API Application:
    CREATE:
        Created user accounts based on input information for our Sign-Up page. These created accounts would be saved in accounts.json to be called upon at a later time when a person decides to login to the website again.
    
    READ:
        After hitting the Login button, the server will read the input Email and Password and match it to one found in the database. Once found, our Read will place that account in current.json, which is used to hold the current account of a user at any given time. We will remove the account from current.json after the user logs out.

    UPDATE:
        The user will input new information into the Your Information section of the Overview page. After hitting Update Account, the information of that account will be updated with the new information. Changes to the budget and expenses tabs on the top of our overview page will also update the values stored in a user's account.

    DELETE:
        This will delete the user's account from accounts.json, along with all the information that was stored inside. It will also log the user out and go back to the default page.


# Screenshots:

<img width="1172" alt="Screen Shot 2022-04-20 at 9 35 41 PM" src="https://user-images.githubusercontent.com/98613517/164354177-807053dd-a7ac-4c05-a510-333e894f1dec.png">

Here we are creating the account.

<img width="924" alt="Screen Shot 2022-04-20 at 9 36 19 PM" src="https://user-images.githubusercontent.com/98613517/164354245-f97037ff-8046-40c5-9116-2b2c6070dd79.png">

The account is stored in our account.json.

<img width="1378" alt="Screen Shot 2022-04-20 at 9 37 25 PM" src="https://user-images.githubusercontent.com/98613517/164354324-b98d89c0-869f-473d-afc9-6dd3a969b7ba.png">

When we click "Account Details", basic information is shown to the user.

<img width="1386" alt="Screen Shot 2022-04-20 at 9 38 07 PM" src="https://user-images.githubusercontent.com/98613517/164354414-c21e42c0-9b61-471e-b34d-338e636015af.png">

When we click "Update Account", any changes made to the information would be saved to our system.

<img width="885" alt="Screen Shot 2022-04-20 at 9 38 39 PM" src="https://user-images.githubusercontent.com/98613517/164354473-de4a743d-98c7-4343-901f-cbf1db867d8d.png">

The updated account is stored in our account.json.

<img width="1386" alt="Screen Shot 2022-04-20 at 9 39 16 PM" src="https://user-images.githubusercontent.com/98613517/164354532-f8468375-f486-481d-ae04-487e2359e4c0.png">

When we click "Delete Account", the login account is deleted from our system.

<img width="401" alt="Screen Shot 2022-04-20 at 9 39 40 PM" src="https://user-images.githubusercontent.com/98613517/164354561-8414b416-f8b0-4178-83b6-449875a98d3f.png">

The account is deleted in our account.json.

# Website:
Heroku was giving all of or team members errors while creating the website. In addition, the status page of the Heroku shows it was experiencing issues.
