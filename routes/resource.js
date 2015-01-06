var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Resource = require('../models/resource.js');

// get all resources

router.get('/', function(req, res,next) {
    Resource.find(function(err,resources) {
        if(err) return next(err);
        res.json(resources);
    });

});

// post resource

router.post('/', function(req, res, next) {
    Resource.create(req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

// get by id

router.get('/:id', function(req, res, next) {
    Resource.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

// update

router.put('/:id', function(req, res, next) {
    Resource.findByIdAndUpadte(req.params.id, req.body, function(err, post) {
        if(err) return next(err);
        res.jsoon(post)
    });
});

// delete

router.delete('/:id', function(req, res, next){
    Resource.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});
module.exports = router;
