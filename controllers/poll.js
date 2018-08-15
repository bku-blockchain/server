import mongoose from 'mongoose';

const Poll = mongoose.model('Poll');


export const findAll = async (req, res, next) => {
  // TODO - Make Restful API
  Poll.find().exec().then(polls => res.status(203).send({ data: polls }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err.message });
    });
};

export const create = async (req, res, next) => {
  // TODO
  const { data } = req.body;
  const poll = new Poll(data);
  poll.id = poll._id.toString();
  poll.save().then(poll => res.status(200).send(poll))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err.message });
    });
};

export const findOne = async (req, res, next) => {
  // TODO
};
