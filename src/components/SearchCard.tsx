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
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 transition-transform duration-200 hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        </div>
        {description && (
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {description}
          </p>
        )}
        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-mono overflow-x-auto whitespace-nowrap">
            {query}
          </p>
        </div>
        <button
          onClick={() => onExecute(query)}
          disabled={isDisabled}
          className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
          title={isDisabled ? `Requires at least ${minTitlesRequired} job titles` : ''}
        >
          <ExternalLink className="w-5 h-5 transition-transform duration-200 group-hover:rotate-12" />
          <span>{executeButtonText}</span>
        </button>
      </div>
    </div>
  );
}