export interface Project {
  imageSrc: string;
  imageAlt: string;
  title: string;
  projectLink: string;
  githubLink: string;
  skills: string[];
  description: string;
  fullDescription: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  featured_image?: string;
  tags?: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}
