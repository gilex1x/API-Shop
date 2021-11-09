const express = require('express');
const router = express.Router();
const ProductsServices= require('../services/products');
const servicePorducts = new ProductsServices();
//GET
router.get('/',async (req,res)=>{
    const response= await servicePorducts.find();
    res.json(response)
});

router.get('/:productId',async (req,res,next)=>{
    try{
        const {productId}=req.params;
        const response = await servicePorducts.findOne(productId);
        if(response){
            res.json(response);
        }else{
            res.status(404).json({
                message: "Producto: "+productId+" no encontrado"
            })
        }
    }catch(error){
        next(error);
    }

});

//POST
router.post('/',async (req,res)=>{
    const body= req.body;
    const response =await servicePorducts.create(body);
    res.status(201).json(response);
})
//PUT & PATCH

router.patch('/:productId',async (req,res)=>{
    try {
        const {productId}= req.params;
        const body= req.body;
        const response = await servicePorducts.update(productId,body);
        res.json(response);
    } catch (error) {
        res.status(404).json(error);
    }
});

router.delete('/:productId',async (req,res,next)=>{
    try {
        const {productId}= req.params;
        const response = await servicePorducts.delete(productId);
        res.json(response);    
    } catch (error) {
        next(error);    
    }
    
})
module.exports =router;