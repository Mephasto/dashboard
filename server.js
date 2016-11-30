var express = require('express');
var fs = require('fs');
var app = express();
var util = require('util');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('af2fg8eCZPqLQ4zE1HqHgg');

app.set('views', './views')
app.set('view options', { layout: false });
app.set('view engine', 'jade');
app.use(express.static('static'));



// URLS //
app.get('/', function (req,res) {
	res.render('index', {
		title: 'IT PARTNER SRL',
		section: 'home',
		description: 'IT PARTNER SRL provee servicios IT para negocios corporativos, organizaciones o pymes con infraestructuras informaticas de uso critico'
	});
});

app.get('/about', function (req,res) {
	res.render('about', {
		title: 'IT PARTNER SRL',
		section: 'about',
		description: 'IT PARTNER SRL provee servicios IT para negocios corporativos, organizaciones o pymes con infraestructuras informaticas de uso critico'
	});
});

app.get('/purchase', function (req,res) {
	res.render('purchase', {
		title: 'IT PARTNER SRL',
		section: 'purchase',
		description: 'IT PARTNER SRL provee servicios IT para negocios corporativos, organizaciones o pymes con infraestructuras informaticas de uso critico'
	});
});

app.get('/contact', function (req,res) {
	res.render('contact', {
		title: 'IT PARTNER SRL',
		section: 'contacto',
		description: 'IT PARTNER SRL provee servicios IT para negocios corporativos, organizaciones o pymes con infraestructuras informaticas de uso critico'
	});
});


// PORT CONF //
var server = app.listen (9093, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('example app listening at http://%s:%s', host, port);
})



// SASS COMPILER //
// var sass = require('node-sass');
// sass.render({
//   file: 'static/css/style.sass',
//   outFile: 'static/css/style.css'
// }, function(err, result) { 
// 	console.log(err);
// 	if(!err){
// 		// No errors during the compilation, write this result on the disk 
// 		fs.writeFile('static/css/style.css', result.css, function(err){
// 			console.log(err)
// 			if(!err){
// 				//file written on disk 
// 			}
// 		});
// 	}
// });
