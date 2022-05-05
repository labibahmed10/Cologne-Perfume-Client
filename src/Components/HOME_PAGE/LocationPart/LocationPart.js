import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const LocationPart = () => {
  return (
    <div>
      <MapContainer className="input-map h-[100vh] w-full" center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} />
      </MapContainer>
    </div>
  );
};

export default LocationPart;
