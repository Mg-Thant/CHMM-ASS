const db = require("../utils/database");

const Post = class {
  constructor(title, description, img_url) {
    this.title = title;
    this.description = description;
    this.img_url = img_url;
  }

  createPost = () => {
    return db.execute("INSERT INTO posts_table (title, description, img_url) VALUES (?, ?, ?)", [
        this.title, this.description, this.img_url
    ])
  };

  updatePost = (id) => {
    return db.execute("UPDATE posts_table SET title=?, description = ?, img_url = ? WHERE posts_table.id = ?", [
        this.title, this.description, this.img_url, id
    ])  
  }

  static getPosts = () => {
    return db.execute("SELECT * FROM posts_table");
  };

  static getPost = (id) => {
    return db.execute("SELECT * FROM posts_table WHERE posts_table.id = ?", [id]);
  };

  static deletePost = (id) => {
    return db.execute("DELETE FROM posts_table WHERE posts_table.id = ?", [id]);
  }
};

module.exports = Post;
