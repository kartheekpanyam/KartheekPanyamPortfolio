export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'personal' | 'professional';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}
