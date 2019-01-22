import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
import async from 'async';
import jwt from 'jsonwebtoken';

const User = mongoose.model('User');
const Poll = mongoose.model('Poll');
const Record = mongoose.model('Record');
const Vote = mongoose.model('Vote');
const Event = mongoose.model('Event');
const Village = mongoose.model('Village');
const Booth = mongoose.model('Booth');

import config from '../config';

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  const { admin } = config.app;
  if (username != admin.username || password != admin.password) {
    return res.status(404).send({ message: 'Admin authentication is wrong' });
  }
  const payload = { };
  jwt.sign(payload, admin.secretKey, {
    expiresIn: admin.tokenExpire
  }, async (err, token) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    const tokenIssuedAt = Math.floor(new Date().getTime() / 1000);
    const tokenExpire = tokenIssuedAt + config.app.tokenExpire;
    res.status(200).send({ token, tokenExpire, tokenIssuedAt });
  });
};

export async function authorization(req, res, next) {
  // Accept token in headers (authorization)
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: 'Require authentication token for request.' });
  }
  const { admin } = config.app;
  try {
    jwt.verify(token, admin.secretKey, async (err, decoded) => {
      // decoded: { iat: issueAt, exp: expire }
      if (err) {
        return res.status(401).send({ message: 'Invalid token for request' });
      }
      req.authAdmin = true;
      next();
    });

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
}

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
