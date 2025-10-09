import { Car, Gauge, Trophy } from 'lucide-react';

interface Car {
  id: number;
  name: string;
  brand: string;
  image: string;
  horsepower: number;
  topSpeed: number;
  acceleration: string;
  price: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: 'Ferrari SF90 Stradale',
    brand: 'Ferrari',
    image: 'https://images.pexels.com/photos/18450323/pexels-photo-18450323.jpeg?auto=compress&cs=tinysrgb&w=800',
    horsepower: 986,
    topSpeed: 340,
    acceleration: '2.5s',
    price: '$625,000'
  },
  {
    id: 2,
    name: 'Lamborghini Huracán',
    brand: 'Lamborghini',
    image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800',
    horsepower: 631,
    topSpeed: 325,
    acceleration: '2.9s',
    price: '$274,390'
  },
  {
    id: 3,
    name: 'McLaren 720S',
    brand: 'McLaren',
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800',
    horsepower: 710,
    topSpeed: 341,
    acceleration: '2.8s',
    price: '$299,000'
  },
  {
    id: 4,
    name: 'Porsche 911 GT3',
    brand: 'Porsche',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    horsepower: 502,
    topSpeed: 318,
    acceleration: '3.2s',
    price: '$161,100'
  },
  {
    id: 5,
    name: 'Aston Martin DBS',
    brand: 'Aston Martin',
    image: 'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=800',
    horsepower: 715,
    topSpeed: 340,
    acceleration: '3.4s',
    price: '$316,300'
  },
  {
    id: 6,
    name: 'Chevrolet Corvette Z06',
    brand: 'Chevrolet',
    image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
    horsepower: 670,
    topSpeed: 312,
    acceleration: '2.6s',
    price: '$106,395'
  }
];

interface CarGalleryProps {
  onSelectCar: (id: number) => void;
}

export default function CarGallery({ onSelectCar }: CarGalleryProps) {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Colección Elite</h2>
          <p className="text-gray-400 text-lg">Los deportivos más exclusivos del mercado</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              onClick={() => onSelectCar(car.id)}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="text-sm text-red-400 font-semibold mb-1">{car.brand}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-400 transition-colors">
                  {car.name}
                </h3>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Gauge className="w-5 h-5 mx-auto mb-1 text-gray-400" />
                    <div className="text-sm font-bold">{car.horsepower}</div>
                    <div className="text-xs text-gray-400">HP</div>
                  </div>
                  <div className="text-center">
                    <Trophy className="w-5 h-5 mx-auto mb-1 text-gray-400" />
                    <div className="text-sm font-bold">{car.topSpeed}</div>
                    <div className="text-xs text-gray-400">km/h</div>
                  </div>
                  <div className="text-center">
                    <Car className="w-5 h-5 mx-auto mb-1 text-gray-400" />
                    <div className="text-sm font-bold">{car.acceleration}</div>
                    <div className="text-xs text-gray-400">0-100</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-500">{car.price}</span>
                    <span className="text-sm text-gray-400 group-hover:text-red-400 transition-colors">
                      Ver detalles →
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                Premium
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
