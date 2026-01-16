// const express = require("express");
// const app = express();
// app.use(express.json());

// const port = 5656



// var products = [
//     {
//         id : 1,
//         productName : 'Laptop',
//         price : 50000
//     },
//     {
//         id : 2,
//         productName : 'Realm GT2',
//         price : 25000
//     }
// ]

// app.get("/products",(req,res) => {
//     res.send(products)
// })
// app.get("/products/:id",(req,res) => {
//     const productId = parseInt(req.params.id)
//     const productIndex = products.find(product => product.id === productId)

//     if(productIndex) {
//         res.send(productIndex)
//     } else {
//         res.status(404).send("user not found")
//     }
// })


// //put method --update data
// app.put("/products/:id",(req,res) => {
//     const productId = parseInt(req.params.id)
//     const updatedProduct = req.body
//     const productIndex = products.findIndex(product => product.id === productId)

//     if(productIndex !== -1) {
//         products[productIndex] = updatedProduct
//         res.send("product updated successfully..")
//     } else {
//         res.status(404).send("product not found")
//     }
// })

// //deleting product
// app.delete("/products/:id",(req,res) => {
//     const Id = parseInt(req.params.id)
//     const productIndex = products.findIndex(product => product.id === Id)
//     if (productIndex !== -1) {
//         products.splice(productIndex,1)
//     } else {
//         res.status(404).send("product not found")
//     }
// }) 
// app.post("/products",(req,res) => {
//     var product = req.body
//     products.push(product)
//     res.send("product added successfully..")

// })


// app.listen(port,() => {
//     console.log(`server is running on http://localhost:${port}/products`)
// })

