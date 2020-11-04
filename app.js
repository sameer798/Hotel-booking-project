const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){

	res.writeHead(200, {'content-type': 'text/html'});

	const html = fs.readFileSync('./homeUltra.html');
	res.end(html);


	const express = require('express');
const path = require('path');

const app = express();

app.set("views",path.join(C:\Users\ASUS\Desktop\Webdevelopment\Mean Stack Project,"views"));
app.set("view engine", "html");

app.get("/",(res, res) => {
	res.render("index", {buttonName: Reservation});
});
}).listen(3000,()=> {
	console.log('running on 3000');