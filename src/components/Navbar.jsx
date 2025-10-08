import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #eee' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/login">Login</Link>
        <Link to="/student">Student</Link>
        <Link to="/faculty">Faculty</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
}