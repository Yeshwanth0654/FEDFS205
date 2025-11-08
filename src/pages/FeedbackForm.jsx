import { addFeedback } from '../services/storage';

const questions = [
  { id: 'q1', text: 'How clear was the lecture content?', type: 'scale' },
  { id: 'q2', text: 'How well did the instructor explain the concepts?', type: 'scale' },
  { id: 'q3', text: 'Was the pace of the lecture appropriate?', type: 'scale' },
  { id: 'q4', text: 'How engaging was the lecture delivery?', type: 'scale' },
  { id: 'q5', text: 'Did the instructor encourage student participation?', type: 'scale' },
  { id: 'q6', text: 'How well were doubts and questions addressed?', type: 'scale' },
  { id: 'q7', text: 'Was the use of teaching aids effective?', type: 'scale' },
  { id: 'q8', text: 'What did you like most about the lecture?', type: 'text' },
  { id: 'q9', text: 'What could be improved in future sessions?', type: 'text' },
  { id: 'q10', text: 'Any additional comments or suggestions?', type: 'text' },
];

function FeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answers = questions.map(q => ({
      id: q.id,
      value: formData.get(q.id)
    }));
    addFeedback({ courseId: 'demo-course', answers });
    alert('Feedback submitted!');
    e.target.reset();
  };

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '2rem',
      margin: '2rem auto',
      maxWidth: '600px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h3>Course Feedback</h3>
      <form onSubmit={handleSubmit}>
        {questions.map(q => (
          <div key={q.id} style={{ marginBottom: '1rem' }}>
            <label>{q.text}</label><br />
            {q.type === 'scale' ? (
              <input type="range" name={q.id} min="1" max="5" required />
            ) : (
              <textarea name={q.id} rows="3" style={{ width: '100%' }} required />
            )}
          </div>
        ))}
        <button type="submit" style={{
          backgroundColor: 'var(--accent)',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px'
        }}>Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;