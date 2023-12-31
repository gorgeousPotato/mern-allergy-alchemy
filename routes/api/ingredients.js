const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../../controllers/api/ingredients');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//POST /api/recipes/:id/ingredients
router.post('/:id/ingredients', ensureLoggedIn, ingredientsCtrl.create);

//POST /api/recipes/:id/ingredients/:id
router.delete('/:id1/ingredients/:id2', ensureLoggedIn, ingredientsCtrl.delete);

module.exports = router;