import React from 'react';

const EmojiIcon = ({ emoji, className }: { emoji: string, className?: string }) => (
  <div className={`flex items-center justify-center ${className}`} style={{ fontSize: '1.5rem' }}>
    {emoji}
  </div>
);

export const searchIcons: { [key: string]: React.ReactNode } = {
  // Essential Searches
  'Basic Job Search': <EmojiIcon emoji="🔍" />,
  'Detailed Job Search': <EmojiIcon emoji="🔎" />,
  'Recent Job Openings': <EmojiIcon emoji="⏰" />,

  // Remote Work
  'Remote Jobs': <EmojiIcon emoji="🏠" />,
  'US Remote Jobs': <EmojiIcon emoji="🌎" />,

  // Major Job Platforms
  'Greenhouse': <EmojiIcon emoji="🌱" />,
  'Lever': <EmojiIcon emoji="⚡" />,
  'Ashby': <EmojiIcon emoji="🏛️" />,
  'Workable': <EmojiIcon emoji="💼" />,
  'SmartRecruiters': <EmojiIcon emoji="🎯" />,
  'Breezy HR': <EmojiIcon emoji="🌬️" />,
  'JazzHR': <EmojiIcon emoji="🎷" />,
  'Recruitee': <EmojiIcon emoji="🎨" />,
  'iCIMS': <EmojiIcon emoji="🏢" />,
  'BambooHR': <EmojiIcon emoji="🎋" />,

  // Tech Industry
  'Top Tech Companies': <EmojiIcon emoji="💻" />,
  'Tech Startups': <EmojiIcon emoji="🚀" />,
  'Web3 & Crypto': <EmojiIcon emoji="₿" />,

  // Finance & Consulting
  'Big 4 Consulting': <EmojiIcon emoji="📊" />,
  'Top Consulting': <EmojiIcon emoji="📈" />,
  'Investment Banking': <EmojiIcon emoji="🏦" />,
  'FinTech': <EmojiIcon emoji="💳" />,

  // Healthcare & Pharma
  'Top Pharma': <EmojiIcon emoji="💊" />,
  'Clinical Research': <EmojiIcon emoji="🔬" />,

  // Creative & Design
  'Creative Agencies': <EmojiIcon emoji="🎨" />,
  'UX/UI Design': <EmojiIcon emoji="✏️" />,

  // Alternative Sources
  '.CO Domain Jobs': <EmojiIcon emoji="🌐" />,
  '.IO Domain Jobs': <EmojiIcon emoji="⚙️" />,
  'Non-Standard Domains': <EmojiIcon emoji="🔗" />,

  // Default icon
  'Default': <EmojiIcon emoji="📝" />
};