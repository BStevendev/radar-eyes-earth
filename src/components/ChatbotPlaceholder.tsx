import { MessageSquare, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChatbotPlaceholder = () => {
  return (
    <section id="chatbot" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl mb-6">TreeBot 🌿</h2>
            <div className="w-24 h-1 bg-gradient-radar mx-auto mb-6"></div>
            <p className="text-lg text-primary-foreground/80">
              Tu asistente ambiental inteligente
            </p>
          </div>

          {/* Chatbot Visual */}
          <div className="bg-card rounded-2xl p-12 shadow-2xl border-2 border-secondary/30 mb-8">
            <div className="inline-flex p-8 bg-secondary rounded-full mb-6 relative">
              <Leaf className="w-16 h-16 text-secondary-foreground" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
            
            <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
              ¡Hola! Soy TreeBot 🌿
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Soy tu asistente ambiental. Puedo ayudarte a entender cómo usamos datos SAR para proteger los bosques, explicarte conceptos de teledetección y responder tus preguntas sobre el proyecto.
            </p>

            {/* SDK Integration Note */}
            <div className="bg-radar/10 border border-radar/30 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 justify-center mb-3">
                <MessageSquare className="w-5 h-5 text-radar" />
                <h4 className="font-poppins font-semibold text-foreground">SDK Integration Ready</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Esta sección está preparada para integrar tu SDK de chatbot personalizado. El diseño y la estructura están listos para recibir tu implementación.
              </p>
            </div>

            {/* Sample Questions */}
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              <Button 
                variant="outline" 
                className="text-left justify-start h-auto py-3 px-4"
                disabled
              >
                <span className="text-sm">¿Qué es un radar SAR?</span>
              </Button>
              <Button 
                variant="outline" 
                className="text-left justify-start h-auto py-3 px-4"
                disabled
              >
                <span className="text-sm">¿Cómo detectan incendios con Sentinel-1?</span>
              </Button>
              <Button 
                variant="outline" 
                className="text-left justify-start h-auto py-3 px-4"
                disabled
              >
                <span className="text-sm">¿Qué son las polarizaciones VH/VV?</span>
              </Button>
              <Button 
                variant="outline" 
                className="text-left justify-start h-auto py-3 px-4"
                disabled
              >
                <span className="text-sm">¿Cómo puedo ayudar a evitar incendios?</span>
              </Button>
            </div>

            {/* Resources Links */}
            <div className="text-left bg-muted p-6 rounded-lg">
              <h4 className="font-poppins font-semibold mb-3 text-foreground">Recursos educativos recomendados:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.earthdata.nasa.gov/learn/backgrounders/what-is-sar" target="_blank" rel="noopener noreferrer" className="text-radar hover:underline">
                    → NASA Earthdata: SAR Basics
                  </a>
                </li>
                <li>
                  <a href="https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-1" target="_blank" rel="noopener noreferrer" className="text-radar hover:underline">
                    → ESA Copernicus: Sentinel-1 Portal
                  </a>
                </li>
                <li>
                  <a href="https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-2" target="_blank" rel="noopener noreferrer" className="text-radar hover:underline">
                    → ESA Copernicus: Sentinel-2 Portal
                  </a>
                </li>
                <li>
                  <a href="https://www.spaceappschallenge.org" target="_blank" rel="noopener noreferrer" className="text-radar hover:underline">
                    → NASA Space Apps Challenge
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Implementation Note */}
          <p className="text-sm text-primary-foreground/60 italic">
            Nota: La funcionalidad completa del chatbot se activará cuando integres tu SDK personalizado
          </p>
        </div>
      </div>
    </section>
  );
};
