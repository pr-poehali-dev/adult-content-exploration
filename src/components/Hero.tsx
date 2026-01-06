import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 -z-10" />
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Привет, я <span className="text-primary">дизайнер</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Создаю минималистичные цифровые продукты с вниманием к деталям
        </p>
        
        <div className="flex gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('about')}
            className="group"
          >
            Узнать больше
            <Icon name="ArrowDown" className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('skills')}
          >
            Мои навыки
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
}
