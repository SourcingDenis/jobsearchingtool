export interface Search {
  title: string;
  query: string;
  category: string;
  minTitles?: number;
  description?: string;
  layout?: string;
}

export const searches: Search[] = [
  // Major Job Platforms
  {
    title: "Greenhouse",
    query: 'site:boards.greenhouse.io {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Search positions on Greenhouse job boards"
  },
  {
    title: "Lever",
    query: 'site:jobs.lever.co {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Find opportunities posted on Lever"
  },
  {
    title: "Ashby",
    query: 'site:jobs.ashbyhq.com {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Explore positions listed on Ashby"
  },
  {
    title: "Workable",
    query: 'site:apply.workable.com {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Search across companies using Workable's ATS"
  },
  {
    title: "SmartRecruiters",
    query: 'site:jobs.smartrecruiters.com {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Find positions on SmartRecruiters platform"
  },
  {
    title: "Breezy HR",
    query: 'site:jobs.breezy.hr {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Search through Breezy HR's recruiting platform"
  },
  {
    title: "JazzHR",
    query: 'site:apply.jobot.com {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Find jobs posted through JazzHR's ATS"
  },
  {
    title: "Recruitee",
    query: 'site:jobs.recruitee.com {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Search positions on Recruitee's platform"
  },
  {
    title: "iCIMS",
    query: 'site:careers.icims.com {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Find opportunities on iCIMS career sites"
  },
  {
    title: "BambooHR",
    query: 'site:bamboohr.com/jobs {TITLES}',
    category: "Major Job Platforms",
    minTitles: 1,
    description: "Search jobs posted through BambooHR"
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

  // Broad Searches
  {
    title: "Basic Job Search",
    query: '{TITLES}',
    category: "Broad Searches",
    minTitles: 1,
    description: "Simple search for your job titles"
  },
  {
    title: "Detailed Job Search",
    query: '({TITLES}) (job OR jobs OR position OR positions OR career OR careers OR opportunity OR opportunities) (2023 OR 2024)',
    category: "Broad Searches",
    minTitles: 1,
    description: "Comprehensive search with various job-related terms"
  },
  {
    title: "Recent Job Openings",
    query: '{TITLES} (after:2024-01-01)',
    category: "Broad Searches",
    minTitles: 1,
    description: "Find the most recent job postings"
  },
  {
    title: ".CO Domain Jobs",
    query: 'site:co {TITLES} "job|jobs|career|careers"',
    category: "Broad Searches",
    minTitles: 1,
    description: "Search jobs on .co domains"
  },
  {
    title: ".IO Domain Jobs",
    query: 'site:io {TITLES} "job|jobs|career|careers"',
    category: "Broad Searches",
    minTitles: 1,
    description: "Find positions on .io domains"
  },
  {
    title: "Non-Standard Domains",
    query: '-site:co -site:com -site:io -site:app {TITLES} "job|jobs|career|careers"',
    category: "Broad Searches",
    minTitles: 1,
    description: "Discover jobs on less common domain extensions"
  }
];