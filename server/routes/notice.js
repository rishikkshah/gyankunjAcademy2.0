const express = require("express");
const createNotice = require("../public/javascripts/pdf");
const { getNotices } = require("../db/Collection/noticeCollection");
const router = express.Router();

router.get("/", async (req, res) => {
  // res.send("API running properly");
  const data = await getNotices();
  // createNotice(res, data);
  res.send(data);
});

module.exports = router;
