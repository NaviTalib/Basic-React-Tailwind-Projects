# Real-Time World Clock

A sleek, modern React application built with Tailwind CSS that displays live digital time across multiple global time zones with smooth backdrop-blur visuals.

---

## Features

* **Real-Time Updates**: Accurate second-by-second ticking via a centralized timer hook.
* **Global Time Zones**: Built-in support for major global cities including UTC, New York, London, Tokyo, and Kolkata.
* **Modern Dark UI**: Designed with Tailwind CSS featuring dynamic color gradients, glowing blurred background elements, and a live pulse indicator.
* **Clean Architecture**: Modular React components separating timer state, time display, and time zone selection logic.

---

## Project Structure

```text
src/
├── components/
│   ├── ClockDisplay.jsx       # Card displaying formatted time and glowing indicators
│   ├── DigitalClock.jsx       # State management for time interval and active timezone
│   └── TimeZoneSelector.jsx   # Styled select control with custom SVG arrow
├── App.jsx                    # Root layout wrapper
├── main.jsx                   # React entry point
└── index.css                  # Tailwind directives

```



## Component Architecture

```
App.jsx
└── DigitalClock.jsx (Main Container / Timer State)
    ├── ClockDisplay.jsx (Time Formatting & Glowing Card UI)
    └── TimeZoneSelector.jsx (Interactive Dropdown Menu)

```

---

## Tech Stack

* **Frontend**: React (Hooks, Functional Components)
* **Styling**: Tailwind CSS (Backdrop Filters, Dynamic Gradients, Custom Animations)
* **Time Formatting**: Native `Intl` / `Date.prototype.toLocaleTimeString` API

---

## Getting Started

### Prerequisites

Ensure you have Node.js and npm/yarn installed on your machine.

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/world-clock.git
cd world-clock

```


2. **Install dependencies:**
```bash
npm install
# or
yarn install

```


3. **Configure Tailwind CSS:**
Ensure Tailwind CSS is installed and configured in your project's `tailwind.config.js` and global stylesheet.
4. **Start the development server:**
```bash
npm run dev
# or
yarn dev

```



---


## License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).
