import mongoose from 'mongoose';

import * as EthCtrl from './eth.local';
// import * as EthCtrl from './eth.prod';

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

export const create = (req, res, next) => {
  const data = req.body;
  console.log(data);
  // TODO: check ${data} for validation

  const poll = new Poll(data);
  poll.id = poll._id.toString();

  poll.save().then((poll) => {
    res.status(200).send(poll);

    EthCtrl.deployContract({
      pollID: poll.id,
      startDate: new Date(poll.startDate).getTime() / 1000,
      endDate: new Date(poll.endDate).getTime() / 1000
    }).then((result) => {
      console.log('Contract is deployed');
      console.log(result);
    });

  })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err.message });
    });
};

export const findOne = async (req, res, next) => {
  // TODO
};
