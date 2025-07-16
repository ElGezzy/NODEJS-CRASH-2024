/**
 * *************************
 * _________________________
 * @description:
 * __________________________
 * *************************
 * Implements a basic REST API server for user data using Node.js. Includes middleware for logging and JSON responses, route handlers for CRUD operations, and error handling for unknown routes.
 */
import {createServer, get} from 'http';
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'},
];

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) =>{
    res.setHeader('Content-Type', 'application/json');
    next();
}

//Route Handler for GET /api/users
const getUsersHandler = (req, res) =>{
    res.write(JSON.stringify(users));
    res.end();
}

//Route Handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user){
            res.write(JSON.stringify(user));
    }
    else{
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

//Route Handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    //Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();//Converts Each data chunk to a string and appends it to body
    });
    req.on('end', () => {
        const newUser = JSON.parse(body); //Converts the JSON string to an object
        users.push(newUser); // Adds the new user to the users array
        res.statusCode = 201; // Created
        res.write(JSON.stringify(newUser)); //Sends the new user back to the client
        res.end();
    })
}

//Not Found Handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}))
    res.end();
}

const server = createServer((req, res)=>{
    // Call the logger middleware
    logger(req, res, () => {
        //Calling the JSON middleware
        jsonMiddleware(req, res, () =>{
            //Routing Logic
            if (req.url === '/api/users' && req.method === 'GET'){
                getUsersHandler(req, res);
            }
            else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET')
            {
                getUserByIdHandler(req, res);
            }
            else if(req.url === '/api/users' && req.method === 'POST'){
                // Create a new user
                createUserHandler(req, res);
                }
             else {
                notFoundHandler(req, res);
            }
        })
    })
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});