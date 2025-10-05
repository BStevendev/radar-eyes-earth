import { TreePine, Flame, BookOpen } from "lucide-react";

export const Impact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">Impacto Ambiental y Social</h2>
            <div className="w-24 h-1 bg-gradient-earth mx-auto"></div>
          </div>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ecological Restoration */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-secondary/20 hover:border-secondary/50 fade-in">
              <div className="inline-flex p-4 bg-secondary rounded-full mb-6">
                <TreePine className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-secondary">
                Restauración ecológica
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                El SAR guía la reforestación donde más se necesita, identificando áreas prioritarias basándose en la severidad del daño y el potencial de recuperación detectados por el radar.
              </p>
            </div>

            {/* Fire Prevention */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-destructive/20 hover:border-destructive/50 fade-in">
              <div className="inline-flex p-4 bg-destructive rounded-full mb-6">
                <Flame className="w-8 h-8 text-destructive-foreground" />
              </div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-destructive">
                Prevención de incendios
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Detección temprana con radar satelital permite actuar antes de que el fuego se propague, monitoreando condiciones de humedad y biomasa en tiempo casi real.
              </p>
            </div>

            {/* Open Science */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-radar/20 hover:border-radar/50 fade-in">
              <div className="inline-flex p-4 bg-radar rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-radar-foreground" />
              </div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-radar">
                Ciencia abierta
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Datos accesibles para investigación y educación. Promovemos el uso de información satelital libre (Copernicus) para democratizar el conocimiento ambiental.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 text-center fade-in">
            <div className="bg-primary text-primary-foreground rounded-2xl p-12 max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-poppins font-bold italic mb-4">
                "El radar SAR ve lo que el ojo no puede, y la Tierra nos lo agradece."
              </p>
              <p className="text-primary-foreground/80">
                — Backscatter Team, NASA Space Apps Challenge 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
