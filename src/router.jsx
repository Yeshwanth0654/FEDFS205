import { Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import FeedbackForm from './pages/FeedbackForm.jsx';
import FeedbackResults from './pages/FeedbackResults.jsx';
import AdminPanel from './pages/AdminPanel.jsx';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feedback" element={<FeedbackForm />} />
      <Route path="/results" element={<FeedbackResults />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}

export default AppRouter;