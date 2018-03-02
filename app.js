const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req , res){
	res.send('hi there shubham '+ 3 +`<h2>you good buddy</h2>`);
});

app.get('/about',function(req , res){
	res.send(`<h2>you good buddy</h2>`);
});

/* use either app.use or this one
app.get('/help.html', (req, res)=> {
	res.sendFile(__dirname + '/public/help.html');
});
*/

app.listen(3000,()=> {
	console.log('server running on port 3000');
});
