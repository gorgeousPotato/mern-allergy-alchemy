const express = require('express');
const router = express.Router();
const stepsCtrl = require('../../controllers/api/steps');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//POST /api/recipes/:id/ingredients
router.post('/:id/steps', stepsCtrl.create);

module.exports = router;