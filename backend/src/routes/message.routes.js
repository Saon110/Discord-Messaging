const express = require("express");
const { listMessages, updateMessage } = require("../controllers/message.controller");
const { deleteMessage } = require("../controllers/message.controller");

const router = express.Router({ mergeParams: true });

router.get("/", listMessages);
router.put("/:messageId", updateMessage);
router.delete("/:messageId", deleteMessage);

module.exports = router;