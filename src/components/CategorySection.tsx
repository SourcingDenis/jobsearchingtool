import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { SearchCard } from './SearchCard';

interface Search {
  title: string;
  query: string;
  category: string;
  minTitles?: number;
  description?: string;
}

interface CategorySectionProps {
  category: string;
  searches: Search[];
  onExecuteSearch: (query: string) => void;
  executeButtonText: string;
  currentTitlesCount: number;
  translations: {
    categories: { [key: string]: string };
    searches: { [key: string]: string };
  };
  isAlternativeExpanded: boolean;
  onAlternativeExpand: (expanded: boolean) => void;
  isMajorPlatformsExpanded: boolean;
  onMajorPlatformsExpand: (expanded: boolean) => void;
  shouldShow: boolean;
  defaultExpanded?: boolean;
}

export function CategorySection({ 
  category, 
  searches, 
  onExecuteSearch, 
  executeButtonText,
  currentTitlesCount,
  translations,
  isAlternativeExpanded,
  onAlternativeExpand,
  isMajorPlatformsExpanded,
  onMajorPlatformsExpand,
  shouldShow,
  defaultExpanded = false
}: CategorySectionProps) {
  const [isOpen, setIsOpen] = useState(defaultExpanded);
  const [showAllSearches, setShowAllSearches] = useState(false);
  const categorySearches = searches.filter(search => search.category === category);
  const displayedSearches = category === "Broad Searches" && !showAllSearches
    ? categorySearches.slice(0, 3)
    : categorySearches;

  useEffect(() => {
    if (category === "Alternative Sources") {
      onAlternativeExpand(isOpen);
    } else if (category === "Major Job Platforms") {
      onMajorPlatformsExpand(isOpen);
    }
  }, [isOpen, category, onAlternativeExpand, onMajorPlatformsExpand]);

  if (!shouldShow) {
    return null;
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section 
      className={`mb-12 transition-all duration-500 ${
        shouldShow ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
      }`}
      style={{
        maxHeight: shouldShow ? '2000px' : '0',
        overflow: 'hidden'
      }}
    >
      <div
        onClick={handleToggle}
        className={`flex items-center justify-between bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 mb-6 ${
          category === "Major Job Platforms" ? 'relative overflow-hidden' : ''
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            {translations.categories[category] || category}
          </h2>
          {category === "Major Job Platforms" && (
            <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse">
              HOT 🔥
            </span>
          )}
        </div>
        <ChevronDown 
          className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
        {category === "Major Job Platforms" && !isOpen && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-shine" />
        )}
      </div>
      
      <div
        className={`transition-all duration-500 origin-top ${
          isOpen 
            ? 'opacity-100 max-h-[2000px]' 
            : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {displayedSearches.map((search, index) => (
            <SearchCard
              key={index}
              title={search.title}
              query={search.query}
              category={category}
              description={search.description}
              onExecute={onExecuteSearch}
              executeButtonText={executeButtonText}
              minTitlesRequired={search.minTitles}
              currentTitlesCount={currentTitlesCount}
            />
          ))}
        </div>
        {category === "Broad Searches" && categorySearches.length > 3 && (
          <div className="mt-6 text-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAllSearches(!showAllSearches);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200"
            >
              {showAllSearches ? (
                <>Show Less <ChevronDown className="w-4 h-4" /></>
              ) : (
                <>Show More <ChevronRight className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}