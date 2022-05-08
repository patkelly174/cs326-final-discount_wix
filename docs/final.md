1. Title: 21-discount-wix

URL: https://duality-app.herokuapp.com

2. Subtitle: Duality

3. Semester: Spring 2022

4. Overview: Our application helps people to budget their money and see their spendings 

5. Team Members: Patrick Kelly, Alex Chan, Cecilia Chan, Jinsoo Yang

6. User Interface: 

We have 5 different pages that the user can interact with. Our intial welcome page gives a general overview of our web app and gives the user multiple buttons to interact with to sign up/sign in. Then we have the login/sign in pages which the uesr can use to input their data. We then have an about page with talks about our goal as a team and also a little look into what our application does and we also have a little meet the team section. The main bulk of our web app is in the overview tab which is where the user will do most of their interactions. In the overview tab the user can view their account details, current budget, and expenses. The user can also view their account details and update and add money to budgets and expenses.

7. APIs:

We did not use any APIs, but if we did we would have taken in an individual interest and availability and use our automated technology to find a job most suited for them. Another function we would have is find local deals for the user. 

8. Database:

accountTable

| Column   | Data Type      | Description              |
|----------|----------------|--------------------------|
|   email  | varchar(30)(pk)| The email of the user    |
| password | varchar(30)    | The password of the user |
|  address | varchar(30)    | The address of the user  |
|   city   | varchar(30)    | The city of the user     |
|   state  | varchar(30)    | The state of the user    |
|   zip    | varchar(30)    | The zip of the user      |
|   name   | varchar(30)    | The name of the user     |
|   job    | varchar(30)    | The job of the user      |
|   rent   | integer        | The rent of the user     |
|  income  | integer        | The income of the user   |
| spending | integer        | The spending of the user |
|  saving  | integer        | The saving of the user   |


spendingTable

| Column      | Data Type      | Description              |
|-------------|----------------|--------------------------|
|   email     | varchar(30)(pk)| The email of the user    |
| expenseName | varchar(50)    | Name of expense          |
|  spending   | varchar(30)    | Expense amount           |
|   date      | varchar(30)    | Date of expense          |

9. URL Routes/Mappings: 

/createAccount -> Create a new user account based on the data the user provides on the signup page. Also adds the new account to the database

/readAccount -> Looks up a given account given an email from the database

/removeAccount -> Given an email the associated account linked to the email will be removed from the database

/updateAccount -> Updates a given account in the database with new data that the user provides.

10. Authentication/Authorization: 

Once users are logged in, they will be able to see the overview page.

11. Division of Labor: 

Patrick Kelly: Front end layout and design

Alex Chan: Created the accountTable database which stored basic information on the user, incorporated the CRUD operations to read/update/delete/create the account, and made minor changes to web aesthetic

Cecilia Chan: Created the spendingTable database which stored information on the expenses of all users; added operations similar to CRUD that deals with creating rows in spendingTable and getting specific user info from spending, and made minor changes to web aesthetic and budgest.js

Jinsoo Yang: Worked on the budget.js to fully being used how we want it to work.

12. Conclusion: 

Overall I would say that this project was a great learning experience. Through the entire project lifespan there were skills and methods to be learned. Having to communicate with group members and coordinate what each individual was in charge of was a great look into what we may see in a full time position. In addition, having to use GitHub was very benefical because that is another tool that is widley used in the work force. We as a group had some inital problems using GitHub but as the project progressed and we became more used to using it this difficulty disappeared. One thing we as a group wished we knew is experience with using GitHub as a group and the common practices when it comes to making and mergeing branches.
