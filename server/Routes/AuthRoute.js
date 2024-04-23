const express = require("express");
const { registerUser } = require("../Controllers/AuthController.js");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
