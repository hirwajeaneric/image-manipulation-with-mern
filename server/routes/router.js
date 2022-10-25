const express = require('express');
const router = express.Router();
const { test, save, find, upload, deleteUser } = require('../controllers/user');
const multer = require('multer');
const moment = require('moment');
const User = require('../models/user');

router.get('/' ,test);

router.get('/list', find);

router.post('/register', upload.single('photo'), save);

router.delete('/delete', deleteUser)

module.exports = router;