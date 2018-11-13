
const web3 = require('web3');
const Tx = require('ethereumjs-tx');

const keccak256 = require('js-sha3').keccak256;
const uniqid = require('uniqid');

const web3js = new web3(new web3.providers.HttpProvider('https://ropsten.infura.io/v3/fad5727415fb40cfb5efa2e17acfc891'));

const myAddress = '0xeb9e86c2f1eec78a477190c0b2962679c9fda847';
const privateKey = Buffer.from('c656af602b58ecca0bcdcf5eb16fa81302c24f9fc4b639691102c0c90ddd22b6', 'hex');

// var account = web3js.eth.accounts.privateKeyToAccount('0x' + privateKey);
// web3js.eth.accounts.wallet.add(account);
// web3js.eth.defaultAccount = account.address;

const ticketContractAddress = '0x2388c9DB3e927E164DCa65E1aA7F1784EC3D3a3d';
const ticketContractABI = [{
    "constant": false,
    "inputs": [{
        "name": "tid",
        "type": "bytes32"
    },
    {
        "name": "uid",
        "type": "bytes32"
    }
    ],
    "name": "AllocateTicket",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "tid",
        "type": "bytes32"
    },
    {
        "indexed": false,
        "name": "uid",
        "type": "bytes32"
    }
    ],
    "name": "TicketAllocated",
    "type": "event"
},
{
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "bytes32"
    }],
    "name": "ticket",
    "outputs": [{
        "name": "",
        "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "bytes32"
    }],
    "name": "user",
    "outputs": [{
        "name": "",
        "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}
];

const ticketContract = new web3js.eth.Contract(ticketContractABI, ticketContractAddress);

const mongoose = require('mongoose'),
    Ticket = mongoose.model('Ticket'),
    Event = mongoose.model('Event'),
    Village = mongoose.model('Village'),
    Booth = mongoose.model('Booth'),
    Entry = mongoose.model('Entry'),
    Interest = mongoose.model('Interest');

exports.getTickets = (req, res) => {
    Ticket.find({}, function (err, ticket) {
        if (err)
            res.send(err);
        res.json(ticket);
    });
};

exports.getTicket = (req, res) => {
    Ticket.findOne({
        tid: req.params.tid
    }, function (err, ticket) {
        if (err) res.send(err);
        res.json(ticket);
    });
};

exports.createTicket = (req, res) => {
    let newTicket = new Ticket({
        uid: req.body.uid
    });

    //Generate Ticket ID
    newTicket.tid = keccak256(newTicket.uid + newTicket.created_date + uniqid());

    console.log('\n---CREATED NEW TICKET---\nTicket ID: ' + newTicket.tid + '\nUser ID: ' + newTicket.uid + '\n');

    //Execute contract
    let uid = '0x' + Buffer.from(newTicket.uid, 'utf8').toString('hex');
    let tid = '0x' + newTicket.tid;

    let count;
    web3js.eth.getTransactionCount(myAddress).then(function (v) {
        console.log("Count: " + v);
        count = v;
        let amount = web3js.utils.toHex(1e16);
        //creating raw tranaction
        let rawTransaction = {
            from: myAddress,
            gasPrice: web3js.utils.toHex(20 * 1e9),
            gasLimit: web3js.utils.toHex(210000),
            to: ticketContractAddress,
            value: '0x0',
            data: ticketContract.methods.AllocateTicket(uid, tid).encodeABI(),
            nonce: web3js.utils.toHex(count)
        }

        //console.log(rawTransaction);
        //creating transaction via ethereumjs-tx
        let transaction = new Tx(rawTransaction);
        //signing transaction with private key
        transaction.sign(privateKey);
        //sending transacton via web3js module
        web3js.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
            .on('transactionHash', function (txRes) {
                console.log('Transaction hash: ' + txRes);
                let url = 'https://ropsten.etherscan.io/tx/' + txRes + '#eventlog';

                newTicket.etherscan_url = url;
                Ticket.findOneAndUpdate({
                    tid: newTicket.tid
                }, {
                        $set: {
                            etherscan_url: url
                        }
                    }, {
                        new: true
                    }, function (err, ticket) {
                        if (err) res.send(err);
                        res.json(ticket);
                    })
            })
            .on('error', console.log)
            .on('receipt', console.log)
    });

    //Save to database
    newTicket.save(function (err) {
        if (err) res.send(err);
    });
};

exports.getUser = (req, res) => {
    Ticket.findOne({
        uid: req.params.uid
    }, function (err, ticket) {
        if (err) res.send(err);
        res.json(ticket);
    });
}

exports.getEvents = (req, res) => {
    Event.find({}, function (err, event) {
        if (err)
            res.send(err);
        res.json(event);
    });
};

exports.getVillages = (req, res) => {
    Village.find({}, function (err, village) {
        if (err)
            res.send(err);
        res.json(village);
    })
};

exports.createVillage = (req, res) => {
    var newVillage = new Village({
        vid: req.body.vid,
        village_name: req.body.village_name,
        village_head: req.body.village_head,
        location: req.body.location,
        photo_url: req.body.photo_url,
        bids: []
    });

    newVillage.save(function (err, village) {
        if (err) res.send(err);
        res.json(village);
    });
}

exports.getBooths = (req, res) => {
    Booth.find({}, function (err, booth) {
        if (err) res.send(err);
        res.json(booth);
    });
};

exports.createBooth = (req, res) => {
    var new_booth = new Booth({
        bid: req.body.bid,
        booth_name: req.body.booth_name,
        host: req.body.host,
        starting_date: req.body.starting_date,
        photo_url: req.body.photo_url,
        vid: req.body.vid
    });
    new_booth.save(function (err, booth) {
        if (err) res.send(err);
        res.json(booth);
    });
};

exports.getEntries = (req, res) => {
    Entry.find({}, function (err, entry) {
        if (err) res.send(err);
        res.json(entry);
    });
};

exports.createEntry = (req, res) => {
    let newEntry = new Entry({
        uid: req.body.uid,
        bid: req.body.bid
    });
    newEntry.save(function (err, entry) {
        if (err) res.send(err);
        res.json(entry);
    });
};

exports.getInterests = (req, res) => {
    Interest.find({}, function (err, interests) {
        if (err)
            res.send(err);
        res.json(interests);
    })
}

exports.createInterest = (req, res) => {
    let newInterest = new Interest({
        uid: req.body.uid,
        checks: req.body.checks
    });
    newInterest.save(function (err, interest) {
        if (err)
            res.send(err);
        res.json(interest);
    })
}

exports.getInterest = (req, res) => {
    Interest.findOne({
        uid: req.params.uid
    }, function (err, interest) {
        if (err)
            res.send(err);
        res.json(interest);
    });
}

exports.updateInterest = (req, res) => {
    Interest.updateOne({
        uid: req.params.uid
    }, {
            checks: req.body.checks
        }, {
            new: true
        }, function (err, interest) {
            if (err)
                res.send(err);
            res.json(interest);
        })
}