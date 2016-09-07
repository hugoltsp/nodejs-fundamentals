var mymodule=require('./mymodule.js');

var dirPath=process.argv[2];
var filteringExtension=process.argv[3];

//var dirPath="C:\Temp";
//var filteringExtension=".txt";

mymodule(dirPath,filteringExtension,function (e,list) {
	if(e)
		return console.error("Erro:: ", e);

	list.forEach(function(file){
		console.log(file);
	});

});