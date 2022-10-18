import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon404 = () => {
    return (
        <>
            <h1>Pokemon not found  </h1>
            <Link to='/pokedex' >Return to Pokedex</Link>
        </>
    )
}

export default Pokemon404 