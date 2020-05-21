const express = require("express");
const app = express();

const port = 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/solutions', function(req, res){
  res.render('solutions');
});

app.get('/expertise', function(req, res){
  res.render('expertise');
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.get('/team', function(req, res){
  res.render('team');
});

app.listen(process.env.PORT || port, function(){
  console.log("server listening on: " + port );
});
