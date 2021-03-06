import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardDetails from './CardDetails';
import CardActivity from '../Activity/CardActivity';
import { getCountryId } from '../../actions';
import {Link}  from 'react-router-dom';
import './CardCountryDetails.css';


export default function CardCountryDeatils(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const country = useSelector(state => state.details);
    useEffect(() => {
        dispatch(getCountryId(id))
    },[dispatch, id])
    const activities = country.activities

    return(
        <div className='detailsContainer'>
            <div className="createNav">
                <span>
                    Country Details
                </span>
                <Link to={'/home'}>
                <button>
                    <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m261.56 101.28a8 8 0 0 0 -11.06 0l-184.1 175.87a8 8 0 0 0 -2.47 5.79l-.03 165.06a32 32 0 0 0 32 32h96.1a16 16 0 0 0 16-16v-136a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32v-165.06a8 8 0 0 0 -2.47-5.79z"/><path d="m490.91 244.15-74.8-71.56v-108.59a16 16 0 0 0 -16-16h-48a16 16 0 0 0 -16 16v32l-57.92-55.38c-5.42-5.48-13.48-8.62-22.19-8.62-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37a16 16 0 0 0 23.18 1.06l207.5-198.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"/></svg>
                </button>
                </Link>
            </div>
            <div className='details'>
                {country && 
                <CardDetails
                    id={country.id} 
                    name={country.name}
                    image={country.image}
                    capital={country.capital}
                    continents={country.continents}
                    subregion={country.subregion}
                    area={country.area}
                    population={country.population}
                />}
            </div>
            <div className='details1'>
                {activities ? activities.map(a => 
            <CardActivity
                key={a.id}
                id={a.id}
                name={a.name}
                image={a.image}
                duration={a.duration}
                difficulty={a.difficulty}
                season={a.season}
            />):<h1>loading</h1>}
            </div>
        </div>
    )
}