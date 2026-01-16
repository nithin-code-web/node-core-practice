// // events..

// const event = require("events");
// const eventEmitter = new event.EventEmitter();

// //custom events
// eventEmitter.on("connect" ,() => {
//     console.log("connection successful..")
// });

// eventEmitter.on("disconnect" , () => {
//     console.log("disconnected successful..")
// })

// eventEmitter.emit("connect");
// eventEmitter.emit("disconnect")

//chat 

// const event = require("events");
// const chatGroup = new event.EventEmitter();

// const activeUsers = []

// chatGroup.on("join",(name) => {
//     console.log(`${name} has joined the chat.`)
//     activeUsers.push(name);
// });

// chatGroup.on("exit",(name) => {
//     console.log(`${name} has left the chat.`)
//     activeUsers.splice(activeUsers.indexOf(name),1);
// })

// chatGroup.on('fetchActiveUsers',() => {
//     console.log(`active users : ${activeUsers.length}`)
// })

// chatGroup.on("message",(name,message) => {
//     console.log(`${name} : ${message}.`)
// })

// // chatGroup.emit('message',"nithin","hello i am nithin");
// // chatGroup.emit("join","nithin")

// chatGroup.emit("join","sai")
// chatGroup.emit("join","nithin")
// chatGroup.emit("fetchActiveUsers")