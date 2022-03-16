import React from 'react';
import './CardDetails.css';

export default function CardDetails({id, name, image, continents, capital, subregion, area, population, activities}){

    return(
            <div className='cardContainer'>
            <div className='cardElement1'>
                <span>
                    {name}
                </span>
                <span>
                    {id}
                </span>
            </div>
            <div className='cardElement2'>
                <span>
                    <img src={image} alt="Pais_Bandera" width={'150px'} height={'150px'}/>
                </span>
            </div>
            <div className='cardElement3'>
                <span>
                    Capital: {capital}
                </span>
                <span>
                    Continent: {continents}
                </span>
                <span>
                    Subregion: {subregion}
                </span>
                <span>
                    Area: {area} Km2
                </span>
                <span>
                    Population: {population}
                </span>
            </div>
        </div>
    )
}