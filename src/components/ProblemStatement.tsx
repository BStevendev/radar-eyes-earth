import { Flame, TreePine, TrendingDown } from "lucide-react";

export const ProblemStatement = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">Los Haitises: la selva radarizada</h2>
            <div className="w-24 h-1 bg-gradient-earth mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-primary/20 fade-in">
            <div className="prose prose-lg max-w-none">
              <blockquote className="border-l-4 border-destructive pl-6 italic text-xl mb-8">
                "En 2024, incendios forestales afectaron extensas áreas del Parque Nacional Los Haitises. Gracias a los datos SAR de Sentinel-1 y los índices ópticos de Sentinel-2, fue posible cuantificar los daños y observar la evolución de la recuperación."
              </blockquote>

              <p className="text-lg leading-relaxed mb-8">
                Sin esta visión radar, gran parte del impacto ambiental habría pasado desapercibido.
              </p>

              {/* Impact Stats */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-destructive/10 p-6 rounded-xl border-2 border-destructive/30 text-center">
                  <div className="inline-flex p-3 bg-destructive rounded-full mb-4">
                    <Flame className="w-8 h-8 text-destructive-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-destructive mb-2">Incendios 2024</h3>
                  <p className="text-sm text-muted-foreground">Eventos detectados por SAR</p>
                </div>

                <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary/30 text-center">
                  <div className="inline-flex p-3 bg-primary rounded-full mb-4">
                    <TreePine className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Parque Nacional</h3>
                  <p className="text-sm text-muted-foreground">Los Haitises, RD</p>
                </div>

                <div className="bg-radar/10 p-6 rounded-xl border-2 border-radar/30 text-center">
                  <div className="inline-flex p-3 bg-radar rounded-full mb-4">
                    <TrendingDown className="w-8 h-8 text-radar-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-radar mb-2">Pérdida detectada</h3>
                  <p className="text-sm text-muted-foreground">Analizada vía radar</p>
                </div>
              </div>

              {/* Technical Note */}
              <div className="mt-12 p-6 bg-space/5 rounded-lg border border-space/20">
                <p className="text-sm text-center">
                  <strong className="text-radar">Nota técnica:</strong> Las imágenes SAR revelan detalles invisibles a sensores ópticos: humedad del suelo, rugosidad superficial y cambios estructurales en la vegetación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
