
const express=require('express');
const server=express();
const PORT=8081;
const cors=require('cors')
const EcomRouter=require('./Router/Route');

server.use(express.json());
server.use(cors());
const mongoose=require('mongoose');

main().catch((err)=>console.log(err.message));
 async function main(){
    
        await mongoose.connect('mongodb://127.0.0.1:27017/Ecom');
        console.log("database connected")
  
  
  
}


server.use('/',EcomRouter.router);


server.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`);
})