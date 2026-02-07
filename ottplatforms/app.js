const express = require('express');
const app = express();
const port = 9000;

const connectDB = require('./config/db');
connectDB(); // Connect to MongoDB

app.use(express.json()); // Middleware to parse JSON request bodies

const userRoutes = require('./routes/user.routes');
app.use('/users', userRoutes); // Use user routes for /users endpoint

app.get('/', (req, res) => {
  res.send('Welcome to the OTT Platforms API');
});

app.listen(port, () => {
  console.log(`OTT Platforms API is running at http://localhost:${port}`);
});