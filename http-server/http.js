// const http = require("http");

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res) => {
//     res.statuscode = 200;
//     res.setHeader('content-type','text/plain');

//     res.end("hello world!\n");
// });

// server.listen(port,hostname ,() => {
//     console.log(`server is running at http://${hostname}:${port}/`);
// })


// //login page 

// const http = require("http");
// const port = 5100
// var respondContent = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Login Page</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 100vh;
//             margin: 0;
//         }
//         .login-container {
//             background-color: #fff;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             width: 300px;
//         }
//         h2 {
//             text-align: center;
//             color: #333;
//         }
//         .input-group {
//             margin-bottom: 15px;
//         }
//         .input-group label {
//             display: block;
//             margin-bottom: 5px;
//             color: #666;
//         }
//         .input-group input {
//             width: 100%;
//             padding: 10px;
//             border: 1px solid #ccc;
//             border-radius: 4px;
//             box-sizing: border-box; /* Ensures padding doesn't affect width */
//         }
//         button {
//             width: 100%;
//             padding: 10px;
//             background-color: #007BFF;
//             color: #fff;
//             border: none;
//             border-radius: 4px;
//             cursor: pointer;
//             font-size: 16px;
//         }
//         button:hover {
//             background-color: #0056b3;
//         }
//     </style>
// </head>
// <body>
//     <div class="login-container">
//         <h2>Login</h2>
//         <!-- The form action and method attributes define where the data is sent -->
//         <form action="/login" method="POST">
//             <div class="input-group">
//                 <label for="username">Username</label>
//                 <!-- Use type="text" for username/email input -->
//                 <input type="text" id="username" name="username" required>
//             </div>
//             <div class="input-group">
//                 <label for="password">Password</label>
//                 <!-- Use type="password" to mask characters -->
//                 <input type="password" id="password" name="password" required>
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     </div>
// </body>
// </html>
// `;

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'content-type' : 'text/html'})
//     res.end(respondContent)
// });

// server.listen(port,() => {
//     console.log(`server is listening on http://localhost:${port}`)
// })


