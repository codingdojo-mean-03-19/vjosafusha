const Note = require('mongoose').model('Note');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Note.find({})
      .then(notes => res.json(notes))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  show(req, res) {
    const { note_id: NoteId } = req.params;
    Note.findById(NoteId)
      .then(note => res.json(note))
      .catch(error => res.status(Http.NoContent).json(error));
  },
  create(req, res) {
    Note.create(req.body)
      .then(note => res.json(note))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  update(req, res) {
    const { note_id: NoteId } = req.params;
    Note.findByIdAndUpdate(NoteId, {
      note: req.body.note,
    })
      .then(product => res.json(product))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroy(req, res) {
    const { note_id: NoteId } = req.params;
    Note.findByIdAndRemove(NoteId)
      .then(note => res.json(note))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },
};
