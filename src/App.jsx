import React, { useContext, useEffect, useState } from 'react'
import WeatherData from './components/Fetch';
import Card from './components/Card.jsx'
import { ContextCreated } from './components/Context.jsx';

function App() {

    const [data , setData] = useState(null);

    const [countryHolder , setCountryHolder] = useState(" ");

    const countryContext = useContext(ContextCreated);

    const handleClick = () =>{
        countryContext.setCountry(countryHolder);
        setCountryHolder(" ");
    }

    const fetchData = async () =>{
        if(countryContext.country){
            const weatherResponse = await WeatherData(countryContext.country)
            setData(weatherResponse.location)
        }
    }

    useEffect(() => {
        fetchData();
    }, [countryContext.country])
    

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 space-y-4 p-4">
      <div className="flex space-x-2">
        <input
          type="text"
          
          value={countryHolder}
          onChange={(e) => setCountryHolder(e.target.value)}
          placeholder="Enter Your Country Name"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Enter
        </button>
      </div>
      <div className="flex justify-center items-center w-full max-w-sm">

        {
            data &&           <Card
            name={data.name}
            region={data.region}
            country={data.country}
            latitude={data.lat}
            longitude={data.lon}
            timeZone={data.tz_id}
            localTime={data.localtime}
          />
        }
      </div>
    </div>
    </>
  )
}

export default App
