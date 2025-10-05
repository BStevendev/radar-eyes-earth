import { Radio, Cloud, Eye } from "lucide-react";
import sarDiagram from "@/assets/sar-diagram.jpg";

export const SARExplanation = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">El poder del radar SAR</h2>
            <div className="w-24 h-1 bg-gradient-radar mx-auto mb-8"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 fade-in">
              <div className="bg-primary-foreground/10 p-6 rounded-lg border-l-4 border-secondary">
                <p className="text-lg leading-relaxed italic">
                  "Los incendios dejan cicatrices invisibles a simple vista. Solo el Radar de Apertura Sintética (SAR) puede penetrar las nubes, detectar humedad, y medir los cambios estructurales en la superficie terrestre incluso durante condiciones climáticas adversas."
                </p>
              </div>

              <p className="text-base leading-relaxed">
                Esta tecnología permite observar la pérdida de vegetación, la severidad del daño y la recuperación post-incendio con una precisión milimétrica.
              </p>

              {/* Features */}
              <div className="grid gap-4 mt-8">
                <div className="flex items-start gap-4 p-4 bg-primary-foreground/5 rounded-lg">
                  <div className="p-2 bg-radar rounded-full">
                    <Cloud className="w-5 h-5 text-radar-foreground" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Penetra las nubes</h3>
                    <p className="text-sm text-primary-foreground/80">Funciona en cualquier condición climática, día y noche</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary-foreground/5 rounded-lg">
                  <div className="p-2 bg-secondary rounded-full">
                    <Radio className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Detecta humedad</h3>
                    <p className="text-sm text-primary-foreground/80">Mide cambios en la estructura del suelo y vegetación</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary-foreground/5 rounded-lg">
                  <div className="p-2 bg-accent rounded-full">
                    <Eye className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold mb-1">Precisión milimétrica</h3>
                    <p className="text-sm text-primary-foreground/80">Observa cambios imperceptibles para el ojo humano</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Diagram */}
            <div className="fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={sarDiagram} 
                  alt="Diagrama de funcionamiento del radar SAR"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-radar/20 to-transparent"></div>
              </div>
              <p className="text-sm text-center mt-4 text-primary-foreground/70 italic">
                El radar SAR emite ondas y recibe el eco de la superficie terrestre
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
