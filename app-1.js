const express = require('express');
const hbs =require('hbs');
var app = express();


// for using partials 
hbs.registerPartials(__dirname + '/views/partials');
// setting view engines like hbs or ejs
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/',function(req , res){
	res.send('hi there shubham '+ 3 +`<h2>you good buddy</h2>`);
});

// app.get('/about',function(req , res){
// 	res.send(`<h2>you good buddy</h2>`);
// });

/* use either app.use or this one to serve static files without view engine
app.get('/help.html', (req, res)=> {
	res.sendFile(__dirname + '/public/help.html');
});
*/

app.get('/about', (req, res)=>{
	res.render('about.hbs', {
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	});
});


app.get('/home', (req, res)=>{
	res.render('home.hbs', {
		pageTitle: 'home Page',
		currentYear: new Date().getFullYear()
	});
});

app.listen(3000,()=> {
	console.log('server running on port 3000');
});
