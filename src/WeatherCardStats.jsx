import './WeatherCardStats.css'

export default function WeatherCardStats({ weatherInfo }) {
    return (
        <div className="weather-card__stats">
            <div className="weather-card__stat">
                <span className="weather-card__stat-label">Humidity</span>
                <span className="weather-card__stat-value">
                    {weatherInfo.main.humidity}%
                </span>
            </div>
            <div className="weather-card__stat">
                <span className="weather-card__stat-label">Pressure</span>
                <span className="weather-card__stat-value">
                    {weatherInfo.main.pressure} hPa
                </span>
            </div>
            <div className="weather-card__stat">
                <span className="weather-card__stat-label">Wind</span>
                <span className="weather-card__stat-value">
                    {(weatherInfo.wind.speed * 3.6).toFixed(2)} km/h
                </span>
            </div>
            <div className="weather-card__stat">
                <span className="weather-card__stat-label">Visibility</span>
                <span className="weather-card__stat-value">
                    {(weatherInfo.visibility)/1000}km
                </span>
            </div>
        </div>
    );
}