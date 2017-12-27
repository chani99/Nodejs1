var http = require('http');
var fs = require('fs')

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    fs.readFile('jsondb.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let dataArray = JSON.parse(data);
        console.log(dataArray);
        let returnData="";
        for(i=0; i<dataArray.length; i++){
            returnData += `text: ${dataArray[i].note} <br> date: ${dataArray[i].date} <br>`;
        }

        let html = '<html><head><meta charset=utf-8></head><body>';
        res.end(html + returnData + "</body></html>");
    
    });

}).listen(1330);