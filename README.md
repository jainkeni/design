# Healthpulse (Demo)

A modular full-stack demo of the Healthpulse application based on the provided API documentation.

## Stack
- Backend: Node.js + Express, JWT, in-memory storage
- Frontend: React (Vite) with React Router

## Monorepo Layout
- `server/` — Express API implementing `/api/v1`
- `client/` — React frontend

## Backend

Env (optional):
```
PORT=3000
JWT_SECRET=change_me
JWT_EXPIRES_IN=7d
```

Install and run:
```bash
npm install --prefix server
node server/src/index.js
```

Routes (all under `http://localhost:3000/api/v1`):
- `POST /auth/register` — { email, password }
- `POST /auth/login` — { email, password } -> { token }
- `POST /auth/forgot-password` — { email }
- `POST /auth/reset-password/:token` — { password }
- `GET /profile` — Authorization: Bearer <token>
- `PUT /profile` — Authorization: Bearer <token>, { email }
- `GET /fitness-goals` — Authorization: Bearer <token>
- `POST /fitness-goals` — Authorization: Bearer <token>, { goals }
- `PUT /fitness-goals` — Authorization: Bearer <token>, { goals }
- `DELETE /fitness-goals` — Authorization: Bearer <token>

Notes:
- This demo uses in-memory storage; restart clears state.
- Forgot password logs the reset token to the server console in dev.

## Frontend

Configure API base if needed (defaults to `http://localhost:3000/api/v1`):
- Create `.env` in `client/` (optional):
```
VITE_API_BASE=http://localhost:3000/api/v1
```

Install and run:
```bash
npm install --prefix client
npm run dev --prefix client
```

Key routes:
- `/login`, `/register`, `/forgot`, `/reset?token=...`
- `/profile` and `/goals` are protected

## Modular Structure

Backend modules:
- `src/routes/auth.js`, `src/routes/profile.js`, `src/routes/fitnessGoals.js`
- `src/middleware/auth.js`
- `src/utils/jwt.js`, `src/utils/storage.js`

Frontend modules:
- `src/api/client.js`
- `src/components/Layout.jsx`, `src/components/ProtectedRoute.jsx`
- `src/pages/auth/*`, `src/pages/Profile.jsx`, `src/pages/Goals.jsx`, `src/pages/Home.jsx`

## Quick Start
1) Start API: `node server/src/index.js`
2) Start frontend: `npm run dev --prefix client`
3) Register, log in, manage profile and goals
