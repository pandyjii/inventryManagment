
const mongoose=require('mongoose');


const EcoSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,
        
        required:[true,'why not password']}

})

exports.User=mongoose.model('User',EcoSchema);