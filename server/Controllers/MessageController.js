const MessageModel = require ("../Models/messageModel.js");

const addMessage = async (req, res) => {
  const { chatId, senderId, content } = req.body;
  const message = new MessageModel({
    chatId,
    senderId,
    content,
  });
  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const allMessages = async (req, res) => {
  try {
    const messages = await MessageModel.find(); // Fetch all messages from the collection
    res.status(200).json(messages); // Respond with the fetched messages
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching messages." }); // Handle errors
  }
};



const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await MessageModel.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};




module.exports = { getMessages, addMessage, allMessages };