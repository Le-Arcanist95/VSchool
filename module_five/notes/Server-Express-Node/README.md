# Server side programming in Node with Express


a# Frontend
    * What the user sees and interacts with.

# Backend
    * The Server and the Database that the Client interacts with.

# Servers
    * Receives requests from a Client or another server, and sends back a response.

    * Remote: Anything that is not your device.
    * Local: Running a server on your local machine.

# API
    * The program interface that takes and fullfills the server's request so the server can send a response.

# Database
    * Stores data for the application

# Node
    * 

# Node Module
    * A module is a file

# require - A function, (import)

# module.exports - (export)

# Vocabulary

    # Route
        * An event listener for http requests

    # Endpoint
        * '/item" "/user
    
    # Port
        * localhost: 3000

# Intro to REST API architechture

    # REST - Representational State Transfer

    # Resource - Single item (object) in a database
        * /user

    # Collection - A collection of similar items in a database
        * /users

    # Base (root) URL - The beginning of the URL used for all requests against the API
        * http://amazon.com/

    # API Endpoint - The part after the Base URL
        * http://amazon.com/movies
        * http://amazon.com/movies/f21u9fjasd0q

    # Parameters
        * /movies/:movieId

    # Query (query string - typically to filter results)
        * /movies?genre=action&year=1999
        * Begins with the "?".
        * Built of key=value pairs.
        * Multiple queries separated by the "&".

    # Client - Frontend
        * The person/machine that is consuming the information from your API. (Browser Applications, Mobile Apps, Servers, etc.)

    # Server - Intermediary
        * The machine your API is running on.

    # Request Method - Create.Read.Update.Delete
        * GET (Read)
        * POST (Create/Write)
        * PUT (Update)
        * DELETE (Delete)

    # Middleware - A function that fires on the inbetween
        # What is it?
            * app.use()
                1. (optional) - Mount Path ( endpoint )
                2. Callback function - receives the request, response objects, also the "next" function

        # The "next" function
            * Moves on to the middleware in line on our server

    # Request Body (req.body)

# Status Codes
    # 200 - Successful Response
    # 201 - Successful Insert / Successful update
    # 401 - Unauthorized
    # 404 - Not Found
    # 500 - Server Error

    # https://http.cat

# Database Types
    # Relational - SQL, Postgres
        * Data stored in tables (similar to Excel)
        * Primary Key = ID
        * Foreign Key = ID from Users
        * No empty data cells

        # Relationships
            * One to One - You -> SSN
            * One to Many -  Users -> Todo 
            * Many to Many - User -> Product (Marketplaces)

    # Non-Relational - MongoDB
        * Collections = [...]
        * Document = {...}

        User {
            name: String
            age: Number
            _id: 
        }
        Todo {
            title: string
            _id: created by DB
            user: user._id
        }


# Mongoose
    * Enforces data rigidity for non-relational information in MongoDB
# Connecting the Front-end to the Backend
    # Folder Structure
    # Proxy
# Supplementary: 
    * Better ways to organize our code into reusable pieces.
    * Ways to deal with files
    * Ways to deal with databases
    * Ability to communicate over the internet
    * Ability to accept requests and send responses (in a consistent and standard way)
    * Way to deal with work that takes a long time

    * const express = require("express");
    * const app = express();

    * body-parser helps Express interpret different kinds of Content-Types that come in the body of a request object. So if you ever need to POST or PUT, you'' likely need to use the "body-parser" middleware
        * const bodyParser = require("body-parser);

    * bodyParser.json() parses request bodies with a Content-Type header set to "application/json", meaning it can now read and interpret JSON.
        * app.use(bodyParser.json());
    
    * bodyParser.urlencoded() parses data that comes in with a Content-Type of applicaiton/x-www-form-urlencoded, which is what data comes in as when you use an HTML <form> to submit data.
        * app.use(bodyParser.urlencoded({extended: true}));

    * const port = process.env.PORT || 5000
    * app.listen(port, () => {
        console.log(`Express app is listening on port ${port}`);
    });
# MongoDB Commands
    * sudo systemctl start mongod
    * sudo systemctl stop mongod
    * sudo systemctl restart mongod
    * 'https://cloud.mongodb.com/freemonitoring/cluster/ZIRPIKYL6BV4YCRMWQQK4AV2AVINLJAD'
# Mongoose Schemes
    *    Blueprints for our data
# Mongoose Models
    * Models have a Name, and a Blueprint (Schema)
    * Models are used to perform the CRUD operations on data created with the Model
# Links:
    * nodejs.org/api/