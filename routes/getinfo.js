var express = require('express');
var router = express.Router();
var bitcoin = require('bitcoin');

var client = new bitcoin.Client({
  host: 'localhost',
  port: 18332,
  user: 'dwdw',
  pass: 'ehddnr0412'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

	
	client.getBalance('*', 6, function(err, balance, resHeaders) {
  		if (err) return console.log(err);
  		res.json({"balance":balance});
	});
});

module.exports = router;
