var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
  host: 'localhost',
  port: 18332,
  user: 'dwdw',
  pass: 'ehddnr0412'
});
 
client.getBalance('*', 6, function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

