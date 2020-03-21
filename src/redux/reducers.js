import { FLIGHTS_LIST_RECEIVED } from './actions'

const defaultState = {
    flightsList: {},
}

const flightsReducer = (state = defaultState, action) => {
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

export default flightsReducer;