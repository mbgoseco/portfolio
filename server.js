'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../portfolio'));

app.get('/home', function(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/test', function(req, res) {
  res.status(200).send('hello!');
})

app.listen(PORT, function() {
  console.log('listening on port ', PORT);
});
