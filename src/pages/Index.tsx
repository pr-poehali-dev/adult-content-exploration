import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Index;
