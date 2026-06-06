import './EmptyWeatherCard.css'

export default function EmptyWeatherCard() {
    return (
        <div className="weather-card weather-card--empty">
            <div className="weather-card__content weather-card__content--centered">
                <div className="weather-card__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="weather-card__location-icon">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </div>
                <h2 className="weather-card__error-title">404 Location</h2>
                <p className="weather-card__error-subtitle">
                    The place you're looking for doesn't seem to exist.
                </p>
            </div>
        </div>
    );
}