const posts = [];
const Post = require("../models/post");

exports.getPosts = (req, res) => {
  Post.getPosts()
    .then(([rows]) => {
      res.render("homePage", { title: "HomePage", postArr: rows });
    })
    .catch((err) => console.log(err));
};

exports.renderCreatePage = (req, res) => {
  res.render("postCreate", { title: "Create Post" });
};

exports.createPost = (req, res) => {
  const { title, image, description } = req.body;
  const post = new Post(title, description, image);
  post
    .createPost()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
  // posts.push({
  //   id: Math.random() + 1,
  //   title,
  //   image,
  //   description,
  // });
  // res.redirect("/");
};

exports.getPost = (req, res) => {
  const postId = req.params.postId;
  Post.getPost(postId)
    .then(([post]) => {
      console.log(post);
      res.render("details", { title: "Details", post: post[0] });
    })
    .catch((err) => console.log(err));
  // const post = posts.find((post) => post.id == postId);
};

exports.deletePost = (req, res) => {
  const postId = req.params.postId;
  Post.deletePost(postId)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.renderEditPage = (req, res) => {
  const { postId } = req.params;
  Post.getPost(postId)
    .then(([post]) => {
      res.render("post_edit", { title: "Edit Post", post: post[0]});
    })
    .catch((err) => console.log(err));
};

exports.updatePost = (req, res) => {
  const {title, description, image} = req.body;
  const postId = req.params.id;
  const post = new Post(title, description, image);
  post.updatePost(postId).then(() => {
    res.redirect("/")
  }).catch(err => console.log(err))
}