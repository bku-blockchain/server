const mongoose = require('mongoose');

const
  Event = mongoose.model('Event'),
  Village = mongoose.model('Village'),
  Booth = mongoose.model('Booth'),
  Interest = mongoose.model('Interest');


export const getEvents = (req, res) => {
  Event.find({}, (err, event) => {
    if (err) return res.send(err);
    res.json(event);
  });
};

export const getVillages = (req, res) => {
  Village.find({}, (err, village) => {
    if (err) return res.send(err);
    res.json(village);
  });
};

export const createVillage = (req, res) => {
  const newVillage = new Village({
    village_name: req.body.village_name,
    village_head: req.body.village_head,
    location: req.body.location,
    photo_url: req.body.photo_url,
    bids: []
  });

  newVillage.vid = newVillage._id.toString();

  newVillage.save((err, village) => {
    if (err) return res.send(err);
    res.json(village);
  });
};

export const getBooths = (req, res) => {
  Booth.find({}, (err, booth) => {
    if (err) return res.send(err);
    res.json(booth);
  });
};

export const createBooth = (req, res) => {
  var new_booth = new Booth({
    booth_name: req.body.booth_name,
    host: req.body.host,
    starting_date: new Date(req.body.starting_date),
    photo_url: req.body.photo_url,
    vid: req.body.vid
  });

  new_booth.bid = new_booth._id.toString();

  new_booth.save((err, booth) => {
    if (err) return res.send(err);
    res.json(booth);
  });
};

export const getMyInterestsInEvent = (req, res) => {
  const { userID } = req;
  const { eventID } = req.params;
  Interest.findOne({ uid: userID, eventID }, (err, interest) => {
    if (err) return res.send(err);
    res.json((interest || {}).villages || []);
  });
};

export const checkInterestedInVilalge = (req, res) => {
  const { userID } = req;
  const { eventID, vid } = req.params;
  Interest.findOne({ uid: userID, eventID }, (err, interest) => {
    if (err) return res.send(err);
    const villages = (interest || {}).villages || [];
    if (villages.indexOf(vid) > -1) res.json({ interested: true });
    else res.json({ interested: false });
  });
};

export const setInterestInVillage = (req, res) => {
  const { userID } = req;
  const { eventID, vid } = req.params;
  const { interested } = req.body;
  if (interested != 'true' && interested != 'false') {
    return res.status(400).send({ message: 'Invalid request for this API' });
  }
  const mongoUpdate = interested == 'true' ? {
    $addToSet: { villages: vid }
  } : {
    $pull: { villages: vid }
  };
  Interest.updateOne({ uid: userID, eventID }, {
    ...mongoUpdate
  }, { upsert: true }).then(() => res.status(200).json({ message: 'Update successfully' }))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: err.message });
    });
};
