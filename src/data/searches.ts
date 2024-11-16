export interface Search {
  title: string;
  query: string;
  category: string;
  minTitles?: number;
  description?: string;
}

export const searches: Search[] = [
  // Essential Searches
  {
    title: "Basic Job Search",
    query: '{TITLES} "job|jobs|career|careers"',
    category: "Essential Searches",
    minTitles: 1,
    description: "Simple and effective search for job listings across all platforms"
  },
  {
    title: "Detailed Job Search",
    query: '{TITLES} (intitle:job | intitle:jobs | intitle:career | intitle:careers | "apply now" | "add to job" | "share|save|email|text this job" | "job opening|openings" | "of|in the following states" | "remote but *")',
    category: "Essential Searches",
    minTitles: 1,
    description: "Comprehensive search covering various job listing formats"
  },
  {
    title: "Recent Job Openings",
    query: '"job opening|openings" {TITLES}',
    category: "Essential Searches",
    minTitles: 1,
    description: "Focus on newly posted positions"
  },

  // Remote Work
  {
    title: "Remote Jobs",
    query: '(intitle:virtual | intitle:remote | intitle:work.at.home | intitle:work.from.home | intitle:wfh) {TITLES}',
    category: "Remote Work",
    minTitles: 1,
    description: "Find remote and work-from-home opportunities"
  },
  {
    title: "US Remote Jobs",
    query: 'inanchor:us.remote | inanchor:remote.us | inanchor:remote.united.states | inanchor:united.states.remote {TITLES} "job|jobs|career|careers"',
    category: "Remote Work",
    minTitles: 1,
    description: "Remote positions specifically for US-based workers"
  },

  // Major Job Platforms
  {
    title: "Greenhouse Jobs",
    query: 'site:boards.greenhouse.io {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Search positions on Greenhouse job boards"
  },
  {
    title: "Lever Jobs",
    query: 'site:jobs.lever.co {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Find opportunities posted on Lever"
  },
  {
    title: "Ashby Jobs",
    query: 'site:jobs.ashbyhq.com {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Explore positions listed on Ashby"
  },

  // Tech Industry
  {
    title: "Top Tech Companies",
    query: '{TITLES} (site:microsoft.com OR site:google.com OR site:apple.com OR site:amazon.jobs OR site:meta.com) "job|jobs|career|careers"',
    category: "Tech Industry",
    minTitles: 1,
    description: "Positions at leading technology companies"
  },
  {
    title: "Tech Startups",
    query: '{TITLES} (startup OR unicorn OR series.a OR series.b OR series.c) (software OR tech OR saas OR cloud) "job|jobs|career|careers"',
    category: "Tech Industry",
    minTitles: 1,
    description: "Opportunities at technology startups"
  },
  {
    title: "Web3 & Crypto",
    query: '{TITLES} (crypto OR blockchain OR bitcoin OR ethereum OR web3) "job|jobs|career|careers"',
    category: "Tech Industry",
    minTitles: 1,
    description: "Positions in blockchain and cryptocurrency"
  },

  // Finance & Consulting
  {
    title: "Big 4 Consulting",
    query: '{TITLES} (site:pwc.com OR site:deloitte.com OR site:ey.com OR site:kpmg.com) "job|jobs|career|careers"',
    category: "Finance & Consulting",
    minTitles: 1,
    description: "Opportunities at Big 4 consulting firms"
  },
  {
    title: "Top Consulting",
    query: '{TITLES} (site:mckinsey.com OR site:bcg.com OR site:bain.com) "job|jobs|career|careers"',
    category: "Finance & Consulting",
    minTitles: 1,
    description: "Positions at leading strategy consulting firms"
  },
  {
    title: "Investment Banking",
    query: '{TITLES} (site:jpmorgan.com OR site:goldmansachs.com OR site:morganstanley.com OR site:blackrock.com) "job|jobs|career|careers"',
    category: "Finance & Consulting",
    minTitles: 1,
    description: "Roles at major investment banks"
  },
  {
    title: "FinTech",
    query: '{TITLES} (fintech OR "financial technology" OR "digital banking" OR "digital payments") (startup OR scale-up) "job|jobs|career|careers"',
    category: "Finance & Consulting",
    minTitles: 1,
    description: "Opportunities in financial technology companies"
  },

  // Healthcare & Pharma
  {
    title: "Top Pharma",
    query: '{TITLES} (site:pfizer.com OR site:novartis.com OR site:roche.com OR site:merck.com OR site:gsk.com) "job|jobs|career|careers"',
    category: "Healthcare & Pharma",
    minTitles: 1,
    description: "Positions at major pharmaceutical companies"
  },
  {
    title: "Clinical Research",
    query: '{TITLES} (clinical.research OR cro OR "clinical trials" OR "pharmaceutical research") "job|jobs|career|careers"',
    category: "Healthcare & Pharma",
    minTitles: 1,
    description: "Roles in clinical research organizations"
  },

  // Creative & Design
  {
    title: "Creative Agencies",
    query: '{TITLES} ("creative agency" OR "digital agency" OR "advertising agency" OR "design studio") "job|jobs|career|careers"',
    category: "Creative & Design",
    minTitles: 1,
    description: "Positions at creative and advertising agencies"
  },
  {
    title: "UX/UI Design",
    query: '{TITLES} (ux OR ui OR "user experience" OR "user interface" OR "product design") "job|jobs|career|careers"',
    category: "Creative & Design",
    minTitles: 1,
    description: "Design roles focusing on user experience"
  },

  // Domain-Specific
  {
    title: ".CO Domain Jobs",
    query: 'site:co {TITLES} "job|jobs|career|careers"',
    category: "Alternative Sources",
    minTitles: 1,
    description: "Search jobs on .co domains"
  },
  {
    title: ".IO Domain Jobs",
    query: 'site:io {TITLES} "job|jobs|career|careers"',
    category: "Alternative Sources",
    minTitles: 1,
    description: "Find positions on .io domains"
  },
  {
    title: "Non-Standard Domains",
    query: '-site:co -site:com -site:io -site:app {TITLES} "job|jobs|career|careers"',
    category: "Alternative Sources",
    minTitles: 1,
    description: "Discover jobs on less common domain extensions"
  }
];