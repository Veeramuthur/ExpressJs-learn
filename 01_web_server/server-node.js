const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   if (req.url === '/') {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Welcome you vanjus Kitchan');
   } else if (req.url === '/thanks') {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Thanks for ordering from us'); 
   } else {
     res.statusCode = 404;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Not Found');
   }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});