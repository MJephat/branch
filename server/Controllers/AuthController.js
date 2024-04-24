const UserModel = require('../Models/userModel.js');

exports.registerUser = async(req, res) => {
    const newUser = new UserModel(req.body);
    const {user_id} = req.body
    try{
        const oldUser = await UserModel.findOne({user_id});

        if (oldUser)
            return res.status(400).json({message: "User already exists"});

        const user = await newUser.save();
        res.status(200).json({user});  
    } catch(error){
        res.status(500).json(error.message);
    }
};

// module.exports = registerUser;


