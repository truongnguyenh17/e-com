const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  uploadImages,
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/",
  uploadPhoto.array("images", 2),
  authMiddleware,
  blogImgResize,
  createBlog);

  
router.put("/:id", authMiddleware, updateBlog);

router.get("/:id", getBlog);
router.get("/", getAllBlogs);

router.delete("/:id",authMiddleware,isAdmin,  deleteBlog);

module.exports = router;