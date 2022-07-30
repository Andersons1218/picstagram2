require('dotenv').config();
require('./config/database');

const Post = require('./models/postM');

// IIFE - Immediately Invoked Function Expression
(async function() {

await Post.deleteMany({});
const posts = await Post.create ([
  {
    user: '',
    likes: 0,
    caption: "this is such an amazing picture",
    image: ' https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    user: '',
    likes: 0,
    caption: 'im taking a picture of you',
    image:'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
  },{
    user: '',
    likes: 0,
    caption: "what a clow?",
    image: 'https://cdn.vox-cdn.com/thumbor/TmgXcq6_4URVd0YN0SotUf5WYeA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9556001/chicks.0.0.0.jpg '
  
  },
]);

console.log(posts)

process.exit

})()
