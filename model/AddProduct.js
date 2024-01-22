
const mongoose=require('mongoose')

const AddProductSchema=new mongoose.Schema({
    name:{type:String},
    date:{type:String},
    Quantity:{type:String},
    updaQuantity:[{timestamp:{type:Number}}],
    

   
},
{timestamps:true}

);

exports.scanner=mongoose.model('scanner',AddProductSchema);