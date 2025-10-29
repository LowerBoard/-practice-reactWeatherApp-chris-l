import React, { useState, useEffect } from 'react';
import CityList from './components/CityList';
import CityForecast from './components/CityForecast';

const weatherData = {
 NewYork: {
 summary: "Sunny, 25°C",
 details: "Clear skies throughout the day with mild temperatures.",
 },

 London: {
 summary: "Cloudy, 18°C",
 details: "Overcast with occasional light rain in the afternoon.",
 },

 Tokyo: {
 summary: "Rainy, 22°C",
 details: "Continuous rain expected throughout the day.",
 }
};



function App() {
  
  const [selectedCity, setSelectedCity] = useState(null);
  const handleCityClick = (cityName) => {setSelectedCity(cityName)};

  return (
    <>
      <div>
       <h1>City Weather</h1>
       <CityList weatherdata={weatherData} city={selectedCity} onSelect={handleCityClick} />
       {selectedCity && <CityForecast weatherdata={weatherData} city={selectedCity} />}
      </div>
    </>
  )
}

export default App;
