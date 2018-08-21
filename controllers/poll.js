import mongoose from 'mongoose';
import moment from 'moment';

import * as EthCtrl from './eth';

const Poll = mongoose.model('Poll');

export const findAll = async (req, res, next) => {
  // TODO - Make Restful API
  Poll.find().exec().then((polls) => {
    res.status(203).send(polls);
  })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err.message });
    });
};

export const create = async (req, res, next) => {
  const { eventID, ownerID, title, description, startDate, endDate, questions } = req.body;
  try {
    // TODO: validate event

    // TODO: validate owner

    // Create new instance Poll
    const newInstancePoll = new Poll({
      eventID, ownerID, title, description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      questions: JSON.parse(questions)
    });
    newInstancePoll.id = newInstancePoll._id.toString();

    console.log(newInstancePoll);

    // Save poll to mongo
    const poll = await newInstancePoll.save();

    // Send data to client
    res.status(200).send(poll);

    // Deploy new smart contract
    const commit = EthCtrl.deployContract({
      pollID: poll.id,
      startDate: new Date(poll.startDate).getTime() / 1000,
      endDate: new Date(poll.endDate).getTime() / 1000
    });
    console.log('Contract is deployed');
    console.log(commit);

  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

export const findOne = async (req, res, next) => {
  // TODO
};
