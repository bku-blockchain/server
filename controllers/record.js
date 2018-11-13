import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
import async from 'async';

const Record = mongoose.model('Record');


export const getRecords = async (req, res, next) => {
  const { userID } = req;
  try {
    const records = await Record.find({ userID })
      .populate('partner', '-password -salt -tokenExpire -contacts')
      .sort({ time: -1 }).limit(20);
    return res.status(200).send(records);

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

export const getRecordsWithPartnerID = async (req, res, next) => {
  const { userID } = req;
  const { partnerID } = req.params;
  try {
    const records = await Record.find({ userID, partner: partnerID })
      .populate('partner', '-password -salt -tokenExpire -contacts')
      .sort({ time: -1 })
      .limit(20);
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

export const fakeRecord = async (req, res, next) => {
  const secretKey = req.headers['secret-key'];
  const serverKey = process.env.SECRET_KEY_API_TEST;
  if (secretKey != serverKey || !serverKey)
    return res.status(400).send({ message: 'API is not implemented' });

  const { userID, partnerID, note, time } = req.body;
  const record = new Record({ userID, partner: new mongoose.Types.ObjectId(partnerID), note, time });
  record.id = record._id.toString();
  try {
    await record.save();
    return res.status(201).send(record);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
