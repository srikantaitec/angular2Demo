var http = require('http');
var fs = require('fs')

fs.readFile('index.html', (err,html) => {
    if(err){
        throw err;
    }
    
    var server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end('Hello12');
});

server.listen(port, hostname , () => {
    console.log('server started '+ port);
} );
});

var hostname = '127.0.0.1';
var port = 3000;



