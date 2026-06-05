import './App.css'

import title from './Title'
import searchForm from './SearchForm'

import { useState } from 'react'

function App() {
    return (
        <>
            {title()}
            {searchForm()}
        </>
    )
}

export default App
