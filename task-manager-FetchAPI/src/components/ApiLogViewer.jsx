import { Activity, Terminal } from 'lucide-react';

export default function ApiLogViewer({ logs }) {
  const getBadgeColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'POST': return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
      case 'PATCH': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'DELETE': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div className="bg-slate-800/80 px-4 py-3 border-b border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-sky-400" />
          <h3 className="text-sm font-semibold text-slate-200">Fetch API Network Inspector</h3>
        </div>
        <span className="text-xs text-slate-400 font-mono">{logs.length} requests logged</span>
      </div>

      <div className="p-4 max-h-56 overflow-y-auto font-mono text-xs space-y-2">
        {logs.length === 0 ? (
          <p className="text-slate-500 italic text-center py-4">No HTTP activity logged yet.</p>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2 truncate">
                <span className="text-slate-500 shrink-0">{log.timestamp}</span>
                <span className={`px-1.5 py-0.5 rounded border text-[10px] font-bold ${getBadgeColor(log.method)}`}>
                  {log.method}
                </span>
                <span className="text-slate-300 truncate">{log.url}</span>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-2">
                <span className="text-slate-400 hidden sm:inline truncate max-w-[150px]">{log.details}</span>
                <span className={`font-bold ${log.status === 'ERR' ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {log.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}