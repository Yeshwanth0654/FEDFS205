import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // store a tiny user object so other pages/components can read it if needed
    const user = { username: username || 'Anonymous', role };
    try {
      sessionStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
      // ignore storage errors - app will still navigate
    }

    // role-based navigation
    if (role === 'student') {
      navigate('/feedback');
    } else if (role === 'faculty') {
      navigate('/results');
    } else if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '2rem',
      margin: '2rem auto',
      maxWidth: '400px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        >
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" style={{
          backgroundColor: 'var(--primary)',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px'
        }}>Login</button>
      </form>
    </div>
  );
}

export default Login;