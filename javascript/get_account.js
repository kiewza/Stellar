var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('http://10.22.61.243:8000', {allowHttp: true});

server.accounts()
  .accountId("GBZXN7PIRZGNMHGA7MUUUF4GWPY5AYPV6LY4UV2GL6VJGIQRXFDNMADI")
  .call()
  .then(function (accountResult) {
    console.log(accountResult);
  })
  .catch(function (err) {
    console.error(err);
  })
