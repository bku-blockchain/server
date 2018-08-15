import mongoose from 'mongoose';

const Poll = mongoose.model('Poll');

const rand = () => Math.floor(Math.random() * 9999999);
const randDate = () => new Date(Date.now() + rand() * (Math.random() > 0.5 ? 1 : -1));

const fake = (data) => {
  const poll = new Poll(data);
  poll.id = poll._id.toString();
  poll.save().then(poll => console.log(poll.id))
    .catch((err) => {
      console.log(err);
    });
};

for (let i = 0; i < 10; i++) {
  const options = [];
  const maxOptions = Math.floor(Math.random() * 4);
  for (let i = 1; i < 4 + maxOptions; i++) {
    options.push({
      id: i,
      name: `Option ${i}`,
      description: `Description ${i}`.repeat(5)
    });
  }
  const data = {
    eventID: rand(),
    ownerID: rand(),
    title: `Title ${i}`,
    description: `Decription ${i}.`.repeat(10),
    startDate: randDate(),
    endDate: randDate(),
    maxSelected: i % 3 + 1,
    options,
    eth: {
      address: rand(),
      owner: rand()
    }
  };

  fake(data);
}
