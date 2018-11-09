import mongoose from 'mongoose';
import moment from 'moment';

import * as EthCtrl from './eth';

const Poll = mongoose.model('Poll');

export const findCurrentPolls = (req, res, next) => {
  Poll.find()
    .where('startDate')
    .lt(new Date())
    .where('endDate')
    .gt(new Date())
    .sort({ startDate: -1 }) // recently start
    .limit(20)
    .then(polls => res.status(200).send(polls))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: err.message });
    });
};

export const findPastPolls = (req, res, next) => {
  Poll.find()
    .where('endDate').lt(new Date())
    .sort({ endDate: -1 }) // recently end
    .limit(20)
    .then(polls => res.status(200).send(polls))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: err.message });
    });
};

export const findFuturePolls = (req, res, next) => {
  Poll.find()
    .where('startDate').gt(new Date())
    .sort({ startDate: 1 }) // coming soon
    .limit(20)
    .then(polls => res.status(200).send(polls))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: err.message });
    });
};

export const create = async (req, res, next) => {
  const { eventID, ownerID, title, description, photoUrl, startDate, endDate, candidates } = req.body;
  try {
    const poll = new Poll({
      eventID, ownerID, title, description, photoUrl,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      candidates
    });
    poll.id = poll._id.toString();
    poll.candidates.forEach((x) => { x.id = x._id.toString(); });

    // Deploy new smart contract
    EthCtrl.deployPollContract({ poll }, async (err, poll) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }

      console.log('Contract is deployed');
      console.log(poll);

      // Save poll to mongo
      poll = await poll.save();

      return res.status(200).send(poll);
    });

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const findOne = async (req, res, next) => {
  const { id } = req.params;
  Poll.findById(id).then(poll => res.status(200).send(poll))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: err.message });
    });
};
