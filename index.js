const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 80;

const readline = require('readline');

server.listen(port, () => {
	console.log('conectado na porta %d\n', port);
	linet();
});

app.use(express.static(path.join(__dirname, 'public')));

var line = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


function linet() {
	line.question("Message: ",function(res){
		io.emit('touch',res);
		setTimeout(linet,1000);
	})
}