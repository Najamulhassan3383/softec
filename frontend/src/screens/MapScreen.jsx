import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import React, { useRef } from "react";
import "leaflet/dist/leaflet.css";

function MapScreen({ name, longitude, latitude }) {
  console.log(longitude, latitude);
  return (
    <MapContainer
      center={[latitude, longitude]}
      style={{ height: "100%", width: "100%" }}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapScreen;
