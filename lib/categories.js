export const CATEGORIES = [
  {
    name: 'My Engineering Journey',
    slug: 'my-engineering-journey',
    description: 'Personal reflections, honest lessons, milestones, and daily realities of studying B.Tech CSE.',
  },
  {
    name: 'Programming',
    slug: 'programming',
    description: 'Foundations of code, Python mastery, data structures, algorithms, and clean software craftsmanship.',
  },
  {
    name: 'Data Science',
    slug: 'data-science',
    description: 'Data analytics, exploratory data analysis, statistics, visual storytelling, and real-world datasets.',
  },
  {
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description: 'Core concepts, agentic systems, search algorithms, knowledge representation, and foundational AI.',
  },
  {
    name: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Supervised and unsupervised models, math fundamentals, neural networks, and model evaluations.',
  },
  {
    name: 'Projects and Experiments',
    slug: 'projects-and-experiments',
    description: 'Detailed breakdowns of technical builds, prototypes, architectural decisions, and bug-hunting logs.',
  },
  {
    name: 'Career and Learning',
    slug: 'career-and-learning',
    description: 'GATE DA preparation roadmap, study techniques, technical reading lists, and student-to-professional goals.',
  },
];

export function getCategoryBySlug(slug) {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function slugifyCategory(categoryName) {
  if (!categoryName) return '';
  const found = CATEGORIES.find(
    (c) => c.name.toLowerCase() === categoryName.toLowerCase()
  );
  if (found) return found.slug;
  return categoryName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

