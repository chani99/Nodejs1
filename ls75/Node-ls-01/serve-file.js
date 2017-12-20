var http = require('http');
var fs = require('fs')

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    fs.readFile('base.html', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.end(data);
    });

}).listen(1330);