const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//GET /api/recipes/
router.get('/', recipesCtrl.index);

//GET /api/recipes/new
router.get('/new', ensureLoggedIn, recipesCtrl.new);

//GET /api/recipes/:id/edit
router.get('/edit', ensureLoggedIn, recipesCtrl.edit);

//GET /api/recipes/:id
router.get('/:id', recipesCtrl.show)

//POST /api/recipes
router.post('/', ensureLoggedIn, recipesCtrl.create);



module.exports = router;