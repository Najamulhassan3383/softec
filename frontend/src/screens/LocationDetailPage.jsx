import React from "react";
import { useLocation } from "react-router-dom";
import MapScreen from "./MapScreen";

const LocationDetailPage = () => {
  const location = useLocation();
  const locationData = location.state;

  return (
    <div className="flex flex-col lg:flex-row p-5 lg:p-10 bg-gray-100 rounded-lg shadow-md">
      <div className="lg:w-2/3">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
          {locationData._key}
        </h1>
        <img
          src={locationData.image}
          alt={locationData._key}
          className="w-full h-64 object-cover mb-4 rounded-lg shadow-md"
        />
        <div className="mb-4">
          <p className="text-lg text-gray-700">
            <strong className="font-bold">Category:</strong>{" "}
            {locationData.category}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-bold">District:</strong>{" "}
            {locationData.district}
          </p>
          <p className="text-lg text-gray-700">
            <strong className="font-bold">Description:</strong>{" "}
            {locationData.Desc}
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:pl-5">
        <MapScreen
          name={locationData._key}
          longitude={locationData.longitude}
          latitude={locationData.latitude}
        />
      </div>
    </div>
  );
};

export default LocationDetailPage;
