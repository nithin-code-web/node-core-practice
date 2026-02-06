const express = require('express');
const app = express();

const userRoutes = require('./routes/user.router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoutes);

app.set('view engine','ejs');
app.set('views', __dirname + '/views');



app.listen(3000, () => {
    console.log("server is running on port http://localhost:3000/user")
})