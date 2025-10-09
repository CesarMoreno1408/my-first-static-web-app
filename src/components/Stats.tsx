import { TrendingUp, Award, Users, Globe } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: '340+',
      label: 'km/h Velocidad Máxima',
      color: 'text-red-400'
    },
    {
      icon: Award,
      value: '986',
      label: 'HP Máxima Potencia',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      value: '2.5s',
      label: 'Aceleración 0-100',
      color: 'text-green-400'
    },
    {
      icon: Globe,
      value: '6',
      label: 'Marcas Elite',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="stats" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Especificaciones Destacadas</h2>
          <p className="text-gray-400 text-lg">Los números que definen la excelencia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mb-4`} />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 border border-gray-700">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Ingeniería de Vanguardia</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Cada vehículo en nuestra colección representa décadas de innovación automotriz,
              combinando materiales de alta tecnología, aerodinámica avanzada y sistemas de
              propulsión que desafían los límites de la física. Desde motores V12 atmosféricos
              hasta sistemas híbridos de última generación, estos deportivos son obras maestras
              de la ingeniería moderna.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black/40 rounded-full px-6 py-2 border border-gray-600">
                <span className="text-sm font-semibold">Fibra de Carbono</span>
              </div>
              <div className="bg-black/40 rounded-full px-6 py-2 border border-gray-600">
                <span className="text-sm font-semibold">Aerodinámica Activa</span>
              </div>
              <div className="bg-black/40 rounded-full px-6 py-2 border border-gray-600">
                <span className="text-sm font-semibold">Tecnología Híbrida</span>
              </div>
              <div className="bg-black/40 rounded-full px-6 py-2 border border-gray-600">
                <span className="text-sm font-semibold">Suspensión Adaptativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
