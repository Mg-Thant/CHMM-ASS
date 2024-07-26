const express = require("express");
const path = require("path");

const router = express.Router();

const postController = require("../controllers/posts")

router.get("/create-post", postController.renderCreatePage);
router.get("/post-edit/:postId", postController.renderEditPage)

router.post("/", postController.createPost);
router.post("/post/:postId", postController.deletePost);
router.post("/post-edit", postController.updatePost)

module.exports = {adminRoutes : router};