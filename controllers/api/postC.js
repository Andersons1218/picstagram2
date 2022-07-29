const Post = require('../../models/postM')

module.exports = {
    createPost,
    getAllPosts,
    getAllPost,
    updatePost,
    deletePost,
    likePost
}
// createPost
async function createPost(req, res) {
    
    try {
        const newPost = await Post.create(req.body)
        // console.log(newPost)
       res.json(newPost)
    } catch (err) {
        res.json({ message: err })
    }
}

// show all posts
async function getAllPosts(req, res) {
    // console.log(req.query.userId)
    try {
        const posts = await Post.find({})
            .sort({ updatedAt: -1 }) // sort current one first
        //  console.log(post)
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
}
// get/show a post by id
async function getAllPost(req, res) {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
}
//update a post
async function updatePost(req, res) {
    const postData = req.body;
    const userId = postData.user
    const postId = req.params.id
    try {
        const post = await Post.findById(postId)
        if (post.user.toString() !== userId) {
            res.status(401).json({ message: 'Unauthorized to update' })
        } else {
            if (postData.description === '') {
                postData.description = post.description
            }
            const updatedPost = await Post.findByIdAndUpdate(postId, postData, { new: true })
            // console.log(updatedPost.description)
            res.json(updatedPost)
        }
    } catch (err) {
        res.json(err)
    }
}
// delete a post
async function deletePost(req, res) {
    const postData = req.body;
    const userId = postData.user
    const postId = req.params.id
    try {
        const post = await Post.findById(postId)
        if (post.user.toString() !== userId) {
            res.status(401).json({ message: 'Unauthorized delete' })
        } else {
            await Post.findByIdAndDelete(postId)
            res.json({ message: 'Post deleted' })
        }
    } catch (err) {
        res.json(err)
    }
}
// like or unlike a post
async function likePost(req, res) {
    // console.log(req.body)
    const userId = req.body.user
    const postId = req.body._id
    try {
        const post = await Post.findById(postId)
        // console.log(post)
        // like: push, dislike: splice
        if (post.likes.includes(userId)) {
            const index = post.likes.indexOf(userId)
            post.likes.splice(index, 1)
        } else {
            post.likes.push(userId)
        }
        // post.likes=[]
        await post.save()
        console.log(post.likes)
        res.json(post)
    } catch (err) {
        res.json(err)
    }
}