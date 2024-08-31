// utils/mapUtils.js

import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { Feature } from 'ol';

// Initialize and return a map instance
export function initializeMap(mapRef) {
  if (!mapRef.current) return null;

  const map = new Map({
    target: mapRef.current,
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new VectorLayer({
        source: new VectorSource(),
      }),
    ],
    view: new View({
      center: fromLonLat([0, 0]),
      zoom: 2,
    }),
  });

  return map;
}

// Add markers to the map
export function addMarkers(map, markers) {
  const vectorLayer = map.getLayers().getArray().find(layer => layer instanceof VectorLayer);
  
  if (vectorLayer) {
    const features = markers.map(marker =>
      new Feature({
        geometry: new Point(fromLonLat([marker.longitude, marker.latitude])),
      })
    );

    vectorLayer.getSource().addFeatures(features);
  }
}
