require('dotenv').config();
require('./config/database');

const Post = require('./models/postM');

// IIFE - Immediately Invoked Function Expression
(async function() {

await Post.deleteMany({});
const posts = await Post.create ([
  {
    user: 'funkychicken',
    likes: 10,
    caption: "this is such an amazing picture",
    image:  
  },
  {
    user: 'Banana',
    likes: 20,
    caption: 'im taking a picture of you',
    image:'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
  }
]);

console.log(post)

process.exit

})()
