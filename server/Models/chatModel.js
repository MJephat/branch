import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    members:{
        type: Array,
    }
},
{
    timestamps: true,
}

);

const ChatModel = mongoose.model("Chat", ChatModel)
export default ChatModel