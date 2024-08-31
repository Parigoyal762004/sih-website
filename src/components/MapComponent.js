// components/MapComponent.js

import React, { useEffect, useRef } from 'react';
import 'ol/ol.css'; // OpenLayers CSS
import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { Feature } from 'ol';
import { Icon, Style } from 'ol/style';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [],
          }),
          style: new Style({
            image: new Icon({
              src: 'path/to/marker-icon.png',
              scale: 0.1,
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });

    async function loadMarkers() {
      try {
        const response = await fetch('http://localhost:5000/api/markers');
        const markers = await response.json();

        const features = markers.map(marker =>
          new Feature({
            geometry: new Point(fromLonLat([marker.longitude, marker.latitude])),
          })
        );

        const vectorLayer = map.getLayers().getArray().find(layer => layer instanceof VectorLayer);
        if (vectorLayer) {
          vectorLayer.getSource().addFeatures(features);
        }
      } catch (error) {
        console.error('Error fetching markers:', error);
      }
    }

    loadMarkers();

    return () => map.setTarget(null);
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default MapComponent;
