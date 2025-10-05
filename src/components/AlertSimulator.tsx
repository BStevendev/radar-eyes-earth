import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Radio, AlertTriangle, CheckCircle2, Activity } from "lucide-react";

export const AlertSimulator = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Analizando datos SAR de Sentinel-1...",
    "Detectando anomalías en polarización VH/VV...",
    "Comparando con índices NDVI/NBR...",
    "🔥 Alta probabilidad de incendio detectada",
    "✅ Alerta enviada a las autoridades"
  ];

  const startScan = () => {
    setIsScanning(true);
    setCurrentStep(0);
    setScanComplete(false);

    steps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
        if (index === steps.length - 1) {
          setIsScanning(false);
          setScanComplete(true);
        }
      }, (index + 1) * 1500);
    });
  };

  return (
    <section id="alert-simulator" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">Sistema SAR de Detección</h2>
            <div className="w-24 h-1 bg-gradient-radar mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Simulación del sistema de alerta temprana basado en radar
            </p>
          </div>

          {/* Simulator Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-radar/30 fade-in">
            {/* Radar Display */}
            <div className="relative mb-8">
              <div className="aspect-square max-w-md mx-auto bg-space rounded-full p-8 relative overflow-hidden">
                {/* Radar Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_0%,_transparent_40%,_hsl(var(--radar)/0.1)_40%,_hsl(var(--radar)/0.1)_60%,_transparent_60%)] opacity-50"></div>
                
                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-radar rounded-full z-10"></div>

                {/* Radar Sweep */}
                {isScanning && (
                  <div 
                    className="absolute top-1/2 left-1/2 w-1 h-1/2 origin-bottom animate-radar-spin"
                    style={{
                      background: 'linear-gradient(to top, hsl(var(--radar)), transparent)',
                      transformOrigin: 'bottom center',
                    }}
                  ></div>
                )}

                {/* Status Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  {!isScanning && !scanComplete && (
                    <Radio className="w-16 h-16 text-radar animate-pulse-glow" />
                  )}
                  {isScanning && (
                    <Activity className="w-16 h-16 text-radar animate-pulse" />
                  )}
                  {scanComplete && (
                    <AlertTriangle className="w-16 h-16 text-destructive animate-pulse" />
                  )}
                </div>
              </div>
            </div>

            {/* Status Messages */}
            <div className="min-h-[200px] mb-8">
              {currentStep > 0 && (
                <div className="space-y-3">
                  {steps.slice(0, currentStep).map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-start gap-3 p-4 rounded-lg ${
                        index === steps.length - 2 
                          ? 'bg-destructive/10 border border-destructive/30' 
                          : index === steps.length - 1
                          ? 'bg-secondary/10 border border-secondary/30'
                          : 'bg-muted'
                      } fade-in`}
                    >
                      {index === steps.length - 1 ? (
                        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      ) : index === steps.length - 2 ? (
                        <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      ) : (
                        <Radio className="w-5 h-5 text-radar mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        index === steps.length - 2 
                          ? 'font-semibold text-destructive' 
                          : index === steps.length - 1
                          ? 'font-semibold text-secondary'
                          : 'text-foreground'
                      }`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-radar hover:bg-radar/90 text-radar-foreground px-12 py-6 text-lg gap-3"
                onClick={startScan}
                disabled={isScanning}
              >
                <Radio className={`w-6 h-6 ${isScanning ? 'animate-spin' : ''}`} />
                {isScanning ? 'Detectando cambios SAR...' : scanComplete ? 'Ejecutar nuevo análisis' : 'Detectar cambio SAR'}
              </Button>
            </div>

            {/* Info Note */}
            {scanComplete && (
              <div className="mt-8 p-4 bg-radar/5 border border-radar/20 rounded-lg text-center fade-in">
                <p className="text-sm text-muted-foreground">
                  El sistema analizó las diferencias de retrodispersión VH/VV para detectar anomalías en la estructura del bosque
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
