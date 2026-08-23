```
# 🌐 World Clock Component

A modern, responsive, and visually stunning **World Clock** built with **React** and **Tailwind CSS**. Features real-time precision ticking, timezone switching, glassmorphism design, ambient glow effects, and a live pulse indicator.

---

## ✨ Features

- **⏱️ Real-Time Clock**: Live, precise tick intervals updated every second.
- **🌍 Dynamic Timezone Switcher**: Effortlessly switch between UTC, EST/EDT, BST/GMT, JST, IST, and more.
- **🎨 Glassmorphism UI**: Built with sleek dark-mode slate styling, backdrop blurs, ambient glowing gradients, and fluid transitions.
- **📱 Responsive Layout**: Fits seamlessly across mobile, tablet, and desktop screens.
- **⚡ Clean Architecture**: Modular component structure (`DigitalClock`, `ClockDisplay`, `TimeZoneSelector`).

---

## 🛠️ Tech Stack

- **Framework**: [React 18+](https://reactjs.org/)
- **Styling**: [Tailwind CSS v3+](https://tailwindcss.com/)
- **Icons & Typography**: Inter / Monospace system fonts + Inline SVG

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── ClockDisplay.jsx      # Time rendering card with live indicator & gradients
│   ├── TimeZoneSelector.jsx  # Timezone dropdown with custom SVG chevron
│   └── DigitalClock.jsx      # Main wrapper & timer state manager
├── App.jsx                   # Root application container
└── main.jsx                  # React entry point

```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v16.0 or higher) and **npm/yarn/pnpm** installed on your machine.

### Installation

1. **Clone the repository**:
```bash
git clone [https://github.com/your-username/world-clock-react.git](https://github.com/your-username/world-clock-react.git)
cd world-clock-react

```


2. **Install dependencies**:
```bash
npm install

```


3. **Start the development server**:
```bash
npm run dev

```



---

## 🧩 Components Overview

### 1. `ClockDisplay.jsx`

Renders the formatted time string, AM/PM pill badge, live status pulse, and active timezone badge inside a glassmorphic card with ambient glow effects.

### 2. `TimeZoneSelector.jsx`

Accessible, custom-styled dropdown menu allowing users to toggle between different regional timezones.

### 3. `DigitalClock.jsx`

Handles the 1-second `setInterval` state loop and passes down time data to sub-components.

---

## 📄 License

This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE).

```

```