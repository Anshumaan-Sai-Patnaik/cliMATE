import './App.css'

import Title from './Title'
import SearchForm from './SearchForm'
import WeatherCard from './WeatherCard'

import { useState } from 'react'

function App() {
    let [weatherInfo, setWeatherInfo] = useState(null);

    return (
        <>
            <Title />
            <SearchForm setWeatherInfo={setWeatherInfo} />
            {weatherInfo && <WeatherCard weatherInfo={weatherInfo} />}
        </>
    )
}

export default App
