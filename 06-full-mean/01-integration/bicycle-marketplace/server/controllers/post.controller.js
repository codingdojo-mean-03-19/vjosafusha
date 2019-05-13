const Post = require('mongoose').model('Post');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Post.find({})
      .then(posts => {
        res.json(posts);
      })
      .catch(error => {
        res.status(Http.UnprocessableEntity.json(error));
      });
  },

  createPost(req, res) {
    Post.create(req.body)
      .then(post => {
        res.json(post);
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },

  updatePost(req, res) {
    const { post_id: PostId } = req.params;
    Post.findByIdAndUpdate({
      PostId,
      title: req.body.title,
      content: req.body.content,
      price: req.body.price,
      location: req.body.location,
      user: req.body.user_id,
    }).then(post => {
      res.json(post).catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
    });
  },

  deletePost(req, res) {
    const { post_id: PostId } = req.params;
    Post.findByIdAndDelete(PostId)
      .then(post => res.json(post))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },

  findPostByUserID(req, res) {
    const user_id = req.params;
    console.log(user_id);
    Post.find({ user: user_id })
      .populate('user')
      .then(posts => res.json(posts))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },
};
