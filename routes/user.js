const express = require('express');
const router = express.Router();
const inputValidation = require('../middleware/input-validation');

const userCtrl = require('../controllers/user');

router.post('/signup',inputValidation, userCtrl.signup);
router.post('/login',inputValidation, userCtrl.login);

module.exports = router;