import { useState } from 'react';
import { Car, Gauge, Trophy, Zap, ChevronRight } from 'lucide-react';
import Hero from './components/Hero';
import CarGallery from './components/CarGallery';
import CarDetails from './components/CarDetails';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold">SportCars</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-500 transition-colors">Inicio</a>
              <a href="#gallery" className="hover:text-red-500 transition-colors">Galería</a>
              <a href="#stats" className="hover:text-red-500 transition-colors">Especificaciones</a>
              <a href="#contact" className="hover:text-red-500 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <CarGallery onSelectCar={setSelectedCar} />
        {selectedCar !== null && (
          <CarDetails carId={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
        <Stats />
      </main>

      <Footer />
    </div>
  );
}

export default App;
