const http = require('http');
http.createServer(function (req, res) {
    let url = req.url;
    if (url == '/data') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        let result = {
            msg: 'hello',
            age: 12
        };
        res.end(JSON.stringify(result));
    }
}).listen(1337, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:1337/');
});
