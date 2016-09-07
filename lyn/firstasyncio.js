var fs = require("fs");

var fileInput = process.argv[2];

fs.readFile(fileInput,function(error, data){
	if(error) throw error;
	console.log(data.toString().split("\n").length-1);
});