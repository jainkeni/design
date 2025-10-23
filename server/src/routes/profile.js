const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { getProfile, setProfile, updateUserEmail } = require('../utils/storage');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  const profile = getProfile(req.user.id);
  if (!profile) return res.status(401).json({ error: 'Unauthorized' });
  return res.status(200).json(profile);
});

router.put('/', authMiddleware, async (req, res) => {
  const { email } = req.body || {};
  if (!email) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  const ok = await updateUserEmail(req.user.id, email);
  if (!ok) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  const profile = getProfile(req.user.id);
  setProfile(req.user.id, { ...profile, email });
  return res.status(200).json({ message: 'Profile updated successfully' });
});

module.exports = router;
