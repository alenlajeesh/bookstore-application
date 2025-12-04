const router= require("express").Router();
const auth = require("../middlewares/authMiddleware")
const permission=require("../middlewares/permMiddleware");
const {createBook,getBookById,getAllBooks,updateBookById,deleteBookById}=require("../controllers/bookControllers");

router.post("/",auth,permission("admin","manager"),createBook);
router.get("/",getAllBooks);
router.get("/:id",getBookById);
router.put("/:id",auth,permission("admin","manager"),updateBookById);
router.delete("/:id",auth,permission("admin","manager"),deleteBookById);

module.exports=router;
