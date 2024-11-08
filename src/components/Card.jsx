import React from "react";

const Card = ({ name, region, country, latitude, longitude, timeZone, localTime }) => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h2>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Region:</span> {region}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Country:</span> {country}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Latitude:</span> {latitude}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Longitude:</span> {longitude}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Time Zone:</span> {timeZone}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Local Time:</span> {localTime}
        </p>
      </div>
    </div>
  );
};

export default Card;
