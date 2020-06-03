const mongoose=require('mongoose')

// schema
const Schema=mongoose.Schema
const categorySchema=new Schema({
    name:{
        type:String,
        required:true
    }
})
// model
const Category=mongoose.model('Category',categorySchema)
module.exports=Category