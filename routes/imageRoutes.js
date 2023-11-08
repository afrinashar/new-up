// routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageControllers');
const upload = require('../middleware/upload');

router.get('/images', imageController.getAllImages);
router.post('/images', upload.single('image'), imageController.createImage);
router.put('/images/:id', imageController.updateImage);
router.delete('/images/:id', imageController.deleteImage);

module.exports = router;
