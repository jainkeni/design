import { useEffect, useState } from 'react';
import { api } from '../api/client';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    api.getProfile().then((data) => {
      setProfile(data);
      setEmail(data.email);
    }).catch((e) => setError(e.message));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setError('');
    try {
      await api.updateProfile(email);
      setMsg('Profile updated successfully');
    } catch (err) {
      setError(err.message || 'Error');
    }
  };

  if (!profile) return <div>Loading…</div>;

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Save</button>
      </form>
      {msg && <p style={{ color: 'green' }}>{msg}</p>}
      {error && <p style={{ color: 'tomato' }}>{error}</p>}

      <h3>Vital Signs</h3>
      <ul>
        {profile.vitalSigns?.map((v, idx) => (
          <li key={idx}>{v.type}: {v.value}</li>
        ))}
      </ul>
    </div>
  );
}
