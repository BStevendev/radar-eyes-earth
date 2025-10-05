import { Button } from "@/components/ui/button";
import { Satellite, Radio, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-radar-earth.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-space/80 via-space/60 to-background"></div>
      </div>

      {/* Radar Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 radar-pulse opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-accent text-lg tracking-widest mb-2">BACKSCATTER TEAM</h3>
            <div className="w-20 h-1 bg-gradient-earth mx-auto"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary-foreground">
            NASA Forestsaved
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted mb-8 font-poppins font-medium">
            Protegiendo los bosques de la Tierra con la visión del radar SAR
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Un sistema basado en datos SAR de Sentinel-1 y ópticos de Sentinel-2 para monitorear, analizar y prevenir incendios forestales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-radar hover:bg-radar/90 text-radar-foreground gap-2 px-8 py-6 text-lg"
              onClick={() => scrollToSection('interactive-map')}
            >
              <Satellite className="w-5 h-5" />
              Ver mapa satelital
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-secondary hover:bg-secondary/20 text-primary-foreground gap-2 px-8 py-6 text-lg"
              onClick={() => scrollToSection('alert-simulator')}
            >
              <Radio className="w-5 h-5" />
              Probar alerta
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-accent hover:bg-accent/20 text-primary-foreground gap-2 px-8 py-6 text-lg"
              onClick={() => scrollToSection('chatbot')}
            >
              <MessageSquare className="w-5 h-5" />
              Hablar con TreeBot
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <p className="text-sm text-muted uppercase tracking-wider mb-2">Descubre más</p>
            <div className="w-6 h-10 border-2 border-muted rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-muted rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
