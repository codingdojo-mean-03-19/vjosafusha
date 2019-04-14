
var sloths = require('../constollers/sloths.js')

module.exports = function (app) {
    app.get('/', function (req, res) {
        sloths.index(req, res);
    });

    app.get('/new', function (req, res) {
        sloths.new(req, res);
    });

    app.post('/add', function (req, res) {
        sloths.add(req, res);
    });

    app.get('/mongooses/:id', function (req, res) {
        sloths.show(req, res);
    });

    app.get('/mongooses/edit/:id', function (req, res) {
        sloths.edit(req, res);
    });

    app.post('/mongooses/:id', function (req, res) {
        sloths.update(req, res);
    });

    app.get('/delete/:id', function (req, res) {
        sloths.destroy(req, res);
    });

}