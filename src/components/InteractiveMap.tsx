import { MapPin, Upload, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const InteractiveMap = () => {
  const [uploadedMaps, setUploadedMaps] = useState<string[]>([]);

  return (
    <section id="interactive-map" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">Mapa Interactivo SAR + Óptico</h2>
            <div className="w-24 h-1 bg-gradient-radar mx-auto mb-6"></div>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Visualiza la evolución de los datos Sentinel-1 (SAR) y Sentinel-2 (ópticos) del Parque Nacional Los Haitises
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-2xl border-2 border-secondary/30 fade-in">
            {/* Map Header */}
            <div className="bg-space p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-space-foreground">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-poppins font-semibold">Los Haitises National Park</span>
              </div>
              
              {/* Upload Button */}
              <Button 
                variant="outline" 
                size="sm"
                className="border-secondary/50 hover:bg-secondary/20 text-space-foreground gap-2"
              >
                <Upload className="w-4 h-4" />
                Cargar tus mapas HTML
              </Button>
            </div>

            {/* Map Display Area */}
            <div className="relative bg-muted min-h-[600px] flex items-center justify-center">
              {/* Placeholder for HTML maps */}
              <div className="text-center p-12">
                <div className="inline-flex p-6 bg-primary rounded-full mb-6">
                  <MapPin className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  Zona para integrar tus mapas HTML
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Esta sección está lista para recibir los mapas interactivos que generaste con AstroPi y otras herramientas. Simplemente carga los archivos HTML aquí.
                </p>
                
                {/* Instructions */}
                <div className="bg-radar/10 border border-radar/30 rounded-lg p-6 max-w-2xl mx-auto">
                  <h4 className="font-poppins font-semibold text-foreground mb-3 flex items-center gap-2 justify-center">
                    <Info className="w-5 h-5 text-radar" />
                    Capas disponibles para integrar:
                  </h4>
                  <ul className="text-sm text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-radar">▸</span>
                      <span><strong>Sentinel-1 SAR (VH/VV):</strong> Datos radar pre y post-incendio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">▸</span>
                      <span><strong>Sentinel-2 (NDVI/NBR):</strong> Índices de vegetación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">▸</span>
                      <span><strong>Zonas afectadas:</strong> Polígonos de áreas dañadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">▸</span>
                      <span><strong>Control temporal:</strong> Serie temporal de evolución</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SAR Wave Animation Overlay */}
              <div className="absolute inset-0 pointer-events-none sar-wave opacity-20"></div>
            </div>

            {/* Legend */}
            <div className="bg-card-foreground/5 p-6 border-t border-border">
              <h4 className="font-poppins font-semibold text-foreground mb-4 text-center">
                Leyenda de interpretación SAR
              </h4>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-secondary"></div>
                  <span className="text-foreground">Vegetación densa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-accent"></div>
                  <span className="text-foreground">Área afectada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-destructive"></div>
                  <span className="text-foreground">Zona quemada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-radar"></div>
                  <span className="text-foreground">Datos SAR VH/VV</span>
                </div>
              </div>
              
              <p className="text-xs text-center text-muted-foreground mt-4 italic">
                💡 Los datos SAR revelan detalles invisibles: humedad, rugosidad y estructura del suelo. Son esenciales para el monitoreo continuo de ecosistemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
