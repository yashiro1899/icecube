// Just a basic server setup for this site
var Stack = require('stack'),
    Http = require('http');

var special = {
    "Content-Type": true,
    "Location": true,
    "Content-Length": true,
    "Content-Range": true
};

Http.createServer(Stack(function(req, res, next) {
    var writeHead = res.writeHead;
    var start = Date.now();

    res.writeHead = function(code, headers) {
        var extra = [];
        if (headers) {
            Object.keys(headers).forEach(function(key) {
                if (special.hasOwnProperty(key)) {
                    extra.push(key + "=" + headers[key]);
                }
            });
            if (!headers.hasOwnProperty('Date')) {
                headers.Date = (new Date()).toUTCString();
            }
            headers.Server = "NodeJS " + process.version;
            headers["X-Runtime"] = Date.now() - start;
        }

        res.writeHead = writeHead;
        res.writeHead(code, headers);
    };
    next();
}, require('wheat')(__dirname + "/.."))).listen(8000);
