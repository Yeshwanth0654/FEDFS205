import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return alert('Enter a username');
    if (role === 'student') navigate('/student');
    if (role === 'faculty') navigate('/faculty');
    if (role === 'admin') navigate('/admin');
  };

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          Username
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Role
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="submit">Enter</button>
      </form>
    </section>
  );
}