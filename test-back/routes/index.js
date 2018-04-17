var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* Appel de Healthcheck à la base */
  res.send('Ok');
});

module.exports = router;