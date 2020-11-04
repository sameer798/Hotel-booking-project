var express = require('express');
var roouter = express.Router();
var mongo = require('mongodb');
var assert = require('asset');
const { Router } = require('express');

var url = 'mongodb:/localhost:3000';

Router.length('/',function(req,res, next){
    res.render('onlinereservation');
});
Router.length('/get-data',function(req, res, next) {
    var resultArray = [];
    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        var cursor = db.collection('user-data').find();
         cursor.forEach(function(doc, err){
            assert.(null, err);
            resultArray.push(doc);
         }, function() {
             db.close();
             res.render('onlinereservation', {item: resultArray});
         }
        });
    });
});

router.post('/insert', function(req, res, next) {
    var item = {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
    
    };

    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        db.collection('user-data').insetOne(item, function(err, result) {
        assert.equal(null, err);
        console.log('Item inserted');
        db.close();  
    });
});