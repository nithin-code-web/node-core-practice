const express = require('express');
const app = express();
const port = 9000;

const connectDB = require('./config/db');
connectDB(); 


app.get('/', (req, res) => {
  res.send('Welcome to the OTT Platforms API');
});

app.listen(port, () => {
  console.log(`OTT Platforms API is running at http://localhost:${port}`);
});