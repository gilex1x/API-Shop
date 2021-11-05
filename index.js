const express = require('express');
const app = express();
const routerApi = require('./src/routes/index');
const port = 3030;
//agregamos el middleware para recibir datos en json
app.use(express.json());

app.listen(port,()=>{
    console.log(`Servidor en http://localhost:${port}`);
});

app.get('/',(req,res)=>{
    res.send('Servidor andando');
    
});

routerApi(app);

// app.get('/products',(req,res)=>{
//     res.json([
//         {
//             nombre:'Collar Naruto',
//             price:8000
//         },
//         {
//             nombre:'Collar AttackOnTitan',
//             price:8000
//         }
//     ])
// });
// //endpoint con un parametro y como recuperar el parametro
// app.get('/products/:productId',(req,res)=>{
//     const {productId}=req.params;
//     res.json({
//             nombre:'Collar AttackOnTitan',
//             price:8000,
//             id: productId
//     });
// });
// //recibir más de un parametro
// app.get('/categories/:categoryId/products/:productId',(req,res)=>{
//     const {categoryId,productId}= req.params;
//     res.send(`${categoryId}, ${productId}`);
// });
// //query params
// //Las rutas con querys son rutas dinamicas
// app.get('/users',(req,res)=>{
//     const {limit, offset}= req.query;
//     if(limit && offset){
//         res.send(`Aparesco si estan los parametros ${limit} y ${offset}`);
//     }else{
//         res.send('No enviaron querys');
//     }
// });

//Primero se declaran las rutas especificas y después las dinamicas