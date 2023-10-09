const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//GET /api/categories
router.get('/', categoriesCtrl.index);

module.exports = router;