const express = require('express');
const router = express.Router();
const stepsCtrl = require('../../controllers/api/steps');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//POST /api/recipes/:id/steps
router.post('/:id/steps', stepsCtrl.create);

//DELETE /api/recipes/:id1/steps/:id2
router.delete('/:id1/steps/:id2', stepsCtrl.delete);

module.exports = router;