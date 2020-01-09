const mongoose=require('mongoose')
const http=require('http')
require('../model')
let app=require('../app')
let server=http.createServer(app)

mongoose.connect("mongodb://47.92.196.87/test1",function (err) {
    console.log("mongodb 已连接!")
    if(!err){
        //console.log("mongodb 已连接!")
        server.listen(3000,function (err) {
            if(!err){
                console.log("express 服务器已打开 ")
            }
        })
    }
})
server.on('close',function () {
    mongoose.disconnect()
})