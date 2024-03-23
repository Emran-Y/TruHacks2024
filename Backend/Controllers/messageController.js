// import the message model
const Message = require("../Models/message");


// send message
const sendMessage = async (req, res) => {
    // Check if all fields are provided
    if(!req.body.content || !req.body.sender){
        return res.status(400).json({message:'Please provide all fields'});
    }

    // Check if the sender is either "bot" or "user"
    if(req.body.sender !== 'bot' && req.body.sender !== 'user'){
        return res.status(400).json({message:'Invalid sender, please provide either "bot" or "user" as sender'});
    }

    // Create a new message
    const newMessage = new Message({
        content: req.body.content,
        owner: req.user._id,
        sender: req.body.sender
    });

    // Save the message
    try{
        const savedMessage = await newMessage.save();
        return res.status(200).json(savedMessage);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

// get all nessage of a user with the bot, paginated each page has 10 messages


const getMessages = async (req, res) => {
    // Get the user id
    const userId = req.user._id;
    // Get the page number
    const page = parseInt(req.query.page) || 1;
    // Define the limit for messages per page
    const limit = 10;

    try {
        // Count total number of messages for the user
        const totalMessages = await Message.countDocuments({ owner: userId });
        // Calculate total number of pages
        const totalPages = Math.ceil(totalMessages / limit);

        // Get messages for the requested page
        const messages = await Message.find({ owner: userId })
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        // Calculate if there is a next page
        const hasNextPage = page < totalPages;

        return res.status(200).json({ messages, currentPage: page, isNext: hasNextPage });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


// export the functions
module.exports.sendMessage = sendMessage;
module.exports.getMessages = getMessages;
