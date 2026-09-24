import { Search } from 'lucide-react';

export default function TaskFilter({ filter, setFilter, searchQuery, setSearchQuery }) {
  const filterOptions = ['all', 'active', 'completed'];

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter tasks by name..."
          className="w-full bg-slate-800/80 border border-slate-700/60 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 shrink-0">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all cursor-pointer ${
              filter === option
                ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}