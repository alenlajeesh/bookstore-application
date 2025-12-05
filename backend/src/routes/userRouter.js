const express= require("express");
const userController= require("../controllers/userController.js");
const auth= require("../middlewares/authMiddleware.js")
const permission =require("../middlewares/permMiddleware.js");

const router= express.Router();

router.post("/create",auth,permission("admin"),userController.createUser);
router.get("/all",auth,permission("admin"),userController.getUsers);
router.get("/me",auth,userController.getUserById);
router.put("/",auth,userController.updateUserById);
router.delete("/",auth,userController.deleteById);

module.exports= router; 
