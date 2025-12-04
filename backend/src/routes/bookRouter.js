const router= require("express").Router();
const {createBook,getBookById,getAllBooks,updateBookById,deleteBookById}=require("../controllers/bookControllers");

router.post("/",createBook);
router.get("/",getAllBooks);
router.get("/:id",getBookById);
router.put("/:id",updateBookById);
router.delete("/:id",deleteBookById);

module.exports=router;
