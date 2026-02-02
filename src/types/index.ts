export interface Project {
  id: number;
  title: string;
  description: string;
  context: string;
  background: string;
  realizations: string;
  metrics: string;
  learnings: string;
  videoUrl?: string;
  repoUrl?: string;
  image?: string;
  mermaid?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
