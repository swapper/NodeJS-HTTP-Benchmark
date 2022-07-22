var http = require('http');


// begin timestamp
var begin = new Date();
var options = {
  host: 'www.google.co.uk',
  port: 80,
  path: '/search.html'
};
function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

for(var i = 0; i < 500; i++) {
    http.get(options, function(res) {
        sleep(300, function() {
         });
        process.stdout.write(" Requests Per Second: [" + this.count + "] | Host: [" + options.host + "] | statusCode: [" + res.statusCode + "] \r");
    }.bind({ count: i })).on('error', function(e) {
            process.stdout.write("[" + options.host + "] Error: [" + e.message + "] \r");
    }.bind({ count: i }));
}


var end = new Date();
var reqPerSec = i / ( end - begin );
//console.log(reqPerSec);
