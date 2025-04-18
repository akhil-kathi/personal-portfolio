import { Briefcase, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiJavascript,
  SiSpringboot,
  SiApachekafka,
  SiAngular,
  SiReact,
  SiMysql,
  SiCisco,
  SiWipro,
  SiO2,
  SiVolkswagen,
  SiFedex,
  SiHonda,
  SiGeneralelectric,
  SiAmazon,
  SiElastic,
  SiJquery
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";

// Import company logos
import rogersLogo from '@/assets/images/companies/Rogers.webp';
import centricaLogo from '@/assets/images/companies/Centrica.webp';
import racLogo from '@/assets/images/companies/RAC.webp';
import capitalOne from '@/assets/images/companies/CapitalOne.webp';

// Work Experience Data
const workExperience = [
  {
    company: "Cisco",
    logo: <SiCisco className="h-8 w-8 text-blue-600" />,
    role: "Software Engineer",
    period: "March,2022 - Present",
    location: "Hyderabad, India",
    description: (<>
      Operating within the Customer Experience (CX) i.e. combination of Communication Platform as a Service (CPaaS) and Contact Center (CC) domain, specializing in delivering robust, scalable solutions through Webex Connect—a multi-channel communication platform that supports WhatsApp, Email, SMS, RCS, and Apple Business Messaging.      <br />
      <br />
      Working in an Agile environment, collaborating with cross-functional teams to implement features based on evolving project priorities and client requirements. Responsibilities encompass engaging in client meetings for requirement gathering, clarifications, and feedback sessions to ensure all deliverables align with strategic business goals and client expectations.
    </>),
    technologies: [
      { name: "JavaScript", icon: <SiJavascript className="w-full h-full text-yellow-400" /> },
      { name: "Kibana", icon: <SiElastic className="w-full h-full text-blue-600" /> },
      { name: "AWS", icon: <SiAmazon className="w-full h-full text-orange-500" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="w-full h-full text-green-500" /> },
      { name: "Apache Kafka", icon: <SiApachekafka className="w-full h-full text-black dark:text-white" /> },
      { name: "Java", icon: <FaJava className="w-full h-full text-red-500" /> }
    ],
    clients: [
      {
        name: "Capital One",
        logo: <img src={capitalOne} alt="CapitalOne" loading="lazy" className="w-6 h-6 object-cover rounded-full" />,
        work: "Built fault tolerant messaging application for customers to connect with bank agents for query resolution.",
        url: "https://www.capitalone.com"
      },
      {
        name: "Centrica",
        logo: <img src={centricaLogo} alt="Centrica" loading="lazy" className="w-6 h-6 object-cover rounded-full" />,
        work: "Developed solution for customer appointment booking, rescheduling and agent interaction with social hours check.",
        url: "https://www.britishgas.co.uk"
      },
      {
        name: "O2",
        logo: <SiO2 className="w-6 h-6 text-blue-600" />,
        work: "Built solution for customer to redeem their offers.",
        url: "https://www.o2.co.uk"
      },
      {
        name: "Rogers",
        logo: <img src={rogersLogo} alt="Rogers" loading="lazy" className="w-6 h-6 object-cover rounded-full" />,
        work: "Built an backend solution for customer to redeem offers, ad-ons, vouchers and coupons.",
        url: "https://www.rogers.com"
      },
      {
        name: "RAC",
        logo: <img src={racLogo} alt="RAC" loading="lazy" className="w-6 h-6 object-cover rounded-full" />,
        work: "Built survey system for customers to rate their car repair experience.",
        url: "https://www.rac.co.uk"
      },
      {
        name: "SKAT",
        logo: <SiVolkswagen className="w-6 h-6 text-blue-500" />,
        work: "Built a survey solution with intensive reporting.",
        url: "https://www.newday.co.uk"
      }
    ]
  },
  {
    company: "Wipro",
    logo: <SiWipro className="h-8 w-8 text-blue-500" />,
    role: "Project Engineer",
    period: "June,2019 - March,2022",
    location: "Hyderabad, India",
    description: (<>Worked with U.S. enterprise clients, delivering high-quality solutions as a Full-Stack and Front-End Developer.
      <br />
      <br />
      Contributed to developing features and functionality for enterprise-grade web applications using various technologies. My responsibilities included writing JPQL queries, designing application programming interface (API), and web screens, building responsive user interfaces, and writing unit and integrated test cases. Also worked on UI modernization efforts, migrating legacy code to modern frameworks and ensuring cross-browser compatibility and responsive design.
      <br />
      <br />
      Followed Agile methodologies with bi-weekly sprints and daily client stand-ups, collaborating with cross-functional teams to gather requirements, address feedback, and ensure timely delivery. </>)
    ,
    technologies: [
      { name: "Java", icon: <FaJava className="w-full h-full text-red-500" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="w-full h-full text-green-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-full h-full text-yellow-400" /> },
      { name: "Angular", icon: <SiAngular className="w-full h-full text-red-500" /> },
      { name: "MySQL", icon: <SiMysql className="w-full h-full text-blue-400" /> },
      { name: "jQuery", icon: <SiJquery className="w-full h-full text-blue-400" /> },

    ],
    clients: [

      {
        name: "FedEx",
        logo: <SiFedex className="w-6 h-6 text-purple-600" />,
        work: "Built reporting and access management system for electronic document management service for uploading documents.",
        url: "https://www.fedex.com"
      },
      {
        name: "Volkswagen",
        logo: <SiVolkswagen className="w-6 h-6 text-blue-600" />,
        work: "Developed functionality for downloding reports in various formats within dealership portal and made them responsive.",
        url: "https://www.volkswagen.co.uk"
      },
      {
        name: "General Electric",
        logo: <SiGeneralelectric className="w-6 h-6 text-blue-600" />,
        work: "Developed a POC for vehicle enrollment using Test Driven Development approach.",
        url: "https://www.ge.com"
      },
      {
        name: "Honda",
        logo: <SiHonda className="w-6 h-6 text-red-600" />,
        work: "Developed new screens for portal used for supply chain management of raw goods across the globe.",
        url: "https://www.honda.co.uk"
      }
    ]
  }
];

export function WorkExperience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <Briefcase className="h-6 sm:h-8 w-6 sm:w-8" />
          <h2 className="text-2xl sm:text-3xl font-bold">Work Experience</h2>
        </div>
        <div className="space-y-8 sm:space-y-12">
          {workExperience.map((job, index) => (
            <Card key={index} className="p-4 sm:p-6 overflow-hidden">
              <div className="space-y-4">
                {/* Header with company name, logo and period */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {job.logo}
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{job.period}</span>
                </div>

                {/* Sub-header with role and location */}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-medium">{job.role}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>

                <Separator className="my-4" />
                <p className="text-muted-foreground">{job.description}</p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    Technologies
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <TooltipProvider>
                      {job.technologies.map((tech, techIndex) => (
                        <Tooltip key={techIndex} delayDuration={200}>
                          <TooltipTrigger asChild>
                            <div className="w-8 h-8 rounded-lg bg-background/5 backdrop-blur-sm p-1 hover:bg-background/10 transition-colors cursor-pointer">
                              {tech.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent
                            className="bg-background border border-border shadow-lg dark:bg-zinc-900 dark:border-zinc-800"
                            sideOffset={5}
                          >
                            <p className="font-medium text-foreground dark:text-zinc-100">{tech.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3">Client Projects</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {job.clients.map((client, clientIndex) => (
                      <div key={clientIndex} className="bg-muted p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-transparent">
                            {client.logo}
                          </div>
                          <a
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium line-clamp-1 hover:text-primary transition-colors"
                          >
                            {client.name}
                          </a>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {client.work}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 