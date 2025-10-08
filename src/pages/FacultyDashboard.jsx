import { Link } from 'react-router-dom';

export default function FacultyDashboard() {
  return (
    <section>
      <h2>Faculty Dashboard</h2>
      <p><Link to="/courses/c1/results">View Feedback Results for Front End Frameworks</Link></p>
    </section>
  );
}