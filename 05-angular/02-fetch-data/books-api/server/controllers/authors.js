var Author = require("../models/author")

module.exports = {
    index: function (req, res) {
        Author.find({})
            .then(author => {
                res.json(author);
            })
            .catch(err => {
                console.log(err);
            })
    },

    create: function (req, res) {
        Author.create(req.body)
            .then(author => {
                res.json(author)
            })
            .catch(err => {
                console.log(err);
            })
    },

    find_one: function (req, res) {
        Author.findOne({
            _id: req.params.id
        })
            .then(author => {
                res.json(author);
            }).catch(err => {
                console.log(err);
            })
    },

    update: function(req, res){
        Author.update({
            _id: req.params.id
        }).then(author => {
            res.json(author);
        }).catch(err => {
            console.log(err)
        })
    },

    delete: function(req, res){
        Author.delete({
            _id: req.params.id
        }).then(author =>{
            res.json(author)
        }).catch(err => {
            console.log(err);
        })
    }
}