var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Call = require('../models/call.js');
// get all calls

router.get('/', function(req, res,next) {
    Call.find(function(err,calls) {
        if(err) return next(err);
        res.json(calls);
    });

});

// post resource

router.post('/', function(req, res, next) {
    Call.create(req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    });
});
// get by id

router.get('/:id', function(req, res, next) {
    Call.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

// update

router.put('/:id', function(req, res, next) {
    Call.findByIdAndUpadte(req.params.id, req.body, function(err, post) {
        if(err) return next(err);
        res.jsoon(post)
    });
});

// delete

router.delete('/:id', function(req, res, next){
    Call.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;
