import React,{useState} from 'react'
import "./App.css";
import Navbar from './components/Navbar'
import Content from './components/Content'


const App = () => {
  const [darkMode,setDarkMode] = useState(false);

  const toggleTheme = () =>{
    setDarkMode(!darkMode);
  };

  return (
    <div className = {darkMode ? "app dark" : "app light"}>
     <Navbar 
        darkMode={darkMode}
        toggleTheme={toggleTheme}
     />
     <Content name="Navi Talib" />
    </div>
  )
}

export default App