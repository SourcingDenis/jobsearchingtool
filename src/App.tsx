import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { CategorySection } from './components/CategorySection';
import { GoogleIcon } from './components/GoogleIcon';
import { SearchModifier } from './components/SearchModifier';
import { HowToUseCards } from './components/HowToUseCards';
import { searches as originalSearches } from './data/searches';
import { JobSearchHub } from './components/JobSearchHub';
import { strings } from './strings';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [jobTitles, setJobTitles] = useState<string[]>([]);
  const [searches, setSearches] = useState(originalSearches);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const updatedSearches = originalSearches.map(search => ({
      ...search,
      query: search.query.replace(
        '{TITLES}',
        jobTitles.map(title => `intitle:${title.replace(' ', '.')}`).join(' | ')
      )
    }));
    setSearches(updatedSearches);
  }, [jobTitles]);

  const executeSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  const categories = [...new Set(searches.map(s => s.category))];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="relative">
        <JobSearchHub isDark={isDark} />
        
        <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b ${
          isDark 
            ? 'from-transparent via-[#1a1a2e]/50 to-[#1a1a2e]' 
            : 'from-transparent via-[#764ba2]/50 to-[#764ba2]'
        }`} />
      </div>
      
      <main className={`relative bg-gradient-to-b ${
        isDark 
          ? 'from-[#1a1a2e] to-gray-900' 
          : 'from-[#764ba2] to-white'
      } pt-20 pb-40`}>
        <div 
          id="how-to-section" 
          className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          <div className={`relative overflow-hidden py-16 sm:py-24 rounded-3xl ${
            isDark 
              ? 'bg-gray-800/30 backdrop-blur-md' 
              : 'bg-white/20 backdrop-blur-md'
          } shadow-2xl mb-16 transition-all duration-300`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${
              isDark 
                ? 'from-gray-800/30 to-transparent' 
                : 'from-white/30 to-transparent'
            }`} />
            <div className="relative max-w-7xl mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className={`text-4xl font-extrabold sm:text-5xl mb-8 ${
                  isDark ? 'text-white' : 'text-white'
                }`}>
                  <span className="inline-flex items-center gap-4">
                    {strings.howToUse}
                    <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
                  </span>
                </h2>
                <p className={`mt-4 text-xl max-w-2xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-white'
                }`}>
                  {strings.disclaimer}
                </p>
              </div>
              <HowToUseCards translations={strings} />
            </div>
          </div>

          <div className={`relative z-10 ${
            isDark 
              ? 'bg-gray-800/90 dark:bg-gray-800/90' 
              : 'bg-white/95'
          } backdrop-blur-md rounded-3xl p-8 shadow-xl`}>
            <SearchModifier 
              currentTitles={jobTitles.map(t => t.replace('.', ' '))}
              onTitlesChange={titles => setJobTitles(titles.map(t => t.replace(' ', '.')))}
              translations={{
                customizeSearchTitles: strings.customizeJobTitles,
                addNewTitle: strings.addNewTitle,
                add: strings.add,
                suggestedTitles: strings.suggestedTitles,
                minTitlesRequired: strings.minTitlesRequired
              }}
              minTitlesRequired={1}
            />

            <div className="space-y-12 mt-12">
              {categories.map(category => (
                <CategorySection
                  key={category}
                  category={category}
                  searches={searches}
                  onExecuteSearch={executeSearch}
                  executeButtonText={strings.executeSearch}
                  currentTitlesCount={jobTitles.length}
                  translations={{
                    categories: strings.categories,
                    searches: strings.searches
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className={`relative z-10 ${
        isDark 
          ? 'bg-gray-800/90 border-gray-700' 
          : 'bg-white/90 border-gray-200'
        } backdrop-blur-sm border-t mt-24`}>
        <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 flex items-center gap-2">
              {strings.madeWith} <Heart className="w-5 h-5 text-red-500 animate-pulse" /> {strings.by}{' '}
              <a 
                href="https://sourcingdenis.live?utm_source=job_searcher" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                @sourcingdenis
              </a>
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 text-center max-w-2xl">
              {strings.allSearchesFrom}{' '}
              <a 
                href="https://linkedin.com/in/talentsourcertechnologysourcingrecruiter/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                @talentsourcertechnologysourcingrecruiter
              </a>
            </p>
          </div>
        </div>
      </footer>

      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
    </div>
  );
}
