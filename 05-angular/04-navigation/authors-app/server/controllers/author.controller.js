const Author = require('mongoose').model('Author');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Author.find({})
      .then(authors => res.json(authors))
      .catch(error => {
        res.status(Http.InternalServerError).json(error);
      });
  },

  show(req, res) {
    const { id: AuthorID } = req.params;
    Author.findById(AuthorID)
      .then(author => res.json(author))
      .catch(error => res.status(Http.NoContent).json(error));
  },

  create(req, res) {
    Author.create(req.body)
      .then(book => res.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  update(req, res) {
    const { id: AuthorID } = req.params;
    Author.findByIdAndUpdate(AuthorID, { name: req.body.name })
      .then(author => res.json(author))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  destroy(req, res) {
    const { id: AuthorID } = req.params;
    Author.findByIdAndRemove(AuthorID)
      .then(author => res.json(author))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },
};
