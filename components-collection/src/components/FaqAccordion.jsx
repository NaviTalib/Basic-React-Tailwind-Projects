import React, { useState } from 'react'

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: "JAVASCRIPT", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dictum ligula." },
    { title: "JAVA", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dictum ligula." },
    { title: "HTML", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dictum ligula." },
    { title: "CSS", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dictum ligula." },
  ]

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200">
              {/* Accordion Header Trigger */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 text-left font-semibold text-gray-700 transition-colors duration-150"
              >
                <span>{item.title}</span>
                {/* SVG Chevron Icon that rotates when open */}
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Accordion Content Body */}
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-4 text-gray-600 bg-white border-t border-gray-100 text-sm leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FaqAccordion
