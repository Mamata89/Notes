const mongoose = require('mongoose')

// schema
const Schema = mongoose.Schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true 
    },
    category:{
            type:Schema.Types.ObjectId,
            required: true ,
            ref:'Category'
    }
})

// model 
const Note = mongoose.model('Note', noteSchema)

module.exports = Note
