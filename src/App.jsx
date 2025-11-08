import Navbar from './components/Navbar.jsx';
import AppRouter from './router.jsx';

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <footer style={{
        backgroundColor: 'var(--primary)',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem'
      }}>
        <p>
          Made by Yeshwanth |{' '}
          <a
            href="https://github.com/your-username/student-feedback-system"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', textDecoration: 'underline' }}
          >
            View Source
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;