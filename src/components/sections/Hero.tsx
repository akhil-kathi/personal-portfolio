import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { HiChevronDown } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { SiGithub, SiLinkedin } from 'react-icons/si';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
        >
          Akhil Kathi
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground mb-8"
        >
          Software Engineer, Full Stack Developer & Machine Learning Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/akhil-kathi" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <SiGithub className="mr-2 h-5 w-5 text-[#181717] dark:text-white" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/akhilkathi" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <SiLinkedin className="mr-2 h-5 w-5 text-[#0A66C2]" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:akhilkathi@duck.com" className="flex items-center">
              <MdEmail className="mr-2 h-5 w-5 text-[#EA4335]" />
              <span className="hidden sm:inline">Contact</span>
            </a>
          </Button>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 cursor-pointer"
        onClick={() => scrollToSection('experience')}
      >
        <HiChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}