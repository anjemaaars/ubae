var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var resource = {
    title: 'UBAE',
    url: process.env.WEB_PAGE_URL
  };

  res.render('index', resource);
});

module.exports = router;
