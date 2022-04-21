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
