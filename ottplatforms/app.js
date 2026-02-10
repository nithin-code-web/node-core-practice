const express = require('express');
const app = express();
const port = 9000;

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB(); 

// Middleware to parse JSON request bodies
app.use(express.json()); 

// Use user routes for /users endpoint
const userRoutes = require('./routes/user.routes');
app.use('/users', userRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the OTT Platforms API');
});

app.listen(port, () => {
  console.log(`OTT Platforms API is running at http://localhost:${port}`);
});