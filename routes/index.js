var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'This is a sample CRUD by Dayo'});
});

module.exports = router;
