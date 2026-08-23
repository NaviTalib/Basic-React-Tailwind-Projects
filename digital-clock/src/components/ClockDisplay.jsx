import React from 'react';

const ClockDisplay = ({ time, timeZone }) => {
  // Extract hours/minutes/seconds separately for cleaner visual hierarchy
  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: timeZone,
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Separate time components to highlight time vs AM/PM
  const [timeString, period] = formattedTime.split(' ');

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900/90 p-6 text-white shadow-xl backdrop-blur-md border border-slate-800/80 max-w-xs w-full transition-all hover:border-indigo-500/50 hover:shadow-indigo-500/10">
      {/* Decorative background glow */}
      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          World Clock
        </span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>

      {/* Time Display */}
      <div className="flex items-baseline justify-center space-x-2 my-2">
        <h2 className="font-mono text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          {timeString}
        </h2>
        <span className="font-sans text-sm font-bold text-indigo-400 uppercase tracking-widest">
          {period}
        </span>
      </div>

      {/* Timezone Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span>Timezone</span>
        <span className="font-medium text-slate-200 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/50">
          {timeZone}
        </span>
      </div>
    </div>
  );
};

export default ClockDisplay;