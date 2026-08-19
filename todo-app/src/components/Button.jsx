import React from "react";

const Button = ({ label = "Click Me", onClick, type = "button", disabled = false }) => {
  return (
    <button 
      className="px-6 bg-blue-500 text-lg font-semibold rounded-xl text-white"
     type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;