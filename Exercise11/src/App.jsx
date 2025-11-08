<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedback, deleteFeedback } from "./feedbackSlice";

export default function App() {
  const [text, setText] = useState("");
  const feedbacks = useSelector((state) => state.feedback.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addFeedback(text));
    setText("");
  };

  return (
    <div className="container">
      <h1>💬 Feedback Collector</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your feedback"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {feedbacks.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul>
          {feedbacks.map((f) => (
            <li key={f.id}>
              {f.text}
              <button onClick={() => dispatch(deleteFeedback(f.id))}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
>>>>>>> c2a4845ae85d07a52b602bb8ed86a982266a8b9d
