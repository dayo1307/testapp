var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

// router.get('/homeinformation', function(req, res) {
//   res.send('home information');
// });

module.exports = router;
