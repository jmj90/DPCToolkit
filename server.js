const express = require('express');
const path = require('path');
const app = express()
module.exports = app

if (process.env.NODE_ENV !== 'production') require('./secrets')

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(8080, () => {
  console.log("server running on ", 8080)
})
