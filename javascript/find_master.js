var StellarSdk = require('stellar-sdk')
// var server = new StellarSdk.Server('http://10.22.61.244:8000', {allowHttp: true});

StellarSdk.Network.use(new StellarSdk.Network("Standalone Network ; February 2017"));
var pair = StellarSdk.Keypair.master()


pair.secret();
// SAV76USXIJOBMEQXPANUOQM6F5LIOTLPDIDVRJBFFE2MDJXG24TAPUU7
pair.publicKey();
// GCFXHS4GXL6BVUCXBWXGTITROWLVYXQKQLF4YH5O5JT3YZXCYPAFBJZB

console.log(pair.secret());
console.log(pair.publicKey());
