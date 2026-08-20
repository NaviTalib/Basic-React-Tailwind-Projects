# React Tailwind FAQ Accordion

A clean, modern, and accessible FAQ Accordion component built with **React** and **Tailwind CSS**. It features smooth max-height transitions using CSS grid, rotating chevron indicators, and an optimized mobile-responsive layout.

## 🚀 Features

- **Smooth CSS Transitions:** Opens and closes gracefully without using fixed-height JavaScript hacks.
- **State Managed:** Automatically closes the previously opened item when a new item is clicked.
- **Fully Responsive:** Tailored layout boundaries that look clean on mobile, tablet, and desktop viewports.
- **Clean Architecture:** Component state, content map structure, and presentation logic are unified into a single file.

## 🛠️ Tech Stack

- **Framework:** React 18+
- **Styling:** Tailwind CSS v3+ / v4

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd react-faq-accordion
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS** (If not already configured in your project):
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   *Make sure your `tailwind.config.js` content array includes the path to this component file.*

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 💻 Usage

Drop the `FaqAccordion.jsx` file into your components directory and import it directly into your main layout:

```jsx
import React from 'react';
import FaqAccordion from './components/FaqAccordion';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <FaqAccordion />
    </div>
  );
}

export default App;
```

## 📝 Customizing FAQ Content

To update or add new questions, simply modify the `items` array inside `FaqAccordion.jsx`:

```javascript
const items = [
  { 
    title: "YOUR QUESTION HERE", 
    content: "Your detailed response or answer goes here." 
  },
  // Add more items here...
]
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
