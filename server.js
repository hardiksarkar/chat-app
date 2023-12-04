// const express = require('express');
// const {createServer, get} = require('http');
// const app = express();
// const httpServer = createServer(app);

// // function getresponse(req,res){
// //     res.send("Hi I am Hardik")
// // }
// // function getSumResponse(req,res){
// //     console.log(req.query);
// //     res.send("Sum is 500")
// // }

// function a1(){
//     app.get('/',(req,res)=>{
//         res.send("Hii I am King Hardik");
//     })
// }
// function sumResponse(){
//     app.get('/sum',(req,res)=>{
//         console.log(req.query);
//         res.send(`Sum of first ${req.query.add} Numbers is ${addNum(req.query.add)}`);
//     })
// }

// function addNum(count){
//     count = Number(count);
//     return (count*(count+1))/2;
// }

// function getresponse(){
//     a1();
//     sumResponse();
// }

// // app.get('/',getresponse)
// // app.get('/sum',getSumResponse)
// // app.get('/',(req,res)=>{
// // })

// //http://localhost:3000

// app.listen(3000,getresponse);

// ----------------------------------------------------------------------------------------------------------------------
const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const PORT = 8888;

io.on("connection",(socket)=>{
    socket.on('secret message',(data)=>{
        io.emit('secret message',data);
    })
})
server.listen(PORT);
app.use(express.static('public'));