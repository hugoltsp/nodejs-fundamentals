var http = require("http");
var bl = require("bl");

var count=0;
var results=[];

function get(index){
 	http.get(process.argv[2+index], function(response) {
		response.pipe(bl(function(err,data){
			if(err)
				return console.error(err);
			
			var str = data.toString();
			
			results[index]=str;

			count++;
			if (count==3) {	
				printResults();
			}

		}));
	});
}

for (var i = 0; i < process.argv.length; i++){
	get(i);
}

function printResults(){
	for (var i = 0; i < results.length; i++) {
		console.log(results[i]);
	};
}