const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
   
  },
  shortDescription: {
    type: String,
    // required: true
  },
  fullDescription: {
    type: String,
    // required: true,
    // unique: true
  },
  image: {
    type: Number,
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  tag:{
    type: String,
    // required: true
  },
  name:{
    type: String,
    // required: true
  },
  
  email:{
    type: String,
    required: true
  },
  
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
