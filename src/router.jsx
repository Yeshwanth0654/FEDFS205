import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import FacultyDashboard from './pages/FacultyDashboard.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import FeedbackForm from './pages/FeedbackForm.jsx';
import FeedbackResults from './pages/FeedbackResults.jsx';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/faculty" element={<FacultyDashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/courses/:courseId/feedback" element={<FeedbackForm />} />
      <Route path="/courses/:courseId/results" element={<FeedbackResults />} />
    </Routes>
  );
}