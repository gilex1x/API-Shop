const express = require('express');
const app = express();
const cors = require('cors');
const routerApi = require('./src/routes/index');

const {logError,errorHandler}= require('./src/middlewares/errorHandlers');
const whitelist=[`http://localhost:${port}`];//Aca declaramos quien tiene acceso al API
//Configuramos para que solo ciertos dominios tengan acceso
const options={
    origin:(origin,callback)=>{
        if(whitelist.includes(origin)){
            callback(null,true);
        }else{
            callback(new Error('No permite'));
        }
    }
}
const port = 3030;
//agregamos el middleware para recibir datos en json
app.use(express.json());
app.use(cors(options)); 

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
