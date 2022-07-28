const Post = require("../../models/postM")
const mongoose = require("mongoose")
const User = require("../../models/user")

module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
    likePost,
}
// create post route
async function createPost(req,res){
   try{
     const newPost = await Post.create(req.body)
    res.json(newPost)
 } catch(err){
        res.json(err)
}
}

// Show post route 
async function getPosts(req,res){
    try{
        const posts = await Post.find()
        res.json(posts)
    } catch(err){
        res.json(err)
    }
}

// get post by id route
async function getPost(req,res){
    try{
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch(err){
        res.json(err)
    }
}

//update post route
async function updatePost(req,res){
    try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedPost)
    } catch(err){
        res.json(err)
    }
}

//delete post route
async function deletePost(req,res){
    try{
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        res.json(deletedPost)
    } catch(err){
        res.json(err)
    }
}

//like post route
async function likePost(req,res){
    try{
        const post = await Post.findById(req.params.id)
        post.likes.push(req.body.userId)
        await post.save()
        res.json(post)
    } catch(err){
        res.json(err)
    }
}