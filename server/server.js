// Just a basic server setup for this site
var Stack = require('stack'),
    Http = require('http'),
    UAParser = require('ua-parser');

var special = {
    "Content-Type": true,
    "Location": true,
    "Content-Length": true,
    "Content-Range": true
};

Http.createServer(Stack(function(req, res, next) {
    var writeHead = res.writeHead;
    var start = Date.now();
    var ua = req.headers['user-agent'];
    var agent;

    ua = UAParser.parse(ua);
    agent = ua.userAgent.toString();
    agent = agent == "Other" ? (ua.string || '') : agent;
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

        try {
            console.log("%s - [%s] %s %s %s \"%s(%s)\"",
                req.connection.remoteAddress,
                headers.Date,
                req.method,
                req.url,
                code,
                agent.toString(),
                ua.os.toString());
        } catch(e) {
            console.error(e);
        }
        res.writeHead = writeHead;
        res.writeHead(code, headers);
    };
    next();
}, require('wheat')(__dirname + "/.."))).listen(process.env.NODE_DEV ? 8000 : 80);
