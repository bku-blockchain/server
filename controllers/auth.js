import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import * as config from '../config';

const User = mongoose.model('User');


export async function createUser(req, res, next) {
  const { username, email, password, tel, firstName, lastName, photoUrl, company, position } = req.body;
  const user = new User({ username, email, password, tel, firstName, lastName, photoUrl, company, position });
  user.id = user._id.toString();

  try {
    await user.save();
    return res.status(201).send({ message: 'Created successfully' });

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
}

export async function fakeUser(req, res, next) {
  const secretKey = req.headers['secret-key'];
  const serverKey = process.env.SECRET_KEY_FAKE_DB;
  if (secretKey != serverKey || !serverKey) {
    return res.status(403).send('Định hack tao à. Không dễ đâu cưng :)');
  }

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
    res.status(400).send({ message: err.message });
  }
}

export async function authorization(req, res, next) {
  // Accept token in body, query, headers (x-access-token, authorization)
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: 'Require authentication token for request.' });
  }
  try {
    jwt.verify(token, config.app.secretKey, async (err, decoded) => {
      // decoded: { id, username, iat: issueAt, exp: expire }
      if (err) {
        return res.status(401).send({ message: 'Invalid token for request' });
      }
      const { id } = decoded;
      const user = await User.findOne({ id }, 'tokenExpire');
      if (!user || !user.tokenExpire) {
        return res.status(401).send({ message: 'Invalid token for request' });
      }

      req.userID = id;

      next();
    });

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
}

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }, '-contacts');
    if (!user) {
      return res.status(404).send({ message: 'No user exists with such username' });
    }
    if (!user.authenticate(password)) {
      return res.status(400).send({ message: 'Password is not correct' });
    }

    const payload = { id: user.id, username: user.username };

    jwt.sign(payload, config.app.secretKey, {
      expiresIn: config.app.tokenExpire
    }, async (err, token) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }

      const tokenIssuedAt = Math.floor(new Date().getTime() / 1000);
      const tokenExpire = tokenIssuedAt + config.app.tokenExpire;

      return User.findByIdAndUpdate({ id: user.id }, { tokenExpire }).then(() => {
        user.tokenExpire = null;
        user.password = null;
        user.salt = null;
        res.status(200).send({ user, token, tokenExpire, tokenIssuedAt });
      });
    });

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
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
    await User.findByIdAndUpdate({ id: req.userID }, { tokenExpire: null });
    return res.status(200).send({ message: 'Logout successfully' });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
}
