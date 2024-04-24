const express = require ("express");
const {getAllUsers,getUser} = require("../Controllers/UserController.js");

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/:id", getUser);


module.exports =  router;
