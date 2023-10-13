const express = require('express');
const router = express.Router();
const stepsCtrl = require('../../controllers/api/steps');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//POST /api/recipes/:id/steps
router.post('/:id/steps', ensureLoggedIn, stepsCtrl.create);

//DELETE /api/recipes/:id1/steps/:id2
router.delete('/:id1/steps/:id2', ensureLoggedIn, stepsCtrl.delete);

//DELETE /api/recipes/:id1/steps/:id2
router.put('/:id1/steps/:id2', ensureLoggedIn, stepsCtrl.update);

module.exports = router;