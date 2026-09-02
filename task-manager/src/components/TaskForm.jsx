import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export const TaskForm = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <section className="card task-form-card">
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Create a new task..."
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          + Add Task
        </button>
      </form>
    </section>
  );
};