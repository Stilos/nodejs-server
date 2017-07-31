const express = require('express');
const app = express();

app.get('/login', (req,res) => {
	let query = req.query;
	let response = false;
	if(query.login && query.login == "true"){
		response = true;
	}
	res.send(response);
})

app.listen(3000, () => console.log("Srv: Running on port 3000"))