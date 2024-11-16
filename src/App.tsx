import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { CategorySection } from './components/CategorySection';
import { GoogleIcon } from './components/GoogleIcon';
import { SearchModifier } from './components/SearchModifier';
import { LanguageToggle } from './components/LanguageToggle';
import { HowToUseCards } from './components/HowToUseCards';
import { searches as originalSearches } from './data/searches';
import { translations } from './translations';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'en';
    }
    return 'en';
  });

  const t = translations[lang as keyof typeof translations];
  const [jobTitles, setJobTitles] = useState<string[]>([]);
  const [searches, setSearches] = useState(originalSearches);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

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
      isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
    }`}>
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
          <div className="flex items-end gap-3 animate-glow">
              <GoogleIcon />
            </div>
            <div className="text-center max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                {t.subtitle}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden py-16 sm:py-24 rounded-2xl bg-gradient-to-br from-white/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-indigo-900/30 backdrop-blur-sm shadow-xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-900/40 dark:to-purple-900/40"></div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-8">
                <span className="inline-flex items-center gap-4">
                  {t.howToUse}
                  <Sparkles className="w-10 h-10 text-yellow-500 animate-pulse" />
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t.disclaimer}
              </p>
            </div>
            <HowToUseCards translations={t} />
          </div>
        </div>

        <SearchModifier 
          currentTitles={jobTitles.map(t => t.replace('.', ' '))}
          onTitlesChange={titles => setJobTitles(titles.map(t => t.replace(' ', '.')))}
          translations={{
            customizeSearchTitles: t.customizeJobTitles,
            addNewTitle: t.addNewTitle,
            add: t.add,
            suggestedTitles: t.suggestedTitles,
            minTitlesRequired: t.minTitlesRequired
          }}
          minTitlesRequired={1}
        />

        <div className="space-y-12">
          {categories.map(category => (
            <CategorySection
              key={category}
              category={category}
              searches={searches}
              onExecuteSearch={executeSearch}
              executeButtonText={t.executeSearch}
              currentTitlesCount={jobTitles.length}
              translations={{
                categories: t.categories,
                searches: t.searches
              }}
            />
          ))}
        </div>
      </main>

      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 flex items-center gap-2">
              {t.madeWith} <Heart className="w-5 h-5 text-red-500 animate-pulse" /> {t.by}{' '}
              <a 
                href="https://linkedin.com/in/sourcingdenis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                @sourcingdenis
              </a>
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 text-center max-w-2xl">
              {t.allSearchesFrom}{' '}
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
      <LanguageToggle currentLang={lang} onLanguageChange={setLang} />
    </div>
  );
}