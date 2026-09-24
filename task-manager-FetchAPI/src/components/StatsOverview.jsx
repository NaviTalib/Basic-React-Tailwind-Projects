export default function StatsOverview({ total, completed }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 mb-6">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-slate-400">Task Completion</span>
        <span className="font-semibold text-sky-400">{completed} of {total} ({percentage}%)</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-700/70 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}