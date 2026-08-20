# Color Palette Picker & Previewer

A small React + Vite project exploring **lifting state up** — how sibling components that don't know about each other can stay in sync through a single shared piece of state in a common parent.

Pick a preset color, type or pick a custom hex code, and watch a preview box update live. Every input — the swatch buttons, the color picker, and the hex text field — controls the same piece of state.

## Features

- A row of preset color swatches to choose from
- A native color picker + hex text input for custom colors
- A live preview box that reflects the currently selected color
- All inputs stay in sync, since they all read from and write to the same state

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (v4, via `@tailwindcss/vite`)

## Component structure

```
App                (owns selectedColor state)
├── ColorPicker     (props: colors, selectedColor, onSelectColor)
├── ColorInput      (props: color, onChangeColor)
└── PreviewCard      (props: color)
```

`App` is the only component that holds state. `ColorPicker` and `ColorInput` never change the color directly — they call the `onSelectColor` / `onChangeColor` functions passed down to them, which are really just `setSelectedColor` from `App` under a different name. `PreviewCard` only reads the color; it has nothing to report back up.

This is the core pattern the project is meant to demonstrate: state lives in the nearest common ancestor of the components that need to share it, and changes flow back up through callback props rather than being managed locally in each child.

## Getting started

Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd color-palette-picker
npm install
```

Start the dev server:

```bash
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`) in your browser.

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Project layout

```
src/
├── App.jsx
├── index.css
├── main.jsx
└── components/
    ├── ColorPicker.jsx
    ├── ColorInput.jsx
    └── PreviewCard.jsx
```

## Possible extensions

- Validate hex input before it's passed up to `App`, so invalid partial hex codes (e.g. `#e6`) don't propagate
- Persist the last selected color (e.g. to `localStorage`)
- Add a "recently used colors" list built from selection history
- Support RGB/HSL input alongside hex

## License

MIT

---

Made by [Navi Talib](https://github.com/navitalib)