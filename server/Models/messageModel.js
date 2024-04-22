import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        chatId: {
            type: string
        },
        senderId: {
            type: string
        },
        text: {
            type: string
        }
    },
    {
        timestamps: true,
    }
);

const MessageModel = mongoose.model("Message", MessageSchema)

export default MessageModel;