import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Lazy load components with prefetch
const WorkExperience = lazy(() => import('@/components/sections/WorkExperience').then(module => ({ default: module.WorkExperience })));
const Education = lazy(() => import('@/components/sections/Education').then(module => ({ default: module.Education })));
const Certifications = lazy(() => import('@/components/sections/Certifications').then(module => ({ default: module.Certifications })));
const Interests = lazy(() => import('./components/sections/Interests').then(module => ({ default: module.Interests })));
const Hero = lazy(() => import('./components/sections/Hero').then(module => ({ default: module.Hero })));
const Preloader = lazy(() => import('./components/sections/Preloader').then(module => ({ default: module.Preloader })));
const Blogs = lazy(() => import('./components/sections/Blogs').then(module => ({ default: module.Blogs })));

// Optimized loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  // Prefetch components
  useEffect(() => {
    const prefetchComponents = async () => {
      // Use requestIdleCallback for non-critical prefetching
      if ('requestIdleCallback' in window) {
        requestIdleCallback(async () => {
          const components = [
            import('@/components/sections/WorkExperience'),
            import('@/components/sections/Education'),
            import('@/components/sections/Certifications'),
            import('@/components/sections/Interests'),
            import('./components/sections/Hero'),
            import('./components/sections/Blogs')
          ];
          await Promise.all(components);
        });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        const timeoutId = setTimeout(async () => {
          const components = [
            import('@/components/sections/WorkExperience'),
            import('@/components/sections/Education'),
            import('@/components/sections/Certifications'),
            import('@/components/sections/Interests'),
            import('./components/sections/Hero'),
            import('./components/sections/Blogs')
          ];
          await Promise.all(components);
        }, 2000);
        return () => clearTimeout(timeoutId);
      }
    };

    prefetchComponents();
  }, []);

  useEffect(() => {
    // Defer theme initialization
    requestAnimationFrame(() => {
      document.documentElement.classList.add('dark');
    });
    
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    requestAnimationFrame(() => {
      document.documentElement.classList.toggle('dark');
    });
  };

  const scrollToSection = (id: string) => {
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    });
  };

  // Memoize NavLinks to prevent unnecessary re-renders
  const NavLinks = () => (
    <>
      <Button variant="ghost" onClick={() => scrollToSection('experience')}>Experience</Button>
      <Button variant="ghost" onClick={() => scrollToSection('education')}>Education</Button>
      <Button variant="ghost" onClick={() => scrollToSection('certifications')}>Certifications</Button>
      <Button variant="ghost" onClick={() => scrollToSection('blogs')}>Blogs</Button>
      <Button variant="ghost" onClick={() => scrollToSection('interests')}>Interests</Button>
    </>
  );

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Suspense fallback={<LoadingFallback />}>
          <Preloader/>
        </Suspense>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-background text-foreground"
        >
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b" role="navigation" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg font-semibold"
                  onClick={() => scrollToSection('top')}
                  aria-label="Return to top of page"
                >
                  AK
                </motion.button>
                
                <div className="hidden md:flex items-center gap-4" role="menubar">
                  <NavLinks />
                  <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>

                <div className="md:hidden flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                        <Menu className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <div className="flex flex-col gap-4 mt-8" role="menu">
                        <NavLinks />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main>
              <Hero scrollToSection={scrollToSection} />

            <Suspense fallback={<LoadingFallback />}>
              <WorkExperience />
              <Separator />
              <Education />
              <Separator />
              <Certifications />
              <Separator />
              <Blogs />
              <Separator />
              <Interests />
            </Suspense>
          </main>

          {/* Footer */}
          <footer className="py-6 sm:py-8 px-4 text-center text-muted-foreground">
            <p className="text-sm sm:text-base">© {currentYear} Akhil Kathi. All rights reserved.</p>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;