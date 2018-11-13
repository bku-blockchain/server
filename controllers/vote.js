import mongoose from 'mongoose';
import moment from 'moment';
import cryptoJS from 'crypto-js';

import * as EthCtrl from './eth';

const Poll = mongoose.model('Poll');
const Vote = mongoose.model('Vote');

// Only for test
export const findAll = async (req, res, next) => {
  Vote.find().limit(20).then((votes) => {
    res.status(203).send(votes);
  })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: err.message });
    });
};

export const findInOnePoll = async (req, res, next) => {
  const { pollID } = req.params;
  Vote.find({ pollID }).limit(20).then((votes) => {
    res.status(203).send(votes);
  })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: err.message });
    });
};


export const findOneByUser = async (req, res, next) => {
  const { userID, pollID } = req.params;
  Vote.findOne({ userID, pollID }).then((vote) => {
    if (!vote) {
      return res.status(404).send({ message: 'User not vote' });
    }
    res.status(203).send(vote);
  })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: err.message });
    });
};

export const create = async (req, res, next) => {

  const { userID } = req;
  const { pollID, ballots } = req.body;
  try {
    /** Check pollID existen */
    const poll = await Poll.findOne({ id: pollID });

    if (!poll) {
      return res.status(404).send({ message: 'No poll existen with the poll ID' });
    }

    /** Check time */
    if (moment().isBefore(moment(poll.startDate))) {
      return res.status(400).send({ message: 'It\'s not time to vote' });
    }
    if (moment().isAfter(moment(poll.endDate))) {
      return res.status(400).send({ message: 'It\'s too late to vote' });
    }

    /** Check Contract is Created */
    if (!poll.eth.contractAddress) {
      return res.status(400).send({ message: 'Smart Contract is not created' });
    }

    console.log('Contract Address:', poll.eth.contractAddress);

    /** Check valid ballots */
    const minBallots = [...ballots].filter(x => poll.candidates.filter(i => i.id == x.id).length > 0);
    if (minBallots.length == 0) {
      return res.status(400).send({ message: 'Ballots not contains any valid candidates' });
    }

    /** Create new Vote instance */
    const vote = new Vote({ userID, pollID, ballots: minBallots });

    vote.id = vote._id.toString();

    vote.hashValue =
      `0x${cryptoJS.SHA256(`${vote.userID}-${vote.pollID}`).toString(cryptoJS.enc.Hex)}`;

    console.log(vote);

    EthCtrl.createVoting({
      vote, userID,
      contractAddress: poll.eth.contractAddress,
      hashValue: vote.hashValue,
      secretKey: poll.eth.contractSecretKey
    }, async (err, vote) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ message: err.message });
      }

      console.log('Voting is pushed');
      console.log(vote);

      /** Save data to mongo */
      vote = await vote.save();

      return res.status(200).send(vote);
    });

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }

};
