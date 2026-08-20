function ColorInput({ color, onChangeColor }) {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500 mb-3">Custom hex</h2>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={color}
          onChange={(e) => onChangeColor(e.target.value)}
          className="w-12 h-12 rounded-lg cursor-pointer border-0 p-0"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => onChangeColor(e.target.value)}
          placeholder="#000000"
          maxLength={7}
          className="w-36 px-3 py-2 rounded-lg border border-gray-300 font-mono text-sm
            focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
    </div>
  );
}

export default ColorInput;