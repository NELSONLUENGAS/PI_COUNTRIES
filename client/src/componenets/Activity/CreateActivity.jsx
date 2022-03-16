////////////////////////////IMPORTS///////////////////////////////////////
import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {createActivity, updateActivity} from '../../actions';
import { getCountries } from '../../actions';
import './CreateActivity.css';
////////////COMPONENT_CREATE_ACTIVITY/////////////////////////////////////
export default function CreateActivity(){
    const c = useSelector(state => state.details);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allCountries = useSelector(state => state.countries);
    allCountries.sort((a, b) => a.name.localeCompare(b.name))
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    const [input, setInput]  = useState({
        country: '',
        name: '', 
        image: '',
        difficulty: '',
        duration: '',
        season: '',
    })
    function handleOnChange(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }
    function handleSelect(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }
    let {country,name,image,difficulty,duration,season} = input;
    // console.log(country,name,image,difficulty,duration,season)

    function handleSubmit(event){
        event.preventDefault();
        if(country && name && image && difficulty && duration && season){
            if(event.target.name === 'Update') dispatch(updateActivity(id, input));
            else dispatch(createActivity(input));
            alert(`Activity ${event.target.name} Successfuly!!`)
            navigate(event.target.name === 'Update' ? `/country/${c.id}` : '/home')
        }else{
            alert('All fields are required')
        }
    }

    return(
        <div className="gridCreate">
                <div className="createNav">
                    <span>
                        {id ? 'UPDATE ACTIVITY' : 'CREATE ACTIVITY'}
                    </span>
                    <Link to='/home'> 
                    <button>
                        <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m261.56 101.28a8 8 0 0 0 -11.06 0l-184.1 175.87a8 8 0 0 0 -2.47 5.79l-.03 165.06a32 32 0 0 0 32 32h96.1a16 16 0 0 0 16-16v-136a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32v-165.06a8 8 0 0 0 -2.47-5.79z"/><path d="m490.91 244.15-74.8-71.56v-108.59a16 16 0 0 0 -16-16h-48a16 16 0 0 0 -16 16v32l-57.92-55.38c-5.42-5.48-13.48-8.62-22.19-8.62-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37a16 16 0 0 0 23.18 1.06l207.5-198.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"/></svg>
                    </button>
                    </Link>
                </div>
                <div className="form">
                <form className='formContainer'>
                <div className='formElement'>
                        <span>
                            Country
                        </span>
                        <select name='country' onChange={handleSelect}>
                            <option></option>
                            {allCountries?.map(c =>
                                <option key={c.name} value={c.name}>
                                    {c.name}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className='formElement1'>
                        <span>
                            Name
                        </span>
                        <input name='name' type="text" placeholder="glamping..." value={input.name} onChange={handleOnChange}/>
                    </div>
                    <div className='formElement1'>
                        <span>
                            Image
                        </span>
                        <input name='image' type="text" placeholder="URL..." value={input.image} onChange={handleOnChange}/>
                    </div>
                    <div className='formElement2'>
                        <span>
                            Difficulty
                        </span>
                        <select name='difficulty' onChange={handleSelect}>
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className='formElement3'>
                        <span>
                            Duration
                        </span>
                        <input name='duration' type="text" placeholder="3 dias..." value={input.duration} onChange={handleOnChange}/>
                    </div>
                    <div className='formElement4'>
                        <span>
                            Season
                        </span>
                        <select name='season' onChange={handleSelect}>
                            <option></option>
                            <option value="Verano">VERANO</option>
                            <option value="Invierno">INVIERNO</option>
                            <option value="Otoño">OTOÑO</option>
                            <option value="Primavera">PRIMAVERA</option>
                        </select>
                    </div>
                    <div className='formElement5'>
                            {id ? <button name='Update' onClick={handleSubmit}>
                                UPDATE
                            </button>
                            :
                            <button name='Create' onClick={handleSubmit}>
                                SAVE
                            </button>}
                        <Link to='/home'>
                            <button>
                                CANCEL
                            </button>
                        </Link>
                    </div>
                    
                </form>
                </div>
        </div>
    )
}