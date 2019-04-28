var books = require("../controllers/books")

module.exports = function (app) {
    // GET: Retrieve all Authors
    app.get("/books", function (req, res) {
        books.index(req, res);
    });

    // GET: Retrieve a Author by ID
    app.get("book/:id", function (req, res) {
        books.find_one(req, res);
    });

    // POST: Create a Author
    app.post("/book", function (req, res) {
        books.create(req, res);
    });

    // PUT: Update a Author by ID
    app.put("book/:id", function (req, res) {
        books.update(req, res);
    })

    // DELETE: Delete a Author by ID
    app.delete('book/:id', function (req, res) {
        books.delete(req, res);
    })
}