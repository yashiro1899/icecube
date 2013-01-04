// for github hook
var gith = require('gith').create(9527);

gith().on('all', function(payload) {
    console.log(payload);
});
