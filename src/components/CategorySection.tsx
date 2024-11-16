import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
}

export function CategorySection({ 
  category, 
  searches, 
  onExecuteSearch, 
  executeButtonText,
  currentTitlesCount,
  translations
}: CategorySectionProps) {
  const [isOpen, setIsOpen] = useState(category === "Essential Searches");
  const categorySearches = searches.filter(search => search.category === category);

  return (
    <section className="mb-12">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 mb-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {translations.categories[category]}
        </h2>
        <ChevronDown 
          className={`w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </div>
      
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 origin-top ${
          isOpen 
            ? 'opacity-100 max-h-[2000px]' 
            : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        {categorySearches.map((search, index) => (
          <SearchCard
            key={index}
            title={translations.searches[search.title]}
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
    </section>
  );
}