import { useState } from 'react';
import { api } from '../../api/client';
import { useSearchParams } from 'react-router-dom';

export default function Reset() {
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [params] = useSearchParams();
  const token = params.get('token') || '';

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setError('');
    try {
      await api.resetPassword(token, password);
      setMsg('Password reset successful');
    } catch (err) {
      setError(err.message || 'Error');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
        <input placeholder="New password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Reset</button>
      </form>
      {msg && <p style={{ color: 'green' }}>{msg}</p>}
      {error && <p style={{ color: 'tomato' }}>{error}</p>}
    </div>
  );
}
