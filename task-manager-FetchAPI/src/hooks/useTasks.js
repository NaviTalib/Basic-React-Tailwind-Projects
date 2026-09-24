import { useState, useEffect, useCallback } from 'react';
import * as taskApi from '../services/taskApi';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logs, setLogs] = useState([]);

  // Log API actions for inspecting HTTP activity
  const addLog = useCallback((method, url, status, details) => {
    setLogs((prev) => [
      { id: Date.now(), timestamp: new Date().toLocaleTimeString(), method, url, status, details },
      ...prev,
    ]);
  }, []);

  // READ (GET)
  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await taskApi.getTasks(8);
      setTasks(data);
      addLog('GET', '/todos?_limit=8', 200, `Fetched ${data.length} tasks`);
    } catch (err) {
      setError(err.message);
      addLog('GET', '/todos?_limit=8', 'ERR', err.message);
    } finally {
      setLoading(false);
    }
  }, [addLog]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  // CREATE (POST)
  const addTask = async (title) => {
    const tempId = Date.now();
    const newTask = { id: tempId, title, completed: false };

    // Optimistic Update
    setTasks((prev) => [newTask, ...prev]);

    try {
      const created = await taskApi.createTask({ title });
      // Replace temporary item with response from server
      setTasks((prev) => prev.map((t) => (t.id === tempId ? { ...created, id: tempId } : t)));
      addLog('POST', '/todos', 201, `Created: "${title}"`);
    } catch (err) {
      // Revert state on failure
      setTasks((prev) => prev.filter((t) => t.id !== tempId));
      setError(`Failed to create task: ${err.message}`);
      addLog('POST', '/todos', 'ERR', err.message);
    }
  };

  // UPDATE (PATCH)
  const toggleTask = async (id, currentStatus) => {
    // Optimistic Update
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !currentStatus } : t))
    );

    try {
      await taskApi.updateTask(id, { completed: !currentStatus });
      addLog('PATCH', `/todos/${id}`, 200, `Set status: ${!currentStatus}`);
    } catch (err) {
      // Revert state
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: currentStatus } : t))
      );
      setError(`Failed to update task: ${err.message}`);
      addLog('PATCH', `/todos/${id}`, 'ERR', err.message);
    }
  };

  // DELETE
  const removeTask = async (id) => {
    const backupTasks = [...tasks];
    // Optimistic Delete
    setTasks((prev) => prev.filter((t) => t.id !== id));

    try {
      await taskApi.deleteTask(id);
      addLog('DELETE', `/todos/${id}`, 200, `Deleted task ID: ${id}`);
    } catch (err) {
      // Revert
      setTasks(backupTasks);
      setError(`Failed to delete task: ${err.message}`);
      addLog('DELETE', `/todos/${id}`, 'ERR', err.message);
    }
  };

  return { tasks, loading, error, logs, addTask, toggleTask, removeTask, refreshTasks: loadTasks };
}