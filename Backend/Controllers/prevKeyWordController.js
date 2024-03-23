const PrevKeyWord = require('../Models/prevKeyWord');
const User = require('../Models/user');




// prevKeyword extracter function
const getPrevKeyword = async (req, res) => {
    // Get the user id
    const userId = req.user._id;
    // Get the user
    try{
        // Get the user from the database
        const user = await User.findById(userId);
        // Get the previous keyword of the user
        const prevKeyword = await PrevKeyWord.find({ user: user._id });
        // Return the previous keyword
        return res.status(200).json(prevKeyword);
    }
    catch(err){
        // If there is an error return the error message
        res.status(500).json({message:err.message});
    }
  }


module.exports = { getPrevKeyword };
