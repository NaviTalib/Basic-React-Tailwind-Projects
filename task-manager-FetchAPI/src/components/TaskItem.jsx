import { useState } from 'react';
import { Check, Trash2, Loader2 } from 'lucide-react';

export default function TaskItem({ task, onToggle, onDelete }) {
  const [isToggling, setIsToggling] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggle = async () => {
    setIsToggling(true);
    await onToggle(task.id, task.completed);
    setIsToggling(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    await onDelete(task.id);
  };

  return (
    <div className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
      task.completed 
        ? 'bg-slate-900/50 border-slate-800/80 text-slate-400' 
        : 'bg-slate-800/80 border-slate-700/60 text-slate-100 shadow-sm'
    }`}>
      <div className="flex items-center gap-3 flex-1 min-w-0 pr-4">
        {/* Custom Checkbox */}
        <button
          onClick={handleToggle}
          disabled={isToggling}
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
          className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
            task.completed
              ? 'bg-emerald-500 border-emerald-500 text-slate-950'
              : 'border-slate-500 hover:border-sky-400'
          }`}
        >
          {isToggling ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin text-slate-300" />
          ) : task.completed ? (
            <Check className="w-4 h-4 stroke-[3]" />
          ) : null}
        </button>

        {/* Task Title */}
        <span className={`text-base truncate ${task.completed ? 'line-through text-slate-500' : ''}`}>
          {task.title}
        </span>
      </div>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        aria-label="Delete task"
        className="text-slate-400 hover:text-red-400 p-1.5 rounded-lg hover:bg-slate-700/50 transition-all cursor-pointer disabled:opacity-50 shrink-0"
      >
        {isDeleting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Trash2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}