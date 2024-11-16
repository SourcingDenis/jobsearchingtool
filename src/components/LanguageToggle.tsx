import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export function LanguageToggle({ currentLang, onLanguageChange }: LanguageToggleProps) {
  return (
    <button
      onClick={() => onLanguageChange(currentLang === 'en' ? 'uk' : 'en')}
      className="fixed bottom-4 left-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
      aria-label="Toggle language"
    >
      <Languages className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {currentLang.toUpperCase()}
      </span>
    </button>
  );
}