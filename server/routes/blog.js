const express = require('express');
const router = express.Router();

const { getAllBlogs, createNewBlog, deleteBlog} = require('../controllers/BlogController');

router.route('/blog').get(getAllBlogs).post(createNewBlog).delete(deleteBlog); 

module.exports = router;