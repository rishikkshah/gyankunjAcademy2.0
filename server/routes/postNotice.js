const express = require("express");
const { insertNotice } = require("../db/Collection/noticeCollection");
const router = express.Router();

router.post("/", async (req, res) => {
  insertNotice(req.body);
});

module.exports = router;
