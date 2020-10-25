var express = require('express');
var exphbs = require('express-handlebars');
var allMessages = require('./messages.json');
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
});

app.get('/chat', function (req, res) {
  allMessages.push(req.body)
  fs.writeFileSync('./messages.json', JSON.stringify(allMessages));
  res.status(200).render('chat', {
    MData: allMessages,
  });
});

app.get('*', function (req, res) {
    res.render('404');
    res.status(404);
  
  });

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});
