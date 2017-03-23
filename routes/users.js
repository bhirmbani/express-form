var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  let date = new Date();
  console.log(date.toLocaleDateString());
  next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', (req, res) => {
  res.send('only a test');
});

module.exports = router;
