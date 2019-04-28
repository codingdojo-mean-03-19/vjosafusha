var authors = require("../controllers/authors")


module.exports = function (app) {
    // GET: Retrieve all Authors
    app.get("/authors", function (req, res) {
        authors.index(req, res);
    });

    // GET: Retrieve a Author by ID
    app.get("author/:id", function (req, res) {
        authors.find_one(req, res);
    });

    // POST: Create a Author
    app.post("author/", function (req, res) {
        authors.create(req, res);
    });

    // PUT: Update a Author by ID
    app.put("author/:id", function (req, res) {
        authors.update(req, res);
    })

    // DELETE: Delete a Author by ID
    app.delete('author/:id', function (req, res) {
        authors.delete(req, res);
    })

    // app.get('/author/books', authors.findBooks(req, res));
}