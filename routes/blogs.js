const express = require("express");
const db = require("../config/database");
const router = express.Router();
const Blog = require("../models/Blog");

// Get blog list
router.get("/", (req, res) => {
  Blog.findAll()
    .then(blogs => {
      blogs = JSON.parse(JSON.stringify(blogs));
      console.log(blogs);
      res.render("blogs", { blogs });
    })
    .catch(err => console.log(err));
});

//Display blog form
router.get("/add", (req, res) => {
  res.render("add");
});

// Add blog
router.post("/add", (req, res) => {
  console.log(req.body);
  const data = {
    title: "Looking for a react developoer",
    keywords: "react,javascript,html,css",
    author: "Bdownhour",
    description_field:
      "lorem lkajsd fk eifnk , as.d,nflasd jfoi jwkejr lkajs dflkjasd lfkja sdlfkjowkje rl;ka jsdlkf jalskd jflakjs dfoj wl;aje rl klajsd f;lak dsfa'd sfasdj f;lajksd f;la jsd;lfkjasdf",
    contact_email: "test@gmail.com"
  };

  let { title, keywords, author, description_field, contact_email } = data;

  //Insert into table
  Blog.create({
    title,
    keywords,
    author,
    description_field,
    contact_email
  })
    .then(blog => res.redirect("/blogs"))
    .catch(err => console.log(err));
});

module.exports = router;
