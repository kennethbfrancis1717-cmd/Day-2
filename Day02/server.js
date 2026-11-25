// Creates a server using Node.js

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Welcome to my Node.js Server");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});