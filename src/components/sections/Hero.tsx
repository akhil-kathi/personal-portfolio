import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { HiChevronDown } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaMedium } from "react-icons/fa6";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto">
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
          <Button variant="outline" size="lg" asChild className="flex items-center justify-center gap-2 min-w-[120px]">
            <a href="https://github.com/akhil-kathi" target="_blank" rel="noopener noreferrer" aria-label="Visit Akhil's GitHub profile (opens in new tab)">
              <SiGithub className="h-5 w-5 text-[#181717] dark:text-white" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="flex items-center justify-center gap-2 min-w-[120px]">
            <a href="https://linkedin.com/in/akhilkathi" target="_blank" rel="noopener noreferrer" aria-label="Visit Akhil's LinkedIn profile (opens in new tab)">
              <SiLinkedin className="h-5 w-5 text-[#0A66C2]" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="flex items-center justify-center gap-2 min-w-[120px]">
            <a href="https://medium.com/@akhilkathi" target="_blank" rel="noopener noreferrer" aria-label="Visit Akhil's Medium blog (opens in new tab)">
              <FaMedium className="h-5 w-5 text-[#000000] dark:text-white" />
              <span className="hidden sm:inline">Blog</span>
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="flex items-center justify-center gap-2 min-w-[120px]">
            <a href="mailto:akhilkathi@duck.com" aria-label="Send email to Akhil">
              <MdEmail className="h-5 w-5 text-[#EA4335]" />
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
        style={{ willChange: 'transform' }}
      >
        <HiChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}