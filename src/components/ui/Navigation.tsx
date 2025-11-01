'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/', scroll: true, id: 'home' },
  { label: 'Career', href: '/career', scroll: false, id: 'career' },
  { label: 'Projects', href: '/', scroll: true, id: 'projects' },
  { label: 'Mission', href: '/mission', scroll: false, id: 'mission' },
  { label: 'Contact', href: '/', scroll: true, id: 'contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to track active section
  useEffect(() => {
    // Only run on home page where sections exist
    if (pathname !== '/') {
      // Set active section based on current route
      if (pathname === '/career') setActiveSection('career');
      else if (pathname === '/mission') setActiveSection('mission');
      return;
    }

    // Check for hash on initial load
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    }

    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -70% 0px', // Account for nav height and focus on top portion
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = navItems
      .filter((item) => item.scroll)
      .map((item) => document.getElementById(item.id!))
      .filter((el): el is HTMLElement => el !== null);

    sections.forEach((section) => observer.observe(section));

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      if (newHash) {
        setActiveSection(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  const handleScrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="absolute left-0 text-xl font-bold text-white hover:text-primary transition-colors cursor-pointer"
          >
            Kartheek Panyam
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // Use hash-based routing for scroll sections
              const itemHref = item.scroll ? `/#${item.id}` : item.href;
              const isActive = activeSection === item.id;

              return item.scroll && pathname === '/' ? (
                <button
                  key={item.id}
                  onClick={(e) => handleScrollToSection(e, item.id!)}
                  className={cn(
                    'relative text-base font-medium transition-all duration-300',
                    'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-primary',
                    'after:transition-all after:duration-300',
                    isActive
                      ? 'text-white after:w-full'
                      : 'text-white/70 hover:text-white hover:after:w-full'
                  )}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={itemHref}
                  className={cn(
                    'relative text-base font-medium transition-all duration-300',
                    'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-primary',
                    'after:transition-all after:duration-300',
                    isActive
                      ? 'text-white after:w-full'
                      : 'text-white/70 hover:text-white hover:after:w-full'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Social Icons - Top Right */}
          <div className="hidden md:flex absolute right-0 items-center gap-3">
            <a
              href="https://github.com/kartheekpanyam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 rounded-lg transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/kartheekpanyam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 rounded-lg transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-0 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navItems.map((item) => {
              // Use hash-based routing for scroll sections
              const itemHref = item.scroll ? `/#${item.id}` : item.href;
              const isActive = activeSection === item.id;

              return item.scroll && pathname === '/' ? (
                <button
                  key={item.id}
                  onClick={(e) => handleScrollToSection(e, item.id!)}
                  className={cn(
                    'relative block py-2 text-left w-full transition-colors pl-3',
                    'before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-0 before:bg-gradient-to-b before:from-cyan-400 before:to-primary',
                    'before:transition-all before:duration-300',
                    isActive
                      ? 'text-white before:h-full'
                      : 'text-white/70 hover:text-white hover:before:h-full'
                  )}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={itemHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'relative block py-2 transition-colors pl-3',
                    'before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-0 before:bg-gradient-to-b before:from-cyan-400 before:to-primary',
                    'before:transition-all before:duration-300',
                    isActive
                      ? 'text-white before:h-full'
                      : 'text-white/70 hover:text-white hover:before:h-full'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/kartheekpanyam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-gray-300 hover:text-cyan-400 rounded-lg transition-all"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/kartheekpanyam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 text-gray-300 hover:text-cyan-400 rounded-lg transition-all"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
