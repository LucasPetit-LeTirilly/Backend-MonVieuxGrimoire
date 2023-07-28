const express = require('express');
const multer = require('multer');

const router = express.Router();
const bookCtrl = require('../controllers/book');
const auth = require('../middleware/auth');
const imageCompression = require('../middleware/image-compression');

const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post('/', auth, upload.single("image"), imageCompression , bookCtrl.createBook);
router.post('/:id/rating', auth, bookCtrl.addRating);
router.get('/', bookCtrl.getAllBooks);
router.get('/bestrating', bookCtrl.getBestBooks);
router.get('/:id', bookCtrl.getOneBook);
router.put('/:id', auth, upload.single("image"), imageCompression, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);


module.exports = router;