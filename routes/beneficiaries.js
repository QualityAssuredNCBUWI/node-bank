var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');

/* Get beneficiaries page. */
router.get('/', function(req,res,next) {
    res.render('beneficiaries', { title: 'Beneficiaries' });
});

module.exports = router;