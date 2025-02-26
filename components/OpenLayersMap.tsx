import React, { useEffect, useRef } from 'react'
import 'ol/ol.css'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import { Style, Icon } from 'ol/style'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

const OpenLayersMap = ({ position }: { position: [number, number] }) => {
  const mapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat(position),
          zoom: 13,
        }),
      })

      const iconFeature = new Feature({
        geometry: new Point(fromLonLat(position)),
      })

      iconFeature.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: 'https://openlayers.org/en/latest/examples/data/icon.png',
          }),
        })
      )

      const vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [iconFeature],
        }),
      })

      map.addLayer(vectorLayer)
    }
  }, [position])

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
}

export default OpenLayersMap