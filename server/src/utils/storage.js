const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

// In-memory storage. Replace with a real DB in production.
const usersByEmail = new Map(); // email -> { id, email, passwordHash }
const usersById = new Map(); // id -> { id, email, passwordHash }
const profilesByUserId = new Map(); // userId -> { email, fitnessGoals: [], vitalSigns: [] }
const resetTokens = new Map(); // token -> userId

function createDefaultProfile(email, userId) {
  return {
    email,
    fitnessGoals: [],
    vitalSigns: [
      { type: 'Blood Pressure', value: '120/80 mmHg' },
      { type: 'Heart Rate', value: '70 bpm' },
    ],
  };
}

async function createUser(email, password) {
  if (usersByEmail.has(email)) {
    return null; // already exists
  }
  const id = uuidv4();
  const passwordHash = await bcrypt.hash(password, 10);
  const user = { id, email, passwordHash };
  usersByEmail.set(email, user);
  usersById.set(id, user);
  profilesByUserId.set(id, createDefaultProfile(email, id));
  return user;
}

function getUserByEmail(email) {
  return usersByEmail.get(email) || null;
}

function getUserById(userId) {
  return usersById.get(userId) || null;
}

async function updateUserEmail(userId, newEmail) {
  const user = usersById.get(userId);
  if (!user) return false;
  if (usersByEmail.has(newEmail) && usersByEmail.get(newEmail).id !== userId) {
    return false; // email taken by another user
  }
  // Re-key usersByEmail
  usersByEmail.delete(user.email);
  user.email = newEmail;
  usersByEmail.set(newEmail, user);

  // Update profile email
  const profile = profilesByUserId.get(userId);
  if (profile) {
    profile.email = newEmail;
    profilesByUserId.set(userId, profile);
  }
  return true;
}

async function updateUserPassword(userId, newPassword) {
  const user = usersById.get(userId);
  if (!user) return false;
  user.passwordHash = await bcrypt.hash(newPassword, 10);
  usersById.set(userId, user);
  if (usersByEmail.get(user.email)) {
    usersByEmail.set(user.email, user);
  }
  return true;
}

function getProfile(userId) {
  return profilesByUserId.get(userId) || null;
}

function setProfile(userId, profile) {
  profilesByUserId.set(userId, profile);
}

function createResetToken(userId) {
  const token = uuidv4();
  resetTokens.set(token, userId);
  return token;
}

function takeResetToken(token) {
  if (!resetTokens.has(token)) return null;
  const userId = resetTokens.get(token);
  resetTokens.delete(token);
  return userId;
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  updateUserEmail,
  updateUserPassword,
  getProfile,
  setProfile,
  createResetToken,
  takeResetToken,
};
