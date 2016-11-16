var express = require('express');
var router = express.Router();
var bitcoin = require('bitcoin');

var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'bitcoinrpc',
  pass: 'GikPzS3yh5vB79gLmKWKF7cUyzEV8xXB1Nxr4g4nF3NB'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

	
	var batch = [];
       batch.push({
   	 	method: 'getinfo'

  	});
	client.cmd(batch, function(err, getinfo, resHeaders){
  		if (err) return console.log(err);
  		///console.log('getinfo:',getinfo.balance);
  		res.json({"Balance":getinfo.balance});
  		//console.log('sendtxid:', sendtxid);
	});
});

module.exports = router;
