import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Cpu, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export function About() {
  const [experience, setExperience] = useState('');
  useEffect(() => {
    const startDate = new Date("2019-06-10").getTime();
    const now = new Date().getTime();
    const diffInYears = (now - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    const years = Math.floor(diffInYears * 10) / 10;
    setExperience(`${years}+ years`);
  }, []);
  
  const technologies = [
    {
      category: 'Full Stack Development',
      icon: <Code2 className="h-6 w-6" />,
      items: [
        'Java', 'Spring Boot', 'Angular', 'MySQL', 'Hibernate',
        'Node.js', 'Express.js', 'React', 'TypeScript', 'REST APIs'
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      items: [
        'AWS (EC2, Lambda, DynamoDB, S3)', 'Firebase Realtime Database',
         'Git', 'Linux'
      ]
    },
    {
      category: 'Machine Learning',
      icon: <Cpu className="h-6 w-6" />,
      items: [
        'Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy',
        'Data Analysis', 'Model Deployment'
      ]
    },
    {
      category: 'Databases',
      icon: <Database className="h-6 w-6" />,
      items: [
        'MySQL', 'DynamoDB', 'Firebase Realtime Database',
        'MongoDB', 
      ]
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12">
          <User className="h-6 sm:h-8 w-6 sm:w-8" />
          <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-muted-foreground">
          I’m Akhil Kathi, a  Software Engineer and Full Stack Developer with over {experience} years of experience delivering efficient and enterprise-grade software solutions across diverse industries.
          During my professional journey I have had experience working with Agile and Scrum formats working on enterprise-grade applications. 
          I’ve also dabbled in Machine Learning, completing online machine learning certification before the rise of AI.  
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg text-muted-foreground mb-6">
            With a strong foundation in full-stack development and cloud technologies, I specialize in creating robust and efficient solutions. My experience spans across various domains including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Building scalable backend services using Java Spring Boot and Node.js</li>
            <li>Creating responsive frontend applications with Angular</li>
            <li>Implementing cloud solutions on AWS and Firebase</li>
            <li>Designing and optimizing database architectures</li>
            <li>Developing and deploying machine learning models for real-world applications</li>
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  {tech.icon}
                  <h3 className="text-xl font-semibold">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 