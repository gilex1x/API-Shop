const express = require('express');
const app = express();
const port = 3030;

app.listen(port,()=>{
    
})

app.get('/',(req,res)=>{
    res.send('Servidor andando')
});

app.get('/productos',(req,res)=>{
    res.send('productos')
})