const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/**
 * create a post 
 */

const create =async(req, res, next) => {
  
const { name,email,image, password } = req.body;

try {
  // Find the user in the database
  const previousUser = await User.findOne({ email });

  if (previousUser) {
    return res.status(201).json({ error: 'User already exist' });
    // alert('user already exist')
  }
  // Hash the password using bcryptjs
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user with hashed password
  const user = new User({ name,email,image, password: hashedPassword });

  // Save the user to MongoDB
  await user.save();

  res.locals.user = { name, image, email };

  res.json({ message: 'User registered successfully', user });
} catch (error) {
  // res.status(500).json({ error: 'Failed to register user' });
  next(error)
}
};


const login =async(req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Save the username in local storage
    res.locals.user =  user ;
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to log in' });
  }
};
const get = async (req, res) => {
  try {
    // Find all posts
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};


module.exports ={create, login, get}