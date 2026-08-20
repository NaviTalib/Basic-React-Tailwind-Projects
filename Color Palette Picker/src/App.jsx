import { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import ColorInput from './components/ColorInput';
import PreviewCard from './components/PreviewCard';

const PRESET_COLORS = [
  { name: 'Red', value: '#e63946' },
  { name: 'Blue', value: '#457b9d' },
  { name: 'Green', value: '#2a9d8f' },
  { name: 'Yellow', value: '#f4a261' },
  { name: 'Purple', value: '#7209b7' },
];

function App() {
  const [selectedColor, setSelectedColor] = useState(PRESET_COLORS[0].value);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-8 space-y-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Color Palette Picker
        </h1>

        <ColorPicker
          colors={PRESET_COLORS}
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
        />

        <ColorInput
          color={selectedColor}
          onChangeColor={setSelectedColor}
        />

        <PreviewCard color={selectedColor} />
      </div>
    </div>
  );
}

export default App;