import axios from 'axios';
//////////////////////////////////////////////////////////////////////////////
export function getCountries(){
    return async function(dispatch) {
        const countries = await axios('http://localhost:3001/countries');
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: countries
        })
    }
}
//////////////////////////////////////////////////////////////////////////////
export function getCountriesName(name){
    return async function(dispatch) {
            const countries = await axios(`http://localhost:3001/countries?name=${name}`);
            return dispatch({
                type: 'GET_COUNTRIES_NAME',
                payload: countries
            })
    }
}
//////////////////////////////////////////////////////////////////////////////
export function getCountryId(id){
    return async function(dispatch){
        const countryId = await axios(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type: 'GET_COUNTRY_ID',
            payload: countryId
        })
    }
}
///////////////////////////////////////////////////////////////////////////////
export function filter(filter){
    return async function(dispatch){
        const activityFilter = await axios(`http://localhost:3001/filterActivity?activity=${filter}`)
        return dispatch ({
            type: 'GET_ACTIVITY_FILTER',
            payload: activityFilter
        })
    }
}
//////////////////////////////////////////////////////////////////////////////
export function getFilterBy(filter) {
    return async function(dispatch){
        const orderBy = await axios(`http://localhost:3001/countriesOrderBy?${filter}=${filter}`);
        return dispatch({
            type: 'GET_COUNTRIES_ORDER_BY',
            payload: orderBy
        })
    }
}
//////////////////////////////////////////////////////////////////////////////
export function getOrderBy(filter,order) {
    return async function(dispatch){
        const orderBy = await axios(`http://localhost:3001/countriesOrderBy?${filter}=${filter}&&order=${order}`);
        return dispatch({
            type: 'GET_COUNTRIES_ORDER_BY',
            payload: orderBy
        })
    }
}
//////////////////////////////////////////////////////////////////////////////
export function getActivities(){
    return async function(dispatch){
        const activities = await axios('http://localhost:3001/allActivities')
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: activities
        })
    }
}
//////////////////////////////////////////////////////////////////////////////
export function getActivity(id){
    return async function(dispatch){
        const activity = await axios(`http://localhost:3001/activity/${id}`)
        return dispatch({
            type: 'GET_ACTIVITY_ID',
            payload: activity
        })
    }
}
//////////////////////////////////////////////////////////////////////////////
export function createActivity(data){
    return async function(dispatch){
        const activity = await axios.post('http://localhost:3001/activity', data);
        return dispatch({
            type: 'CREATE_ACTIVITY',
            payload: activity
        })
    }
}
//////////////////////////////////////////////////////////////////////////////
export function updateActivity(id, data){
    return async function(dispatch){
        const update = await axios.put(`http://localhost:3001/activityUpdate/${id}`, data)
        console.log(update.data)
        return dispatch({
            type: 'UPDATE_ACTIVITY',
            payload: update
        })
    }
}
//////////////////////////////////////////////////////////////////////////////
export function deleteActivity(id){
    return async function(dispatch){
        const deleteActivity = await axios.delete(`http://localhost:3001/activityDelete/${id}`);
        return dispatch({
            type: 'DELETE_ACTIVITY',
            payload: deleteActivity
        })
    }
}
