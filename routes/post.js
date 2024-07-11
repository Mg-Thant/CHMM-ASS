const express = require("express");
const path = require("path");
const { posts } = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("homePage", { title: "HomePage", postArr: posts });
});

router.get("/post", (req, res) => {
  res.render("postPage", { title: "Post Page" });
});

module.exports = router;
