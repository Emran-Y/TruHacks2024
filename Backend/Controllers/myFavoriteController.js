const Item = require('../Models/item');
const MyFavorite = require('../Models/myFavorite');

// add to faviorite
// thumbnail, title, description, rating, bookURI

const addToFavorite = async (req, res) => {
    try {
        // Validate the request
        if (!req.body.thumbnail || !req.body.title || !req.body.description || !req.body.rating || !req.body.bookURI) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new item
        const item = new Item({
            thumbnail: req.body.thumbnail,
            title: req.body.title,
            description: req.body.description,
            rating: req.body.rating,
            bookURI: req.body.bookURI
        });

        // Save the item to the database
        await item.save();

        // Find or create the user's favorites list and update it
        let myFavorites = await MyFavorite.findOneAndUpdate(
            { owner: req.user._id },
            { $addToSet: { myFavorites: item._id } },
            { upsert: true, new: true }
        );

        res.status(201).json(item);
    } catch (error) {
        console.error("Error adding item to favorites:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



//  remove from faviorite
const removeFromFaviorite = async (req, res) => {
    // extract the item id from params
    const itemId = req.params.itemId;

    // Find the user's favorites list and update it
    let myFavorites = await MyFavorite.findOneAndUpdate(
        { owner: req.user._id },
        { $pull: { myFavorites: itemId } },
        { new: true }
    );
    res.status(200).json({ message: "Item removed from favorites" });
}

const getFavorites = async (req, res) => {
    try {
        // Get the page number from the query
        const page = parseInt(req.params.pageNum) || 1;
        const limit = 10; // Items per page

        // Get the user's favorites list with pagination
        let myFavorites = await MyFavorite.findOne({ owner: req.user._id }).populate({
            path: 'myFavorites',
            options: {
                limit: limit,
                skip: (page - 1) * limit
            }
        });

        // Determine if there is a next page
        const hasNextPage = myFavorites.myFavorites.length === limit;

        res.status(200).json({ favorites: myFavorites, hasNextPage });
    } catch (error) {
        console.error("Error getting favorites:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}




// export add to faviorite
module.exports.addToFavorite = addToFavorite;
// export remove from faviorite
module.exports.removeFromFaviorite = removeFromFaviorite;
// export get faviorite
module.exports.getFavorites = getFavorites;