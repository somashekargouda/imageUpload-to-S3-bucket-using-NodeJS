const ImageUpload = require("../models/demo.model")
const { imageUpload } = require("../middlewares/imageupload");

exports.uploadImage = async (req, res) =>{
    try {
        const {
        image
        } = req.body;
        const { Location } = await imageUpload(req.file.originalname, req.file.buffer);
        const product = new Product({
        
          image: Location,
         
        });
        const result = await product.save();
        res.status(201).json({
          message: 'Image created',
          result,
        });
      } catch (err) {
        res.status(500).json({ error: err });
      }
}