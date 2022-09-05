function logger(req, res, next){
    console.log(`${req.method} ${req.originalurl} ${req.statuscode}`);

    next();
}


module.exports=logger