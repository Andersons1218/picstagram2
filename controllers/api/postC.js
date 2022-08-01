const Post = require("../../models/postM");

module.exports = {
  createPost,
  getAllPosts,
  getAllPost,
  updatePost,
  deletePost,
  likePost,
  createComment,
};
// createPost
async function createPost(req, res) {
  try {
    const newPost = await Post.create(req.body)    
    res.json(newPost);
  } catch (err) {
    res.json({ message: err });
  }
}

// show all posts
async function getAllPosts(req, res) {
  try {
    const posts = await Post.find({}).sort({ updatedAt: -1 }); // sort current one first
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
}
// get/show a post by id
async function getAllPost(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
}
//update a post
async function updatePost(req, res) {
  const { caption, image } = req.body;
  try {
    let upDatedPost = await Post.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { caption, image } }
    );
    res.json(upDatedPost);
  } catch (err) {
    res.json({ message: err });
  }
}
// delete a post

async function deletePost(req, res) {
  const postId = req.params.id;
  try {
    Post.findOneAndDelete({ _id: postId }, function (err, post) {});
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.json(err);
  }
}

// like or unlike a post
async function likePost(req, res) {
  const userId = req.body.user;
  const postId = req.body._id;
  try {
    const post = await Post.findById(postId);
    if (post.likes.includes(userId)) {
      const index = post.likes.indexOf(userId);
      post.likes.splice(index, 1);
    } else {
      post.likes.push(userId);
    }
    // post.likes=[]
    await post.save();
    res.json(post);
  } catch (err) {
    res.json(err);
  }
}

//create comment on a post
async function createComment(req, res) {
 req.body.user = req.user.name
    try {
        const post = await Post.findById(req.params.id);
        post.comments.push(req.body);
        await post.save();
        res.json(post);
    } catch (err) {
        res.json(err);
    }
    }
