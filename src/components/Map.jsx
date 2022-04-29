import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/App.css';

const ChartMap = () => {
const position = [4.7098241,-74.0778432]

return (
        <>
            <div>
                <h3 style={{textAlign:"center"}}>Encuentranos en la siguiente Ubicacion</h3>
            </div>
            <MapContainer center={position} zoom={12}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} >
                    <Popup> Guappjalotes</Popup>
                </Marker>
            </MapContainer>
        </>
    );
};
export default ChartMap;