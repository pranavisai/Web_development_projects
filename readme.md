## Use of different languages
1. HTML -> structure
2. CSS -> style
3. Java Script -> Behaviour

## Three ways to add CSS
1. Inline
2. Internal using style tags.
3. External by linking the CSS sheet to HTML file.

## A Guide to all the links for web designing

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://flexboxfroggy.com/

## grid test
https://appbrewery.github.io/grid-sizing/test.html

## grid garden exercises

https://appbrewery.github.io/gridgarden/

##  bootstrap layout exercise

https://appbrewery.github.io/bootstrap-layout/

## Shorthand
CDN -> Content Delivery Networks

## To be able to toggle the website between light and dark in bootstrap 

data-bs-theme = "dark"

## A good web design always consists of:

1. Color Theory
2. User Interface Design
3. Typography
4. User Experience Design


## Color Theory 

1. It is all about using complementing colors to express what your website is trying to sell or convey.
2. https://color.adobe.com/create/color-wheel -> to create custom color patterns and visualize
3. https://colorhunt.co/ -> similar website


## Typography
Gives us an understanding of how to choose a font according to the scenario.


## UI design
When working on this it is important to understand the five things -> hierarchy, layout, alignment, white space (around and between elements) and audience (the people we are catering to).

## UX Design
1. Always keep it simple.
2. Keep designs consistent throughout.
3. Follow an F-layout for the reading patterns. Have the most important content on the left, logo at the top and keep following the pattern.
4. Another is the Z-layout. Typically for websites that need fast browsing and have video content.
5. Efficiently switching between screen sizes and accommodation content accordingly.
6. https://www.dailyui.co/ -> for practicing UI and UX design.

## Custom design to include all the above aspects

https://pranavisbnb.my.canva.site/pranavi-s-b-b

## Three ways to add Java Script (JS)
1. Inline
2. Internal using script tags.
3. External by linking the JS file to HTML file using the script tag.

## Document Object Model (DOM)
1. Gives the ability to catalogue the webpage into individual objects to be able to select and manipulate.
2. Commands:
    1. querySelector
    2. getElementsByTagName
    3. firstElementChild
    4. lastElementChild
    5. getElementsByClassName
    6. getElementsById
    7. querySelectorAll
    8. .classList -> used to return a list of the classes attached to any element
    9. .attributes -> gives a list of all the attributes attached to a HTML element
    10. getAttribute -> for getting a specific attribute of an element
    11. setAttribute(attribute_name, what_to_be_changed_to) -> to set value for a specific attribute of an element
    12. onEventListener(event, listener_function) -> the function is given without () as if it is given it is directly triggering the function when the script is run through HTML. Without () the function will be called only upon the event being performed.
3. Query Selector can be used in this way too:
    1. document.querySelector("h1") -> to get the tag
    2. document.querySelector("#title") -> to get by Id
    3. document.querySelector(".btn") -> to get by class
    4. document.querySelector("li a") -> example of getting the "a" tag inside "li" (hierarchical)


## DOM style object documentation
https://www.w3schools.com/jsref/dom_obj_style.asp

## creating objects in JS
var object_name = {
    property1; value1,
    property2: value2,
    property3: value3, (can be any data type for values including arrays)
}

## Constructor function
The constructor function name is written this way for identification. 

function ThisIsAConstructorFunction (parm1, parm2, ....)
{

}

