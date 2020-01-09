var express = require('express');
var router = express.Router();
var storageDao=require('../dao/storageDao')
/* GET users listing. */

router.post('/',function (req,res) {
    let album=req.body
    storageDao.addAlbum(album,function (nb) {
        res.json(nb)
    })
})

module.exports = router;