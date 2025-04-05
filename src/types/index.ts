export interface Technology {
  name: string;
  icon: string;
}

export interface Client {
  name: string;
  logo: string;
  work: string;
}

export interface WorkExperience {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: Technology[];
  clients: Client[];
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  period: string;
  location: string;
  image: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  verificationUrl: string;
}