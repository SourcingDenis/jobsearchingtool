import React from 'react';
import { ExternalLink } from 'lucide-react';
import { searchIcons } from './SearchIcons';

interface SearchCardProps {
  title: string;
  query: string;
  category: string;
  description?: string;
  onExecute: (query: string) => void;
  executeButtonText: string;
  isDisabled?: boolean;
  minTitlesRequired?: number;
  currentTitlesCount: number;
}

export function SearchCard({ 
  title, 
  query, 
  description,
  onExecute, 
  executeButtonText,
  minTitlesRequired = 1,
  currentTitlesCount
}: SearchCardProps) {
  const icon = searchIcons[title] || searchIcons['Default'];
  const isDisabled = currentTitlesCount < minTitlesRequired;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${isDisabled ? 'opacity-50' : ''}`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 transition-transform duration-200 hover:scale-110">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        </div>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>
        )}
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 mb-4">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-mono overflow-x-auto whitespace-nowrap">
            {query}
          </p>
        </div>
        <button
          onClick={() => onExecute(query)}
          disabled={isDisabled}
          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md 
            ${isDisabled 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
            } transition-colors duration-200 group`}
          title={isDisabled ? 'Add job titles to enable search' : 'Opens in new tab'}
        >
          <span>{executeButtonText}</span>
          <ExternalLink className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}