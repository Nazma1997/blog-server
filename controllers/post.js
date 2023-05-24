const User = require('../models/User')
const Post = require('../models/Post')

const create = async (req, res) => {
  const { email, title, shortDescription, fullDescription,image, createdAt, tag, name,  } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Create a new post
    const post = new Post({
      email, title, shortDescription, fullDescription,image, createdAt, tag, name
    });

    // Save the post to the database
    await post.save();

    // Push the post to the user's posts array
    user.posts.push(post);

    // Save the updated user with the new post
    await user.save();

    res.json({ message: 'Post created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
}

module.exports = {create};