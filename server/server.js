// Just a basic server setup for this site
var Stack = require('stack'),
    Creationix = require('creationix'),
    Http = require('http');

Http.createServer(Stack(
Creationix.log(),
require('wheat')(__dirname + "/.."))).listen(process.env.NODE_DEV ? 8000 : 80);

