import './WeatherCard.css';

import EmptyWeatherCard from './EmptyWeatherCard';
import WeatherCardHeader from './WeatherCardHeader';
import WeatherCardStats from './WeatherCardStats';

export default function WeatherCard({ weatherInfo }) {
    if (weatherInfo === "No Data") {
        return (
            <EmptyWeatherCard/>
        );
    }

    return (
        <div className="weather-card">
            <div className="weather-card__top-bar" />
            <div className="weather-card__content">
                <WeatherCardHeader weatherInfo={weatherInfo}/>
                <p className="weather-card__feels">
                    Feels like {weatherInfo.main.feels_like}°.{" "}{weatherInfo.weather[0].description.charAt(0).toUpperCase() + weatherInfo.weather[0].description.slice(1)}
                </p>
                <hr className="weather-card__divider" />
                <WeatherCardStats weatherInfo={weatherInfo}/>
            </div>
        </div>
    );
}
