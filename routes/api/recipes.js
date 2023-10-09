const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//GET /api/recipes
router.get('/new', recipesCtrl.new);

module.exports = router;