import React from 'react';
import './CardCountry.css';

export default function CardCountry({id, name, image, continents}){
    
    return(
        <div className='container'>
        <div className='element1'>
            <span>
                {name}
            </span>
            <span>
                {id}
            </span>
        </div>
        <div className='element2'>
            <span>
                <img src={image} alt="Pais_Bandera" width={'150px'} height={'150px'}/>
            </span>
            <span>
                {continents}
            </span>
        </div>
    </div>
    )
}