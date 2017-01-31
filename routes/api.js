var express=require('express');
var router=express.Router();
var mongo=require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID
var mongoURL=process.env.MONGO_URI;


//get all polls
router.get("/polls", function(req,res,next){
    mongo.connect(mongoURL, function (err,db){
        if (err) {res.send(err);}
        else {
            db.collection("polls").find({}).toArray(function (err, data){
                if (err) {res.send(err);}
                else {
                    if (data) res.send(data);
                }
                db.close();
            });
        }
    });
});

//get all polls
router.get("/polls", function(req,res,next){
    mongo.connect(mongoURL, function (err,db){
        if (err) {res.send(err);}
        else {
            db.collection("polls").find({}).toArray(function (err, data){
                if (err) {res.send(err);}
                else {
                    if (data) res.send(data);
                }
                db.close();
            });
        }
    });
});

//get all polls from a specific user
router.get("/polls/user/:id", function(req,res,next){
    var userId=req.params.id;
    mongo.connect(mongoURL, function (err,db){
        if (err) {res.send(err);}
        else {
            db.collection("polls").find({"author":userId}).toArray(function (err, data){
                if (err) {res.send(err);}
                else {
                    if (data) res.send(data);
                }
                db.close();
            });
        }
    });
});

//get single poll
router.get("/poll/:id", function(req,res,next){
    var id=req.params.id;

    
    mongo.connect(mongoURL, function (err,db){
        if (err) {res.send(err);}
        else {
            //res.send(req.params.id);
            db.collection("polls").findOne({"_id":ObjectID(id)}, function (err, data){
                if (err) {res.send(err);}
                else if (data) {
                    res.send(data);
                }
                else {res.send({});}
                db.close();
            });
        }
    });
    
});

//add poll
router.post("/add", function(req,res,next){
    var poll=req.body;
    mongo.connect(mongoURL, function (err,db){
        if (err) {res.send(err);}
        else if (req.body) {
            db.collection("polls").findOne({"name":poll}, function (err, data){
                if (err) {res.send(err);}
                else if (data) {
                    res.send('{"error":"already here"}');
                }
                else {
                    db.collection("polls").insert(req.body, function (err, data) {
                    if (err) {return console.log(err)}
                    else {
                        db.close();
                    }
                });
                }
                db.close();
            });
        }
    });
});

//remove poll
router.delete("/poll/:id", function(req,res,next){
    var id=req.params.id;
    mongo.connect(mongoURL, function (err,db){
        if (err) {res.send(err);}
        else {
            //res.send(req.params.id);
            db.collection("polls").remove({"_id":ObjectID(id)});
        }
    });
});

//update poll - req.body must be an array of arrays ["option1",numberOfVotes]
router.put("/poll/:id", function(req,res,next){
    var id=req.params.id;
    mongo.connect(mongoURL, function (err,db){
        if (err) {res.send(err);}
        else if (req.body) {
            //res.send(req.params.id);
            
            db.collection("polls").findOne({"_id":ObjectID(id)}, function (err, data){
                if (err) {res.send(err);}
                else if (data) {
                    var obj={"_id":ObjectID(id),"name":data.name, "options":req.body, "author":data.author}
                    db.collection("polls").update({"_id":ObjectID(id)},obj);
                    res.send(obj);
                }
                else {res.send("no data");}
                db.close();
            });
            
        }
    });
});

module.exports=router;
