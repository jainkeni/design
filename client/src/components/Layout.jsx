import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const token = localStorage.getItem('token');
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };
  return (
    <div>
      <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #e5e5e5' }}>
        <Link to="/">Home</Link>
        {token && <Link to="/profile">Profile</Link>}
        {token && <Link to="/goals">Goals</Link>}
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}
        {token && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
