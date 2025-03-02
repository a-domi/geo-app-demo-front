import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useMap } from '../hooks/useMap';

interface MapProps {
    lat: number;
    lng: number;
}

const containerStyle = {
    width: '70%',
    height: '400px',
};

const MapComponent: React.FC<MapProps> = ({ lat, lng }) => {
    const { isLoaded, onLoad, onUnmount } = useMap({ lat, lng });


    if (!isLoaded) {
        return <div>Loading...</div>; // API のロード中はローディング表示
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat, lng }}
            zoom={14} // 適切なズームレベルを設定
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={{ lat, lng }} /> {/* マーカーの表示 */}
        </GoogleMap>
    ) : <>a</>;
};

export default MapComponent;