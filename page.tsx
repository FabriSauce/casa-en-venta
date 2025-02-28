import dynamic from 'next/dynamic'
import Image from "next/image"
import {
  Home,
  BedDouble,
  Bath,
  Ruler,
  Phone,
  Mail,
  ChefHat,
  Sofa,
  DoorOpen,
  Utensils,
  Car,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageCarousel } from "@/components/ImageCarousel"
import OpenLayersMap from "@/components/OpenLayersMap"
import { useTheme } from '@/context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function CasaEnVenta() {
  const images = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
  ]
  const position: [number, number] = [-55.8966312, -27.3939463] // Longitud, Latitud
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <div className="relative">
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full transition-transform flex items-center justify-center ${
                theme === 'dark' ? 'transform translate-x-full bg-yellow-500' : 'bg-gray-200'
              }`}
            >
              {theme === 'dark' ? (
                <FaSun className="text-gray-800 w-4 h-4" />
              ) : (
                <FaMoon className="text-gray-800 w-4 h-4" />
              )}
            </div>
          </div>
          <span className="ml-3 text-gray-700 dark:text-gray-300">
            {theme === 'light' ? 'Modo Claro' : 'Modo Oscuro'}
          </span>
        </label>
      </div>

      {/* Hero Section con ImageCarousel */}
      <section className="mb-8">
      <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Exclusiva Residencia Familiar en Venta</h1>
          <p className="text-xl text-muted-foreground">
            El hogar perfecto que combina confort, elegancia y ubicación privilegiada
          </p>
        </div>
        <ImageCarousel images={images} />
      </section>

      {/* Detalles del Hogar */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Detalles del Hogar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Home className="mr-2 text-primary dark:text-white" />
              <span>200 m²</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-4">
              <BedDouble className="mr-2 text-primary dark:text-white" />
              <span>3 Habitaciones</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-4">
              <Bath className="mr-2 text-primary dark:text-white" />
              <span>2 Baños</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-4">
              <Ruler className="mr-2" />
              <span>390 m² Terreno</span>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Galería de Fotos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Foto ${i + 1}`}
              width={400}
              height={300}
              className="rounded-lg"
            />
          ))}
        </div>
      </section>

      {/* Ubicación */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Ubicación</h2>
        <div className="h-64 rounded-lg overflow-hidden">
          <OpenLayersMap position={position} />
        </div>
        <p className="mt-2 text-center">Barrio Belgrano, calle 100-A 1711</p>
      </section>

      {/* Descripción */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Descripción</h2>
        <p className="text-lg">
        Esta acogedora casa familiar es ideal para quienes buscan un lugar tranquilo y con gran potencial para renovar a su gusto. Con 2 cómodas habitaciones, un baño, cocina, lavadero y un amplio salón-comedor, ofrece todo lo necesario para una vida cómoda. En la parte posterior de la casa, encontrarás una habitación adicional con baño privado, ideal para un hijo o un familiar. El espacioso patio está rodeado por grandes árboles de palta, pomelo y mango, proporcionando una excelente sombra para disfrutar de tardes al aire libre. Además, cuenta con una parrilla, perfecta para compartir en familia o con amigos.

Ubicada a solo 5 minutos en auto del centro de la ciudad, esta casa se encuentra cerca de escuelas, comercios, supermercados y con acceso rápido a una avenida principal y la zona costanera, lo que la convierte en una opción conveniente para quienes buscan estar cerca de todo.

Aunque la vivienda necesita algunos trabajos de reacondicionamiento, es una excelente oportunidad para quienes buscan un proyecto de renovación o simplemente un hogar donde vivir cómodamente desde el primer día. Con un terreno amplio y bien ubicado, es la opción perfecta para una familia que quiera darle su propio toque, o para un contratista que vea el gran potencial de esta propiedad.


        </p>
      </section>

      {/* Características */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Características</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center">
            <ChefHat className={`w-6 h-6 mr-2 text-primary ${theme === 'dark' ? 'text-white' : ''}`} />
            <span>Cocina</span>
          </li>
          <li className="flex items-center">
            <Sofa className={`w-6 h-6 mr-2 text-primary ${theme === 'dark' ? 'text-white' : ''}`} />
            <span>Sala de estar y comedor</span>
          </li>
          <li className="flex items-center">
            <DoorOpen className={`w-6 h-6 mr-2 text-primary ${theme === 'dark' ? 'text-white' : ''}`} />
            <span>2 dormitorios en casa principal</span>
          </li>
          <li className="flex items-center">
            <Utensils className={`w-6 h-6 mr-2 text-primary ${theme === 'dark' ? 'text-white' : ''}`} />
            <span>Patio trasero con parrilla</span>
          </li>
          <li className="flex items-center">
            <Car className={`w-6 h-6 mr-2 text-primary ${theme === 'dark' ? 'text-white' : ''}`} />
            <span>Monoambiente atrás con baño incluido</span>
          </li>
          <li className="flex items-center">
            <Shield className={`w-6 h-6 mr-2 text-primary ${theme === 'dark' ? 'text-white' : ''}`} />
            <span>Sistema de seguridad instalado</span>
          </li>
        </ul>
      </section>

      {/* Precio */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Precio</h2>
        <p className="text-4xl font-bold text-green-600">$90,000</p>
      </section>

      {/* Sección de Contacto */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Button className="flex items-center justify-center">
            <Phone className="mr-2" />
            Llamar ahora
          </Button>
          <Button variant="outline" className="flex items-center justify-center">
            <Mail className="mr-2" />
            Enviar correo
          </Button>
        </div>
      </section>
    </div>
  )
}