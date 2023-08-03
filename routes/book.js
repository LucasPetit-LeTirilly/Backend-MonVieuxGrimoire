const express = require('express');

const router = express.Router();
const bookCtrl = require('../controllers/book');
const auth = require('../middleware/auth');
const imageUpload = require('../middleware/image-upload');
const imageCompression = require('../middleware/image-compression');


router.post('/', auth, imageUpload, imageCompression , bookCtrl.createBook);
router.post('/:id/rating', auth, bookCtrl.addRating);
router.get('/', bookCtrl.getAllBooks);
router.get('/bestrating', bookCtrl.getBestBooks);
router.get('/:id', bookCtrl.getOneBook);
router.put('/:id', auth, imageUpload, imageCompression, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);


module.exports = router;