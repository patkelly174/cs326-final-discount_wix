# Documentation:

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


# Divsion of Labor:

Patrick Kelly: Front end layout and design

Alex Chan: Created the accountTable database which stored basic information on the user, incorporated the CRUD operations to read/update/delete/create the account, and made minor changes to web aesthetic

Cecilia Chan: Created the spendingTable database which stored information on the expenses of all users; added operations similar to CRUD that deals with creating rows in spendingTable and getting specific user info from spending, and made minor changes to web aesthetic and budgest.js

Jinsoo Yang: Worked on the budget.js to fully being used how we want it to work.

