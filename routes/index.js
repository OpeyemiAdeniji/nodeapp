var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yemi and Okiri First nodejs deployment using azure web app' });
});

module.exports = router;
