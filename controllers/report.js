import mongoose, { SchemaType, SchemaTypes } from 'mongoose';
import async from 'async';

const User = mongoose.model('User');
const Poll = mongoose.model('Poll');
const Record = mongoose.model('Record');
const Vote = mongoose.model('Vote');
const Event = mongoose.model('Event');
const Village = mongoose.model('Village');
const Booth = mongoose.model('Booth');

const result_statisticNumBoothsEachStar = [1, 2, 3, 4, 5].reduce((obj, star) => {
  obj[star] = 0;
  return obj;
}, {});

export const statisticNumBoothsEachStar = async (req, res, next) => {
  try {
    const data = await Booth.find({}, 'rating');
    const result = { ...result_statisticNumBoothsEachStar };

    async.each(data, (dt, cb) => {
      [1, 2, 3, 4, 5].forEach((i) => {
        if (dt.rating.findIndex(u => u.star == i) > -1) {
          result[i]++;
        }
      });
      cb();
    }, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).send({ message: err.message });
      }
      return res.status(200).send(result);
    });

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

const roles = ['total', 'Investor', 'Expert', 'Speaker', 'Organizer', 'Participant'];
const formatStar = [1, 2, 3, 4, 5].reduce((obj, idx) => {
  obj[idx] = roles.reduce((o, i) => {
    o[i] = 0;
    return o;
  }, {});
  return obj;
}, {});

export const statisticNumStarsEachBooth = async (req, res, next) => {
  try {
    const data = await Booth.find({}, 'bid rating').populate({
      path: 'rating.user',
      select: 'role'
    });

    const result = [];
    async.each(data, (dat, cb) => {
      const dt = { bid: dat.bid, star: JSON.parse(JSON.stringify(formatStar)) };
      dat.rating.forEach((u) => {
        const obj = dt.star[u.star];
        obj[u.user.role]++;
        obj.total++;
      });
      result.push(dt);
      cb();
    }, (err) => {
      if (err) {
        console.log(err);
        return res.status(400).send({ message: err.message });
      }
      return res.status(200).send(result);
    });

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};


export const statisticNumStarsOneBooth = async (req, res, next) => {
  const { bid } = req.params;
  try {
    const data = await Booth.findById(bid, 'bid rating').populate({
      path: 'rating.user',
      select: 'role'
    });
    const dt = { bid: data.bid, star: JSON.parse(JSON.stringify(formatStar)) };
    data.rating.forEach((u) => {
      const obj = dt.star[u.star];
      obj[u.user.role]++;
      obj.total++;
    });
    return res.status(200).send(dt);

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
