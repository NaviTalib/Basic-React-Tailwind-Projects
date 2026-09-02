import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import { Navbar } from './components/Navbar';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import './index.css';

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <main className="app-container">
          <Navbar />
          <TaskForm />
          <TaskList />
        </main>
      </TaskProvider>
    </AuthProvider>
  );
}