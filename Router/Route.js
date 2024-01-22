
const express=require('express');
const EcomController=require('../Conteroller/Ecom');

const router=express.Router();

router.post('/sinup',EcomController.SinUp);
router.post('/login',EcomController.Login);
router.delete('/:id',EcomController.delete);
router.post('/add',EcomController.Addproduct);
router.get('/',EcomController.getProduct);
router.get('/product/:id',EcomController.getUpdateProduct);
router.put('/product/:id',EcomController.UpdateProduct);
router.get('/search/:key',EcomController.SearchProduct);
router.get('/count/:id',EcomController.count);
exports.router=router;
