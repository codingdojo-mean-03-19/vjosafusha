const { NoteController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/notes', NoteController.index)
  .post('/', NoteController.create)
  .get('/:note_id', NoteController.show)
  .put('/:note_id', NoteController.update)
  .delete('/:note_id', NoteController.destroy);
