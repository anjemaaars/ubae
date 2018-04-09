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
  var resource = {
    data: [{
      date: 'March 22, 2018',
      scheme: 'even', //odd or even
      interval: '90', //minutes to determine gap
      start: '9:30',
      end: '8:00',
    }, {
      date: 'March 23, 2018',
      scheme: 'even', //odd or even
      interval: '60', //minutes to determine gap
      start: '9:00',
      end: '8:00',
    }, {
      date: 'March 26, 2018',
      scheme: 'odd', //odd or even
      interval: '60', //minutes to determine gap
      start: '8:00',
      end: '7:00',
    }, {
      date: 'March 27, 2018',
      scheme: 'odd', //odd or even
      interval: '90', //minutes to determine gap
      start: '8:00',
      end: '6:30',
    }]
  }

  res.render('exam', resource);
});

/* GET route page */
router.get('/examination/midterm', function(req,res) {
  var resource = {
    data: [{
      date: 'March 22, 2018',
      scheme: 'even', //odd or even
      interval: '90', //minutes to determine gap
      start: '9:30',
      end: '8:00',
    }, {
      date: 'March 23, 2018',
      scheme: 'even', //odd or even
      interval: '60', //minutes to determine gap
      start: '9:00',
      end: '8:00',
    }, {
      date: 'March 26, 2018',
      scheme: 'odd', //odd or even
      interval: '60', //minutes to determine gap
      start: '8:00',
      end: '7:00',
    }, {
      date: 'March 27, 2018',
      scheme: 'odd', //odd or even
      interval: '90', //minutes to determine gap
      start: '8:00',
      end: '6:30',
    }]
  }

  res.render('exam', resource);
});

/* GET route page */
router.get('/examination/final', function(req,res) {
  var resource = {
    data: [{
      date: 'March 22, 2018',
      scheme: 'even', //odd or even
      interval: '90', //minutes to determine gap
      start: '9:30',
      end: '8:00',
    }, {
      date: 'March 23, 2018',
      scheme: 'even', //odd or even
      interval: '60', //minutes to determine gap
      start: '9:00',
      end: '8:00',
    }, {
      date: 'March 26, 2018',
      scheme: 'odd', //odd or even
      interval: '60', //minutes to determine gap
      start: '8:00',
      end: '7:00',
    }, {
      date: 'March 27, 2018',
      scheme: 'odd', //odd or even
      interval: '90', //minutes to determine gap
      start: '8:00',
      end: '6:30',
    }]
  }

  res.render('exam', resource);
});

module.exports = router;
