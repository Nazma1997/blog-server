const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
   
  },
  shortDescription: {
    type: String,
    required: true
  },
  fullDescription: {
    type: String,
    required: true,
    // unique: true
  },
  image: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  tag:{
    type: String,
    required: true
  },
  name:{
    type: String,
    // required: true
  },
  
  email:{
    type: String,
    required: true
  },
  author: String,
 
  
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
