// const post = require('../Controller/postController');
const express = require('express');
const postData = require('../Controller/postController');
const { post } = require('../app');

const router = express.Router();

router.get("/", postData.getAllPost);
router.get("/:id", postData.getSinglePost);
router.post("/", postData.createPost);
router.patch("/:id", postData.updatePost);
router.delete("/:id", postData.removePost);
module.exports = router;