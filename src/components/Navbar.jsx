import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'var(--primary)',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white'
    }}>
      <h2>Student Feedback System</h2>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Login</Link>
        <Link to="/feedback" style={{ color: 'white', marginRight: '1rem' }}>Feedback</Link>
        <Link to="/results" style={{ color: 'white', marginRight: '1rem' }}>Results</Link>
        <Link to="/admin" style={{ color: 'white' }}>Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;