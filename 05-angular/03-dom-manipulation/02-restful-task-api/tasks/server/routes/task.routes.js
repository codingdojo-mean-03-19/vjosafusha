const { TaskController } = require('../controllers');

module.exports = function(app) {
  app.get('/', TaskController.index);
  app.post('/', TaskController.create);
  app.get('/:task_id', TaskController.show);
  app.put('/:task_id', TaskController.update);
  app.delete('/:task_id', TaskController.destroy);
};
