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
    });
});

module.exports = router;
