var express = require('express');
var exphbs = require('express-handlebars');
var messageData = require('./messages.json');
var lawyerData = require('./lawyerData.json');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());


app.get(['/home', '/'], function (req, res) {
  res.render('home', {
  });
  res.status(200);
});

app.get('/lawyerchat', function (req, res) {
  res.render('lawyerchat', {
  });
  res.status(200);
});

app.get('/lawyers', function (req, res) {
    res.render('lawyers', {
        LData: lawyerData
    });
    res.status(200);
});

app.post('/chat/save', function(req, res){
  messageData.push(req.body)
  fs.writeFileSync('./messages.json', JSON.stringify(messageData));
  res.status(200).send("Message successfully added");
})
app.get('/login', function (req, res) {
  res.render('login', {
  });
  res.status(200);
});

app.get('/register', function (req, res) {
  res.render('register', {
  });
  res.status(200);
});

app.get('/profile', function (req, res) {
  res.render('profile', {
  });
  res.status(200);
});

app.get('*', function (req, res) {
    res.render('404');
    res.status(404);
  
  });

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});
