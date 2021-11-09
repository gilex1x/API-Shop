const express = require('express');
const app = express();
const routerApi = require('./src/routes/index');

const {logError,errorHandler}= require('./src/middlewares/errorHandlers');

const port = 3030;
//agregamos el middleware para recibir datos en json
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Servidor andando');    
});

app.listen(port,()=>{
    console.log(`Servidor en http://localhost:${port}`);
});


routerApi(app);
//Los middlewares van después del routing

app.use(logError);
app.use(errorHandler);//Este sería el next que ejecutamos en logError
