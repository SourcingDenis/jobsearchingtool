import React from 'react';
import { Settings2, Search, ExternalLink, Rocket } from 'lucide-react';

interface HowToUseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

function HowToUseCard({ icon, title, description, stepNumber }: HowToUseCardProps) {
  return (
    <div className="relative flex flex-col rounded-xl shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="absolute top-4 left-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
          <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{stepNumber}</span>
        </div>
      </div>
      <div className="flex-1 p-8">
        <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-900/50 mb-6 transform transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
          {stepNumber === 1 && (
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse">
              Start Here 👋
            </span>
          )}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-12 h-1 bg-indigo-200 dark:bg-indigo-800"></div>
      </div>
    </div>
  );
}

interface HowToUseCardsProps {
  translations: {
    step1: string;
    step1Details: string;
    step2: string;
    step2Details: string;
    step3: string;
    step3Details: string;
    step4: string;
    step4Details: string;
  };
}

export function HowToUseCards({ translations }: HowToUseCardsProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 relative">
      <HowToUseCard
        stepNumber={1}
        icon={<Settings2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
        title={translations.step1}
        description={translations.step1Details}
      />
      <HowToUseCard
        stepNumber={2}
        icon={<Search className="h-8 w-8 text-purple-600 dark:text-purple-400" />}
        title={translations.step2}
        description={translations.step2Details}
      />
      <HowToUseCard
        stepNumber={3}
        icon={<ExternalLink className="h-8 w-8 text-green-600 dark:text-green-400" />}
        title={translations.step3}
        description={translations.step3Details}
      />
      <HowToUseCard
        stepNumber={4}
        icon={<Rocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
        title={translations.step4}
        description={translations.step4Details}
      />
    </div>
  );
}