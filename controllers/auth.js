import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

import * as config from '../config';

const User = mongoose.model('User');


export async function createUser(req, res, next) {
  const { username, email, password, tel } = req.body;
  let user = new User({ username, email, password, tel });
  user.id = user._id.toString();

  try {
    user = await user.save();
    user.password = null;
    user.salt = null;
    res.status(201).send(user);

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

export async function fakeUser(req, res, next) {
  const secretKey = req.headers['secret-key'];
  const serverKey = process.env.SECRET_KEY_FAKE_DB;
  if (secretKey != serverKey || !serverKey)
    return res.status(400).send('Định hack tao à. Không dễ đâu cưng :)');

  let user = new User(req.body);
  user.id = user._id.toString();
  user.active = true;

  try {
    user = await user.save();
    user.password = null;
    user.salt = null;
    res.status(201).send(user);

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

export async function authorization(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
  if (!token) {
    return res.status(400).send({ message: 'Require authentication token for request.' });
  }
  try {
    jwt.verify(token, config.app.secretKey, async (err, decoded) => {
      console.log(decoded);
      if (err) {
        return res.send({ message: 'Invalid Token' });
      }
      const { id } = decoded;
      const user = await User.findOne({ id }, 'tokenExpire');
      if (!user || !user.tokenExpire) {
        return res.send({ message: 'Invalid Token' });
      }

      req.userID = id;
      next();
    });

  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
}

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ message: 'No user exists with such email' });
    }
    if (!user.authenticate(password)) {
      return res.status(401).send({ message: 'Password is not correct' });
    }
    user.password = null;
    user.salt = null;
    user.tokenExpire = null;

    jwt.sign({
      id: user.id,
      username: user.username
    }, config.app.secretKey, { expiresIn: config.app.tokenExpire }, async (err, token) => {
      if (err) throw err;
      await User.findOneAndUpdate({ username }, {
        tokenExpire: Math.floor(new Date().getTime() / 1000 + config.app.tokenExpire)
      });
      res.status(200).send({ user, token });
    });

  } catch (err) {
    console.log(err);
    res.send({ message: err.message });
  }
};

export const testAuthorized = async (req, res, next) => {
  res.send({ message: 'Authorized' });
};

export const forgotPassword = async (req, res, next) => {
  // TODO
};

export const resetPassword = async (req, res, next) => {
  // TODO
};

export async function logout(req, res, next) {
  try {
    await User.findOneAndUpdate({ id: req.userID }, { tokenExpire: null });
    return res.status(200).send({ message: 'Logout successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
}
