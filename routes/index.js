var express=require('express');
var router=express.Router();

router.get("/", function(req,res,next){
   res.render('index.html');
});

router.get("/dashboard", function(req,res,next){
   res.render('index.html');
});

module.exports=router;