//// V8 chrome JS compiler
// console.log(1+1)
// function beNiceTo(who){console.log("Hi there " + who + ". Nice to meet you.!")}
// beNiceTo("Sean");

//// FILE SYSTEM
//var fs = require('fs');

// fs.writeFile('nodetest.txt', 'Hello inter' + 'ACTIVE', function(err) {
//     if (err) throw err;
//     console.log('It saved!');
// });

// fs.readFile('nodetest.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// fs.watch('nodetest.txt', {
//     persistent: true
// }, function(event, filename) {
//     console.log(event + " event occurred on " + filename);
// });

//// node HTTP
// var http = require('http')
// var server = http.createServer(function(req, res) {
//     res.writeHead(200);
//     res.end("hello interACTIVE");
//     //console.log('hello interACTIVE');
//     //console.log(req.headers)
// });

//// node+express HTTP
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

//// node+express+socket.io HTTP

var io = require('socket.io')(http);
io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});