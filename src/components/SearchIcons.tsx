import React from 'react';
import { 
  FileSearch,
  Workflow,
  Clock,
  Laptop2,
  Globe2,
  Building,
  BookOpen,
  Building2,
  Code,
  Rocket,
  Bitcoin,
  BarChart4,
  LineChart,
  Banknote,
  Pill,
  Microscope,
  Palette,
  PenTool,
  Globe,
  Server,
  Network,
  Briefcase
} from 'lucide-react';

export const searchIcons: { [key: string]: React.ReactNode } = {
  // Essential Searches
  'Basic Job Search': <FileSearch className="w-6 h-6 text-emerald-500" />,
  'Detailed Job Search': <Workflow className="w-6 h-6 text-orange-500" />,
  'Recent Job Openings': <Clock className="w-6 h-6 text-blue-500" />,

  // Remote Work
  'Remote Jobs': <Laptop2 className="w-6 h-6 text-indigo-500" />,
  'US Remote Jobs': <Globe2 className="w-6 h-6 text-teal-500" />,

  // Major Job Platforms
  'Greenhouse Jobs': <Building className="w-6 h-6 text-green-600" />,
  'Lever Jobs': <BookOpen className="w-6 h-6 text-purple-600" />,
  'Ashby Jobs': <Building2 className="w-6 h-6 text-blue-600" />,

  // Tech Industry
  'Top Tech Companies': <Code className="w-6 h-6 text-blue-600" />,
  'Tech Startups': <Rocket className="w-6 h-6 text-red-500" />,
  'Web3 & Crypto': <Bitcoin className="w-6 h-6 text-amber-500" />,

  // Finance & Consulting
  'Big 4 Consulting': <BarChart4 className="w-6 h-6 text-blue-800" />,
  'Top Consulting': <LineChart className="w-6 h-6 text-indigo-600" />,
  'Investment Banking': <Building2 className="w-6 h-6 text-blue-700" />,
  'FinTech': <Banknote className="w-6 h-6 text-green-700" />,

  // Healthcare & Pharma
  'Top Pharma': <Pill className="w-6 h-6 text-red-600" />,
  'Clinical Research': <Microscope className="w-6 h-6 text-purple-600" />,

  // Creative & Design
  'Creative Agencies': <Palette className="w-6 h-6 text-pink-600" />,
  'UX/UI Design': <PenTool className="w-6 h-6 text-orange-600" />,

  // Alternative Sources
  '.CO Domain Jobs': <Globe className="w-6 h-6 text-cyan-500" />,
  '.IO Domain Jobs': <Server className="w-6 h-6 text-red-500" />,
  'Non-Standard Domains': <Network className="w-6 h-6 text-pink-500" />,

  // Default icon
  'Default': <Briefcase className="w-6 h-6 text-gray-500" />
};