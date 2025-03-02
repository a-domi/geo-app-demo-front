"use client";
import { useState, useEffect } from 'react';
import axios from '../configs/axios';
import MapComponent from '../components/Map';

export default function App() {
  // 緯度経度デフォルト（東京駅）
  const [lat, setLat] = useState<number>(35.6813);
  const [lng, setLng] = useState<number>(139.767066);
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    const onSuccess = (position: GeolocationPosition) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
      // 現在値の緯度経度を渡すAPIを呼び出す
    };

    const onError = (error: GeolocationPositionError) => {
      setError(error);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return (
    <div>
        {lat && (
            <div>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lng}</p>
            </div>
        )}
        {error && <p>Error: {error.message}</p>}
        {!lat && !error && <p>Loading location...</p>}
        <div>
            <h1>Google Map</h1>
            <MapComponent lat={lat} lng={lng} />
        </div>
    </div>
    
);
}