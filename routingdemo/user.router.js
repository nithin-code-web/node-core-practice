const router = require("express").Router();

var loggerMiddleware = (req,res,next) => {
    var currentDate = new Date();
    console.log("Request Time : ", currentDate.toString());
    next();
}

router.use(loggerMiddleware);

router.get("/users",(req,res) => {
    res.send("list of users")
});

router.get("/user/:id",(req,res) => {
    const userId = req.params.id
    res.send("details of userId:"+userId) 
});

router.post("/users",(req,res) => {
    res.send("user added successfully..")
})

module.exports = router;