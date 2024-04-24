const express = require("express");
const { addMessage, getMessages, allMessages } = require("../Controllers/MessageController.js");

const router = express.Router();

router.post("/", addMessage);
router.get("/messages", allMessages);
router.get("/:chatId", getMessages);

module.exports = router;
