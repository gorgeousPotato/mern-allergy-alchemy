const express = require('express');
const router = express.Router();
const imagesCtrl = require('../../controllers/api/images');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });



//POST /api/recipes/:id/images
router.post('/:id/images', upload.single("image"), imagesCtrl.create);

module.exports = router;