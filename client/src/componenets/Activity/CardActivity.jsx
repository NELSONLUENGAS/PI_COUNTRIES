import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteActivity, getCountryId } from '../../actions';
import './CardActivity.css';

export default function CardActivity({id, name, image, duration, difficulty, season}){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const country = useSelector(state => state.details);
    const [state, setState] = useState({
        delet: false,
        activities: country.activities
    });
    //console.log(state);

    function handleDelete(e, id){
        e.preventDefault()
        if(window.confirm('Are you sure!!')){
            dispatch(deleteActivity(id));
            setState({
                ...state,
                delet: true
            });
            console.log(state);
            dispatch(getCountryId(country.id))
            setState({
                ...state,
                activities: country.activities
            })
            navigate(`/country/${country.id}`)
            //console.log(state);
        }
    }
    return(
            <div className='cardContainer'>
            <div className='cardElement1'>
                    <span>
                        {name}
                    </span>
                <div>
                    <button onClick={(e)=>handleDelete(e,id)}>
                        X
                    </button>
                    <span>
                        {id}
                    </span>
                </div>
            </div>
            <div className='cardElement2'>
                <span>
                    <img src={image} alt="Pais_Bandera" width={'150px'} height={'150px'}/>
                </span>
            </div>
            <div className='cardElement3'>
                <span>
                    Difficulty: {difficulty}
                </span>
                <span>
                    Duration: {duration}
                </span>
                <span>
                    Season: {season}
                </span>
                <Link to={`/updateActivity/${id}`}>
                <button>
                    Edit
                </button>
                </Link>
            </div>
        </div>
    )
}