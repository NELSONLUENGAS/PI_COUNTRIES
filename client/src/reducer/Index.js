///////////////////////////////////////////////////////////////////////////////////////
const initialState = {
    countries: [],
    activities: [],
    details: []
}
///////////////////////////////////////////////////////////////////////////////////////
function reducer(state = initialState, {type, payload}){
    switch(type){
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: payload.data
            }
        case 'GET_COUNTRIES_NAME':
            return {
                ...state,
                countries: payload.data
            }
        case 'GET_COUNTRY_ID':
            return {
                ...state,
                details: payload.data
            }
        case 'GET_ACTIVITY_FILTER':
                return {
                    ...state,
                    countries: payload.data
                };
        case 'GET_COUNTRIES_ORDER_BY':
            return {
                ...state,
                countries: payload.data
            }
        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: payload.data
            }
        case 'GET_ACTIVITY_ID':
            return {
                ...state,
                activities: payload.data
            }
        case 'CREATE_ACTIVITY':
            return {
                ...state,
                activities: [...state.activities,payload.data]
            }
        case 'UPDATE_ACTIVITY':
            return {
                ...state,
                activities: payload.data
            }
        case 'DELETE_ACTIVITY':
            return {
                ...state,
                activities: payload.data
            }
        default:
            return state
    }
}
/////////////////////////////////////////////////////////////////////////////
export default reducer;