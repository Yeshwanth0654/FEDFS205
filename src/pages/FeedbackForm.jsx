import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStore, updateStore } from '../services/storage.js';

export default function FeedbackForm() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { templates } = getStore();
  const template = templates[0] || {
    id: 't1',
    name: 'Default Template',
    questions: [
      { id: 'q1', text: 'Clarity of instruction', type: 'scale' },
      { id: 'q2', text: 'Course materials quality', type: 'scale' },
      { id: 'q3', text: 'Comments', type: 'text' },
    ]
  };

  const [answers, setAnswers] = useState(
    template.questions.map(q => ({ qId: q.id, value: q.type === 'scale' ? 3 : '' }))
  );

  const setAnswer = (qId, value) =>
    setAnswers(prev => prev.map(a => a.qId === qId ? { ...a, value } : a));

  const onSubmit = (e) => {
    e.preventDefault();
    const studentId = JSON.parse(localStorage.getItem('sfs_session'))?.username || 'anonymous';
    updateStore(s => {
      s.feedback.push({ id: crypto.randomUUID(), courseId, studentId, answers });
      return s;
    });
    alert('Feedback submitted!');
    navigate(`/courses/${courseId}/results`);
  };

  return (
    <section>
      <h2>Submit Feedback</h2>
      <form onSubmit={onSubmit}>
        {template.questions.map(q => (
          <div key={q.id}>
            <label><strong>{q.text}</strong></label>
            {q.type === 'scale' ? (
              <select value={answers.find(a=>a.qId===q.id).value}
                      onChange={e=>setAnswer(q.id, e.target.value)}>
                {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            ) : (
              <textarea rows="3"
                        value={answers.find(a=>a.qId===q.id).value}
                        onChange={e=>setAnswer(q.id, e.target.value)} />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}