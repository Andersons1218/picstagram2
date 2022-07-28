const express = require('express');
const router = express.Router();
const postC = require('../controllers/postC');

router.get('/', postC.getPost);
router.post('/', postC.createPost);
router.get('/:id', postC.getPost);
router.put('/:id', postC.updatePost);
router.delete('/:id', postC.deletePost);


module.exports = router;
