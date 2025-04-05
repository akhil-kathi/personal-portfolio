import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Sun,
  Moon,
  Menu,
  Bike,
  Code2,
  Heart
} from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { WorkExperience } from '@/components/sections/WorkExperience';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Interests } from './components/sections/Interests';
import { Hero } from './components/sections/Hero';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const NavLinks = () => (
    <>
      <Button variant="ghost" onClick={() => scrollToSection('experience')}>Experience</Button>
      <Button variant="ghost" onClick={() => scrollToSection('education')}>Education</Button>
      <Button variant="ghost" onClick={() => scrollToSection('certifications')}>Certifications</Button>
      <Button variant="ghost" onClick={() => scrollToSection('interests')}>Interests</Button>
    </>
  );

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background flex flex-col items-center justify-center gap-8"
        >
          <motion.div
            className="relative flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <div className="text-4xl font-bold bg-primary text-primary-foreground px-8 py-6 rounded-lg relative z-10">
              AK
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground"
          >
            Loading...
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-background text-foreground"
        >
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg font-semibold"
                  onClick={() => scrollToSection('top')}
                >
                  AK
                </motion.button>
                
                <div className="hidden md:flex items-center gap-4">
                  <NavLinks />
                  <Button variant="ghost" size="icon" onClick={toggleTheme}>
                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>

                <div className="md:hidden flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={toggleTheme}>
                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <div className="flex flex-col gap-4 mt-8">
                        <NavLinks />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <Hero scrollToSection={scrollToSection} />

          {/* Work Experience */}
          <WorkExperience />

          <Separator />

          {/* Education */}
          <Education />

          <Separator />

          {/* Certifications */}
          <Certifications />

          <Separator />

          {/* Interests */}
          <Interests />

          {/* Footer */}
          <footer className="py-6 sm:py-8 px-4 text-center text-muted-foreground">
            <p className="text-sm sm:text-base">© 2024 Akhil Kathi. All rights reserved.</p>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;