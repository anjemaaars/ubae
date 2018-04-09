var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var web_page = process.env.WEB_PAGE_URL;

  res.render('index', { title: 'Express', url: web_page });
});

module.exports = router;
