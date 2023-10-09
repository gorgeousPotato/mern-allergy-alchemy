const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../../controllers/api/ingredients');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//POST /api/recipes/:id/ingredients
router.post('/:id/ingredients', ingredientsCtrl.create);

module.exports = router;