const router = require('express').Router();
const Author = require('../models/authors.model');
const { AuthorController } = require('../controllers/index');

router.get('/tasks', AuthorController.index);
router.post('/', AuthorController.create);
router.delete('/:id', AuthorController.destroy);
router.get('/:id', AuthorController.show);
router.put('/:id', AuthorController.update);

module.exports = router;
