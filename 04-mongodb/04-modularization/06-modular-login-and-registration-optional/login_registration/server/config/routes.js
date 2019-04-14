var users = require('../controllers/users')

module.exports = function (app) {
    app.get("/", function (req, res) {
        users.index(req, res);
    });

    app.post("/", function (req, res) {
        users.create(req, res);
    });


    app.post("/session", function (req, res) {
        users.process(req, res);
    });

    app.get("/secrets", function (req, res) {
        users.secrets(req, res);
    });

    app.get("/logout", function (req, res) {
        users.logout(req, res);
    });
}