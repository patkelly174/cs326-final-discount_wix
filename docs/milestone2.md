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
        The user will input new information into the Your Information section of the Overview page. After hitting Update Account, the information of that account will be updated with the new information. [NOT YET IMPLEMENTED: Changes to the budget and expenses tabs on the top of our overview page will also update the values stored in a user's account].

    DELETE:
        This will delete the user's account from accounts.json, along with all the information that was stored inside. [NOT YET IMPLEMENTED: It will also log the user out and go back to the default page].


# Screenshots:
![Screen Shot 2022-04-20 at 9 17 48 PM](https://user-images.githubusercontent.com/11319543/164352940-a8212aa5-fd10-4370-9fa0-de138ff1489b.png)
First page where it shows what this website is and what we are trying to accomplish.

![Screen Shot 2022-04-20 at 9 17 54 PM](https://user-images.githubusercontent.com/11319543/164353041-0f926cf1-a7c5-47e7-a08d-e4e2a4072a21.png)
Overview page once Overview is clicked which is located on the top right corner of the web page. It shows all the budget related things where you can view and update.

![Screen Shot 2022-04-20 at 9 17 57 PM](https://user-images.githubusercontent.com/11319543/164353196-2db70591-273e-4415-b9c2-8883a0074cb4.png)
Login page where you can type in your email and password.

![Screen Shot 2022-04-20 at 9 17 58 PM](https://user-images.githubusercontent.com/11319543/164353241-64d2f48f-a506-4602-8453-570f2645bc5a.png)
Sign up page where you can create an account for our website.


