const express = require('express');
const router = express.Router();
const postC = require('../../controllers/api/postC');

router.get('/', postC.getAllPosts);
router.post('/', postC.createPost);
router.get('/:id', postC.getAllPost);
router.put('/:id', postC.updatePost);
router.delete('/:id', postC.deletePost);
router.put('/:id/like', postC.likePost)
router.post('/:id/comments', postC.createComment);


module.exports = router;
