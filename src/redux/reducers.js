import { FLIGHTS_LIST_RECEIVED, GET_TEXT } from './actions'

const defaultState = {
    flightsList: '',
}

export const flightsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FLIGHTS_LIST_RECEIVED:
            return {
                ...state,
                flightsList: action.payload.flightsList,
            }
        default:
            return state
    }
}