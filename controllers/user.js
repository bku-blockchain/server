import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
import async from 'async';

const User = mongoose.model('User');


export const findAll = async (req, res, next) => {
  try {
    const users = await User.find({}, '-password -salt -tokenExpire -contacts').limit(20);
    res.status(203).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const findOneByUsername = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username }, '-password -salt -tokenExpire -contacts');
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(203).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const updateUserInfo = async (req, res, next) => {
  const { userID } = req;
  const { firstName, lastName, company, position } = req.body;
  try {
    let user = await User.findOne({ id: userID });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    user = { ...user, displayName: { firstName, lastName }, company, position };
    await user.save();
    return res.status(200).send({ message: 'Update successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const addContacts = async (req, res, next) => {
  const { userID } = req;
  let { contacts } = req.body; // [ { uid: '', note: '' } ]
  try {
    const user = await User.findOne({ id: userID });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    contacts = contacts.map(o => ({
      uid: new mongoose.Types.ObjectId(o.uid),
      note: o.note
    }));
    user.contacts = [...user.contacts, ...contacts];
    await user.save();
    return res.status(200).send({ message: 'Update successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const fakeContacts = async (req, res, next) => {
  const secretKey = req.headers['secret-key'];
  const serverKey = process.env.SECRET_KEY_FAKE_DB;
  if (secretKey != serverKey || !serverKey)
    return res.status(400).send('Định hack tao à. Không dễ đâu cưng :)');

  const { userID, contacts } = req.body; // [ { uid: '', note: '' } ]
  try {
    const user = await User.findOne({ id: userID });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    const _contacts = contacts.map(o => ({
      uid: new mongoose.Types.ObjectId(o.uid),
      note: o.note
    }));
    user.contacts = [...user.contacts, ..._contacts];
    await user.save();
    return res.status(200).send({ message: 'Update successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const getContacts = async (req, res, next) => {
  const { userID } = req;
  try {
    const user = await User.findOne({ id: userID }).populate('contacts.uid', '-password -salt -tokenExpire -contacts');
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).send({ contacts: user.contacts });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
