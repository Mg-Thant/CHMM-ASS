const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

const postRoutes = require("./routes/post");
const { adminRoutes } = require("./routes/admin");
const sequelize = require("./utils/database")

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", (req, res, next) => {
  console.log("admin middlewre");
  next();
});

app.use((req, res, next) => {
  console.log("parent middleware");
  next();
});

app.use("/post", (req, res, next) => {
  console.log("post middleware");
  next();
});

app.use(postRoutes);
app.use("/admin", adminRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(8081);
  })
  .catch((err) => console.log(err));
