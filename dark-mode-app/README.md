# 🌙 Dark / Light Mode — React

A simple **Dark/Light Mode** project built with React to practice the fundamentals of React state management and component communication.

## 🚀 Features

* 🌙 Switch between Dark Mode and Light Mode
* ⚛️ React `useState`
* 📦 Props
* 🎯 Event handling
* 🎨 Conditional CSS classes
* 🧩 Reusable React components
* ✨ Smooth theme transition

## 🛠️ Technologies Used

* React
* JavaScript
* CSS
* Vite

## 📂 Project Structure

```text
src/
├── App.jsx
├── App.css
├── Navbar.jsx
├── Content.jsx
└── main.jsx
```

## ⚙️ Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project directory:

```bash
cd dark-mode-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal.

## 🧠 What I Learned

While building this project, I practiced how to:

* Create state using `useState()`
* Update state using a function
* Pass data from parent to child using props
* Pass functions through props
* Handle button click events
* Apply CSS classes conditionally
* Split a React application into components

### State Flow

```text
App
 │
 ├── darkMode
 │
 ├── toggleTheme()
 │
 ├── Navbar
 │    ├── darkMode
 │    └── toggleTheme()
 │
 └── Content
      └── darkMode
```

## 📸 Preview

### ☀️ Light Mode

Add your project screenshot here.

### 🌙 Dark Mode

Add your project screenshot here.

## 🔮 Future Improvements

* [ ] Save theme preference using `localStorage`
* [ ] Add more UI components
* [ ] Add theme animations
* [ ] Add multiple themes
* [ ] Make the design fully responsive

## 👨‍💻 Author

**Navi Talib**

Built while learning React and practicing `useState` and Props.

⭐ If you find this project useful, consider giving the repository a star!
