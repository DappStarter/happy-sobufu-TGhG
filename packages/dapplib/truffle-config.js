require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strong response mean proud inside light army genuine'; 
let testAccounts = [
"0xf19e84321ebe3bddd98d1af9fbe34bb7c63080492ebbad05173bf9a0d8b259f3",
"0xe223912fd8978cff734d55b7585ba4560b90554c3cac1c7569112547a329e0cc",
"0x4725175d4fa622f92bffb41a8f6c0f26b7f2aa61fd20da0d84dc21e4c96a0b9b",
"0x0384f2cefa242d55d217a8b7171a0bb4a0aebb6b7b0cc31aa3bda2e86ac0658f",
"0x74409b8ac3f0a9a1348e71660d8d3176d09755c0c56097a4972c5ee6e42c5528",
"0x2c0806d6b0036e66a5918cd8bd2316dad68854dfa308ee9a418dac4720707a9a",
"0x1a0132a4054b4109cac52c53787d7802cf94841f66f99e76b41571eacff9e8f0",
"0xd0e79608e81c5f1f704d9c6d1cf974b4b548e3f7ce9f4d96259c6782030a892a",
"0x4c57a99e6495efd1714905e31fcfaaa9c009115c1e30c48665fffd4afc6e47c9",
"0x4c9d14c90ede3e1b1db2d265d32108ff56a73bf8e760d3e9e9730300f3ac1b33"
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


