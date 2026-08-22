import React from "react";

export default function FlashCard({ question, answer, isFlipped, onToggleFlip }) {
  return (
    <div
      onClick={onToggleFlip}
      className={`min-h-[180px] p-8 border-2 border-blue-500 rounded-xl flex flex-col items-center justify-center cursor-pointer text-center select-none shadow-md transition-all duration-300 ease-in-out ${
        isFlipped ? "bg-blue-50" : "bg-white"
      }`}
    >
      <span className="text-xs color-gray-500 font-semibold uppercase tracking-wider mb-2 text-gray-500">
        {isFlipped ? "Answer" : "Question (Click to flip)"}
      </span>
      <h2 className="text-xl font-medium text-slate-800 m-0">
        {isFlipped ? answer : question}
      </h2>
    </div>
  );
}