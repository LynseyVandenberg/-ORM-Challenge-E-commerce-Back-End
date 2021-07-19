# Object-Relational Mapping (ORM) Challenge: E-commerce Back End

## Description
This is a backend database for a mock ecommerce site that utilizes [MySQL]("https://dev.mysql.com/doc/"), [Express]("https://expressjs.com/"), and [Sequelize]("https://sequelize.org/").

Because this application is not deployed, I have created a walk through demo of the database functionality using [Insomnia]("https://support.insomnia.rest/"). 

## Acceptance Criteria
* GIVEN a functional Express.js API
* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
* THEN I am able to connect to a database using Sequelize
* WHEN I enter schema and seed commands
* THEN a development database is created and is seeded with test data
* WHEN I enter the command to invoke the application
* THEN my server is started and the Sequelize models are synced to the MySQL database
* WHEN I open API GET routes in Insomnia Core for categories, products, or tags
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
* THEN I am able to successfully create, update, and delete data in my database

# Demo

![Insomnia_Demo](https://github.com/LynseyVandenberg/ORM-Challenge-E-commerce-Back-End/blob/9945af6691058736fd9e03a1195eaafa670f06ff/media/ORM_DEMO_GIF.gif)

_In this video I performed the following steps:_
1. Logged into MySQL from a command prompt within VS Code. Ran "source db/schema.sql" to create the ecommerce_db database. Executed the "show databases;" command to show the database was created, then exited MySQL.
2. From the bash terminal, I ran an "npm run seed" command to seed the database. I then started the database by running an "npm start".
3. Ran through the Category, Product, and Tag 'GET' and 'GET by ID' requests using the Insomnia Dashboard.
4. Ran through the Category, Product, and Tag 'CREATE', 'UPDATE', and 'DELETE' requests using Insomia Dashboard. 
_NOTE: I am currently unable to update Categories and Tags by ID. I am able to CREATE nd UPDATE Products, but the error handling isn't fully functional. I will continue to work on this and update my repo when these items are resolved._

[ORM Demo](https://github.com/LynseyVandenberg/ORM-Challenge-E-commerce-Back-End/blob/d4a1b25bc3d687a51dfdbe62e38158b3e9f3bf83/media/ORM_DEMO.mp4)
<br>
[ORM Demo GIF](https://github.com/LynseyVandenberg/ORM-Challenge-E-commerce-Back-End/blob/97f38f7796bcb6e7437c56e6a9078ebe85924d81/media/ORM_DEMO_GIF.gif)
