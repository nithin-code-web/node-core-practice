const userRouter = require("express").Router();

let user = [];

userRouter.get("/", (req, res) => {
  res.render("index", { message: "" });
});

userRouter.post("/login", (req, res) => {
  var userInfo = req.body;
  if (user.some(u => u.email === userInfo.email && u.password === userInfo.password)) {
    res.render("login", { message: "Login Successful" });
  } else {
    res.render("login", { message: "Invalid Credentials" });
  }
});

userRouter.post("/register", (req, res) => {
  var userInfo = req.body;
  if (userInfo.password===userInfo.confirmPassword) {
    res.render("register", { message: "Registration Successful" });
    console.log(userInfo);
    user.push(userInfo);
    
  } else {
    res.render("register", { message: "Passwords do not match" });
  }
});


userRouter.get("/login", (req, res) => {
  res.render("login");
});

userRouter.get("/register", (req, res) => {
  res.render("register");
});

module.exports = userRouter;
