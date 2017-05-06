# HW 14 {burger}
## Node Express Handlebars application

  - Restaurant app that lets users input the names of burgers they'd like to eat.
  - Whenever a user submits a burger's name, the app will display the burger waiting to be devoured.
  - Each burger in the waiting area has a Devour button. When the user clicks it, the burger will be removed.
  - The app will store every burger in a database, whether devoured or not.
 
## Model View Controller Directory Structure
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
