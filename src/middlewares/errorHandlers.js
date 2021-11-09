const logError=(err,req,res,next)=>{
    console.log(err);
    next(err);//Llamamos otro middleware de tipo error
}

const errorHandler=(err,req,res,next)=>{
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
}
module.exports={logError,errorHandler}