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
    const page = req.query.page || 1;

    // Get the messages
    try{
        const messages = await Message.find({owner:userId})
        .sort({createdAt:-1})
        // Paginate the messages
        .skip((page-1)*10)
        // Limit the messages to 10 per page
        .limit(10);
        return res.status(200).json(messages);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}


// export the functions
module.exports.sendMessage = sendMessage;
module.exports.getMessages = getMessages;
