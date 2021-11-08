const express = require('express');
const router = express.Router();
const ProductsServices= require('../services/products');
const servicePorducts = new ProductsServices();
//GET
router.get('/',(req,res)=>{
    const response=servicePorducts.find();
    res.json(response)
});

router.get('/:productId',(req,res)=>{
    const {productId}=req.params;
    const response = servicePorducts.findOne(productId);
    if(response){
        res.json(response);
    }else{
        res.status(404).json({
            message: "Producto: "+productId+" no encontrado"
        })
    }
});

//POST
router.post('/',(req,res)=>{
    const body= req.body;
    const response =servicePorducts.create(body);
    res.status(201).json(response);
})
//PUT & PATCH

router.patch('/:productId',(req,res)=>{
    const {productId}= req.params;
    const body= req.body;
    const response = servicePorducts.update(productId,body);
    res.json(response);
});

router.delete('/:productId',(req,res)=>{
    const {productId}= req.params;
    const response = servicePorducts.delete(productId);
    res.json(response);
})
module.exports =router;