const posts = [];

exports.getPosts = (req, res) => {
  res.render("homePage", { title: "HomePage", postArr: posts });
};

exports.renderCreatePage = (req, res) => {
  res.render("postCreate", { title: "Create Post" });
};

exports.createPost = (req, res) => {
  const { title, image, description } = req.body;
  posts.push({
    id: Math.random() + 1,
    title,
    image,
    description,
  });
  res.redirect("/");
};

exports.getPost = (req, res) => {
  const postId = req.params.postId;
  const post = posts.find((post) => post.id == postId);
  console.log(post);
  res.render("details", { title: "Details Page", post });
};
