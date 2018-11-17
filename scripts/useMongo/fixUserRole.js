import mongoose from 'mongoose';
import async from 'async';

const User = mongoose.model('User');

const roles = ['Investor', 'Expert', 'Speaker', 'Organizer', 'Participant'];
const count = [5, 8, 12, 4];

const genRole = () => {
  const i = count.findIndex(v => v > 0);
  if (i == -1) return roles[4];
  count[i]--;
  return roles[i];
};

User.find().then((users) => {
  async.eachSeries(users, (user, cb) => {

    // console.log(user);

    const role = genRole();
    console.log(role);

    user.role = role;
    user.save().then(() => cb()).catch(err => cb(err));

  }, (err) => {
    if (err) throw err;
    process.exit(0);
  });
})
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
