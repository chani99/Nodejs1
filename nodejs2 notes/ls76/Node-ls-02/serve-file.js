var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log(req.method);
    if (req.method.toLowerCase() === 'get') {
        fs.readFile('notes.json', 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            let html = buildHtml(data);
            res.end(html);
        });
    } else if (req.method.toLowerCase() === 'post') {
        fs.readFile('notes.json', 'utf8', function (err, data) {
            if (err) {
                console.log(err);
            }

            // TODO: take inputs from POST
            const notesArray = JSON.parse(data);
            notesArray.push({
                text: "new hello",
                date: new Date(),
                time: '22:00'
            });

            fs.writeFile('notes.json', JSON.stringify(notesArray), 'utf8', function(err) {
                let html = buildHtml(JSON.stringify(notesArray));
                res.end(html);
            });
            
          
        });
    }


});
server.listen(1300);
console.log("server listening on 1300");


function buildHtml(data) {
    const notesArray = JSON.parse(data);
    let html = '<html><head></head><body>';
    for (let i = 0; i < notesArray.length; i++) {
        html += `<div>text: ${notesArray[i].text} 
                        date: ${notesArray[i].date} 
                        time: ${notesArray[i].time}</div>`;
    }
    html += `<form action="" method="post" enctype="multipart/form-data" novalidate>
                    <input type="submit" value="Create Note" /></form>`;
    html += '</body></html>';
    return html;
}














// var formidable = require("formidable");
// var util = require('util');
// function processAllFieldsOfTheForm(req, res) {
//     var form = new formidable.IncomingForm();

//     form.parse(req, function (err, fields, files) {
//         //Store the data from the fields in your data store.
//         //The data store could be a file or database or any other store based
//         //on your application.
//         res.writeHead(200, {
//             'content-type': 'text/plain'
//         });
//         res.write('received the data:\n\n');
//         res.end(util.inspect({
//             fields: fields,
//             files: files
//         }));
//     });
// }