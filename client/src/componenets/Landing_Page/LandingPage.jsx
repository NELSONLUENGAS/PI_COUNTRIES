import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage(){
    return (
        <div className='gridLanding'>
            <div className='landingTitle'>
            <Link to='/home'>
                <button>
                    WELCOME
                </button>
                </Link>
                <span>
                Countries App
                </span>
            </div>
            <div className='landingContainer'>
                <img src="https://www.freepnglogos.com/uploads/world-map-png/world-map-this-the-most-hard-working-country-the-world-7.png" alt="World" />
            </div>
        </div>
    )
}