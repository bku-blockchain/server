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
  Entry = mongoose.model('Entry');

export const getMyTicketByEventID = (req, res) => {
  const { eventID } = req.params;
  Ticket.findOne({ uid: req.userID, eventID })
    .then(ticket => res.status(200).send(ticket))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err.message });
    });
};

export const getTickets = (req, res) => {
  Ticket.find({}, (err, tickets) => {
    if (err) {
      return res.send(err);
    }
    res.json(tickets);
  });
};

export const getTicketByID = (req, res) => {
  Ticket.findOne({ tid: req.params.tid }, (err, ticket) => {
    if (err) return res.send(err);
    res.json(ticket);
  });
};

export const getTicketsByUserID = (req, res) => {
  Ticket.findOne({ uid: req.params.uid }, (err, ticket) => {
    if (err) return res.send(err);
    res.json(ticket);
  });
};

export const createTicket = (req, res) => {
  const { eventID } = req.params;
  const { userID } = req;
  Ticket.findOne({ uid: userID, eventID }, (err, ticket) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }

    if (ticket) return res.json(ticket);

    const newTicket = new Ticket({
      uid: userID,
      eventID
    });

    newTicket.tid = keccak256(newTicket.uid + newTicket.created_date + uniqid());

    // Execute contract
    const uid = `0x${Buffer.from(newTicket.uid, 'utf8').toString('hex')}`;
    const tid = `0x${newTicket.tid}`;

    let count;
    web3js.eth.getTransactionCount(myAddress).then((v) => {
      count = v;
      const rawTransaction = {
        from: myAddress,
        gasPrice: web3js.utils.toHex(20 * 1e9),
        gasLimit: web3js.utils.toHex(210000),
        to: ticketContractAddress,
        value: '0x0',
        data: ticketContract.methods.AllocateTicket(uid, tid).encodeABI(),
        nonce: web3js.utils.toHex(count)
      };

      console.log('Creating Ticket: ', rawTransaction);

      // creating transaction via ethereumjs-tx
      const transaction = new Tx(rawTransaction);

      // signing transaction with private key
      transaction.sign(privateKey);

      console.log('Transaction: ', transaction);

      // sending transacton via web3js module
      web3js.eth.sendSignedTransaction(`0x${transaction.serialize().toString('hex')}`)
        .on('transactionHash', (txRes) => {
          console.log(`Transaction Hash: ${txRes}`);
          const url = `https://ropsten.etherscan.io/tx/${txRes}#eventlog`;

          newTicket.etherscan_url = url;
          Ticket.findOneAndUpdate({ tid: newTicket.tid }, {
            $set: {
              etherscan_url: url,
              txHash: txRes
            }
          }, { new: true }, (err, ticket) => {
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
  });
};

export const getEntries = (req, res) => {
  Entry.find({}, (err, entry) => {
    if (err) return res.send(err);
    res.json(entry);
  });
};

export const createEntry = (req, res) => {
  const newEntry = new Entry({
    uid: req.body.uid,
    bid: req.body.bid
  });

  newEntry.save((err, entry) => {
    if (err) return res.send(err);
    res.json(entry);
  });
};
