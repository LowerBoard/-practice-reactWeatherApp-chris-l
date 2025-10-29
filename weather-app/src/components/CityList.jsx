import React, { useState, useEffect } from 'react';
import App from '../App';


function CityList({weatherdata, city, onSelect}) {
    const weathercities = Object.keys(weatherdata)
    return (
    <div>
        {weathercities.map((weathercity) => <button key={weathercity} onClick={() => onSelect(weathercity)}> {weathercity} </button>)}
    </div>
  )
}

export default CityList
