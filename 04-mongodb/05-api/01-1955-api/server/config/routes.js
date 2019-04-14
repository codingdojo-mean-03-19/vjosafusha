var users = require("../controllers/users");


module.exports = function (app) {
    //GET '/' will serve up the full collection of people born in 1955
    app.get('/', function (req, res) {
        users.index(req, res);
    });

    //GET '/new/:name/' will add a name into the database. 
    //So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
    app.get('/new/:name/', function (req, res) {
        users.add(req, res);
    });

    // GET '/remove/:name/' will delete a name from the database.
    app.get('/remove/:name/', function (req, res) {
        users.destroy(req, res);
    });

    // GET '/:name' will bring up the document of that particular person.
    app.get('/:name', function (req, res) {
        users.show(req, res);
    })
}