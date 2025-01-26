const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const {
  signout,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/userController");
const router = express.Router();

router.post("/signout", signout);
router.delete("/delete/:email", verifyToken, deleteUser);
router.get("/getusers", verifyToken, getUsers);
router.get("/:email", getUser);

// //Admin Routes
// router.get("/admin",verifyToken, authorizeRoles("user"),(req,res)=>{
//     res.json({
//         message : "Welcome Admin"
//     })
// })
// //Both Admin and User Routes
// router.get("/user",verifyToken,authorizeRoles("admin", "user"),(req,res)=>{
//     res.json({
//         message : "Welcome User"
//     })
// })
module.exports = router;
