var tasks = require("../controllers/tasks")

module.exports = function (app) {
    // GET: Retrieve all Tasks
    app.get("/", function (req, res) {
        tasks.index(req, res);
    });

    // GET: Retrieve a Task by ID
    app.get("/:id", function (req, res) {
        tasks.find_one(req, res);
    });

    // POST: Create a Task
    app.post("/", function (req, res) {
        tasks.create(req, res);
    });

    // PUT: Update a Task by ID
    app.put("/:id", function (req, res) {
        tasks.update(req, res);
    })

    // DELETE: Delete a Task by ID
    app.delete('/:id', function (req, res) {
        tasks.delete(req, res);
    })
}