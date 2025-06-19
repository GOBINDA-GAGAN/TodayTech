//?  Create blog

let blogs = [];

exports.createBlog = async (req, res) => {
  try {
    const { title, content, author, draft, image } = req.body;
    const newBlog = { title, content, author, draft, image };

    blogs.push({ ...req.body, id: blogs.length + 1 });

    return res.status(201).json({
      message: "Blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    console.error("Error creating blog:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    let publicBlogs = blogs.filter((blog) => blog.draft === false);

    return res.status(200).json({
      message: "All blogs fetched",
      data: publicBlogs,
    });
  } catch (error) {
    return console.error("Error fetching blogs:", error.message);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Get  blogs by id
exports.getBlogsById = async (req, res) => {
  try {
    const { id } = req.params;

    let searchBlog = blogs.filter((blog) => blog.id == id);

    return res.status(200).json({
      message: "All search blogs fetched",
      data: searchBlog,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

//update blog
exports.updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    let blogFound = false;

    let updateBlogs = blogs.map((blog) => {
      if (blog.id == id) {
        blogFound = true;
        return { ...blog, ...req.body };
      }
      return blog; // not blogs!
    });

    if (!blogFound) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    blogs = updateBlogs;

    return res.status(200).json({
      message: "Blog updated successfully",
      data: blogs,
    });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the blog index by ID
    const index = blogs.findIndex((blog) => blog.id == id);

    // If not found, return 404
    if (index === -1) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    // Remove the blog from array
    const deletedBlog = blogs.splice(index, 1)[0];

    return res.status(200).json({
      message: "Blog deleted successfully",
      deleted: deletedBlog,
    });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};