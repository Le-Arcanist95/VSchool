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

    # Query (query string)
        * /movies?genre=action&year=1999

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

# Request Body (req.body)
# Supplementary: 
    * Better ways to organize our code into reusable pieces.
    * Ways to deal with files
    * Ways to deal with databases
    * Ability to communicate over the internet
    * Ability to accept requests and send responses (in a consistent and standard way)
    * Way to deal with work that takes a long time

# Links:
    nodejs.org/api/