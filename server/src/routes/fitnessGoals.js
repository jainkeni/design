const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { getProfile, setProfile } = require('../utils/storage');

const router = express.Router();

router.post('/', authMiddleware, (req, res) => {
  const { goals } = req.body || {};
  if (!Array.isArray(goals)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  const profile = getProfile(req.user.id);
  if (!profile) return res.status(401).json({ error: 'Unauthorized' });
  const normalized = goals.map((g) => ({ goal: String(g.goal || ''), progress: Number(g.progress || 0) || 0 }));
  setProfile(req.user.id, { ...profile, fitnessGoals: normalized });
  return res.status(200).json({ message: 'Fitness goals set successfully' });
});

router.get('/', authMiddleware, (req, res) => {
  const profile = getProfile(req.user.id);
  if (!profile) return res.status(401).json({ error: 'Unauthorized' });
  return res.status(200).json({ goals: profile.fitnessGoals || [] });
});

router.put('/', authMiddleware, (req, res) => {
  const { goals } = req.body || {};
  if (!Array.isArray(goals)) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  const profile = getProfile(req.user.id);
  if (!profile) return res.status(401).json({ error: 'Unauthorized' });
  const normalized = goals.map((g) => ({ goal: String(g.goal || ''), progress: Number(g.progress || 0) || 0 }));
  setProfile(req.user.id, { ...profile, fitnessGoals: normalized });
  return res.status(200).json({ message: 'Fitness goals updated successfully' });
});

router.delete('/', authMiddleware, (req, res) => {
  const profile = getProfile(req.user.id);
  if (!profile) return res.status(401).json({ error: 'Unauthorized' });
  setProfile(req.user.id, { ...profile, fitnessGoals: [] });
  return res.status(200).json({ message: 'Fitness goals deleted successfully' });
});

module.exports = router;
