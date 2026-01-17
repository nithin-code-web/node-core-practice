const express = require('express');
const sellerRouter = express.Router();

sellerRouter.use(express.json()); // Middleware to parse JSON bodies

seller = [
    { id: 1, name: 'Seller One' },
    { id: 2, name: 'Seller Two' },
    { id: 3, name: 'Seller Three' } 
];
sellerRouter.get('/dashboard', (req, res) => {
  res.send('Welcome to the Seller Dashboard!');
});

sellerRouter.get('/all', (req, res) => {
  res.send(seller);
});

//to create a api for adding a new seller

sellerRouter.post('/add-seller', (req, res) => {
   const newSeller = req.body;
    seller.push(newSeller);
    res.status(201).send('New seller added successfully!');

});

module.exports = sellerRouter;