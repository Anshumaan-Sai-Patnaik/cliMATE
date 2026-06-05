import './SearchForm.css'

import SearchField from './SearchField.jsx'
import SearchButton from './SearchButton.jsx'

import { useState } from 'react';

export default function SearchForm() {
    let [formInput, setFormInput] = useState("");

    function handleFormChange(event){
        setFormInput(event.target.value);
    }

    function handleSubmit(event){
        if(formInput === "") {
            let searchField = document.querySelector('.searchField');

            searchField.classList.remove("wiggle");
            void searchField.offsetWidth;
            searchField.classList.add("wiggle");
        }

        event.preventDefault();
        document.activeElement.blur();    // user presses Enter, the form submits, and the input immediately loses focus matching the behavior of clicking the submit button.
        setFormInput("");
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