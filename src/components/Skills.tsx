import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    name: 'UI/UX Design',
    level: 95,
    icon: 'Palette',
    description: 'Создание интуитивных интерфейсов'
  },
  {
    name: 'Frontend',
    level: 90,
    icon: 'Code',
    description: 'React, TypeScript, Tailwind'
  },
  {
    name: 'Prototyping',
    level: 85,
    icon: 'Layers',
    description: 'Figma, Adobe XD'
  },
  {
    name: 'Branding',
    level: 80,
    icon: 'Sparkles',
    description: 'Айдентика и визуальный стиль'
  },
  {
    name: 'Animation',
    level: 75,
    icon: 'Zap',
    description: 'Микроинтеракции и переходы'
  },
  {
    name: 'Typography',
    level: 88,
    icon: 'Type',
    description: 'Работа со шрифтами'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Навыки</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={skill.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Уровень</span>
                      <span className="font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${index * 0.1 + 0.3}s`
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
