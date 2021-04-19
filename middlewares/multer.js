const multer = require('multer');

const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, ''); 
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('image not valid'), false);
  }
}; 

exports.processImage = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  }, 
  fileFilter,
});
