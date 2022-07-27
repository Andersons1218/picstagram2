const Post = require("../models/post")
const mongoose = require("mongoose")
const User = require("../models/user")

module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
    likePost,
}

