import { X, Gauge, Zap, Fuel, Calendar, Settings } from 'lucide-react';

const carDetails = {
  1: {
    name: 'Ferrari SF90 Stradale',
    brand: 'Ferrari',
    image: 'https://images.pexels.com/photos/18450323/pexels-photo-18450323.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'El SF90 Stradale representa el pináculo de la innovación de Ferrari, combinando un motor V8 turbo con tres motores eléctricos para un rendimiento híbrido excepcional.',
    specs: {
      horsepower: '986 HP',
      topSpeed: '340 km/h',
      acceleration: '2.5s (0-100 km/h)',
      engine: 'V8 Turbo + Eléctrico',
      transmission: 'DCT 8 velocidades',
      year: '2024'
    }
  },
  2: {
    name: 'Lamborghini Huracán',
    brand: 'Lamborghini',
    image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'El Huracán encarna la filosofía de diseño agresivo de Lamborghini con un motor V10 atmosférico que ofrece una experiencia de conducción visceral.',
    specs: {
      horsepower: '631 HP',
      topSpeed: '325 km/h',
      acceleration: '2.9s (0-100 km/h)',
      engine: 'V10 5.2L Atmosférico',
      transmission: 'DCT 7 velocidades',
      year: '2024'
    }
  },
  3: {
    name: 'McLaren 720S',
    brand: 'McLaren',
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Diseño aerodinámico extremo y tecnología de Fórmula 1 se unen en el 720S para crear un superdeportivo que redefine los límites del rendimiento.',
    specs: {
      horsepower: '710 HP',
      topSpeed: '341 km/h',
      acceleration: '2.8s (0-100 km/h)',
      engine: 'V8 4.0L Biturbo',
      transmission: 'DCT 7 velocidades',
      year: '2024'
    }
  },
  4: {
    name: 'Porsche 911 GT3',
    brand: 'Porsche',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'El GT3 es la expresión máxima del compromiso de Porsche con la pureza en la conducción, ofreciendo una conexión directa entre piloto y máquina.',
    specs: {
      horsepower: '502 HP',
      topSpeed: '318 km/h',
      acceleration: '3.2s (0-100 km/h)',
      engine: 'Flat-6 4.0L Atmosférico',
      transmission: 'PDK 7 velocidades',
      year: '2024'
    }
  },
  5: {
    name: 'Aston Martin DBS',
    brand: 'Aston Martin',
    image: 'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Elegancia británica y potencia brutal se fusionan en el DBS, un gran turismo que combina lujo artesanal con rendimiento deportivo.',
    specs: {
      horsepower: '715 HP',
      topSpeed: '340 km/h',
      acceleration: '3.4s (0-100 km/h)',
      engine: 'V12 5.2L Biturbo',
      transmission: 'Automática 8 velocidades',
      year: '2024'
    }
  },
  6: {
    name: 'Chevrolet Corvette Z06',
    brand: 'Chevrolet',
    image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'El Z06 representa la evolución del icono americano, con un motor V8 de aspiración natural que alcanza 8600 rpm y un diseño de motor central.',
    specs: {
      horsepower: '670 HP',
      topSpeed: '312 km/h',
      acceleration: '2.6s (0-100 km/h)',
      engine: 'V8 5.5L Atmosférico',
      transmission: 'DCT 8 velocidades',
      year: '2024'
    }
  }
};

interface CarDetailsProps {
  carId: number;
  onClose: () => void;
}

export default function CarDetails({ carId, onClose }: CarDetailsProps) {
  const car = carDetails[carId as keyof typeof carDetails];

  if (!car) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full border border-gray-700 shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-600 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="aspect-[21/9] overflow-hidden rounded-t-2xl">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="mb-6">
            <div className="text-red-400 font-semibold mb-2">{car.brand}</div>
            <h2 className="text-4xl font-bold mb-4">{car.name}</h2>
            <p className="text-gray-300 leading-relaxed">{car.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
              <Gauge className="w-6 h-6 text-red-400 mb-2" />
              <div className="text-sm text-gray-400 mb-1">Potencia</div>
              <div className="text-lg font-bold">{car.specs.horsepower}</div>
            </div>

            <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
              <Zap className="w-6 h-6 text-red-400 mb-2" />
              <div className="text-sm text-gray-400 mb-1">Velocidad Máxima</div>
              <div className="text-lg font-bold">{car.specs.topSpeed}</div>
            </div>

            <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
              <Zap className="w-6 h-6 text-red-400 mb-2" />
              <div className="text-sm text-gray-400 mb-1">Aceleración</div>
              <div className="text-lg font-bold">{car.specs.acceleration}</div>
            </div>

            <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
              <Fuel className="w-6 h-6 text-red-400 mb-2" />
              <div className="text-sm text-gray-400 mb-1">Motor</div>
              <div className="text-sm font-bold">{car.specs.engine}</div>
            </div>

            <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
              <Settings className="w-6 h-6 text-red-400 mb-2" />
              <div className="text-sm text-gray-400 mb-1">Transmisión</div>
              <div className="text-sm font-bold">{car.specs.transmission}</div>
            </div>

            <div className="bg-black/30 rounded-xl p-4 border border-gray-700">
              <Calendar className="w-6 h-6 text-red-400 mb-2" />
              <div className="text-sm text-gray-400 mb-1">Año</div>
              <div className="text-lg font-bold">{car.specs.year}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
