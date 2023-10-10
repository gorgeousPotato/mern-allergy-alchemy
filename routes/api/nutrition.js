const express = require('express');
const router = express.Router();
const nutritionCtrl = require('../../controllers/api/nutrition');
const ensureLoggedIn = require('../../config/ensureLoggedIn')



//GET /api/recipes/:id/nutrition
router.post('/:id/nutrition', nutritionCtrl.show)



module.exports = router;