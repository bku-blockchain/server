import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
import async from 'async';

const User = mongoose.model('User');
const Poll = mongoose.model('Poll');
const Record = mongoose.model('Record');
const Vote = mongoose.model('Vote');


export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, '-password -salt -tokenExpire -contacts');
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};


export const getAllPolls = async (req, res, next) => {
  try {
    const polls = await Poll.find();
    return res.status(200).send(polls);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const getAllVotes = async (req, res, next) => {
  try {
    const votes = await Vote.find().populate('pollID');
    return res.status(200).send(votes);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const getAllRecords = async (req, res, next) => {
  const { userID } = req.params;
  try {
    const records = await Record.find({ userID }).populate('partner');
    return res.status(200).send(records);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const getUserByUsername = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username }, '-password -salt -tokenExpire').populate('contacts');
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
