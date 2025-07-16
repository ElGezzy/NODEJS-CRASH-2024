/**
 * *************************
 * _________________________
 * @description:
 * __________________________
 * *************************
 * Creates a simple HTTP server using Node.js. Serves HTML files for '/' and '/about' routes, handles errors, and demonstrates async file reading and response handling.
 */
import http from 'http'; //Using Node's built in http module
import fs from 'fs/promises'; //Using Node's built in fs module for file system operations
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

//Get Current Path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404

    // res.writeHead(500, {'Content-Type': 'application/json'})
    // res.end(JSON.stringify({message: 'Server Error'})); // Responds with "Hello, world!" to any request

    // console.log(req.url);
    // console.log(req.method);

     try{
        if (req.method === 'GET'){
            let filePath; //variable to hold the path of the file to be served
            if (req.url === '/'){
                filePath = path.join(__dirname, 'public', 'index.html')
            }else if (req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html')
            }else{
                throw new Error('Not Found');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);//Allows the server to send the data to the client(browser  )
            res.end();
        }
        else {
            throw new Error('Method Not Allowed');
        }
     }
     catch{
        res.writeHead(500, {'content-type': 'text/plain'})
        res.end('Server Error')
     }


})

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`) 
});