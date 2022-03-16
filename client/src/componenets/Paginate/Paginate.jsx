import React from "react";
import './Paginate.css'

export default function Paginate({limit, allCountries, paginate}){
    const pageNumber = [];
    for(let i = 0; i <= Math.floor(allCountries /  limit); i++){
        pageNumber.push(i + 1);
    }
    return(
        <nav className='pageContainer'>
                {pageNumber?.map(number => 
                    <button onClick={() => paginate(number)} key={number}>
                        {number}
                    </button>
                )}
        </nav>
    )
}