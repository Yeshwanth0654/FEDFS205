import { getFeedback } from '../services/storage';

function FeedbackResults() {
  const feedback = getFeedback();

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Feedback Summary</h3>
        <ul>
          {feedback.map((entry, i) => (
            <li key={i}>
              <strong>Course:</strong> {entry.courseId}<br />
              {entry.answers.map(ans => (
                <div key={ans.id}>
                  <em>{ans.id}</em>: {ans.value}
                </div>
              ))}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FeedbackResults;