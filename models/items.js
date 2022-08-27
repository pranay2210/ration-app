const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    packetId:{
        type: String,
    },
    packetType: {
        type: String,
    },
    content: {
        type: String
    },
    calories: {
        type: Number
    },
    qty: {
        type: Number
    },
    expiryDate: {
        type: Date,
    }
});

module.exports = mongoose.model('item', ItemsSchema);