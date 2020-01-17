const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

const db = require("./config/database");

db.authenticate()
  .then(() => {
    console.log("connected to DB");
  })
  .catch(err => {
    console.log(err);
  });

app.engine("handlebars", exphbs({ defaultLayout: "default" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.use("/blogs", require("./routes/blogs"));

//Index route
app.get("/", (req, res) => {
  res.render("index", { layout: "landing" });
});

app.listen(PORT, (err, res) => {
  if (err) throw err;
  console.log(`Server running at http://localhost:${PORT}`);
});
