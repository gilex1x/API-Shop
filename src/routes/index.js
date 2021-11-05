//Aca se configuran la rutas
const productsRoutes =require('./productsRoutes');
const usersRoutes = require('./usersRoutes');
const routerApi=(app)=>{
    app.use('/products',productsRoutes);
    app.use('/users',usersRoutes);
}

module.exports = routerApi;