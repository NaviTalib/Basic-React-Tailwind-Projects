import React, { useState } from 'react' 

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-4">
      <h1 className="font-mono text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center max-w-xl">
        Counter App using React + TailwindCSS
      </h1>
      
      <div className="flex flex-col items-center bg-white p-6 w-full max-w-md md:max-w-xl h-auto rounded-xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-semibold font-mono text-center bg-gray-300 mb-6 w-32 md:w-40 py-1 rounded-full">
          {count}
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 w-full">
          <button 
            className="flex-1 max-w-[80px] sm:max-w-none bg-blue-500 py-2 px-6 sm:px-8 font-mono text-2xl md:text-3xl font-bold text-white hover:bg-blue-700 cursor-pointer rounded transition-colors" 
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
           <button 
            className="flex-1 max-w-[80px] sm:max-w-none bg-blue-500 py-2 px-6 sm:px-8 font-mono text-2xl md:text-3xl font-bold text-white hover:bg-blue-700 cursor-pointer rounded transition-colors" 
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button 
            className="flex-1 bg-blue-500 py-2 px-6 sm:px-8 font-mono text-base sm:text-xl md:text-3xl font-bold text-white hover:bg-blue-700 cursor-pointer rounded transition-colors" 
            onClick={() => setCount(0)}
          >
            RESET
          </button>
         
        </div>
      </div>
    </div>
  )
}

export default App
