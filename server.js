const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express()
//work
module.exports = app

if (process.env.NODE_ENV !== 'production') require('./secrets')

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log("server running on ", PORT)
})
