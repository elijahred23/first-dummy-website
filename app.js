const express = require("express");
const app = express();
const port = 3000

app.get("/",(req,res)=>{
	res.sendFile("index.html",{
		root: __dirname + "/public"
	})
});

app.get("/help",(req,res)=>{
	res.send("<h1>Help Page</h1>");
});

app.listen(port,()=>{
	console.log("Server running on port " + port);
});
