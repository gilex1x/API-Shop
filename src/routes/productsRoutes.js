const express = require('express');
const router = express.Router();
//GET
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

//POST
router.post('/',(req,res)=>{
    const body= req.body;
    res.status(201).json({
        message: 'data created',
        data: body
    })
})
//PUT & PATCH

router.patch('/:productId',(req,res)=>{
    const {productId}= req.params;
    const body= req.body;
    res.json({
        message: `updated product ${productId}`,
        body: body,
        id: productId
    })
})
module.exports =router;