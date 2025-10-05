import { Satellite, Github, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-space text-space-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Project Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Satellite className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-poppins font-bold">NASA Forestsaved</h3>
              </div>
              <p className="text-sm text-space-foreground/80 leading-relaxed">
                Protegiendo los bosques de la Tierra con la visión del radar SAR. Un proyecto de Backscatter Team.
              </p>
            </div>

            {/* Data Sources */}
            <div>
              <h3 className="text-lg font-poppins font-semibold mb-4">Fuentes de datos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-space-foreground/80 hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    Sentinel-1 (SAR)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-space-foreground/80 hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    Sentinel-2 (Óptico)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.copernicus.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-space-foreground/80 hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    Programa Copernicus - ESA
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-poppins font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://www.earthdata.nasa.gov/learn/backgrounders/what-is-sar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-space-foreground/80 hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    NASA Earthdata SAR Basics
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.spaceappschallenge.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-space-foreground/80 hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    NASA Space Apps Challenge
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-space-foreground/80 hover:text-secondary transition-colors flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    Código fuente
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-space-foreground/20 pt-8">
            {/* Credits */}
            <div className="text-center mb-4">
              <p className="text-sm text-space-foreground/80 mb-2">
                <strong>Desarrollado por Backscatter Team</strong> para el NASA Space Apps Challenge 2025
              </p>
              <p className="text-xs text-space-foreground/60">
                Datos: Sentinel-1 (SAR) y Sentinel-2 (óptico) - Programa Copernicus, ESA
              </p>
            </div>

            {/* Final Quote */}
            <div className="text-center">
              <p className="text-lg font-poppins italic text-secondary">
                🌍 "El radar SAR ve lo que el ojo no puede, y la Tierra nos lo agradece."
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-xs text-space-foreground/50">
            <p>© 2025 Backscatter Team. Todos los derechos reservados.</p>
            <p className="mt-1">Este proyecto utiliza datos abiertos de Copernicus y NASA Earthdata</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
