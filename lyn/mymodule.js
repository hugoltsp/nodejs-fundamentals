var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, filteringExtension,callback){
	fs.readdir(dirPath, function(error, files){
		var filteredFiles=[];
		if (error) 
			return callback(error);
	 
 		for (var i = 0; i < files.length; i++) {
			var ext=path.extname(files[i]);
			if(ext=="."+filteringExtension)
				filteredFiles.push(files[i]);
		};

		return callback(null,filteredFiles);
	});
}