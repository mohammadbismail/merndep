const { Author } = require("../models/author.model");

module.exports.createOne = (request, response) => {
  const { title, price, description, status } = request.body;
  Author.create({
    title,
    price,
    description,
    status,
  })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAll = (request, response) => {
  Author.find({})
    .then((authors) => response.json(authors))
    .catch((err) => response.json(err));
};

module.exports.getOne = (request, response) => {
  Author.findOne({ _id: request.params.id })
    .then((author) => response.json(author))
    .catch((err) => response.json(err));
};

module.exports.updateOne = (request, response) => {
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => response.json(updatedAuthor))
    .catch((err) => response.status(400).json(err));
};

module.exports.deleteOne = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};

module.exports.getNotDone = (request, response) => {
  Author.find({ status: "notdone" })
    .then((authors) => response.json(authors))
    .catch((err) => response.json(err));
};
module.exports.getDoing = (request, response) => {
  Author.find({ status: "doing" })
    .then((authors) => response.json(authors))
    .catch((err) => response.json(err));
};
module.exports.getDone = (request, response) => {
  Author.find({ status: "done" })
    .then((authors) => response.json(authors))
    .catch((err) => response.json(err));
};
