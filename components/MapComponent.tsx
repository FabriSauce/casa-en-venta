import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { useMap } from 'react-leaflet' // Import normal para hooks

// Cargar `MapContainer`, `TileLayer`, `Marker` y `Popup` dinámicamente
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })

function SetView({ position }: { position: [number, number] }) {
  const map = useMap()

  useEffect(() => {
    if (map) {
      map.setView(position)
    }
  }, [map, position])

  return null
}

const MapComponent = ({ position }: { position: [number, number] }) => {
  const [leaflet, setLeaflet] = useState<any>(null)

  useEffect(() => {
    import("leaflet")
      .then((L) => {
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
        setLeaflet(L);
      })
      .catch((error) => {
        console.error("Error cargando Leaflet: ", error);
        setLeaflet(null);
      });
  }, []);

  if (!leaflet) return <p>Cargando mapa...</p> // Muestra un mensaje mientras Leaflet se carga

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }} attributionControl={false}>
      <SetView position={position} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Barrio Belgrano, calle 100-A 1711
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent
