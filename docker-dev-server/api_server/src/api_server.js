#!/usr/local/bin/node

var express = require('express');
var app = express();

app.listen(process.env.PORT);

app.get(
    '/person', 
    function(req, res) {
        res.json({
            name: 'Fakhir',
            surname: 'Shaheen'
        });
    }
);

// This should always be last!
app.use(function (req, res, next) {
    html = '<html>' +
                '<head>' +
                    '<title>API Server</title>' +
                '</head>' +
                '<body>' +
                    '<h1>API Server (404) </h1>' +
                    '<p>Sorry, we can\'t find that</p>' +
                '</body>' +
            '</html>'

    res.status(404).send(html);
});