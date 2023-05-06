const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.logger());
app.set('views', __dirname + '/templates');

app.get('/home', (req, res) => {
  res.send('hello world');
});
