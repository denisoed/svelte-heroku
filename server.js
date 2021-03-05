var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(8080, () => console.log('Server is running on: http://localhost:8080'));
