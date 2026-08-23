import React from 'react';

const TimeZoneSelector = ({ selectedZone, onZoneChange }) => {
  const zones = [
    { label: 'UTC (Coordinated Universal Time)', value: 'UTC' },
    { label: 'New York (EDT/EST)', value: 'America/New_York' },
    { label: 'London (BST/GMT)', value: 'Europe/London' },
    { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
    { label: 'Kolkata (IST)', value: 'Asia/Kolkata' },
  ];

  return (
    <div className="flex flex-col gap-1.5 max-w-xs w-full">
      <label 
        htmlFor="timezone-select" 
        className="text-xs font-semibold uppercase tracking-wider text-slate-400 pl-1"
      >
        Select Timezone
      </label>

      <div className="relative">
        <select
          id="timezone-select"
          value={selectedZone}
          onChange={(e) => onZoneChange(e.target.value)}
          className="w-full appearance-none rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 px-4 py-2.5 pr-10 text-sm font-medium shadow-md transition-all cursor-pointer hover:border-indigo-500/50 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        >
          {zones.map((zone) => (
            <option
              className="bg-slate-900 text-slate-100 font-sans py-1"
              value={zone.value}
              key={zone.value}
            >
              {zone.label}
            </option>
          ))}
        </select>

        {/* Custom Chevron Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TimeZoneSelector;