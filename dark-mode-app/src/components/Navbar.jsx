import React from 'react'

const Navbar = ({toggleTheme,darkMode}) => {
  return (
     <nav>
      <h2>Dark-Mode-App</h2>

      <button onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  )
}

export default Navbar