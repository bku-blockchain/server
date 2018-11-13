const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VillageSchema = new Schema({
    vid: {
        type: String,
        unique: true,
        required: true
    },
    village_name: {
        type: String,
        required: true
    },
    village_head: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    photo_url: {
        type: String,
        required: true
    },
    bids: [{
        type: String,
        required: true
    }]
});

mongoose.model('Village', VillageSchema);