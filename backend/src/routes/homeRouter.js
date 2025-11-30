const express = require("express")
const router = express.Router();

const {getHome}= require("../controllers/homeController.js");

router.get("/",getHome);

module.exports =router;
