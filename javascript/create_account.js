var StellarSdk = require('stellar-sdk');
StellarSdk.Network.use(new StellarSdk.Network("Standalone Network ; February 2017"));
var pair = StellarSdk.Keypair.random();
var server = new StellarSdk.Server('http://10.22.61.243:8000', {allowHttp: true});

pair.secret();
// SAV76USXIJOBMEQXPANUOQM6F5LIOTLPDIDVRJBFFE2MDJXG24TAPUU7
pair.publicKey();
// GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB

console.log("My private key: ", pair.secret());
console.log("My public key: ", pair.publicKey());

var secretString = 'SC5O7VZUXDJ6JBDSZ74DSERXL7W3Y5LTOAMRF7RQRL3TAGAPS7LUVG3L';

// create an Account object using locally tracked sequence number
var an_account = new StellarSdk.Account("GBZXN7PIRZGNMHGA7MUUUF4GWPY5AYPV6LY4UV2GL6VJGIQRXFDNMADI", "0");

var transaction = new StellarSdk.TransactionBuilder(an_account)
    .addOperation(StellarSdk.Operation.createAccount({
      destination: pair.publicKey(),
      startingBalance: "25"  // in XLM
    }))
    .build();

transaction.sign(StellarSdk.Keypair.fromSecret(secretString));
server.submitTransaction(transaction);