## jQuery
1. Helps in minimizing the code. It is to JavaScript as BootStrap is to CSS.
2. Example of JS to jQuery for selecting elements: document.querySelector("h1") -> $("h1").
3. Even to select all querySelectorAll("button") -> $("button"). No difference between selecting one or many.
4. $("h1").css("font-size") -> example of getting the value of the element using CSS. Here we are getting the value of the font-size.
    $("h1).css("font-size", "5rem") -> example of setting the value of the element.
5. .addClass for adding a CSS class to an element. To add more classes in the same command .addClass("class1 class2").
6. .remove for removing a CSS class from an element.
7. .hasClass("classname") -> to check if the class is applied or not. Gives back a boolean value.
8. Manipulating Text -> .text("sampletext") -> to change the text of the element.
9. Manipulating attributes ->  .attr("attribute_name", "attribute_change_value") -> example of attribute names of an element: img, src, href, class and so on.
10. $("h1").before("<button>New Button</button>") -> Example of adding an element before another element.
11. $("h1").after("<button>New Button</button>") -> Example of adding an element after another element.
12. $("h1").prepend("<button>New Button</button>") -> Example of adding an element just after the opening tag of an element, in this case h1.
13. $("h1").append("<button>New Button</button>") -> Example of adding an element just after the content of an element, in this case h1.
14. Some of the animation commands include: .hide(), .toggle(), .fadeOut(), .fadeIn(), .fadeToggle(), .slideUp(), .slideDown(), .slideToggle(), .animate().

## Command Line
1. BASH -> Bourne Again Shell
2. touch filename -> to create a new file
3. open filename -> to open the file using default editor
4. open -a application path along with filename -> to open using specific application
5. pwd -> print working directory
6. rm filename, rm -r, rm * -> remove specific file, remove a directory, remove all within the specific directory
7. rm -rf -> remove with force

## Backend is a combination of: 
1. Application, 
2. Server and 
3. Database

## Node.js
https://nodejs.org/docs/latest/api/
1. A Framework provides us with pre-built components and structures to be used to build an application without the need of writing every single line of code from scratch.
2. Node.js is "An asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications".
3. Node REPL -> Read Eval Print Loop. It is a computer environment where user inputs are read and evaluated, and then the results are returned to the user.
4. To run a JS file using Node -> node filename.js in the terminal.


## NPM
https://www.npmjs.com/
1. NPM -> Node Package Manager
2. npm init -> generates a JSON configuration file for the project (called package.json).
3. npm install <package_name> or npm i <package_name> -> to install npm packages.
4. npm i <package_name1> <package_name2> <package_name3> -> to install multiple packages at once.
5. CJS -> CommonJS, ESM -> ECMA Script Modules

## Express.js
1. Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js.
2. To create Express Server:
    1. Create directory
    2. Create index.js file
    3. Initialize NPM
    4. Install the Express package
    5. Write Server application in index.js
    6. Start server -> node index.js
    7. nodemon index.js -> used when we want to restart the server automatically as soon as their are changes in the directory. Install it using 
    `npm i -g nodemon` (since its a global install, in case of error use sudo)

## HTTP
https://developer.mozilla.org/en-US/docs/Web/HTTP
1. HyperText Transfer Protocol -> language that allows computers to talk to one another.
2. Request Vocabulary -> GET, POST, PUT, PATCH, DELETE
3. sudo lsof -i -P -n | grep LISTEN -> All the ports actively listening for outside interaction.(in Mac)
4. HTTP response status codes:
    1. 100 - 199 -> Informational responses
    2. 200 - 299 -> Successful responses
    3. 300 - 399 -> Redirection messages
    4. 400 - 499 -> Client error messages
    5. 500 - 599 -> Server error messages 

## Middleware
1. Middleware refers to functions that sit between the request and response objects in the request-response cycle. Middleware functions can:
    1. Execute any code.
    2. Modify the request or response objects.
    3. End the request-response cycle.
    4. Call the next middleware in the stack using next() if there are any.
2. Types of Middleware:
    1. Application-level middleware – bound to an app instance (app.use() or app.get()).
    2. Router-level middleware – bound to an Express Router instance.
    3. Built-in middleware – like express.json() or express.static().
    4. Error-handling middleware – has 4 parameters: (err, req, res, next).
3. Commonly used for:
    1. Logging (morgan): https://www.npmjs.com/package/morgan
    2. Body parsing (express.json())
    3. Authentication
    4. Error handling
    5. CORS support
    6. Serving static files
    7. Pre-processing (body-parser)

## Embedded JavaScript (EJS)
1. In order to separate frontend from backend and decrease the complexity of the code we need to use templating language.
2. EJS Tags:
    1. <%= %> -> variable
    2. <%  %> -> executable javascript code
    3. <%- %> -> content should be interpreted as HTML
    4. <%% %%> -> escape EJS tag
    5. <%# %> -> comment
    6. <%- include("name of ejs file") %> -> insert another ejs file into the current ejs file
3. To provide static file location we can use middleware and add in the following command in our index.js file -> app.use(express.static("foldername"))
4. The ejs files declaration in the js or ejs files are always relative to the views folder:
    1. If the file is directly in views folder then in .js file we write -> res.render("index.ejs")
    2. If places in some other folder within the view folder then we write -> res.render("other_folder_name/index.ejs")

## Git Version Control
1. To rollback to the previous version -> git checkout
2. In gitignore:
    1. Use # to comment.
    2. To ignore all files with an extension -> *.extension
    3. https://github.com/github/gitignore -> created by github to use as templates when using certain technologies in projects.
3. https://learngitbranching.js.org/ -> learning to use git commands

## APIs (Application Programming Interfaces)
1. API endpoints look like this -> BaseURL/Endpoint
2. Query Parameters -> BaseURL/Endpoint?query=value
3. Multiple Query Parameters -> BaseURL/Endpoint?query=value&query2=value2
4. Path parameters -> BaseURL/Endpoint/{path-parameter}
5. JSON -> Javascript Object Notation
6. Convert JS Object, represented by data to JSON, represented by jsonData -> `const jsonData = JSON.stringify(data)`
7. Convert JSON, represented by jsonData to JS Object, represented by data -> `const data = JSON.parse(jsonData)`
8. https://jsonviewer.stack.hu -> JSON viewer for simplicity.
9. Types of API authentication:
    1. No Authentication
        1. Can be limited per requests
    2. Basic Authentication
        1. Request username and password
        2. Use Base64 encoding
        3. https://www.base64decode.org/ -> to decode base64
        4. Because of HTTPS it is secure as cryptography is being used to encode it further to make it look like nonsense.
    3. API Key Authentication
        1. Using an API key for authentication
    4. Token Based Authentication
        1. User uses username and password to generate a token which is in turn used to access the API.
        2. OAUTH -> Industry standard for token based authentication
10. https://rapidapi.com -> Can be used to host own APIs
11. What makes an API RESTful?
    1. HTTP methods -> GET, POST, PATCH, PUT, DELETE to interact with the API
    2. Should have standard data format it responds with. Example like JSON output
    3. Client and Server are separate and isolated, allowing for scalability. Interaction only through network.
    4. Should be stateless. 
    5. Uses URI/URL as resource locator.
12. In case, you need to give the User Key for an operation such as DELETE All. The steps are as follows:
    1. Go to postman. 
    2. Go to auth and select API Key. 
    3. Put the values as follows: Key -> key, Value -> key that you have and Add to: Query Params


## Databases
1. SQL -> Structured Query Language, also known as Relational Database.
2. Reasons for sticking with SQL:
    1. Structure
    2. Ability to plan the database.
    3. Consistency.
    4. Good code quality maintenance.
    5. Examples: PostgreSQL, MySQL, SQLite, Oracle
3. NoSQL -> Not Only SQL
4. Reasons for moving to NoSQL databases: 
    1. Uses things such as key/value pairs like what you see here, or document models where you store everything in a single document, just like a JSON.
    2. Flexibility and moving away from this strict schema.
    3. Provide scalability. For data to be able to scale horizontally (more records) and vertically (more fields).
    4. Examples: MongoDB, Redis, DynamoDB

## PostgreSQL 
1. CRUD -> Create, Read, Update, Delete
2. https://www.postgresql.org/docs/current/datatype.html -> datatypes

## Web Security

1. Authentication
    1. Encryption: The process of converting information or data into a code, especially to prevent unauthorized access.
    2. Ceaser Cipher -> https://cryptii.com/pipes/caesar-cipher
    3. aes256 -> https://encode-decode.com/aes256-encrypt-online
    4. As the length of the password increases, the time taken to decrypt it increases *exponentially*.
    5. Currently, used mechanism is bcrypt -> https://www.npmjs.com/package/bcrypt
    6. *Passport* is an authentication middleware for Node.js. It can be unobstructively dropped in to any Express based web application.
    7. Express session is used to enable session persistence. To bypass the login process the next time the website is accessed.
    8. Passport is a neat library that allows to add lots of different authentication strategies into one project.
2. Environment Variables
    1. Used for convenience and security.
    2. Environment variables essentially allows to separate out and store keys, project secrets, and various other variables away from where the code base is located.
    3. It is a simple file with .env extension and can be installed into the project using "dotenv".
3. OAuth -> Open Authorisation
    1. Granular Access Levels
    2. Read/ Read + Write Access
    3. Revoke Access
    4. How OAuth Works:
        1. Let the third party, be it Facebook, Twitter, or Google, know about the web application.
        2. Set up the app in their developer console to get the client ID.
        3. The app can then make a request to the third party to authenticate the user.
        4. Granted the permission, then the app will receive an authorization code. This allows to check to make sure that the user actually successfully signed on.
        5. To go a step further, exchange of authentication code for an Access Token is done and saved into the database as it is valid longer than the authentication token.
        









