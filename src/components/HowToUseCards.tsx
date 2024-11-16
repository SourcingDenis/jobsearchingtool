import React from 'react';
import { Settings2, Search, ExternalLink, Rocket } from 'lucide-react';

interface HowToUseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function HowToUseCard({ icon, title, description }: HowToUseCardProps) {
  return (
    <div className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
      <div className="flex-1 p-8">
        <div className="inline-flex items-center justify-center p-4 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
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
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
      <HowToUseCard
        icon={<Settings2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
        title={translations.step1}
        description={translations.step1Details}
      />
      <HowToUseCard
        icon={<Search className="h-8 w-8 text-purple-600 dark:text-purple-400" />}
        title={translations.step2}
        description={translations.step2Details}
      />
      <HowToUseCard
        icon={<ExternalLink className="h-8 w-8 text-green-600 dark:text-green-400" />}
        title={translations.step3}
        description={translations.step3Details}
      />
      <HowToUseCard
        icon={<Rocket className="h-8 w-8 text-pink-600 dark:text-pink-400" />}
        title={translations.step4}
        description={translations.step4Details}
      />
    </div>
  );
}