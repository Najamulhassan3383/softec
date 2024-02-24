import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import React, { useRef } from "react";
import "leaflet/dist/leaflet.css";

function MapScreen() {
  return (
    <MapContainer
      center={[30.375321, 69.345116]}
      style={{ height: "100vh", width: "100vw" }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[31.558, 74.35071]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapScreen;
