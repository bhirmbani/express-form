var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Post
    .findAll({
      order: [['createdAt', 'DESC']]
    })
    .then((posts) => {
      res.render('index', { title: 'Single Form', data: posts  });
    })
    .catch((error) => {
      res.send({ "error_message": err.message });
    });
});

/* POST form submit */
router.post('/add', (req, res, next) => {
  db.Post
    .create(req.body)
    .then((post) => {
      if (post) {
        res.redirect('/')
      } else {
        res.send({ "error_message": "insert query failed!" });
      }
    })
    .catch((err) => {
      res.send({ "error_message": err.message });
    })
});

module.exports = router;
