import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import TaskFilter from './components/TaskFilter';
import StatsOverview from './components/StatsOverview';
import ApiLogViewer from './components/ApiLogViewer';
import { RefreshCw, CheckSquare, AlertCircle } from 'lucide-react';

export default function App() {
  const { tasks, loading, error, logs, addTask, toggleTask, removeTask, refreshTasks } = useTasks();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Client-side search and status filtering
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'active'
        ? !task.completed
        : task.completed;

    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* App Header */}
        <header className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="bg-sky-500/10 p-2.5 rounded-xl border border-sky-500/20 text-sky-400">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">Task Manager</h1>
              <p className="text-xs text-slate-400">React + Fetch API CRUD Demo</p>
            </div>
          </div>

          <button
            onClick={refreshTasks}
            disabled={loading}
            className="p-2 text-slate-400 hover:text-sky-400 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-all cursor-pointer"
            title="Refetch tasks"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </header>

        {/* Global Error Banner */}
        {error && (
          <div className="bg-rose-950/50 border border-rose-800/80 rounded-xl p-4 flex items-center gap-3 text-rose-300 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Task Form */}
        <TaskForm onAddTask={addTask} />

        {/* Progress Tracker */}
        <StatsOverview total={tasks.length} completed={completedCount} />

        {/* Filters */}
        <TaskFilter
          filter={filter}
          setFilter={setFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Task List Container */}
        <main className="space-y-3">
          {loading && tasks.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-sky-400" />
              <p>Fetching tasks from server...</p>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/30 border border-dashed border-slate-800 rounded-xl text-slate-500">
              <p>No tasks found matching your criteria.</p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={removeTask}
              />
            ))
          )}
        </main>

        {/* Live HTTP Network Inspector */}
        <ApiLogViewer logs={logs} />
      </div>
    </div>
  );
}