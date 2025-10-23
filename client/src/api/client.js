const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api/v1';

export function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...getAuthHeaders(),
    ...(options.headers || {}),
  };
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const contentType = res.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');
  const body = isJson ? await res.json() : await res.text();
  if (!res.ok) {
    const error = body && body.error ? body.error : 'Request failed';
    throw new Error(error);
  }
  return body;
}

export const api = {
  register: (email, password) => request('/auth/register', { method: 'POST', body: JSON.stringify({ email, password }) }),
  login: async (email, password) => {
    const data = await request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    return data;
  },
  forgotPassword: (email) => request('/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) }),
  resetPassword: (token, password) => request(`/auth/reset-password/${encodeURIComponent(token)}`, { method: 'POST', body: JSON.stringify({ password }) }),
  getProfile: () => request('/profile', { method: 'GET' }),
  updateProfile: (email) => request('/profile', { method: 'PUT', body: JSON.stringify({ email }) }),
  getGoals: () => request('/fitness-goals', { method: 'GET' }),
  setGoals: (goals) => request('/fitness-goals', { method: 'POST', body: JSON.stringify({ goals }) }),
  updateGoals: (goals) => request('/fitness-goals', { method: 'PUT', body: JSON.stringify({ goals }) }),
  deleteGoals: () => request('/fitness-goals', { method: 'DELETE' }),
};
