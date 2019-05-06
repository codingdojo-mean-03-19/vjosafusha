var Task = require('../models/task');

module.exports = {
  index: (_req, res) => {
    Task.find({})
      .then(tasks => {
        res.json(tasks);
      })
      .catch(err => {
        console.log(err);
      });
  },
  show: (req, res) => {
    Task.findOne({ _id: req.params.id })
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        console.log(err);
      });
  },
  create: (req, res) => {
    Task.create(req.body)
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        console.log(err);
      });
  },
  update: (req, res) => {
    Task.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        console.log(err);
      });
  },
  destroy: (req, res) => {
    Task.deleteOne({ _id: req.params.id })
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        console.log(err);
      });
  },
};
