import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold hover:text-primary transition-colors"
        >
          Портфолио
        </button>
        
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Главная
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('about')}
          >
            О нас
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('skills')}
          >
            Навыки
          </Button>
        </div>
      </div>
    </nav>
  );
}
