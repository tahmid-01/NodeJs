const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our page');
    } else if (req.url === '/about') {
        res.end('here is our short history');
    } else {
        res.end(
            `<h1>Ooops!</h1>
            <p>We seem to not have anything to show you</p>
            <a href="/">Back Home</a>`
        );
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000...');
});
