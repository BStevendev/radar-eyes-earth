import { Github, MapPin } from "lucide-react";

export const Team = () => {
  const team = [
    {
      name: "Bryan Steven Vargas",
      username: "@steven-curiosity",
      role: "Team Owner",
      country: "Dominican Republic",
    },
    {
      name: "Esthel Mariela Lahoz Peña",
      username: "@esthel",
      role: "Team Member",
      country: "Dominican Republic",
    },
    {
      name: "Kevin Alcantara Chalas",
      username: "@kevin_moon2",
      role: "Team Member",
      country: "Dominican Republic",
    },
    {
      name: "Jarlene Marielt Nuñez Cordero",
      username: "@jar2303",
      role: "Team Member",
      country: "Dominican Republic",
    },
    {
      name: "Ariel Ramón García Rodríguez",
      username: "@astroariel",
      role: "Team Member",
      country: "Dominican Republic",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">Sobre nosotros</h2>
            <div className="w-24 h-1 bg-gradient-earth mx-auto mb-8"></div>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                BACKSCATTER TEAM
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos un grupo de jóvenes dominicanos apasionados por la ciencia espacial. Inspirados en la tecnología SAR, desarrollamos NASA Forestsaved para transformar datos satelitales en acciones ambientales reales.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {team.map((member, index) => (
              <div
                key={index}
                className={`bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  index === 0 ? 'border-accent/50 lg:col-span-3 lg:max-w-md lg:mx-auto' : 'border-border hover:border-primary/30'
                } fade-in`}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gradient-earth flex items-center justify-center text-2xl font-bold text-primary-foreground flex-shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-poppins font-bold text-lg mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-radar mb-2 flex items-center gap-1">
                      <Github className="w-3 h-3" />
                      {member.username}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {index === 0 && (
                        <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full font-semibold">
                          {member.role}
                        </span>
                      )}
                      <span className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {member.country}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center fade-in">
            <p className="text-lg leading-relaxed italic">
              "Creemos en el poder de la tecnología espacial para proteger nuestro planeta. A través del análisis de datos SAR, queremos contribuir a la conservación de los ecosistemas dominicanos y demostrar que la ciencia espacial es accesible para todos."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
