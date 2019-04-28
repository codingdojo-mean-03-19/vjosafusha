var Task = require('../models/task');

module.exports = {
  index: function(req, res) {
    Task.find({})
      .then(tasks => {
        res.json(tasks);
      })
      .catch(err => {
        console.log(err);
      });
  },

  create: function(req, res) {
    Task.create(req.body)
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        console.log(err);
      });
  },

  find_one: function(req, res) {
    Task.findOne({
      _id: req.params.id,
    })
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        console.log(err);
      });
  },

  update: function(req, res) {
    Task.update({
      _id: req.params.id,
    })
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        console.log(err);
      });
  },

  delete: function(req, res) {
    Task.delete({
      _id: req.params.id,
    })
      .then(task => {
        res.json(task);
      })
      .catch(err => {
        console.log(err);
      });
  },
};
