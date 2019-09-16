var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res) {
  if(req.params && req.params.id != null && !isNaN(Number(req.params.id))){
    res.send(`User ID is: ${req.params.id}`);
  } else {
    res.send('Invalid ID');
  }
});

module.exports = router;
