var express = require('express');
var router = express.Router();
var bitcoin = require('bitcoin');

var client = new bitcoin.Client({
  host: 'localhost',
  port: 18332,
  user: 'dwdw',
  pass: '121212'
});

//사용자 등록 요청(POST111)
router.post('/', function(req, res) {
        //users[users.length] = req.body;//배열에추가
        //res.redirect('/users');//회원목록페이지로이동
        //console.log(req.body.addr);
       // console.log(req.body.amount);
       var batch = [];
       batch.push({
   	 	method: 'walletpassphrase',
    	 	params: ['121212','100']
  	});

       client.cmd(batch,'10', function(err, balance, resHeaders){
  		if (err) return console.log(err);
  		//console.log('Balance:', balance);
	});

        var batch2 = [];
       batch2.push({
   	 	method: 'sendtoaddress',
    	 	params: [req.body.addr,req.body.amount]
  	});
       
   
      	client.cmd(batch2, function(err, sendtxid, resHeaders){
  		if (err) return console.log(err);
  		res.json({"sendtxid":sendtxid});
  		//console.log('sendtxid:', sendtxid);
	});

      	var batch3 = [];
       batch3.push({
   	 	method: 'walletlock'

  	});

       client.cmd(batch3,function(err, balance,resHeaders){
  		if (err) return console.log(err);
  		//res.json({"sendtxid":sendtxid});
  		//console.log('sendtxid:', sendtxid);
	});
       /*
      	client.cmd(batch3, function(err, balance, resHeaders){
  		if (err) return console.log(err);
  		//res.json({"sendtxid":sendtxid});
  		//console.log('sendtxid:', sendtxid);
	});
	*/

	
});

module.exports = router;
