var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var resource = {
    title: 'Angel Bae',
    url: process.env.WEB_PAGE_URL || 'localhost:3000',
    desc: 'University of Baguio Assistive Extension'
  };

  res.render('main', resource);
});

/* GET route page */
router.get('/examination/first', function(req,res) {
  res.render('exam');
});

/* GET route page */
router.get('/examination/midterm', function(req,res) {
  res.render('exam');
});

/* GET route page */
router.get('/examination/final', function(req,res) {
  res.render('exam');
});

module.exports = router;
