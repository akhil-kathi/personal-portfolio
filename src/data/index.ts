import { WorkExperience, Education, Certificate } from '@/types';

export const workExperience: WorkExperience[] = [
  {
    company: "Cisco",
    logo: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&auto=format&fit=crop&q=80",
    role: "Senior Software Engineer",
    period: "2021 - Present",
    location: "Hyderabad, India",
    description: "Working on enterprise-scale distributed systems and messaging platforms for major UK financial and utility clients.",
    technologies: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ],
    clients: [
      {
        name: "Capital One",
        logo: "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=800&auto=format&fit=crop&q=80",
        work: "Developed real-time transaction processing system using Kafka and Spring Boot"
      },
      {
        name: "Centrica/British Gas",
        logo: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop&q=80",
        work: "Built energy consumption monitoring and billing system"
      },
      {
        name: "O2",
        logo: "https://images.unsplash.com/photo-1587614381634-068e97d9c2fa?w=800&auto=format&fit=crop&q=80",
        work: "Implemented customer service automation platform"
      },
      {
        name: "Royal Mail Group",
        logo: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop&q=80",
        work: "Created parcel tracking and delivery optimization system"
      },
      {
        name: "RAC",
        logo: "https://images.unsplash.com/photo-1589641896930-aee6d888e173?w=800&auto=format&fit=crop&q=80",
        work: "Developed roadside assistance dispatch system"
      },
      {
        name: "New Day",
        logo: "https://images.unsplash.com/photo-1589641896921-db38d204c477?w=800&auto=format&fit=crop&q=80",
        work: "Built credit card processing and fraud detection system"
      }
    ]
  },
  {
    company: "Wipro",
    logo: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=80",
    role: "Software Engineer",
    period: "2018 - 2021",
    location: "Hyderabad, India",
    description: "Full-stack development across multiple international client projects.",
    technologies: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ],
    clients: [
      {
        name: "Volkswagen",
        logo: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=800&auto=format&fit=crop&q=80",
        work: "Developed vehicle service management system using Spring Boot and Angular"
      },
      {
        name: "FedEx",
        logo: "https://images.unsplash.com/photo-1619767886697-9bb386062de9?w=800&auto=format&fit=crop&q=80",
        work: "Built package tracking and logistics optimization platform"
      },
      {
        name: "Honda",
        logo: "https://images.unsplash.com/photo-1619767886721-8e2c9b55c550?w=800&auto=format&fit=crop&q=80",
        work: "Created dealer management system with React and MySQL"
      },
      {
        name: "General Electric",
        logo: "https://images.unsplash.com/photo-1619767886745-8e2c9b55c551?w=800&auto=format&fit=crop&q=80",
        work: "Implemented industrial IoT monitoring dashboard"
      }
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Wesley PG College",
    university: "Osmania University",
    period: "2016 - 2018",
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&auto=format&fit=crop&q=80",
    description: "Specialized in Business Administration with focus on Technology Management"
  },
  {
    degree: "B.Tech in Electronics Instrumentation Engineering",
    institution: "Keshav Memorial Institute of Technology",
    university: "Jawaharlal Nehru Technological University",
    period: "2012 - 2016",
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80",
    description: "Graduated with distinction, specialized in Electronics Instrumentation Engineering"
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Professional level certification for AWS architecture and design.",
    imageUrl: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&auto=format&fit=crop&q=80",
    verificationUrl: "https://aws.amazon.com/verification"
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    description: "Advanced certification for cloud application development.",
    imageUrl: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200&auto=format&fit=crop&q=80",
    verificationUrl: "https://cloud.google.com/certification/verify"
  },
  {
    id: 3,
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2021",
    description: "Comprehensive certification in modern frontend development.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=80",
    verificationUrl: "https://www.meta.com/certificates/verify"
  }
];