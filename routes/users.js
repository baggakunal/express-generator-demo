var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', function (req, res) {
  console.log(`Headers sent? `, res.headersSent); // false
  if (req.params && req.params.id != null && !isNaN(Number(req.params.id))) {
    res.send(`User ID is: ${req.params.id}`);
  } else {
    res.send('Invalid ID');
  }
  console.log(`Headers sent? `, res.headersSent); // true
});

router.route('/').all(function (req, res, next) {
  next();
}).get(function (req, res, next) {
  res.send('route matched');
}).post(function (req, res, next) {
  res.send('\nroute matched, different verb\n');
})

module.exports = router;