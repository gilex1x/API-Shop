//Aca se configuran la rutas
const express= require('express');
const productsRoutes =require('./productsRoutes');
const usersRoutes = require('./usersRoutes');
const categoriesRoutes= require('./categoriesRoutes');
const routerApi=(app)=>{
    const routerMaster= express.Router();
    app.use('/api/v1',routerMaster);
    routerMaster.use('/products',productsRoutes);
    routerMaster.use('/users',usersRoutes);
    routerMaster.use('/categories',categoriesRoutes);
}

module.exports = routerApi;