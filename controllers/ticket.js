const mongoose = require('mongoose');
const web3 = require('web3');
const Tx = require('ethereumjs-tx');
const uniqid = require('uniqid');
const keccak256 = require('js-sha3').keccak256;

const web3js = new web3(new web3.providers.HttpProvider('https://ropsten.infura.io/v3/fad5727415fb40cfb5efa2e17acfc891'));

const myAddress = process.env.ROPSTEN_ADDRESS_TICKET;
const privateKey = Buffer.from(process.env.ROPSTEN_PRIVATE_KEY_TICKET, 'hex');

const ticketContractAddress = process.env.ROPSTEN_ADDRESS_CONTRACT_TICKET;
const ticketContractABI = require('../build/TicketContractABI');

const ticketContract = new web3js.eth.Contract(ticketContractABI, ticketContractAddress);

console.log('ETH Address Ticket:', myAddress);
console.log('ETH Private Key Ticket:', privateKey);

const
  Ticket = mongoose.model('Ticket'),
  Event = mongoose.model('Event'),
  Village = mongoose.model('Village'),
  Booth = mongoose.model('Booth'),
  Entry = mongoose.model('Entry'),
  Interest = mongoose.model('Interest');

exports.getTickets = (req, res) => {
  Ticket.find({}, (err, ticket) => {
    if (err) {
      return res.send(err);
    }
    res.json(ticket);
  });
};

exports.getTicketByID = (req, res) => {
  Ticket.findOne({ tid: req.params.tid }, (err, ticket) => {
    if (err) return res.send(err);
    res.json(ticket);
  });
};

exports.createTicket = (req, res) => {
  console.log(req.body.uid);
  const newTicket = new Ticket({
    uid: req.body.uid
  });
  console.log(newTicket);

  // Generate Ticket ID
  newTicket.tid = keccak256(newTicket.uid + newTicket.created_date + uniqid());

  console.log('Create new ticket:', newTicket.tid);
  console.log('User ID:', newTicket.uid);
  console.log('Ticket:', newTicket);

  // Execute contract
  const uid = `0x${Buffer.from(newTicket.uid, 'utf8').toString('hex')}`;
  const tid = `0x${newTicket.tid}`;

  let count;
  web3js.eth.getTransactionCount(myAddress).then((v) => {
    console.log(`Count: ${v}`);
    count = v;
    const amount = web3js.utils.toHex(1e16);
    // creating raw tranaction
    const rawTransaction = {
      from: myAddress,
      gasPrice: web3js.utils.toHex(20 * 1e9),
      gasLimit: web3js.utils.toHex(210000),
      to: ticketContractAddress,
      value: '0x0',
      data: ticketContract.methods.AllocateTicket(uid, tid).encodeABI(),
      nonce: web3js.utils.toHex(count)
    };

    // console.log(rawTransaction);
    // creating transaction via ethereumjs-tx
    const transaction = new Tx(rawTransaction);
    // signing transaction with private key
    transaction.sign(privateKey);
    // sending transacton via web3js module
    web3js.eth.sendSignedTransaction(`0x${transaction.serialize().toString('hex')}`)
      .on('transactionHash', (txRes) => {
        console.log(`Transaction hash: ${txRes}`);
        const url = `https://ropsten.etherscan.io/tx/${txRes}#eventlog`;

        newTicket.etherscan_url = url;
        Ticket.findOneAndUpdate({
          tid: newTicket.tid
        }, {
          $set: {
            etherscan_url: url,
            txHash: txRes
          }
        }, {
          new: true
        }, (err, ticket) => {
          if (err) res.send(err);
          else res.json(ticket);
        });
      })
      .on('error', console.log)
      .on('receipt', console.log);
  }).catch((err) => {
    console.log(err);
  });

  // Save to database
  newTicket.save((err) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
  });
};

exports.getTicketByUserID = (req, res) => {
  Ticket.findOne({ uid: req.params.uid }, (err, ticket) => {
    if (err) return res.send(err);
    res.json(ticket);
  });
};

exports.getEvents = (req, res) => {
  Event.find({}, (err, event) => {
    if (err) return res.send(err);
    res.json(event);
  });
};

exports.getVillages = (req, res) => {
  Village.find({}, (err, village) => {
    if (err) return res.send(err);
    res.json(village);
  });
};

exports.createVillage = (req, res) => {
  var newVillage = new Village({
    // vid: req.body.vid,
    village_name: req.body.village_name,
    village_head: req.body.village_head,
    location: req.body.location,
    photo_url: req.body.photo_url,
    bids: []
  });
  newVillage.vid = newVillage._id.toString();

  newVillage.save((err, village) => {
    if (err) return res.send(err);
    res.json(village);
  });
};

exports.getBooths = (req, res) => {
  Booth.find({}, (err, booth) => {
    if (err) return res.send(err);
    res.json(booth);
  });
};

exports.createBooth = (req, res) => {
  var new_booth = new Booth({
    // bid: req.body.bid,
    booth_name: req.body.booth_name,
    host: req.body.host,
    starting_date: req.body.starting_date,
    photo_url: req.body.photo_url,
    vid: req.body.vid
  });
  new_booth.bid = new_booth._id.toString();

  new_booth.save((err, booth) => {
    if (err) return res.send(err);
    res.json(booth);
  });
};

exports.getEntries = (req, res) => {
  Entry.find({}, (err, entry) => {
    if (err) return res.send(err);
    res.json(entry);
  });
};

exports.createEntry = (req, res) => {
  const newEntry = new Entry({
    uid: req.body.uid,
    bid: req.body.bid
  });

  newEntry.save((err, entry) => {
    if (err) return res.send(err);
    res.json(entry);
  });
};

exports.getAllInterests = (req, res) => {
  Interest.find({}, (err, interests) => {
    if (err) return res.send(err);
    res.json(interests);
  });
};

exports.createInterest = (req, res) => {
  const newInterest = new Interest({
    uid: req.body.uid,
    checks: req.body.checks
  });
  newInterest.save((err, interest) => {
    if (err) return res.send(err);
    res.json(interest);
  });
};

exports.getInterestByUserID = (req, res) => {
  Interest.findOne({ uid: req.params.uid }, (err, interest) => {
    if (err) return res.send(err);
    res.json(interest);
  });
};

exports.updateInterest = (req, res) => {
  Interest.updateOne({ uid: req.params.uid }, {
    checks: req.body.checks
  }, {
    new: true
  }, (err, interest) => {
    if (err) return res.send(err);
    res.json(interest);
  });
};
