import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Upload, Image as ImageIcon, BarChart3 } from "lucide-react";

export const DataComparison = () => {
  const [selectedView, setSelectedView] = useState("comparison");

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">Historia de los Datos SAR</h2>
            <div className="w-24 h-1 bg-gradient-radar mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comparación temporal de datos SAR y ópticos para revelar la evolución del incendio en Los Haitises
            </p>
          </div>

          {/* Content */}
          <div className="bg-card rounded-2xl p-8 shadow-2xl border-2 border-primary/20 fade-in">
            <Tabs defaultValue="comparison" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="comparison" className="gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Comparación
                </TabsTrigger>
                <TabsTrigger value="timeline" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Línea temporal
                </TabsTrigger>
                <TabsTrigger value="maps" className="gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Mapas HTML
                </TabsTrigger>
              </TabsList>

              {/* Comparison Tab */}
              <TabsContent value="comparison" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pre-fire */}
                  <div className="bg-secondary/10 border-2 border-secondary rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-poppins font-semibold text-secondary">Pre-Incendio</h3>
                      <span className="text-sm text-muted-foreground">Enero - Marzo 2024</span>
                    </div>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Imagen SAR pre-incendio</p>
                        <p className="text-xs text-muted-foreground mt-1">(Integrar HTML aquí)</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">VH medio:</span>
                        <span className="font-semibold text-secondary">-14.26 dB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">NDVI medio:</span>
                        <span className="font-semibold text-secondary">0.584</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estado:</span>
                        <span className="font-semibold text-secondary">Vegetación saludable</span>
                      </div>
                    </div>
                  </div>

                  {/* Post-fire */}
                  <div className="bg-destructive/10 border-2 border-destructive rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-poppins font-semibold text-destructive">Post-Incendio</h3>
                      <span className="text-sm text-muted-foreground">Abril - Junio 2024</span>
                    </div>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Imagen SAR post-incendio</p>
                        <p className="text-xs text-muted-foreground mt-1">(Integrar HTML aquí)</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">VH medio:</span>
                        <span className="font-semibold text-destructive">-14.43 dB ↓</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">NDVI medio:</span>
                        <span className="font-semibold text-accent">0.590 ↑</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estado:</span>
                        <span className="font-semibold text-accent">Recuperación parcial</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analysis Box */}
                <div className="bg-radar/10 border border-radar/30 rounded-lg p-6">
                  <h4 className="font-poppins font-semibold text-radar mb-3">Análisis de cambios detectados por SAR:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-radar mt-1">▸</span>
                      <span><strong>Retrodispersión VH:</strong> Disminución de 0.17 dB indica pérdida de humedad superficial y cambios en rugosidad del suelo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-radar mt-1">▸</span>
                      <span><strong>Índice NDVI:</strong> Ligero aumento sugiere inicio de recuperación vegetal en zonas no severamente afectadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-radar mt-1">▸</span>
                      <span><strong>Índice NBR:</strong> Incremento de 0.03 confirma disminución gradual de severidad de quema</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              {/* Timeline Tab */}
              <TabsContent value="timeline" className="space-y-6">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>

                  {/* Timeline Events */}
                  <div className="space-y-8">
                    {[
                      { date: "Enero 2024", title: "Datos baseline SAR", desc: "Primera adquisición Sentinel-1 VH/VV", color: "secondary" },
                      { date: "Marzo 2024", title: "Condiciones pre-incendio", desc: "NDVI y NBR en niveles normales", color: "secondary" },
                      { date: "Abril 2024", title: "🔥 Evento de incendio detectado", desc: "Anomalía térmica y cambio SAR significativo", color: "destructive" },
                      { date: "Mayo 2024", title: "Análisis post-evento", desc: "Cuantificación de daños vía radar", color: "accent" },
                      { date: "Junio 2024", title: "Monitoreo de recuperación", desc: "Primeras señales de regeneración vegetal", color: "accent" },
                    ].map((event, index) => (
                      <div key={index} className="relative pl-20 fade-in">
                        <div className={`absolute left-5 w-6 h-6 rounded-full bg-${event.color} border-4 border-background`}></div>
                        <div className="bg-muted rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-muted-foreground font-semibold">{event.date}</span>
                          </div>
                          <h4 className="font-poppins font-semibold mb-1">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">{event.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Maps Tab */}
              <TabsContent value="maps" className="space-y-6">
                <div className="text-center p-12 bg-muted rounded-xl border-2 border-dashed border-border">
                  <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-poppins font-semibold mb-3">
                    Zona de integración de mapas HTML
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Aquí puedes integrar los mapas HTML generados con AstroPi, Leaflet u otras herramientas. Esta sección está preparada para recibir visualizaciones interactivas completas.
                  </p>
                  <Button variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Cargar archivos HTML
                  </Button>
                  
                  <div className="mt-8 grid md:grid-cols-2 gap-4 text-left">
                    <div className="bg-card p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Mapa SAR VH/VV</h4>
                      <p className="text-xs text-muted-foreground">Retrodispersión radar en polarizaciones cruzadas</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">Mapa NDVI/NBR</h4>
                      <p className="text-xs text-muted-foreground">Índices de vegetación y severidad de quema</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Challenge Context */}
          <div className="mt-12 bg-space text-space-foreground rounded-xl p-8 fade-in">
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Sobre el NASA Space Apps Challenge
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">
                Este proyecto responde al desafío <strong>"Through the Looking Glass"</strong>, que nos invita a analizar datos de radar SAR con diferentes polarizaciones y frecuencias para revelar información sobre fenómenos físicos en la Tierra.
              </p>
              <blockquote className="border-l-4 border-radar pl-4 italic my-4">
                "Like the secret doors and riddles Alice encounters in Wonderland, the images you'll collect aren't as they seem. Everything appears in different colors - why does the city look pink and white? The rivers black? CuriouSAR and curiouSAR!"
              </blockquote>
              <p>
                Elegimos el Parque Nacional Los Haitises porque combina alta biodiversidad con eventos de incendio documentados, permitiéndonos demostrar cómo el SAR puede detectar cambios invisibles al ojo humano y complementar los datos ópticos en condiciones nubladas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
