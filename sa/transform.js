var t2 = require('through2');

var stream = t2(function (buffer, encoding, next){
	this.push(buffer.toString().toUpperCase());
	next();
}, function (){
	this.push(null);
});

process.stdin.pipe(stream).pipe(process.stdout);