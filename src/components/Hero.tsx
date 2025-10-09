import { ChevronRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-blue-900/20" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
          <Zap className="w-4 h-4 text-red-400" />
          <span className="text-sm text-red-300">Velocidad. Potencia. Estilo.</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
          El Mundo de los
          <br />
          Deportivos de Elite
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Descubre la potencia, el diseño y la ingeniería detrás de los automóviles
          deportivos más exclusivos del planeta
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="group inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full transition-all transform hover:scale-105"
          >
            <span className="font-semibold">Explorar Colección</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#stats"
            className="inline-flex items-center justify-center space-x-2 border border-gray-600 hover:border-red-500 px-8 py-3 rounded-full transition-colors"
          >
            <span className="font-semibold">Ver Especificaciones</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
      </div>
    </section>
  );
}
