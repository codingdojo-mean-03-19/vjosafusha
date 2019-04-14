var Sloth = require('../models/sloth.js');

module.exports = {
    index: function (req, res) {
        Sloth.find({})
            .then(sloths => res.render('index', { sloths: sloths }))
            .catch(console.log);
    },
    new: function (req, res) {
        res.render('new');
    },

    add: function (req, res) {
        var sloth = new Sloth(req.body);
        sloth.save(function (err) {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    },

    show: function (req, res) {
        Sloth.find({ _id: req.params.id }, function (err, sloth) {
            if (err) {
                console.log(err);
            }
            res.render('show_one', { sloth: sloth[0] });
        });
    },

    edit: function (req, res) {
        Sloth.find({ _id: req.params.id })
            .then(sloth => {
                console.log(sloth);
                res.render('edit', { sloth: sloth[0] });
            })
            .catch(console.log);
    },

    update: function (req, res) {
        console.log('body', req.body);
        Sloth.update({ _id: req.params.id }, req.body)
            .then(sloth => {
                console.log(sloth);
                res.redirect('/');
            })
            .catch(console.log);
    },

    destroy: function (req, res) {
        var id = req.params.id;
        Sloth.remove({ _id: id })
            .then(sloth => {
                console.log(sloth);
                res.redirect('/');
            })
            .catch(console.log);
    }
}