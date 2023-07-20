require("dotenv").config()
const express = require('express');
const app = express();
const port = 3000; // You can use any available port you prefer
const key = process.env.API_KEY;

// Define a simple route
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


