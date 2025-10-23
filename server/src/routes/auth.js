const express = require('express');
const bcrypt = require('bcryptjs');
const {
  createUser,
  getUserByEmail,
  getUserById,
  updateUserPassword,
  createResetToken,
  takeResetToken,
} = require('../utils/storage');
const { signJwt } = require('../utils/jwt');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
    const existing = getUserByEmail(email);
    if (existing) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
    const user = await createUser(email, password);
    if (!user) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
    return res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const user = getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = signJwt({ id: user.id, email: user.email });
    return res.status(200).json({ token });
  } catch (_err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Forgot Password
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email) {
      return res.status(404).json({ error: 'User not found' });
    }
    const user = getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const token = createResetToken(user.id);
    // In a real system, send email
    // eslint-disable-next-line no-console
    console.log(`[dev] Password reset token for ${email}: ${token}`);
    return res.status(200).json({ message: 'Password reset email sent' });
  } catch (_err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Reset Password
router.post('/reset-password/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body || {};
    if (!token || !password) {
      return res.status(400).json({ error: 'Invalid token' });
    }
    const userId = takeResetToken(token);
    if (!userId) {
      return res.status(400).json({ error: 'Invalid token' });
    }
    const ok = await updateUserPassword(userId, password);
    if (!ok) {
      return res.status(400).json({ error: 'Invalid token' });
    }
    return res.status(200).json({ message: 'Password reset successful' });
  } catch (_err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
