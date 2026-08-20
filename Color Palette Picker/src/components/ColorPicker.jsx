function ColorPicker({ colors, selectedColor, onSelectColor }) {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500 mb-3">Choose a color</h2>
      <div className="flex flex-wrap gap-3">
        {colors.map((c) => (
          <button
            key={c.value}
            onClick={() => onSelectColor(c.value)}
            title={c.name}
            style={{ backgroundColor: c.value }}
            className={`w-16 h-16 rounded-xl flex items-end justify-center pb-1
              transition-transform hover:-translate-y-0.5
              ${selectedColor === c.value ? 'ring-4 ring-offset-2 ring-gray-900' : ''}`}
          >
            <span className="text-[10px] font-semibold text-white drop-shadow">
              {c.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;