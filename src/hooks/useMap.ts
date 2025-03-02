import { useState, useCallback } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

interface UseMapProps {
  lat: number;
  lng: number;
}

export const useMap = ({ lat, lng }: UseMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
    map.panTo({ lat, lng });
  }, [lat, lng]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return { isLoaded, map, onLoad, onUnmount };
};