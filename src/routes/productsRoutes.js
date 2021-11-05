const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.json([
        {
            nombre:'Collar Naruto',
            price:8000
        },
        {
            nombre:'Collar AttackOnTitan',
            price:8000
        }
    ])
});

router.get('/:productId',(req,res)=>{
    const {productId}=req.params;
    res.json({
            nombre:'Collar AttackOnTitan',
            price:8000,
            id: productId
    });
});

module.exports =router;