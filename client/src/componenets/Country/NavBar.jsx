import React, { useEffect } from  'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getFilterBy,getOrderBy, getCountries, getCountriesName, filter, getActivities } from '../../actions';
import './NavBar.css'

export default function NavBarCountries({reload}){
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities)
    console.log(activities)
    let [input, setInput] = useState({
        filter: '',
        activity:'',
        order: ''
    });
    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])
    
    function handleSubmit(event){
        event.preventDefault();
        dispatch(getCountriesName(event.target.value));
        reload();
    }
    function handleSelect(event){
        setInput({
            ...input,
            filter: event.target.value
        })
    }
    function handleOrder(event){
        setInput({
            ...input,
            order: event.target.value
        })
    }
    function handleOnChange(event){
        dispatch(filter(event.target.value))
    }
    function handleFilterClick(event){
        event.preventDefault();
        dispatch(getFilterBy(input.filter))
    }
    function handleOrderClick(event){
        event.preventDefault();
        dispatch(getOrderBy(input.filter, input.order))
    }
    function handleOnClick(event){
        event.preventDefault()
        dispatch(getCountries())
    }
    return(
        <div className='gridNavBar'>
            <div className='navBarContainer'>
                <div className='elementNav1'>
                    <div>
                        <Link to='/'>
                        <button>
                            Back
                        </button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/createActivity'>
                        <button>
                            Create Activity
                        </button>
                        </Link>
                        <button onClick={handleOnClick}>
                            Show countries
                        </button>
                    </div>
                </div>
                <div className='elementNav2'>
                    <div>
                        <button onClick={handleFilterClick}>
                            Filter By
                        </button>
                    </div>
                    <div>
                        <select onChange={handleSelect}name="filter">
                            <option desabled='true'></option>
                            <option value="id">ID</option>
                            <option value="continents">CONTINENT</option>
                            <option value="area">AREA</option>
                            <option value="population">POPULATION</option>
                        </select>
                    </div>
                    <div>
                        <select onChange={handleOnChange} name="activity">
                            <option desabled='true' hidden>ACTIVITY</option>
                            {activities?.map((a , i) => 
                                <option key={`activity ${i}`} value={a.name}>{a.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <button onClick={handleOrderClick}>
                            Order
                        </button>
                    </div>
                    <div>
                        <select onChange={handleOrder} name="order">
                            <option desabled='true' hidden></option>
                            <option value="DESC">DESC</option>
                        </select>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div>
                        <input  placeholder='Search...' type="search" onChange={handleSubmit}/>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}