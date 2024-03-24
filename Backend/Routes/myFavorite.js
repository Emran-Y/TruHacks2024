const express = require('express');
const route = express.Router();
const {addToFavorite, removeFromFaviorite,getFavorites} = require('../Controllers/myFavoriteController');
const authGuard = require('../Middlewares/authGuard');


// add to faviorite
route.post('/add',authGuard,addToFavorite)
// remove from faviorite
route.delete('/remove/:itemId',authGuard,removeFromFaviorite)

// get faviorite
route.get('/get/:pageNum', authGuard, getFavorites);



// export the route
module.exports = route;