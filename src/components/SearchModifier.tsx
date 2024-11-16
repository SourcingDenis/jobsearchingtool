import React, { useEffect, useRef } from 'react';
import { Settings2 } from 'lucide-react';

interface SearchModifierProps {
  onTitlesChange: (titles: string[]) => void;
  currentTitles: string[];
  translations: {
    customizeSearchTitles: string;
    addNewTitle: string;
    add: string;
    suggestedTitles: string;
  };
}

export function SearchModifier({ onTitlesChange, currentTitles, translations }: SearchModifierProps) {
  const [newTitle, setNewTitle] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const defaultTitles = [
    "Software Engineer",
    "Marketing Manager",
    "Data Scientist",
    "HR Specialist",
    "Product Designer",
    "Financial Analyst",
    "DevOps Engineer",
    "Sales Representative",
    "UX Researcher",
    "Project Manager"
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current && 
        buttonRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAddTitle = () => {
    if (newTitle.trim() && !currentTitles.includes(newTitle.trim())) {
      onTitlesChange([...currentTitles, newTitle.trim()]);
      setNewTitle('');
    }
  };

  const handleRemoveTitle = (titleToRemove: string) => {
    if (currentTitles.length > 1) {
      onTitlesChange(currentTitles.filter(title => title !== titleToRemove));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTitle();
    }
  };
  return (
    <div className="relative mb-12">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
          currentTitles.length === 0 ? 'animate-shine-border' : ''
        }`}
      >
        <Settings2 className={`w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400 ${
          currentTitles.length === 0 ? 'animate-bounce' : ''
        }`} />
        <span className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
          {translations.customizeSearchTitles}
        </span>
      </button>
  
      {isOpen && (
        <div 
          ref={modalRef}
          className="absolute top-full left-0 right-0 mt-4 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            {currentTitles.map((title, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-lg text-sm sm:text-base"
              >
                {title}
                {currentTitles.length > 1 && (
                  <button
                    onClick={() => handleRemoveTitle(title)}
                    className="ml-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
          </div>
  
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={translations.addNewTitle}
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            <button
              onClick={handleAddTitle}
              disabled={!newTitle.trim()}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              {translations.add}
            </button>
          </div>
  
          <div className="mt-6 sm:mt-8">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
              {translations.suggestedTitles}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              {defaultTitles.filter(title => !currentTitles.includes(title)).map((title, index) => (
                <button
                  key={index}
                  onClick={() => onTitlesChange([...currentTitles, title])}
                  className="px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  + {title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}