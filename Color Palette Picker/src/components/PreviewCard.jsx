function PreviewCard({ color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-48 rounded-2xl flex items-center justify-center shadow-inner
        transition-colors duration-200"
    >
      <span className="bg-white/85 px-4 py-1.5 rounded-full font-mono font-semibold text-gray-800">
        {color}
      </span>
    </div>
  );
}

export default PreviewCard;