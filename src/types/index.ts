export interface Project {
    id: number;
    title: string;
    description: string;
    context: string;
    background: string;
    realizations: string;
    learnings: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface AboutInfo {
    name: string;
    photoUrl: string;
    hobbies: string[];
    ambitions: string;
}