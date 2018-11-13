const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InterestSchema = new Schema({
    uid: {
        type: String,
        unique: true,
        required: true
    },
    checks: [{
        type: Boolean,
        required: true
    }]
});

mongoose.model('Interest', InterestSchema)