const express = require('express')
const router = express.Router();

const 
{
    createProduct ,
    updateProduct,
    deleteProduct,
    getaProduct,
    getAllProduct,
}= require('../controller/productCtrl');
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImages");
router.post("/",
    authMiddleware,isAdmin,
    uploadPhoto.array("images", 2),
    createProduct);
router.put("/:id",authMiddleware,updateProduct);
router.delete("/:id",authMiddleware,isAdmin, deleteProduct),
router.get('/:id',getaProduct),
router.get('/',getAllProduct)
module.exports = router;