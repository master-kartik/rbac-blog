const express = require("express");

const {
  create,
  deletepost,
  getposts,
  updatepost,
} = require("../controllers/blogController.js");
const verifyToken = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

module.exports = router;
