var t2 = require('through2');
var split = require('split');

var count=0;

process.stdin.pipe(split()).
	pipe(t2(function(line,_,next){		
		count++;
		line = count%2==0?line.toString().toUpperCase():line.toString().toLowerCase();
		this.push('\n'+line);
		next();
	},function(){
		this.push(null);
	})).pipe(process.stdout);