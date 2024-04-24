const mongoose = require ("mongoose");

const UserSchema = mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    user_type: {
      type: String,
      required: true,
    }
    
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
module.exports =  UserModel;
