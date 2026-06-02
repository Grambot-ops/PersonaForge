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
  hasDiagram?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
