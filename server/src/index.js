require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const fitnessGoalsRoutes = require('./routes/fitnessGoals');

const app = express();

app.use(cors());
app.use(express.json());

const BASE = '/api/v1';
app.use(`${BASE}/auth`, authRoutes);
app.use(`${BASE}/profile`, profileRoutes);
app.use(`${BASE}/fitness-goals`, fitnessGoalsRoutes);

app.get('/', (_req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Healthpulse API listening on http://localhost:${PORT}${BASE}`);
  });
}

module.exports = app;
