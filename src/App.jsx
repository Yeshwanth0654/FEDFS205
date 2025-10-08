import Navbar from './components/Navbar.jsx';
import AppRouter from './router.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <AppRouter />
      </main>
    </>
  );
}