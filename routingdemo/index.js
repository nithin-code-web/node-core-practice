const express = require("express");
const app = express();
const userRoutes = require('./user.router');

//http://localhost:9000/api
app.use('/api',userRoutes); 

app.get("/",(req,res) => {
    res.status(200).send("welcome to homepage..!")
})

app.listen(9000,() => {
    console.log('server is running on port http://localhost:9000')
})

