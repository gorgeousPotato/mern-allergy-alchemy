const express = require('express');
const router = express.Router();
const allergiesCtrl = require('../../controllers/api/allergies');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//GET /api/allergies
router.get('/', allergiesCtrl.index);

//POST /api/allergies
router.post('/', allergiesCtrl.create);

//DELETE /api/allergies/:id
router.delete('/:id', allergiesCtrl.delete);

module.exports = router;