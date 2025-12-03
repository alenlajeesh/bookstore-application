const express= require("express");
const userController= require("../controllers/userController.js");

const router= express.Router();

router.post("/create",userController.createUser);
router.get("/",userController.getUsers);
router.get("/:id",userController.getUserById);
router.put("/:id",userController.updateUserById);
router.delete("/:d",userController.deleteById);

module.exports= router; 
