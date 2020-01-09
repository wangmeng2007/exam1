const https = require('http');
var express = require('express');
var router = express.Router();
var bookDao=require('../dao/storageDao')

router.get('/', function(req, res, next) {
const options = {
    host: 'johnyu.cn',
    //host:'api.myjson.com',
    port:3000,
    //port:80,
    path: '/albums'
    //path: '/bins/w4uk8'
};

// 发出请求。
const req1 = https.request(options);
req1.end();

req1.on('response', (info) => {
    // console.log(`获得主响应之前的信息: ${info.statusCode}`);
    info.on('data',function (chunk) {
        console.log(chunk.toString())
    })
});
});
module.exports = router;