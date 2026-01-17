const express = require('express');
const app = express();
const port = 3001;

const sellerRouter = require('./seller.router');

app.use('/seller', sellerRouter);

app.get('/home', (req, res) => {
  res.send('Welcome to the E-commerce Home Page!');
});

app.listen(port, () => {
  console.log(`E-commerce app listening at http://localhost:${port}`);
});
