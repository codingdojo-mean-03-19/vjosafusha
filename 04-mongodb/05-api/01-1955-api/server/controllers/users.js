
var User = require('../models/user')

module.exports = {
    index: function (req, res) {
        User.find({})
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                console.log(err);
            })

    },

    add: function (req, res) {
        User.create({
            name: req.params.name
        })
            .then(user => {
                console.log(user);
                res.json(user);
            })
            .catch(err => {
                console.log(err);
            })

    },

    destroy: function (req, res) {
        var name = req.params.name;
        User.remove({ name: name })
            .then(user => {
                console.log(user);
                res.json(user);
            })
            .catch(error => {
                console.log(error);
            });
    },

    show: function (req, res) {
        User.findOne({ name: req.params.name })
            .then(user => {
                res.json(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
}