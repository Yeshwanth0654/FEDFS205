import { useParams } from 'react-router-dom';
import { getStore } from '../services/storage.js';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function FeedbackResults() {
  const { courseId } = useParams();
  const { templates, feedback } = getStore();
  const template = templates[0] || { questions: [] };

  const courseFeedback = feedback.filter(f => f.courseId === courseId);

  const scaleQs = template.questions.filter(q => q.type === 'scale');
  const textQs = template.questions.filter(q => q.type === 'text');

  const averages = scaleQs.map(q => {
    const values = courseFeedback.map(f => Number(f.answers.find(a => a.qId === q.id)?.value || 0)).filter(v => v > 0);
    const avg = values.length ? (values.reduce((a,b)=>a+b,0)/values.length) : 0;
    return { qId: q.id, text: q.text, avg: Number(avg.toFixed(2)) };
  });

  const comments = textQs.flatMap(q =>
    courseFeedback.map(f => {
      const val = f.answers.find(a => a.qId === q.id)?.value;
      return val ? { qId: q.id, text: q.text, comment: val } : null;
    }).filter(Boolean)
  );

  const chartData = {
    labels: averages.map(a => a.text),
    datasets: [
      {
        label: 'Average Score',
        data: averages.map(a => a.avg),
        backgroundColor: '#2563eb',
      },
    ],
  };

  return (
    <section>
      <h2>Feedback Results</h2>
      <p>Total submissions: {courseFeedback.length}</p>

      {averages.length > 0 && (
        <>
          <h3>Averages</h3>
          <Bar data={chartData} />
        </>
      )}

      <h3>Comments</h3>
      <ul>
        {comments.map((c, idx) => (
          <li key={idx}><strong>{c.text}:</strong> {c.comment}</li>
        ))}
      </ul>
    </section>
  );
}