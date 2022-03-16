import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './CardsCountries.css';
import { Link } from 'react-router-dom';
import CardCountry from './CardCountry';
import Paginate from '../Paginate/Paginate';
import { useEffect} from 'react';
import { getCountries } from '../../actions';
import NavBarCountries from './NavBar';


export default function CardsCountries(){
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    // const activity = useSelector(state => state.activity)
    //console.log(activity)
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const endNumber = page * limit;
    const startNumber = endNumber - limit;
    const countries = page === 1 ? allCountries.slice(startNumber, endNumber - 1) : allCountries.slice(startNumber - 1, endNumber - 1)
    // console.log(startNumber, endNumber)
    // console.log(countries)
    function reload(){
        setPage(1)
    }
    function paginate(pageNumber){
        setPage(pageNumber);
    }
    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    return(
        <div>
            <NavBarCountries reload={reload}/>
        <div className='countryContainer'>
            <div className='paginate'>
                <Paginate
                    limit={limit}
                    allCountries={allCountries.length}
                    paginate={paginate}
                />
            </div>
            <div className='countries'>
                {countries ? countries.map( c => 
                <Link key={c.id} to={`/country/${c.id}`} style={{textDecoration: 'none'}}>
                <CardCountry 
                    id={c.id}
                    name={c.name}
                    image={c.image}
                    continents={c.continents}
                />
                </Link>):
                <h1>Loading...</h1>}
            </div>
        </div>
        </div>
    )
}
