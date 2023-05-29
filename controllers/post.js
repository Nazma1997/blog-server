const User = require('../models/User')
const Post = require('../models/Post')

const create = async (req, res) => {
  const { email, title, shortDescription, fullDescription,image, createdAt, tag, name,author, authorName  } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create a new post
    const post = new Post({
      email, title, shortDescription, fullDescription,image, createdAt, tag, name, author, authorName
    });

    // Save the post to the database
    await post.save();

    // Push the post to the user's posts array
    user.posts.push(post);

    // Save the updated user with the new post
    await user.save();

    res.json({ message: 'Post created successfully', post });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
}

const get = async (req, res) => {
  try {
    // Find all posts
    const posts = await Post.find();

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};

const singleItem = async (req, res) => {
  const { id } = req.params;

  try {
    // Find a post by ID
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve post' });
  }
};

module.exports = {create, get, singleItem};