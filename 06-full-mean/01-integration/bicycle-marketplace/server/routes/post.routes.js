const { PostController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/posts', PostController.index)
  .post('/posts', PostController.createPost)
  .put('/:post_id', PostController.updatePost)
  .delete('/:post_id', PostController.deletePost)
  .get('/posts/user_id', PostController.findPostByUserID);
