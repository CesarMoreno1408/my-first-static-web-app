import { Car, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold">SportCars</span>
            </div>
            <p className="text-gray-400">
              La plataforma definitiva para explorar y conocer los automóviles deportivos
              más exclusivos del mundo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-red-400 transition-colors">Inicio</a></li>
              <li><a href="#gallery" className="hover:text-red-400 transition-colors">Galería</a></li>
              <li><a href="#stats" className="hover:text-red-400 transition-colors">Especificaciones</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span>info@sportcars.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Miami, Florida</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SportCars. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
