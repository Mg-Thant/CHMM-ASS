const express = require("express");
const path = require("path");

const router = express.Router();

const posts = [];

router.get("/create-post", (req, res) => {
    res.render("postCreate", {title : "Create Post"})
});

router.post("/", (req, res) => {
    const {title, image, description} = req.body;
    console.log(title, image, description)
    posts.push({
        title,
        image,
        description
    });
    res.redirect("/")
})

module.exports = {adminRoutes : router, posts};