import mongoose from 'mongoose';

const User = mongoose.model('User');


export const findAll = async (req, res, next) => {
  try {
    const users = await User.find({}, '-password -salt -tokenExpire').limit(20);
    res.status(203).send(users);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const findOne = async (req, res, next) => {
  // TODO
};
