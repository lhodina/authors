const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.get("/authors", AuthorController.getAllAuthors);
    app.post("/authors", AuthorController.createAuthor);
    app.get("/authors/:id", AuthorController.getAuthor);
    app.patch("/authors/:id", AuthorController.updateAuthor);
    app.delete("/authors/:id", AuthorController.deleteAuthor);
}
