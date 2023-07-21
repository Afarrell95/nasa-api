require("dotenv").config()
const express = require('express');
const app = express();
const port = 3000;
const key = process.env.API_KEY;


app.use(express.static('public'));

app.get('/api/key', (req, res) => {
    res.send(key);
  });
  
  app.get('/app.js', (req, res) => {
    res.sendFile(__dirname + '/public/app.js');
  });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


