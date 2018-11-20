import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
import async from 'async';

const User = mongoose.model('User');
const Poll = mongoose.model('Poll');
const Record = mongoose.model('Record');
const Vote = mongoose.model('Vote');
const Event = mongoose.model('Event');
const Village = mongoose.model('Village');
const Booth = mongoose.model('Booth');


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

export const getAllEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    return res.status(200).send(events);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const getAllBooths = async (req, res, next) => {
  try {
    const booths = await Booth.find();
    return res.status(200).send(booths);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const getAllVillages = async (req, res, next) => {
  try {
    const villages = await Village.find().populate('event');
    return res.status(200).send(villages);
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
