import { useEffect, useRef } from 'react';

function SearchBox() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search... "
      className="w-full max-w-md px-4 py-2 text-base text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-400"
    />
  );
}

export default SearchBox