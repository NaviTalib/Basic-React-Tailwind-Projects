import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export const TaskList = () => {
  const { tasks, loading, toggleTaskStatus, deleteTask } = useTasks();
  const [filter, setFilter] = useState('all');

  if (loading) return <div className="card empty-state">Loading your tasks...</div>;

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.status === 'completed';
    if (filter === 'pending') return task.status === 'pending';
    return true;
  });

  return (
    <section>
      {/* Filter Options */}
      <div className="filter-bar">
        {['all', 'pending', 'completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn btn-ghost ${filter === f ? 'active' : ''}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)} ({
              f === 'all' 
                ? tasks.length 
                : tasks.filter(t => f === 'completed' ? t.status === 'completed' : t.status === 'pending').length
            })
          </button>
        ))}
      </div>

      {/* Task Cards Grid */}
      {filteredTasks.length === 0 ? (
        <div className="empty-state">No tasks found in this section.</div>
      ) : (
        <div className="responsive-grid">
          {filteredTasks.map((task) => {
            const isDone = task.status === 'completed';
            return (
              <div 
                key={task.id} 
                className={`card card-hover task-card ${isDone ? 'completed' : ''}`}
              >
                <div className="task-content" onClick={() => toggleTaskStatus(task.id)}>
                  <div className="custom-checkbox">
                    <svg className="check-icon" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="task-text">{task.title}</span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-btn"
                  title="Delete task"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};