#!/usr/local/bin/node

// Might be good to use an explicit path to node on the shebang line in case
// it isn't in PATH when launched by Chrome.

var fs = require('fs');
var nativeMessage = require('chrome-native-messaging');
const { spawn } = require('child_process');

var input = new nativeMessage.Input();
var transform = new nativeMessage.Transform(messageHandler);
var output = new nativeMessage.Output();

process.stdin
    .pipe(input)
    .pipe(transform)
    .pipe(output)
    .pipe(process.stdout)
    ;

var subscriptions = {};

var timer = setInterval(function () {
    if (subscriptions.time) {
        output.write({ time: new Date().toISOString() });
    }
}, 1000);

input.on('end', function () {
    clearInterval(timer);
});

const child = spawn('/Applications/Blockhub.app/Contents/MacOS/Blockhub', ['-logfile']);

child.stdout.on('data', (data) => {
    //console.log(`child stdout:\n${data}`);

    if (data.indexOf("{\"Command\"") != -1) {
        try {
            var json = JSON.parse(data.toString().slice(data.indexOf("{")));
            output.write(json)
        } catch (e) {

        }
    }
});

child.stderr.on('data', (data) => {
    //console.error(`child stderr:\n${data}`);

    if (data.indexOf("{\"Command\"") != -1) {
        try {
            var json = JSON.parse(data.toString().slice(data.indexOf("{")));
            output.write(json)
        } catch (e) {

        }
    }
});

process.stdin.pipe(child.stdin);

child.on('exit', function (code, signal) {
    //console.log('child process exited with ' +
    //    `code ${code} and signal ${signal}`);
});

function messageHandler(msg, push, done) {
    if (msg.readdir) {
        fs.readdir(msg.readdir, function (err, files) {
            if (err) {
                push({ error: err.message || err });
            } else {
                files.forEach(function (file) {
                    push({ file: file });
                });
            }

            done();
        });
    } else if (msg.subscribe) {
        subscriptions[msg.subscribe] = true;
        push({ subscribed: msg.subscribe });
        done();
    } else if (msg.unsubscribe) {
        delete subscriptions[msg.unsubscribe];
        push({ unsubscribed: msg.unsubscribe });
        done();
    } else {
        // Just echo the message:
        //push(msg);
        //process.stdin.write(msg);
        done();
    }
}
