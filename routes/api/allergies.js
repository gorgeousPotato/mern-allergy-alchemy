const express = require('express');
const router = express.Router();
const allergiesCtrl = require('../../controllers/api/allergies');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//GET /api/allergies
router.get('/', ensureLoggedIn, allergiesCtrl.index);

//POST /api/allergies
router.post('/', ensureLoggedIn, allergiesCtrl.create);

//DELETE /api/allergies/:id
router.delete('/:id', ensureLoggedIn, allergiesCtrl.delete);

module.exports = router;