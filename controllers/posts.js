const Post = require("../models/post");


exports.createPost = (req, res) => {
  const { title, image, description } = req.body;
  Post.create({
    title,
    description,
    img_url: image
  }).then(() => {
    res.redirect("/")
  }).catch(err => console.log(err))
};

exports.getPosts = (req, res) => {
  Post.findAll()
    .then((post) => {
      res.render("homePage", { title: "Home Page", postArr: post });
    })
    .catch((err) => console.log(err));
};

exports.renderCreatePage = (req, res) => {
  res.render("postCreate", { title: "Create Post" });
};

exports.getPost = (req, res) => {
  const postId = req.params.postId;
  Post.findOne({ where: { id: postId } })
    .then((post) => {
      res.render("details", { title: "Details", post });
    })
    .catch((err) => console.log(err));
};

exports.deletePost = (req, res) => {
  const postId = req.params.postId;
  Post.destroy({ where: { id: postId } })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.renderEditPage = (req, res) => {
  const { postId } = req.params;
  Post.findByPk(postId).then((post) => {
    res.render("post_edit", { title : "Post Edit", post})
  }).catch(err => console.log(err))
};

exports.updatePost = (req, res) => {
  const { id, title, description, image } = req.body;
  Post.findByPk(id).then((post) => {
    post.title = title,
    post.description = description,
    post.img_url = image
    return post.save();
  }).then(() => {
    res.redirect("/");
  }).catch(err => console.log(err))
};
