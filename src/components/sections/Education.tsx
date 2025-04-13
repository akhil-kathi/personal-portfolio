import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import jgsLogo from '@/assets/images/education/JGS.webp';
import wesleyLogo from '@/assets/images/education/Wesley.webp';
import officersAcademyLogo from '@/assets/images/education/OfficersAcademy.webp';
import kmitLogo from '@/assets/images/education/kmit.webp';
// Education Data
const education = [
  {
    degree: "Master of Business Administration (MBA)",
    course: "Finance",
    institution: "Wesley PG College",
    university: "Osmania University",
    universityUrl: "https://www.osmania.ac.in/",
    logo: <img src={wesleyLogo} alt="Wesley" className="w-12 h-12 object-cover rounded-full" loading="lazy" decoding="async" />,
    period: "Sept,2021 - Oct,2023",
    location: "Hyderabad, India",
    url: "https://www.linkedin.com/school/wesley-pg-college---india/",
    grade: "Ⅰ Class (67%)"
  },
  {
    degree: "Bachelors in Technology",
    course: "Electronics & Instrumentation Engineering",
    institution: "Keshav Memorial Institute of Technology",
    university: "Jawaharlal Nehru Technological University, Hyderabad",
    universityUrl: "https://jntuh.ac.in/",
    logo: <img src={kmitLogo} alt="KMIT" className="w-12 h-12 object-cover rounded-full" loading="lazy" decoding="async" />,
    period: "July,2015 - July,2019",
    location: "Hyderabad, India",
    url: "https://kmit.in/",
    grade: "Ⅰ  Class with Distinction (70%)"
  },
  {
    degree: "Intermediate (10+2)",
    course: "Mathematics, Physics, Chemistry",
    institution: "Officers Academy",
    university: "Board of Intermediate Education, Telangana",
    universityUrl: "https://bie.telangana.gov.in/",
    logo: <img src={officersAcademyLogo} alt="Officers Academy" className="w-12 h-12 object-cover rounded-full" loading="lazy" decoding="async" />,
    period: "March,2013 - March,2015",
    location: "Hyderabad, India",
    url: "https://g.co/kgs/LPgmhak",
    grade: "86%"
  },
  {
    degree: "Secondary School",
    course: "Computer Applications",
    institution: "Johnson Grammar School",
    university: "Indian Certificate of Secondary Education",
    universityUrl: "https://www.cisce.org/",
    logo: <img src={jgsLogo} alt="JGS" className="w-12 h-12 object-cover rounded-full" loading="lazy" decoding="async" />,
    period: "Feb,2001 - March,2013",
    location: "Hyderabad, India",
    url: "https://jgsicse.org/",
    grade: "82%"
  }
];

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <GraduationCap className="h-6 sm:h-8 w-6 sm:w-8" />
          <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-4 sm:p-6 overflow-hidden">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 items-center">
                    {edu.logo}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{edu.course}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                    <span className="text-sm sm:text-base">{edu.grade}</span>
                    <Award className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-muted-foreground">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                    <div className="flex flex-wrap items-center gap-x-2">
                      <a 
                        href={edu.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base"
                      >
                        {edu.institution}
                      </a>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-sm sm:text-base">{edu.location}</span>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
                      <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap sm:hidden">
                        <span className="text-sm">{edu.grade}</span>
                        <Award className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                        <span className="text-sm sm:text-base">{edu.period}</span>
                        <Calendar className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <a 
                    href={edu.universityUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm mt-1 sm:mt-0"
                  >
                    Affiliated to: {edu.university}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}