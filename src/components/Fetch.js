// Fetch.js
import { useContext } from "react";
import { ContextCreated } from "./Context";

const WeatherData = async (country) => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a2f24bd6ae1343d9935131038240811&q=${country}&aqi=no`);
  const data = await response.json(); 
  return data;
};

export default WeatherData;
