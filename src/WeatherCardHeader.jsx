import './WeatherCardHeader.css'

export default function WeatherCardHeader({weatherInfo}) {
    return(
        <div className="weather-card__header">
            <div className="weather-card__location">
                <h2 className="weather-card__city">{weatherInfo.name}</h2>
            </div>
            <span className="weather-card__temp">
                {weatherInfo.main.temp}
                <span className="degree">°</span>
                <span className="unit">C</span>
            </span>
        </div>
    );
}