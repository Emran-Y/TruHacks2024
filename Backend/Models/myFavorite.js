const mongoose = require('mongoose');

// Schema for my favorite items
const myFavoriteSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    myFavorites: [
        
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
            required: true
        },
        
        
    ]
});


// item

// Model based on the schema
const MyFavorite = mongoose.model('MyFavorite', myFavoriteSchema);

// Export the model
module.exports = MyFavorite;
