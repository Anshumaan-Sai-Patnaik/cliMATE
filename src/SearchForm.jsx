import './SearchForm.css'

import SearchField from './SearchField.jsx'
import SearchButton from './SearchButton.jsx'
import geoCodeAddress from './geoCodeAddress.jsx'
import getWeather from './getWeather.jsx'

import { useState } from 'react';

export default function SearchForm({ setWeatherInfo }) {
    let [formInput, setFormInput] = useState("");

    function handleFormChange(event){
        setFormInput(event.target.value);
    }

    async function handleSubmit(event){
        if(formInput === "") {
            let searchField = document.querySelector('.searchField');

            searchField.classList.remove("wiggle");
            void searchField.offsetWidth;
            searchField.classList.add("wiggle");
        }

        event.preventDefault();
        document.activeElement.blur();    // user presses Enter, the form submits, and the input immediately loses focus matching the behavior of clicking the submit button.
        setFormInput("");

        let weatherData;
        if (formInput) {
            let geoCodeData = await geoCodeAddress(formInput)
            console.log(geoCodeData)
            if(geoCodeData.features.length > 0){
                let lat = geoCodeData.features[0].properties.lat;
                let lon = geoCodeData.features[0].properties.lon;

                weatherData = await getWeather(lat, lon);
            }
            else{
                weatherData = "No Data"
            }
        }

        setWeatherInfo(weatherData);
    }

    return (
        <form onSubmit={handleSubmit} className='searchForm'>
            <label className='searchLabel' htmlFor="filled-basic">Enter any city, town, or landmark to get live weather</label>
            <br />
            <div className='searchBox'>
                <SearchField formInput={formInput} handler={handleFormChange}/>
                <SearchButton/>
            </div>
        </form>
    );
}