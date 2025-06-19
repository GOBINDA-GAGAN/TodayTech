const express = require('express');
const { createBlog, getAllBlogs, getBlogsById, updateBlogById, deleteBlogById } = require('../controller/blogController');
const blogRouter = express.Router();

//? POST create new blog
blogRouter.post('/', createBlog);

//? GET all blogs
blogRouter.get('/', getAllBlogs);

//? GET single blog by ID
blogRouter.get('/:id', getBlogsById);



//? PATCH update blog by ID
blogRouter.patch('/:id', updateBlogById);

//? DELETE blog by ID
blogRouter.delete('/:id', deleteBlogById);

module.exports = blogRouter;
