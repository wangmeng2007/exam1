const mongoose=require('mongoose')

let BookSchame=mongoose.Schema({name:String,price:Number})

let albumModel=mongoose.model("cotent",BookSchame)

function addAlbum(album,callback) {
    let b= albumModel.create(album,function (err,newAlbum) {
        if (!err) callback(newAlbum.toObject())
    })
}

module.exports={addAlbum}