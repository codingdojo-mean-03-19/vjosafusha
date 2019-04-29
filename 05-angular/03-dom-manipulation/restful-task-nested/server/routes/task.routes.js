const { TaskController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/tasks', TaskController.index)
  .post('/', TaskController.create)
  .get('/:task_id', TaskController.show)
  .put('/:task_id', TaskController.update)
  .delete('/:task_id', TaskController.destroy);
