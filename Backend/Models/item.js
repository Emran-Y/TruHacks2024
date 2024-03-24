const mongoose = require('mongoose');


// Schema for my favorite items
const item = new mongoose.Schema({ 
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    bookURI: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now // Set to the current date and time when a document is created
    }
    
});

const Item = mongoose.model('Item', item);

module.exports = Item;