var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');

/* Get beneficiaries page. */
router.get('/', function(req,res,next) {
    if(req.cookies.logged){
        var uid = req.cookies.logged;
        var query = User.findOne({ '_id' : uid });
        query.select('name email money card image_url beneficiaries');
        query.exec(function (err, user) {
        if (err) return handleError(err);
          userdata=user;
          res.render('beneficiaries', {userdata: user, title: 'Beneficiaries', action: 'BENEFICIARIES'});
        });
    } else {
        res.redirect('/login');
    }
});

router.get('/', function(req,res,next) {
    if(req.cookies.logged){
        var uid = req.cookies.logged;
        var query = User.findOne({ '_id' : uid });
        query.select('name email money card image_url beneficiaries');
        query.exec(function (err, user) {
        if (err) return handleError(err);
          userdata=user;
          res.render('beneficiaries', {userdata: user, title: 'Beneficiaries', action: 'BENEFICIARIES'});
        });
    } else {
        res.redirect('/login');
    }
});


module.exports = router;