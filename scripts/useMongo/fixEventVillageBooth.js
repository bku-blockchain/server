import mongoose from 'mongoose';
import async from 'async';

const fake = require('fakerator')();

const Event = mongoose.model('Event');
const Village = mongoose.model('Village');
const Booth = mongoose.model('Booth');

const user = require('../../db/users.json');

const userID = user.map(o => o.id);

Booth.find().then((booths) => {
  async.eachSeries(booths, (d, cb) => {

    d.rating = [];
    userID.forEach((id) => {
      if (Math.random() > 0.3) {
        d.rating.push({
          user: mongoose.Types.ObjectId(id),
          star: fake.random.number(1, 5)
        });
      }
    });
    d.save().then(() => cb()).catch(err => cb(err));

  }, (err) => {
    if (err) throw err;
    process.exit(0);
  });
})
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });

// Village.find().then((vs) => {
//   async.eachSeries(vs, (d, cb) => {

//     // d.bid = d._id.toString();
//     d.event = mongoose.Types.ObjectId('5bf00ac120e8fa8c04374d34');
//     d.save().then(() => cb()).catch(err => cb(err));

//   }, (err) => {
//     if (err) throw err;
//     process.exit(0);
//   });
// })
//   .catch((err) => {
//     console.log(err);
//     process.exit(0);
//   });


// Booth.find().then((booths) => {
//   async.eachSeries(booths, (d, cb) => {

//     // d.bid = d._id.toString();
//     d.starting_date = fake.date.recent(50);
//     d.save().then(() => cb()).catch(err => cb(err));

//   }, (err) => {
//     if (err) throw err;
//     process.exit(0);
//   });
// })
//   .catch((err) => {
//     console.log(err);
//     process.exit(0);
//   });
