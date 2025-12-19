const mongoose= require('mongoose');

const autherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true ,
        minlength:3
        

    }
})

module.exports = mongoose.model('Auther',autherSchema);
