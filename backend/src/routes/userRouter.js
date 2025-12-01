const express= require("express");
const userController= require("../controllers/userController.js");

const router= express.Router();

router.post("/user/create",userController.createUser);
router.get("/user/",userController.getUsers);
router.get("/user/:id",userController.getUserById);
router.put("/user/:id",userController.updateUserById);
router.delete("/user/:d",userController.deleteById);

module.exports= router; 
