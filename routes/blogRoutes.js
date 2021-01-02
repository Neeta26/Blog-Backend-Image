const express = require("express");
const {
  getAllBlogs,
  getById,
  createBlog,
  deleteById,
} = require("../controllers/blogController");
const upload = require("../controllers/imageMulter.js");
const router = express.Router();
router.route("/").get(getAllBlogs).post(upload.single("image"), createBlog);
router.route("/:id").get(getById).delete(deleteById);

module.exports = router;
