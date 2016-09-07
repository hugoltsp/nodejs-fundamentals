var net = require("net");

var server = net.createServer(function (socket){
	var formattedDate;
	var now = new Date();

	formattedDate=now.getFullYear()+'-';
	if((now.getMonth()+1)<10)
		formattedDate+='0'+(now.getMonth()+1);
	else
		formattedDate+=(now.getMonth()+1);
	formattedDate+='-';
	if(now.getDate()<10)
		formattedDate+='0'+ now.getDate();	
	else
		formattedDate+=now.getDate();

	formattedDate+=' ';
	formattedDate+=now.getHours()+':'+now.getMinutes();
	
	socket.end(formattedDate);
});

server.listen(process.argv[2]);