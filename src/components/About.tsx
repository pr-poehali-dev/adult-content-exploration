export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">О нас</h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Мы команда профессионалов, которая превращает идеи в элегантные цифровые решения. 
              Наш подход основан на глубоком понимании потребностей пользователей и внимании к каждой детали.
            </p>
            
            <p>
              За последние годы мы реализовали более 50 проектов для клиентов из разных индустрий — 
              от стартапов до крупных корпораций. Каждый проект для нас — это возможность создать 
              что-то действительно значимое.
            </p>
            
            <p>
              Мы верим в силу минимализма и чистого дизайна. Каждый пиксель имеет значение, 
              каждая анимация продумана, каждое взаимодействие интуитивно понятно.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Проектов</div>
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Качество</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
