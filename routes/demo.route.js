const express = require('express');

const router = express.Router();
const { processImage } = require("../middlewares/multer");

const ImageController = require("../controllers/demo.controller")


router.post("/postimage",processImage.single('image'),ImageController.uploadImage )


module.exports = router