require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strategy razor outside purity grace opera slot ghost'; 
let testAccounts = [
"0xb8c8920f12cf6bef1e9470a7489eb640a3b351c25ac5378f791504987c6cbbbb",
"0xea59663050414e90e85b526d4be94754a35870e51b5161aae02474d30b0e608e",
"0x36b7da92a3362167206f7c5c9324d2d6d7d52ed96834bdb2746c2d5a9522b1d1",
"0x4fb261c5728bdf291b6a8f47e3f287f66cbf986f8a6395a6bae4213f4de590c7",
"0x8d2ded1fa72d88fdf10579896ada80ff25e77bac85b17053ad5e8c29258b6eec",
"0x7df6508d2726ff685733df24bf559fbc02dd1f647a316a980c613648f2c5f216",
"0xbd1f354cf1c050b67b0da2a3f58b0d532bf16688dc83f4f039dc0c7dbcf8ce37",
"0x47fbd5262e5c1b6c7c465597e1d59897aa7b7b0fcb607a97e5e41d555825949d",
"0x69cc8f8011980bde0346eb847766e3a5eb7fff91537d1ed6f256c2cdc98dc34b",
"0x60d10d49dc11d7be7d0715447c3c99273eceb8940909d696dbeadf691d5c41a8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


