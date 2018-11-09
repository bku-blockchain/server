import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
import async from 'async';

const User = mongoose.model('User');

export const findAll = async (req, res, next) => {
  try {
    const users = await User.find({}, '-password -salt -tokenExpire -contacts').limit(20);
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const findOneById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id, '-password -salt -tokenExpire -contacts');
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const findOneByUsername = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username }, '-password -salt -tokenExpire -contacts');
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const updateUserInfo = async (req, res, next) => {
  const { userID } = req;
  const { firstName, lastName, company, position } = req.body;
  try {
    await User.findByIdAndUpdate(userID, { firstName, lastName, company, position });
    return res.status(202).send({ message: 'Update successfully' });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const addContact = async (req, res, next) => {
  const { userID } = req;
  const { partnerID } = req.body;
  try {
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    user.contacts.push(new mongoose.Types.ObjectId(partnerID));
    await user.save();
    return res.status(200).send({ message: 'Update successfully' });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const fakeContacts = async (req, res, next) => {
  const secretKey = req.headers['secret-key'];
  const serverKey = process.env.SECRET_KEY_FAKE_DB;
  if (secretKey != serverKey || !serverKey)
    return res.status(400).send('Định hack tao à. Không dễ đâu cưng :)');

  const { userID, contacts } = req.body; // contacts: [ userID ]
  try {
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    const _contacts = contacts.map(o => new mongoose.Types.ObjectId(o));
    user.contacts = [...user.contacts, ..._contacts];
    await user.save();
    return res.status(200).send({ message: 'Update successfully' });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const getContacts = async (req, res, next) => {
  const { userID } = req;
  try {
    const user = await User.findById(userID).populate('contacts', '-password -salt -tokenExpire -contacts');
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send(user.contacts);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
