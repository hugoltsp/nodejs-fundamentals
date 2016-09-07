var concat = require('concat-stream');

process.stdin.pipe(concat(
	function(value){
		var stringValue = value.toString();
		console.log(stringValue.split('').reverse().join(''));
	}));