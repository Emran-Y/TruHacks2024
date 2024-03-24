const PrevKeyWord = require('../Models/prevKeyWord');





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

// post if doesn't exist , pull if exist

const addPrevKeyword = async (req, res) => {
    // Get the user id
    const userId = req.user._id;
    // Get the user
    try{
        // prev keyword
        const prevKeyword = await PrevKeyWord.find({ user: userId });
        if (prevKeyword.length > 0){
            // pull the keyword
            console.log(prevKeyword[0].keyword);
            prevKeyword[0].keyword = req.body.keyword;
            await prevKeyword[0].save();
            return res.status(200).json(prevKeyword[0]);
            
        }else{
            // Create a new previous keyword
            const newPrevKeyword = new PrevKeyWord({
                keyword: req.body.keyword,
                user: userId
            });
            // Save the previous keyword to the database
            await newPrevKeyword.save();
            // Return the previous keyword
            return res.status(201).json({newPrevKeyword});
        
        }

    }
    catch(err){
        // If there is an error return the error message
        res.status(500).json({message:err.message});
    }
}

module.exports = { getPrevKeyword, addPrevKeyword};
