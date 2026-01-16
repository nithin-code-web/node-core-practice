// // stream --> 

// // read stream 

// const fs = require("fs")

// const readStream = fs.createReadStream("text2.txt")

// var data = ""

// readStream.on("data",(chunk) => {
//     data += chunk
//     console.log("received"+ chunk.length + "bytes of data");
//     console.log(chunk.toString())
// })

// readStream.on("end",() => {
//     console.log("no more data..")
// })

// readStream.on("error",(err) => {
//     console.log("error :"+err)    
// })



// // write stream 

//  const fs = require("fs");
// const readStream = fs.createReadStream("text1.txt");

// const writestream =  fs.createWriteStream("output.txt");

// readStream.on('data', (chunk) => {
//     console.log("writing"+chunk.length+"bytes of data..");
//     writestream.write(chunk)
// })

// readStream.on("error" , (err) => {
//     console.log("error occurred while doing task..")
// })

// readStream.on("end",() => {
//     console.log("no more data to read and write...")
// })


// //duplex.. 

// const fs = require("fs");
// const readStream = fs.createReadStream("text1.txt");

// const writestream =  fs.createWriteStream("output.txt");

// readStream.pipe(writestream); //duplex

// readStream.on("error" , (err) => {
//     console.log("error occurred while doing task..")
// })

// readStream.on("end",() => {
//     console.log("data written in new file successfully..")
// })


// //transform

// const fs = require('fs');

// const zlib = require('zlib');

// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream('text1.txt');
// const writestream = fs.createWriteStream("xyz.txt.gz");

// readStream.pipe(gzip).pipe(writestream);

// writestream.on('finish',() => {
//     console.log('file successfully compressed..')
// })
