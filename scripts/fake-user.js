import mongoose from 'mongoose';

const User = mongoose.model('User');

const rand = () => Math.floor(Math.random() * 9999999);
const randDate = () => new Date(Date.now() + rand() * (Math.random() > 0.5 ? 1 : -1));

const fake = (data) => {
  const user = new User(data);
  user.id = user._id.toString();
  user.save().then(user => console.log(user.id))
    .catch((err) => {
      console.log(err);
    });
};

for (let i = 0; i < 10; i++) {
  const data = {
    email: `example_${i}@gmail.com`,
    password: `usr${i}`,
    eth: {
      address: rand()
    }
  };
  if (i % 3 == 0) data.role == 'Organizer';

  fake(data);
}
