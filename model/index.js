const mongoose=require('mongoose')
let BookSchame=new mongoose.Schema({name:String,price:Number})
let Customer=new mongoose.Schema({name:String,password:String,score:Number})

mongoose.model("Book",BookSchame)
mongoose.model("Customer",Customer)