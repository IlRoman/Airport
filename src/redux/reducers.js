import { FLIGHTS_LIST_RECEIVED, GET_TEXT } from './actions'

const defaultState = {
    flightsList: '',
}

const defaultTextState = {
    text: ''
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

export const textReducer = (state = defaultTextState, action) => {
    switch (action.type) {
        case GET_TEXT:
            return {
                ...state,
                text: action.payload.text,
            }
        default:
            return state
    }
}