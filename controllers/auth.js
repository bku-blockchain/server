import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

import * as config from '../config';

const AuthToken = mongoose.model('AuthToken');
const User = mongoose.model('User');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.app.email.address,
    pass: config.app.email.password
  }
});

export function createUser(req, res, next) {
  const { email, password, role, eth } = req.body;
  const user = new User({ email, password, role, eth });
  user.id = user._id.toString();
  user.save().then(user => res.send(user)).catch((err) => {
    console.log(err);
    return res.send(err);
  });
}

export async function authorization(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    console.log('User dont have token');
    return res.status(400).send({ message: 'Require authentication token for request.' });
  }
  try {
    const authToken = AuthToken.findOne({ token });
    if (!authToken || authToken.expire < new Date().getTime()) {
      if (authToken) {
        console.log('Token expired');
        AuthToken.deleteOne({ token }).exec().then(() => {});
      }
      return res.status(401).send({ message: 'Token is not valid' });
    }
    return next();

  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
}

export const login = async (req, res, next) => {
  // TODO
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'No user exists with such email.' });
    }
    if (!user.authenticate(password)) {
      return res.status(401).send({ message: 'Password is not correct.' });
    }
    user.password = null;
    user.salt = null;

    let authToken = await AuthToken.findOne({ userId: user.id });
    if (authToken && authToken.expire >= new Date().getTime()) {
      return res.status(400).send({ message: 'You have logged in from other device.' });
    }
    if (authToken) {
      await AuthToken.deleteOne({ userId: user.id });
    }
    const token = jwt.sign(
      { data: user },
      config.app.secretKey,
      { expiresIn: config.app.tokenExpire }
    );
    const expire = new Date().getTime() + config.app.tokenExpire * 1000;
    authToken = new AuthToken({ userId: user.id, token, expire });
    await authToken.save();

    res.status(200).send({ user, token });

  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

export const forgotPassword = async (req, res, next) => {
  // TODO
  const { email } = req.body;
  res.status(200).send({ message: 'Email has been sent.' });
  // res.status(400).send({message: 'Account connected the email is\'t existen'});
};

export const resetPassword = async (req, res, next) => {
  // TODO
};

export function logout(req, res, next) {
  const { userId } = req.body;
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!userId) return res.status(400).send({ message: 'Require user id for the request.' });
  return AuthToken.deleteOne({ userId, token }).exec()
    .then(() => res.status(200).send({ message: 'Logout successfully.' }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: err.message });
    });
}
