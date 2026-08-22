import React, { useState } from "react";
import FlashCard from "./FlashCard";

const sampleCards = [
  {
    id: 1,
    question: "What is Component State in React?",
    answer: "An object that holds data local to a component which can change over time and trigger re-renders."
  },
  {
    id: 2,
    question: "What are Props in React?",
    answer: "Short for 'properties', props are read-only inputs passed from a parent component down to a child component."
  },
  {
    id: 3,
    question: "What is unidirectional data flow?",
    answer: "The pattern in React where data flows down from parent to child via props, and events flow up via callbacks."
  }
];

export default function FlashCardDeck() {
  const [cards] = useState(sampleCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleToggleFlip = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className="max-w-md mx-auto my-10 px-5 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-slate-900 m-0">Flashcard Deck</h1>
        <span className="text-gray-500 font-bold">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      <FlashCard
        question={currentCard.question}
        answer={currentCard.answer}
        isFlipped={showAnswer}
        onToggleFlip={handleToggleFlip}
      />

      <div className="flex gap-2.5 mt-5">
        <button
          onClick={handlePrev}
          className="flex-1 py-2.5 px-3 rounded-md border border-slate-300 bg-slate-50 text-slate-700 font-bold cursor-pointer hover:bg-slate-100 transition-colors"
        >
          ← Previous
        </button>

        <button
          onClick={handleToggleFlip}
          className="flex-1 py-2.5 px-3 rounded-md border-none bg-blue-600 text-white font-bold cursor-pointer hover:bg-blue-700 transition-colors"
        >
          {showAnswer ? "Show Question" : "Flip to Answer"}
        </button>

        <button
          onClick={handleNext}
          className="flex-1 py-2.5 px-3 rounded-md border border-slate-300 bg-slate-50 text-slate-700 font-bold cursor-pointer hover:bg-slate-100 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}