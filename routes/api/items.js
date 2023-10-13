const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//POST /api/items
router.post('/', itemsCtrl.create);

//GET /api/items
router.get('/', itemsCtrl.index);


module.exports = router;