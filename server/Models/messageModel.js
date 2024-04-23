const mongoose = require ("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        chatId: {
            type: String
        },
        sender: {
            type: Number
        },
        content: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

const MessageModel = mongoose.model("Message", MessageSchema)

module.exports =  MessageModel;