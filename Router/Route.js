
const express=require('express');
const EcomController=require('../Conteroller/ProductController');

const JWt = require('jsonwebtoken');
require("dotenv").config();



const router=express.Router();

router.post('/sinup', EcomController.SinUp);
router.post('/login',EcomController.Login);
router.delete('/:id',varifyToken,EcomController.delete);
router.post('/add',varifyToken,EcomController.Addproduct);
router.get('/',varifyToken,EcomController.getProduct);
router.get('/product/:id',varifyToken,EcomController.getUpdateProduct);
router.put('/product/:id',varifyToken,EcomController.UpdateProduct);
router.get('/search/:key',varifyToken,EcomController.SearchProduct);
router.get('/count/:id',varifyToken,EcomController.count);


function varifyToken(req,res,next){
    let token=req.headers['authorization'];
    if(token){
      token= token.split(' ')[1]
        console.log("miid",token)
        JWt.verify(token,process.env.JWtKey,(err,valid)=>{
            if(err){
            res.status(401).send( {result:"please provide valid token"})   
            }
            else{
             next();
            }
        })
    }
    else{
     res.status(403).send({result:"please add token with headers"})
    }
   
 }


exports.router=router;
