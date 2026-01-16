const express = require("express");
const app = express();
app.use(express.json());
const port = 5500;

const users = [
  {
    id: 1,
    name: "nithin",
    age: 21,
  },
  {
    id: 2,
    name: "sai",
    age: 22,
  },
];

//get method
app.get("/users", (req, res) => {
  res.send(users);
});


//post method
app.post("/users", (req, res) => {
  const { id, name, age } = req.body;

  if (!id || !name || !age) {
    return res.status(400).send("invalid user data");
  }
  //avoids existing user
  const existingUser = users.find((user) => user.id === id);
  if (existingUser) {
    return res.status(409).send("User already exists");
  }
  users.push({ id, name, age });

  res.status(200).json({
    message : "user added successfully",
    user : {id,name,age}
  })
});



//delete method 
app.delete("/users/:id",(req,res) => {
    const id = parseInt(req.params.id)

    const userIndex = users.findIndex((user) => user.id === id)

    if (userIndex === -1) {
        return res.status(404).send("user not found");
    }

    users.splice(userIndex,1)

    res.status(200).json({
        message : "user removed successfully",
    })
});


//PUT METHOD
app.put("/users/:id",(req,res) => {
    const id = parseInt(req.params.id)
    const {name,age} = req.body

    if (!name || !age) {
        return res.status(400).send("invalid user data")
    }

    const userIndex = users.findIndex(user => user.id === id)

    if (userIndex === -1) {
        return res.status(404).send("user not found")
    }

    users[userIndex] = {
        ...users[userIndex],
        name , 
        age
    }

    res.status(200).json({
        message : "user updated successfully",
        user : users[userIndex]
    })
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/users`);
});




//http:localhost:5500/users
