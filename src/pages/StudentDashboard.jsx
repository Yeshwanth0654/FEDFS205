import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  return (
    <section>
      <h2>Student Dashboard</h2>
      <p><Link to="/courses/c1/feedback">Submit Feedback for Front End Frameworks</Link></p>
    </section>
  );
}