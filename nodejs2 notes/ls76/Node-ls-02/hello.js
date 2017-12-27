

var http = require('http');
var url = require('url');

var callbackModule = require('./callback');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(callbackModule.sayHello());

    // the Query string
    var queryString = url.parse(req.url).query;
    var num = queryString.split('=')[1];
    
    callbackModule.evenDouble(num, function(error, newNum, time) {
        if (error) {
            res.end(error.message);
        } else {
            res.end(`the new numbr is ${newNum} and wait of ${time}`);
        }
    });

}).listen(1330);
