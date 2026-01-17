const express = require('express');
const app = express();
const port = 5001;

const middleware = (req,res,next) => {
    var token = req.headers.token;
    if(token === "12345"){
        next();
    } else {
        res.send("Unauthorized User");
    }
}

app.use(middleware);

//logger middleware : it prints the request time
const logger = (req,res,next) => {
    var date = new Date();
    console.log("Request Time : ", date.toString());
    next();
}   
app.use(logger);


const users = [
    {"id" : 1,"name" : "nithin"},{"id" : 2,"name" : "kranthi"}
]

app.get("/users",(req,res) => {
    throw new Error("Something went wrong!");
    res.send(users)
})

const errorHandlingMiddleware = (err,req,res,next) => {
    console.error("err caught by middleware.."+err.message);
    res.status(500).send("something went wrong! please try again.")
}

app.use(errorHandlingMiddleware)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});