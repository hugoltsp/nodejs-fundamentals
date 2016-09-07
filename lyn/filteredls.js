var fs = require("fs");
var path = require("path");

//var files = [".txt"];
var pathDir=process.argv[2];
//var pathDir ="C:\Temp";
//fs.readdir("C:\Temp",readDirCallback);

fs.readdir(pathDir, function(error, files){
	if (error) 
		throw error;
 
	for (var i = 0; i < files.length; i++) {
		var ext=path.extname(files[i]);
		if(ext==".md")
			console.log(files[i]);
	};
});