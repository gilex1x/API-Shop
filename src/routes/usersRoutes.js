const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json([
        {
            nombre:'User1',
            nick:'lolito123'
        },
        {
            nombre:'User2',
            nick:'noobmaster'
        }
    ])
});

router.get('/:userId',(req,res)=>{
    const {userId}=req.params;
    res.json({
            nombre:'User1',
            nick:'lolito123',
            id: userId
        },           
    );
});

module.exports =router;