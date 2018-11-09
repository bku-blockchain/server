import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
import async from 'async';

const Record = mongoose.model('Record');


export const getRecords = async (req, res, next) => {
  const { userID } = req;
  try {
    const records = await Record.find({ userID }).populate('partner', '-password -salt -tokenExpire -contacts');
    return res.status(200).send(records);

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const addRecord = async (req, res, next) => {
  const { userID } = req;
  const { partnerID, note } = req.body;
  const record = new Record({ userID, partner: new mongoose.Types.ObjectId(partnerID), note });
  record.id = record._id.toString();
  try {
    await record.save();
    return res.status(201).send({ message: 'Create successfully' });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
