import React, { useState, useEffect, useRef } from 'react';
import App from '../App';


function CityForecast({city, weatherdata}) {
    const cityWeather = weatherdata[city];
    const detailsRef = useRef(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('some link');
        const data = await response.json();
        setWeather(data.results);
        };
    fetchData();
    }, []);

    const handleRef = () => {
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({
                behavior: 'smooth' 
            });
    }};
    
    return (
    <div>
        <p>Here's {city}'s forecast:</p>
        <p>{cityWeather.summary}</p>

        <button onClick={handleRef}>View Details</button>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div ref={detailsRef}>{cityWeather.details}</div>
    </div>
  )
};

export default CityForecast