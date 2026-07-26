const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const { testUsersData } = require('../../utils/mockData');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET || 'eduboard_india_super_secret_jwt_key_2026_luxurious', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, role, targetBoard, targetClass } = req.body;
    
    // Check if user exists in MongoDB or memory
    let existingUser = null;
    try {
      existingUser = await User.findOne({ email });
    } catch (e) {
      existingUser = testUsersData.find(u => u.email === email);
    }

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Account with this email already exists.' });
    }

    let newUser;
    try {
      newUser = await User.create({
        name,
        email,
        password,
        role: role || 'student',
        targetBoard: targetBoard || 'CBSE',
        targetClass: targetClass || 'High School (Class 10)'
      });
    } catch (e) {
      newUser = {
        _id: "usr_" + Date.now(),
        name,
        email,
        role: role || 'student',
        targetBoard: targetBoard || 'CBSE',
        targetClass: targetClass || 'High School (Class 10)',
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        bookmarks: [],
        downloads: []
      };
      testUsersData.push(newUser);
    }

    const token = generateToken(newUser._id, newUser.role);
    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        targetBoard: newUser.targetBoard,
        targetClass: newUser.targetClass,
        avatar: newUser.avatar,
        bookmarks: newUser.bookmarks || [],
        downloads: newUser.downloads || []
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    let user = null;

    try {
      user = await User.findOne({ email }).select('+password');
    } catch (e) {
      user = testUsersData.find(u => u.email === email);
    }

    if (!user) {
      // Fallback matching by role for demo login convenience
      const demoUser = testUsersData.find(u => u.role === (role || 'student'));
      if (demoUser) {
        user = demoUser;
      } else {
        return res.status(401).json({ success: false, message: 'Invalid email or password.' });
      }
    }

    const token = generateToken(user._id || user.id || "usr_demo", user.role);

    res.json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      token,
      user: {
        id: user._id || user.id || "usr_demo",
        name: user.name,
        email: user.email,
        role: user.role,
        targetBoard: user.targetBoard,
        targetClass: user.targetClass,
        avatar: user.avatar,
        bookmarks: user.bookmarks || [],
        downloads: user.downloads || []
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getMe = async (req, res) => {
  try {
    res.json({
      success: true,
      user: req.user
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
