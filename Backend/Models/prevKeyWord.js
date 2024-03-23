const mongoose = require('mongoose');

// Create a schema for the previous keyword

const prevKeyWordSchema = new mongoose.Schema({
    keyword: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


// Create a model for the previous keyword
const PrevKeyWord = mongoose.model('PrevKeyWord', prevKeyWordSchema);


// Export the PrevKeyWord model
module.exports = PrevKeyWord;
