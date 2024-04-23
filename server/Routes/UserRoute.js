const express = require ("express");
const {getAllUsers,getUser} = require("../Controllers/UserController.js");

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getAllUsers);

module.exports =  router;
