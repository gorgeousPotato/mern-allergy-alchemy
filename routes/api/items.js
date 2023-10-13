const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//POST /api/items
router.post('/', ensureLoggedIn, itemsCtrl.create);

//GET /api/items
router.get('/', ensureLoggedIn, itemsCtrl.index);

//DELETE /api/items
router.delete('/', ensureLoggedIn, itemsCtrl.delete);


module.exports = router;