const express = require("express");
const app = express();

const blogRouter = require("./routes/blogRouters");

app.use(express.json());

app.use("/api/v1/blogs", blogRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Blog API v1");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
