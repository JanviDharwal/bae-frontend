const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ 1. Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://baeUser:behencodes@bae.tnw08yc.mongodb.net/login_credentials', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// 2. Define Schema & Model
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

//  3. Signup Route
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('📩 Signup request:', email);

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Missing email or password' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash the password before storing
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    await User.create({ email, password: hash });
    console.log(' User created:', email);
    return res.json({ success: true, message: 'Signup successful!' });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

//  4. Login Route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('🔐 Login attempt:', email);

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Missing email or password' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log(' No such user:', email);
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      console.log('Login successful for:', email);
      return res.json({ success: true, message: 'Login successful' });
    } else {
      console.log(' Invalid credentials for:', email);
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error(' Login error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

//  5. Start server
app.listen(5000, () => console.log(' Backend running on http://localhost:5000'));
