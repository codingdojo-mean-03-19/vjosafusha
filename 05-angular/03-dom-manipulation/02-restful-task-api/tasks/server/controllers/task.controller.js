const Task = require('mongoose').model('Task');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Task.find({})
      .then(tasks => res.json(tasks))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  show(req, res) {
    const { task_id: TaskId } = req.params;
    Task.findById(TaskId)
      .then(task => res.json(task))
      .catch(error => res.status(Http.NoContent).json(error));
  },

  create(req, res) {
    Task.create(req.body)
      .then(task => res.json(task))
      .catch(error => {
        const errors = Object.key(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  update(req, res) {
    const { task_id: TaskId } = req.params;
    Task.findByIdAndUpdate(TaskId)
      .then(task => res.json(task))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  destroy(req, res) {
    const { task_id: TaskId } = req.params;
    Task.findByIdAndRemove(TaskId)
      .then(task => res.json(task))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },
};
