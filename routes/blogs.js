const express = require("express");
const db = require("../config/database");
const router = express.Router();
const Blog = require("../models/Blog");

router.get("/", (req, res) => {
  Blog.findAll()
    .then(blogs => {
      console.log(blogs);
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
});

module.exports = router;
