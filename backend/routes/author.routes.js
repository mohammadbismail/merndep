const AuthorController = require("../controllers/author.controller");
module.exports = function (app) {
  app.post("/api/product/", AuthorController.createOne);
  app.get("/api/product/", AuthorController.getAll);
  app.get("/api/product/:id", AuthorController.getOne);
  app.put("/api/product/:id", AuthorController.updateOne);
  app.delete("/api/product/:id", AuthorController.deleteOne);
  app.get("/api/notdone/", AuthorController.getNotDone);
  app.get("/api/doing/", AuthorController.getDoing);
  app.get("/api/done/", AuthorController.getDone);
};
