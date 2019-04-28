var Book = require("../models/author")

module.exports = {
    index: function (req, res) {
        Book.find({})
            .then(book => {
                res.json(book);
            })
            .catch(err => {
                console.log(err);
            })
    },

    create: function (req, res) {
        Book.create(req.body)
            .then(book => {
                res.json(book)
            })
            .catch(err => {
                console.log(err);
            })
    },

    find_one: function (req, res) {
        Book.findOne({
            _id: req.params.id
        })
            .then(book => {
                res.json(book);
            }).catch(err => {
                console.log(err);
            })
    },

    update: function(req, res){
        Book.update({
            _id: req.params.id
        }).then(book => {
            res.json(book);
        }).catch(err => {
            console.log(err)
        })
    },

    delete: function(req, res){
        Book.delete({
            _id: req.params.id
        }).then(book =>{
            res.json(book)
        }).catch(err => {
            console.log(err);
        })
    }
}
