const { verifyJwt } = require('../utils/jwt');

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'] || '';
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const token = parts[1];
  const payload = verifyJwt(token);
  if (!payload) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  req.user = { id: payload.id, email: payload.email };
  next();
}

module.exports = { authMiddleware };
