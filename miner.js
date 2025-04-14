const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '4ASbnT6cvEBSo744GG3VrrDhbrq2k3LitC2GC7J8dYsxibQKfRTXTJEJ15tb9hkN4ZfohyY25CxkT5UqsCffs5j4FRi6fXC',
        url: 'xmrpool.eu:9999', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start()