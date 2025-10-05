import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingDown, TrendingUp } from 'lucide-react';

export const Statistics = () => {
  // Data from serie_combinada.csv analysis
  const radarData = [
    { name: 'Pre-incendio', VH: -14.26, VV: -8.03 },
    { name: 'Post-incendio', VH: -14.43, VV: -8.13 },
  ];

  const opticalData = [
    { name: 'Pre-incendio', NDVI: 0.584, NBR: 0.38 },
    { name: 'Post-incendio', NDVI: 0.590, NBR: 0.41 },
  ];

  const statsTable = [
    {
      indicator: 'VH (dB)',
      mean: '-14.43',
      variation: '-0.17',
      interpretation: 'Menor humedad superficial tras incendio',
      trend: 'down'
    },
    {
      indicator: 'VV (dB)',
      mean: '-8.13',
      variation: '-0.10',
      interpretation: 'Pérdida leve de reflectividad',
      trend: 'down'
    },
    {
      indicator: 'NDVI',
      mean: '0.59',
      variation: '+0.006',
      interpretation: 'Recuperación parcial de vegetación viva',
      trend: 'up'
    },
    {
      indicator: 'NBR',
      mean: '0.41',
      variation: '+0.03',
      interpretation: 'Disminución del área quemada',
      trend: 'up'
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl mb-6">Datos Reales de Análisis SAR</h2>
            <div className="w-24 h-1 bg-gradient-earth mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estadísticas derivadas del análisis de datos Sentinel-1 y Sentinel-2 del Parque Nacional Los Haitises
            </p>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* SAR Data Chart */}
            <div className="bg-background p-6 rounded-xl shadow-lg border border-border fade-in">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-center">
                Datos SAR Sentinel-1 (VH/VV)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={radarData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="VH" fill="hsl(var(--radar))" name="VH (dB)" />
                  <Bar dataKey="VV" fill="hsl(var(--primary))" name="VV (dB)" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Retrodispersión radar en polarizaciones VH y VV
              </p>
            </div>

            {/* Optical Data Chart */}
            <div className="bg-background p-6 rounded-xl shadow-lg border border-border fade-in">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-center">
                Índices Ópticos Sentinel-2
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={opticalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="NDVI" stroke="hsl(var(--secondary))" strokeWidth={3} name="NDVI" />
                  <Line type="monotone" dataKey="NBR" stroke="hsl(var(--accent))" strokeWidth={3} name="NBR" />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Índices de vegetación y severidad de quema
              </p>
            </div>
          </div>

          {/* Statistics Table */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 shadow-xl fade-in">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-center">
              Análisis Estadístico Completo
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary-foreground/20">
                    <th className="text-left py-3 px-4 font-poppins">Indicador</th>
                    <th className="text-left py-3 px-4 font-poppins">Valor medio</th>
                    <th className="text-left py-3 px-4 font-poppins">Variación</th>
                    <th className="text-left py-3 px-4 font-poppins">Interpretación</th>
                  </tr>
                </thead>
                <tbody>
                  {statsTable.map((stat, index) => (
                    <tr key={index} className="border-b border-primary-foreground/10 hover:bg-primary-foreground/5">
                      <td className="py-4 px-4 font-semibold">{stat.indicator}</td>
                      <td className="py-4 px-4">{stat.mean}</td>
                      <td className="py-4 px-4">
                        <span className={`flex items-center gap-2 ${
                          stat.trend === 'down' ? 'text-destructive' : 'text-secondary'
                        }`}>
                          {stat.trend === 'down' ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                          {stat.variation}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm">{stat.interpretation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Interpretation */}
            <div className="mt-8 p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
              <p className="text-sm leading-relaxed">
                <strong className="text-secondary">Interpretación científica:</strong> El análisis radar SAR de Sentinel-1, combinado con los índices ópticos de Sentinel-2, evidencia un patrón típico post-incendio: disminución inicial de la señal radar (humedad y rugosidad) seguida de una leve recuperación en la vegetación (NDVI/NBR). Esto demuestra la potencia del SAR como herramienta para monitorear procesos ecológicos invisibles y anticipar emergencias ambientales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
