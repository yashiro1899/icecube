// for github hook
var GitH = require('gith').create(9527);
var ChildProcess = require('child_process');

console.log('Listening on port 9527 for GitHub WebHook...');
GitH({
    repo: 'yashiro1899/icecube'
}).on('all', function(payload) {
    console.log('\n[' + new Date() + ']');
    console.log('head_id: ' + payload.sha);

    ChildProcess.execFile('/home/ec2-user/icecube/post-receive.sh', [], {}, function(err, stdout, stderr) {
        process.stdout.write(stdout);
        process.stderr.write(stderr);
    });
});
